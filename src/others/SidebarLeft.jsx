import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../services/AuthContext";

function SidebarLeft() {
  const { isLoggedIn, currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const handleLoginClick = () => {
    closePopup();
    navigate("/login");
  };

  return (
    <div
      className="col-span-2 relative p-4 bg-cover bg-no-repeat h-screen rounded-lg overflow-hidden" // Thêm rounded-lg cho bo tròn
      style={{ backgroundImage: "url('/images/Rectangle.png')" }}
    >
      <img
        src="/images/mualan.png"
        alt="Overlay"
        className="absolute bottom-0 left-0 w-full h-auto"
      />

      {isLoggedIn && currentUser ? (
        <div className="text-white mt-4">
          <h3 className="text-lg font-bold">
            Xin chào, {currentUser.username}!
          </h3>
          <p className="text-sm">Email: {currentUser.email}</p>
        </div>
      ) : (
        <button
          onClick={openPopup}
          className="bg-green-500 text-white py-2 px-4 rounded w-full mt-4 hover:shadow-lg active:scale-95 transition transform duration-200"
        >
          Đăng nhập ngay
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">
              Đăng Kí/Đăng Nhập
            </h2>

            <ul>
              <li className="mb-4 pl-16 flex gap-4 rounded-lg shadow-lg bg-white">
                <img
                  src="/images/Icon-hocmai.png"
                  alt="icon"
                  className="w-8 h-8"
                />
                <button
                  className="text-blue-500 hover:underline w-full text-left"
                  onClick={handleLoginClick}
                >
                  Tài khoản Hocmai.vn
                </button>
              </li>
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

      <div className="mt-8 space-y-4">
        <div className="rounded-md text-center text-white cursor-pointer group">
          <div className="transition-colors duration-200  group-hover:bg-white group-hover:text-blue-600">
            Thử thách
          </div>
        </div>
        <div className="rounded-md text-center text-white cursor-pointer group">
          <div className="transition-colors duration-200  group-hover:bg-white group-hover:text-blue-600">
            Tủ đồ
          </div>
        </div>
        <div className="rounded-md text-center text-white cursor-pointer group">
          <div className="transition-colors duration-200  group-hover:bg-white group-hover:text-blue-600">
            Sân chơi
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarLeft;
