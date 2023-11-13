import React from "react";
import "./Cart.css";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { BiQuestionMark } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { removeCartItem } from "../Feature/Slice/CartSlice";

export function Cart({ openModel, setOpen }) {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <>
      {cart.length > 0 ? (
        <Dialog
          variant="gradient"
          open={openModel}
          handler={() => setOpen(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody className="flex flex-col items-center justify-center p-4">
            {cart.map((items, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-2 p-2 cart-grid-container">
                    <div className="p-3 cart-image-box">
                      <img src={items.img} className="h-[10rem] w-[10rem] " />
                      <h3 className="text-2xl font-semibold ">{items.name}</h3>
                      <p className="text-1xl text-gray-500 ">{items.text}</p>
                    </div>
                    <div className="price-box">
                      <p>Selected Size:{items.size}</p>
                      <p>
                        Selected Color:
                        <span
                          style={{ backgroundColor: items.color }}
                          className="color-box  w-5 h-8 px-3 mr-2 rounded-full"
                        >
                          {" "}
                        </span>
                      </p>
                      <p>Amount:{items.amount}</p>
                      <p>single Price item:{items.price}$</p>
                      <p>Total Price :{items.totalPrice}$</p>
                      <button
                        type="button"
                        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={() => dispatch(removeCartItem(items))}
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </DialogBody>
          <hr class="h-px my-8 bg-gray-900 border-0" />
          <DialogFooter className="flex  items-center justify-between ">
            <p className="text-base text-black  font-extrabold text-center">
              Total Price of all Product <span>{totalPrice}$</span>
            </p>
            <Link>
              <AiOutlineCloseCircle
                style={{ fontSize: "3rem" }}
                onClick={() => setOpen(false)}
              />
            </Link>
          </DialogFooter>
        </Dialog>
      ) : (
        <Dialog
          variant="gradient"
          open={openModel}
          handler={() => setOpen(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          className="flex flex-col items-center justify-center p-10"
        >
          <DialogHeader>
            Your Cart Is Empty <BiQuestionMark style={{ fontSize: "3rem" }} />
          </DialogHeader>
          <DialogBody>
            <h1 className="text-2xl text-gray-700 font-semibold ">
              Please Add some items in cart....
            </h1>
          </DialogBody>
          <DialogFooter></DialogFooter>
        </Dialog>
      )}
    </>
  );
}
export default Cart;
