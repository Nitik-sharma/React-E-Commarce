import "./App.css";
import FilterProduct from "./Component/FilterProducrt/FilterProduct";
import Main from "./Component/Main/Main";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import OneProduct from "./Component/SinglePage/OneProduct";
import Login from "./Component/Login/Login";
import Sign from "./Component/Login/Sing";
function App() {
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  // const user = useSelector((state) => state.user.user);
  // const { authUser } = user;
  // console.log("user", user);
  // console.log("auth", authUser);
  console.log("cart", cart);
  console.log("totalPrice", totalPrice);
  console.log("totalAmount", totalAmount);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/filterProducts/:type" element={<FilterProduct />}></Route>
        <Route
          path="/filterProducts/:type/:id"
          element={<OneProduct />}
        ></Route>
        <Route path="/sing" element={<Sign />}></Route>
      </Routes>
    </div>
  );
}

export default App;
