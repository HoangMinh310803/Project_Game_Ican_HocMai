import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center bg-white shadow p-4 h-20">
      <div className="text-blue-600 font-bold flex items-center gap-5 p-16">
        <img src="../images/galaxyEducation.png" alt="Logo" className="h-4" />
        <img src="../images/iCan.png" alt="Logo" className="h-4" />
      </div>
    </header>
  );
}

export default Header;
