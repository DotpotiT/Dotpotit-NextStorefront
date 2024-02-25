"use client";
import { useEffect, useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { LuArrowRightCircle } from "react-icons/lu";
import Image from "next/image";

interface Product {
  _id: string;
  product: {
    name: string;
    images: string[];
    price: number;
    discountedPrice: number;
  };
  quantity: number;
}

export default function Cart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [deliveryCost, setDeliveryCost] = useState<number>(0);
  const data = {
    cartItem: [
      {
        _id: "1",
        product: {
          name: "Product 1",
          images: [
            "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg",
            "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg",
          ],
          price: 100,
          discountedPrice: 90,
        },
        quantity: 2,
      },
      {
        _id: "2",
        product: {
          name: "Product 2",
          images: [
            "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg",
            "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg",
          ],
          price: 200,
          discountedPrice: 180,
        },
        quantity: 1,
      },
      {
        _id: "3",
        product: {
          name: "Product 3",
          images: [
            "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg",
            "https://res.cloudinary.com/dzqxgr4lr/image/upload/v1704703427/cld-sample-5.jpg",
          ],
          price: 150,
          discountedPrice: 120,
        },
        quantity: 3,
      },
    ],
  };

  useEffect(() => {
    setProducts(data.cartItem);
  }, []);

  const handleIncrement = (index: number) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity += 1;
    setProducts(updatedProducts);
  };

  const handleDecrement = (index: number) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
      setProducts(updatedProducts);
    }
  };

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product._id !== id);
    setProducts(updatedProducts);
  };

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    products.forEach((product) => {
      totalAmount += product.product.price * product.quantity;
    });
    totalAmount += parseFloat(deliveryCost.toString());
    return totalAmount.toFixed(2);
  };

  return (
    <div className="px-2 md:px-[20px] lg:px-[220px] xl:px-[230px] 2xl:px-[300px] py-16 lg:py-24">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="font-bold text-lg">Product</th>
              <th className="font-bold text-lg">Price</th>
              <th className="font-bold text-lg">Discounted Price</th>
              <th className="font-bold text-lg">Quantity</th>
              <th className="font-bold text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td className="font-bold text-lg flex gap-3">
                  <Image
                    className="w-20 h-20"
                    width={100} // Set the width of the image (adjust as needed)
                    height={100}
                    src={product.product.images[0]}
                    alt=""
                  />
                  {product.product.name}
                </td>
                <td className="font-bold text-lg">{product.product.price}</td>
                <td className="font-bold text-lg">
                  {product.product.discountedPrice}
                </td>
                <td className="font-bold text-lg">
                  <div className="flex flex-row items-center gap-4">
                    <span
                      className="text-xl font-medium cursor-pointer"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </span>
                    <span>{product.quantity}</span>
                    <span
                      className="text-xl font-medium cursor-pointer"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </span>
                  </div>
                </td>
                <td>
                  <button
                    className="text-gray-600 px-2 py-1 rounded-md text-2xl"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    <RiDeleteBin7Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between mt-2">
        <div className="cart-total-area">
          <ul className="cart-total-chart border p-2 border-cyan-300">
            <li className="flex flex-row justify-between gap-16 lg:gap-32">
              <span>Subtotal</span> <span>৳{calculateTotalAmount()}</span>
            </li>
            <li className="flex flex-row justify-between gap-16 lg:gap-32">
              <span>
                <strong>Total</strong>
              </span>{" "}
              <span>
                <strong>৳{calculateTotalAmount()}</strong>
              </span>
            </li>
          </ul>
        </div>

        <a href="/shop" className="btn-info btn my-5 text-white flex gap-2">
          Continue shopping <LuArrowRightCircle className="text-2xl" />
        </a>
      </div>
    </div>
  );
}
