// App.jsx or any parent component

"use client";

import { useEffect } from "react";
import AntiChess from "./Antichess";
import { toast } from "react-toastify";

function page() {
  useEffect(() => {
    toast.info("Player 1 - start!", {
      position: "top-center",
      closeButton: false,
    });
    toast.info("Click on any peice to start the game!", {
      position: "top-center",
      closeButton: false,
    });
  });
  return (
    <div className="App">
      <h1>Anti-Chess Game</h1>
      <Antichess />
      <footer>
        <p className="copyright">Copyright @AbdulShariqKalim(STCET)</p>
      </footer>
    </div>
  );
}

export default page;
