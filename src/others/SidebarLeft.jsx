import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SidebarLeft() {
  // Quản lý trạng thái hiển thị pop-up
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <aside
      className="col-span-2 relative p-4 rounded-lg bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('../images/Rectangle.png')`,
        height: "600px",
      }}
    >
      <img
        src="../images/mualan.png"
        alt="Overlay"
        className="absolute bottom-0 left-0 w-auto h-auto"
      />

      <button
        onClick={openPopup}
        className="bg-green-500 text-white py-2 px-4 rounded w-full mt-4 hover:shadow-lg active:scale-95 transition transform duration-200"
      >
        Đăng nhập ngay
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">
              Đăng Kí/Đăng Nhập
            </h2>

            <ul>
              <li className="mb-4 pl-16 flex gap-4 rounded-lg shadow-lg bg-white ">
                <img
                  src="../images/Icon-hocmai.png"
                  alt="icon"
                  className="w-8 h-8"
                />
                <button
                  className="text-blue-500 hover:underline w-full text-left "
                  onClick={handleLoginClick}
                >
                  Tài khoản Hocmai.vn
                </button>
              </li>
              {/*
              <li className="mb-4">
                <button className="text-blue-500 hover:underline w-full text-left">
                  Tài khoản ICANCONNECT
                </button>
              </li>*/}
              <li className="mb-4 text-center">
                <a href="/register" className="text-pink-500 hover:underline">
                  Đăng ký tài khoản mới
                </a>
              </li>
            </ul>

            <div className="flex justify-center mt-6">
              <button
                onClick={closePopup}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="menu bg-white py-4 px-2 rounded text-center mb-4 mt-4">
        Thử thách
      </div>
      <div className="menu bg-white py-4 px-2 rounded text-center mb-4">
        Tủ đồ
      </div>
      <div className="menu bg-white py-4 px-2 rounded text-center">
        Sân chơi
      </div>
    </aside>
  );
}

export default SidebarLeft;
