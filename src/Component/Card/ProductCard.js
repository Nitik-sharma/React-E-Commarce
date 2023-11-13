import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import OneProduct from "../SinglePage/OneProduct";
import { singleProduct } from "../Feature/Slice/ProductSlice";

export function ProductCard({ id, name, img, text, price, colors }) {
  const dispatch = useDispatch();
  const { type } = useParams();
  return (
    <Link to={`/filterProducts/${type}/` + id}>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg"
        onClick={() => dispatch(singleProduct(id))}
      >
        <img
          className="w-full h-[300px]"
          src={img}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-blue-600">{name}</div>
          <p className="text-gray-700 text-base">{text}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {price}$
          </span>
          <span className="flex ">
            {colors.map((color, i) => {
              return (
                <div
                  className="w-[15px] h-[15px]  rounded-full mr-3"
                  style={{ backgroundColor: color }}
                  key={i}
                ></div>
              );
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
