import React, { useContext } from "react";
import AuthContext from "../services/AuthContext";
import { useNavigate } from "react-router-dom";

function EventDetails() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleJoinEvent = () => {
    if (!isLoggedIn) {
      // Nếu chưa đăng nhập, chuyển đến trang login
      navigate("/login");
    } else {
      // Nếu đã đăng nhập, tiếp tục thực hiện hành động tham gia sự kiện
      alert("Tham gia sự kiện thành công!");
    }
  };
  return (
    <div className="col-span-6 bg-white rounded shadow p-4">
      <div className="bg-white rounded shadow grid grid-cols-4">
        <div className="col-span-2 flex justify-center items-center">
          <img
            src="../images/Rectangle14.png"
            alt="Event Image 1"
            className="rounded w-[90%] h-[90%] object-cover"
          />
        </div>
        <div className="col-span-2 flex flex-col justify-between">
          {/* Tiêu đề */}
          <div>
            <h3 className="text-blue-600 font-semibold text-sm">
              Holiday Challenge
            </h3>
            <h2 className="text-blue-800 font-bold text-lg">
              CHÀO TẾT VUI HẾT MÌNH
            </h2>
          </div>

          {/* Thông tin sự kiện */}
          <div className="mt-2 space-y-1 text-sm">
            <div className="flex items-center">
              <img src="../images/clock.png" alt="Calendar Icon" />
              <p className="ml-1">Thời gian: 17/01 - 26/01</p>
            </div>
            <div className="flex items-center">
              <img src="../images/calendar-edit.png" alt="Calendar Icon" />
              <p className="ml-1">Sắp diễn ra</p>
            </div>
            <div className="flex items-center">
              <img src="../images/2user.png" alt="Calendar Icon" />
              <p className="ml-1">1023 người tham gia</p>
            </div>
          </div>

          {/* Thanh tiến trình */}
          <div className="mt-3">
            <p className="text-xs text-gray-600">05 ngày còn lại</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
              <div
                className="bg-blue-600 h-1.5 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>

          {/* Nút tham gia */}
          <div className="mt-4">
            <button
              onClick={handleJoinEvent}
              className="bg-blue-600 text-white text-sm font-semibold py-2 px-3 rounded-lg w-full mb-4"
            >
              Tham gia ngay
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-4 ">
        <div className="text-lg font-semibold mb-4 flex gap-5 ">
          <h2 className="cursor-pointer hover:underline">Chi tiết sự kiện</h2>
          <h2 className="cursor-pointer hover:underline">Bảng xếp hạng</h2>
          <h2 className="cursor-pointer hover:underline">Bài đăng</h2>
        </div>

        <p className="mb-4">
          Chào đón xuân Quý Mão 2023, ICANCONNECT ra mắt game Tết với 10
          challenges. Nhiệm vụ của bạn là khám phá và thực hiện 10 thử thách để
          mở ra những phần quà thật hấp dẫn.
        </p>
        <div className=" gap-4">
          <img
            src="../images/Rectangle19.png"
            alt="Event Image 1"
            className="rounded w-full "
          />
          <p className="mb-4">
            Chào đón xuân Quý Mão 2023, ICANCONNECT ra mắt game Tết với 10
            challenges. Nhiệm vụ của bạn là khám phá và thực hiện 10 thử thách
            để mở ra những phần quà thật hấp dẫn.
          </p>

          <img
            src="../images/Rectangle20.png"
            alt="Event Image 2"
            className="rounded w-full"
          />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 ">
          Tham gia ngay
        </button>
      </div>
    </div>
  );
}

export default EventDetails;
