import React from "react";

function EventDetails() {
  return (
    <main className="col-span-6 bg-white rounded shadow p-4">
      {/* Event Details */}
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
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
          Tham gia ngay
        </button>
      </div>
    </main>
  );
}

export default EventDetails;
