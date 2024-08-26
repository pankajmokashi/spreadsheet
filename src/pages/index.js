import React from "react";
import Grid from "@/components/Grid";
import Navbar from "@/components/Navbar";
import GridHeader from "@/components/GridHeader";
import Sheets from "@/components/Sheets";

const Home = () => {
  return (
    <main className="100vw 100vh">
      <Navbar />
      <div className="content relative">
        <GridHeader />
        <Grid />
        <Sheets />
      </div>
    </main>
  );
};

export default Home;
