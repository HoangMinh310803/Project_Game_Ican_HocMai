import React, { useEffect, useState } from "react";

import Header from "../others/Header";
import SidebarLeft from "../others/SidebarLeft";
import axios from "axios";
import { Container } from "react-bootstrap";

function ListQuizGame() {
  const [quizzList, setQuizzList] = useState([]);
  useEffect(() => {
    const fetchQuizzList = async () => {
      try {
        const response = await axios.get("http://localhost:9999/quizzList");
        setQuizzList(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchQuizzList();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Container>
        <div className="grid grid-cols-9 gap-4  mt-4 p-4">
          <div className="col-span-2 pr-4">
            <SidebarLeft />
          </div>

          <div className="col-span-7 ">
            <div className="flex items-center mb-3">
              <img src="../images/back.png" alt="click-back" />
              <div>
                <span className="text-blue-500 font-bold">
                  Holiday Challenge
                </span>
                <br />
                <span className="text-blue-500 font-bold">
                  CHÀO TẾT VUI HẾT MÌNH
                </span>
              </div>
            </div>
            <div className="mb-4 w-full">
              <img
                src="../images/banner-tet.png"
                alt="banner"
                className="w-full rounded"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
              {quizzList.map((quiz, index) => (
                <div key={index} className="bg-white rounded shadow">
                  <img src={quiz.img_url} alt="" className="w-full rounded" />
                  <div className="p-2 m-1 flex items-center justify-between">
                    <button
                      className={`${
                        quiz.category === "Chưa mở"
                          ? " bg-gray-600"
                          : "bg-green-600"
                      } text-white py-2 px-4 rounded`}
                    >
                      {quiz.category}
                    </button>

                    {quiz.status ? "Hoàn thành" : "Chưa hoàn thành"}
                  </div>
                  <span className="text-blue-700 font-bold">{quiz.title}</span>
                  <div className="text-gray-500 font-bold text-xs">
                    {quiz.description}
                  </div>
                  <div className="text-pink-500 font-bold text-xs">
                    {quiz.game_time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ListQuizGame;
