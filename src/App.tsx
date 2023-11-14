import { Route, Routes } from "react-router-dom";
import LoginPage from "./views/login";
import Users from "./views/users";
import UserDetail from "./views/users/detail";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/detail" element={<UserDetail />} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}