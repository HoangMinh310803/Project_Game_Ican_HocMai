import React from "react";

function SidebarRight() {
  return (
    <aside className="col-span-2 bg-white rounded shadow p-4">
      <h3 className="font-semibold mb-4 text-lg text-blue-900">
        Nhiệm vụ nổi bật hôm nay
      </h3>
      <div className="bg-green-400 py-4 px-2 rounded mb-4">
        Nỗi ám ảnh ngày Tết (chuyến xe, dọn nhà, hàng xóm hỏi han,...)
        <div className="flex items-center gap-2 ">
          <img src="../images/profile-2user.png" alt="logo" />
          <h4>1023 người tham gia</h4>
        </div>
      </div>
      <div className="bg-pink-500 py-4 px-2 rounded">Nối âm ánh ngày Tết</div>
    </aside>
  );
}

export default SidebarRight;
