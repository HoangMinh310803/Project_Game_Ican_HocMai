import React from "react";

import Header from "../others/Header";
import SidebarLeft from "../others/SidebarLeft";

function ListQuizGame() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="grid grid-cols-10 gap-4 mt-4 p-4">
        <div className="col-span-2">
          <SidebarLeft />
          <div className="col-span-8">{/* Nội dung khác */}</div>
        </div>
      </div>
    </div>
  );
}

export default ListQuizGame;
