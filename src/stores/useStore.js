import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  sheets: {
    Sheet1: {
      selectedCell: "A1",
      cells: {},
    },
  },
  currentSheet: "Sheet1",
  history: {},
  future: {},
};

const actions = (set, get) => ({
  // Set current sheet
  setCurrentSheet: (sheetName) => set({ currentSheet: sheetName }),

  // Add new sheet
  addSheet: (sheetName) => {
    const { sheets } = get();
    if (sheets[sheetName]) return; // Sheet already exists

    set({
      sheets: {
        ...sheets,
        [sheetName]: {
          selectedCell: "A1",
          cells: {},
        },
      },
      currentSheet: sheetName,
      history: { ...get().history, [sheetName]: [] },
      future: { ...get().future, [sheetName]: [] },
    });
  },

  // Set selected cell for the current sheet
  setSelectedCell: (cell) => {
    const { currentSheet } = get();
    set((state) => ({
      sheets: {
        ...state.sheets,
        [currentSheet]: {
          ...state.sheets[currentSheet],
          selectedCell: cell,
        },
      },
    }));
  },

  // Update cell for the current sheet
  updateCell: (cell, value, formatting) => {
    const { currentSheet, sheets, history } = get();
    const currentCell = sheets[currentSheet].cells[cell] || {
      value: "",
      formatting: [],
    };
    const updatedFormatting = formatting ? formatting : currentCell.formatting;

    // Save the current state in history
    set({
      sheets: {
        ...sheets,
        [currentSheet]: {
          ...sheets[currentSheet],
          cells: {
            ...sheets[currentSheet].cells,
            [cell]: {
              value: value !== undefined ? value : currentCell.value,
              formatting: updatedFormatting,
            },
          },
        },
      },
      history: {
        ...history,
        [currentSheet]: [
          ...(history[currentSheet] || []),
          { cells: sheets[currentSheet].cells },
        ],
      },
      future: {
        ...get().future,
        [currentSheet]: [], // Clear the future states on new change
      },
    });
  },

  // Undo for the current sheet
  undo: () => {
    const { currentSheet, history, future } = get();
    if (!history[currentSheet] || history[currentSheet].length === 0) return; // Nothing to undo

    const previousState =
      history[currentSheet][history[currentSheet].length - 1];
    set({
      sheets: {
        ...get().sheets,
        [currentSheet]: {
          ...get().sheets[currentSheet],
          cells: previousState.cells,
          selectedCell:
            previousState.selectedCell ||
            get().sheets[currentSheet].selectedCell,
        },
      },
      history: {
        ...history,
        [currentSheet]: history[currentSheet].slice(
          0,
          history[currentSheet].length - 1
        ),
      },
      future: {
        ...future,
        [currentSheet]: [
          {
            cells: get().sheets[currentSheet].cells,
            selectedCell: get().sheets[currentSheet].selectedCell,
          },
          ...(future[currentSheet] || []),
        ],
      },
    });
  },

  // Redo for the current sheet
  redo: () => {
    const { currentSheet, future, history } = get();
    if (!future[currentSheet] || future[currentSheet].length === 0) return; // Nothing to redo

    const nextState = future[currentSheet][0];
    set({
      sheets: {
        ...get().sheets,
        [currentSheet]: {
          ...get().sheets[currentSheet],
          cells: nextState.cells,
          selectedCell:
            nextState.selectedCell || get().sheets[currentSheet].selectedCell,
        },
      },
      history: {
        ...history,
        [currentSheet]: [
          ...(history[currentSheet] || []),
          {
            cells: get().sheets[currentSheet].cells,
            selectedCell: get().sheets[currentSheet].selectedCell,
          },
        ],
      },
      future: {
        ...future,
        [currentSheet]: future[currentSheet].slice(1),
      },
    });
  },
  clearAllData: () => set(initialState),
});

const useStore = create(
  persist(
    (set, get) => ({
      ...initialState,
      ...actions(set, get),
    }),
    {
      name: "spreadsheet-store",
    }
  )
);

export default useStore;
