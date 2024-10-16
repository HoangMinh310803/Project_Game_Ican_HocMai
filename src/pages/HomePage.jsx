import React from "react";
import Header from "../others/Header";
import SidebarLeft from "../others/SidebarLeft";
import Footer from "../others/Footer";
import EventDetails from "../others/EventDetails";
import SidebarRight from "../others/SidebarRight";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Header />
      <div className="grid grid-cols-10 gap-4 mt-4 p-4">
        <SidebarLeft />
        <EventDetails />
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
