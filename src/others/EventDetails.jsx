import React from "react";
import { Container } from "react-bootstrap";
function EventDetails() {
  return (
    <Container className="col-span-6">
      <div className="  bg-white rounded shadow p-4">
        <div className="border-t border-gray-300 pt-4">
          <div className="text-lg font-semibold mb-4 flex gap-5">
            <span className="cursor-pointer hover:underline">
              Chi tiết sự kiện
            </span>
            <span className="cursor-pointer hover:underline">
              Bảng xếp hạng
            </span>
            <span className="cursor-pointer hover:underline">Bài đăng</span>
          </div>

          <p className="mb-4">
            Chào đón xuân Quý Mão 2023, ICANCONNECT ra mắt game Tết với 10
            challenges.
          </p>
          <img
            src="../images/Rectangle19.png"
            alt="Event Image 1"
            className="rounded w-full"
          />
          <p className="mb-4">
            Chào đón xuân Quý Mão 2023, ICANCONNECT ra mắt game Tết với 10 thử
            thách hấp dẫn.
          </p>
          <img
            src="../images/Rectangle20.png"
            alt="Event Image 2"
            className="rounded w-full"
          />
        </div>
      </div>
    </Container>
  );
}

export default EventDetails;
