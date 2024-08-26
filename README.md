# Spreadsheet Clone
Developed a frontend application that mimics the functionality of a spreadsheet with advanced features. The application is built using Next.js and styled with Tailwind CSS. Utilized zustand to manage state.

## Features Implemented
1. Core Functionality
- Grid Rendering: Render a grid of 1000 blank cells. The grid is efficiently handled and performant.
- Cell Editing: Each cell is editable. Implemented a mechanism to handle user input and update the cell content dynamically.
- Data Storage: Save the data entered in each cell in memory. Implemented state management to ensure data persists while interacting with the grid.
- Styling: Style the cells to visually distinguish them from one another, including grid lines, padding, and font styles.

2. Advanced Features
- Cell Formatting (font-style, horizontal alignment)
- Search and Filter
- Pagination
- Undo/Redo

## Set up and run the project
### Install Required Software
1. Ensure you have the following installed:
Git: For cloning the repository.
Node.js: Ensure it's a recent version that supports Next.js.
npm or yarn: For installing dependencies and running the app.

2. Clone the Repository
Open your terminal and run the following command to clone the repository:
```
git clone https://github.com/pankajmokashi/spreadsheet.git
```

3. Navigate to the Project Directory
Move into the cloned project directory:
```
cd spreadsheet
```

4. Install Dependencies
Run the following command to install all the required dependencies:
Using npm:
```
npm install
```
- Or using yarn:
```
yarn install
```

5. Run the Development Server
Start the development server with the following command:
Using npm:
```
npm run dev
```
- Or using yarn:
```
yarn dev
```

7. Access the Application
Open your browser and navigate to:
```
http://localhost:3000
```
The Next.js application should be running locally.

### Live link
- Netlify: https://spread-sheet-clone.netlify.app/
