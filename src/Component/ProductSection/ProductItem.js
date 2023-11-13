import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Feature/Slice/CartSlice";
function ProductItem({ id, size, color, price, totalPrice, img, text, name }) {
  const dispatch = useDispatch();
  const defaltSize = size[0];
  const defaltColor = color[0];
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img src={img} className="object-cover w-full h-full" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {price}$
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {text}
          </p>
          <div className="flex justify-between ">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              Size left{"  "}:{defaltSize}
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              Color left{"                                            "}
              <span
                style={{ backgroundColor: defaltColor }}
                className="px-2 rounded-full mr-3 ml-2"
              ></span>
            </p>
          </div>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  bg-blue-400"
            type="button"
            onClick={() =>
              dispatch(
                addToCart({
                  id: id,
                  img: img,
                  text: text,
                  price: price,
                  amount: 1,
                  totalPrice: totalPrice,
                })
              )
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

//  <Card classNameName="w-96">
//         <CardHeader shadow={false} floated={false} classNameName="h-96">
//           <img src={img} alt={name} classNameName="h-full w-full object-cover" />
//         </CardHeader>
//         <CardBody>
//           <div classNameName="mb-2 flex items-center justify-between">
//             <Typography color="blue-gray" classNameName="font-medium">
//               {name}
//             </Typography>
//             <Typography color="blue-gray" classNameName="font-medium">
//               {price}
//             </Typography>
//           </div>
//           <Typography
//             variant="small"
//             color="gray"
//             classNameName="font-normal opacity-75"
//           >
//             {text}
//           </Typography>
//           <Typography
//             variant="small"
//             color="gray"
//             classNameName="font-normal opacity-75"
//           >
//             <p>Size left: {defaltSize}</p>
//           </Typography>
//           <Typography
//             variant="small"
//             color="gray"
//             classNameName="font-normal opacity-75"
//           >
//             <p classNameName="px-2 rounded-full ml-2">Color left: {defaltColor}</p>
//           </Typography>
//         </CardBody>
//         <CardFooter classNameName="pt-0">
//           <Button
//             ripple={false}
//             fullWidth={true}
//             classNameName="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//             onClick={() =>
//               dispatch(
//                 addToCart({
//                   id: id,
//                   img: img,
//                   text: text,
//                   price: price,
//                   amount: 1,
//                   totalPrice: totalPrice,
//                 })
//               )
//             }
//           >
//             Add to Cart
//           </Button>
//         </CardFooter>
//       </Card>
