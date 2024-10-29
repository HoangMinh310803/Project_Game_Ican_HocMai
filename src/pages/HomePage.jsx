import React from "react";
import Header from "../others/Header";
import SidebarLeft from "../others/SidebarLeft";
import EventDetails from "../others/EventDetails";
import SidebarRight from "../others/SidebarRight";
import JoinTheEvents from "../components/JoinTheEvents";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Header />

      <Container className="grid grid-cols-10 gap-4 mt-4 p-4">
        <div className="col-span-2">
          <SidebarLeft />
        </div>
        <div className="col-span-8">
          <JoinTheEvents />
          <div className="grid grid-cols-6 mt-4">
            <div className="col-span-4">
              <EventDetails />
            </div>
            <div className="col-span-2">
              <SidebarRight />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
