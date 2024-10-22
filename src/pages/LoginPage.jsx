import React, { useContext } from "react";
import AuthContext from "../services/AuthContext";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { users, email, setEmail, password, setPassword, login } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      toast.success(`Đăng nhập thành công, xin chào ${foundUser.username}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      // Gọi hàm login với thông tin người dùng tìm thấy
      login(foundUser);

      // Chuyển hướng sau khi đăng nhập thành công
      setTimeout(() => {
        if (foundUser.role === "admin") {
          navigate("/list-quiz-game-ican");
        } else {
          navigate("/");
        }
      }, 1000);
    } else {
      toast.error(
        "Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin!"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Đăng Nhập
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Đăng nhập
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Chưa có tài khoản?{" "}
            <a
              href="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Đăng ký ngay
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
