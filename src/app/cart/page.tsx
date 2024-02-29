"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RiDeleteBin7Line } from "react-icons/ri";
import { LuArrowRightCircle } from "react-icons/lu";

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

  // Set initial state with data
  // useState(() => {
  //   setProducts(data.cartItem);
  // });

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product._id !== id);
    setProducts(updatedProducts);
  };

  const calculateTotalAmount = () => {
    let totalAmount = products.reduce(
      (accumulator, product) =>
        accumulator + product.product.price * product.quantity,
      0
    );
    totalAmount += parseFloat(deliveryCost.toString());
    return totalAmount.toFixed(2);
  };

  return (
    <div className="px-2 md:px-[20px] font-serif lg:px-[220px] xl:px-[230px] 2xl:px-[300px] py-16 lg:py-24">
       <h2 className="text-4xl font-semibold py-7">Shopping Cart</h2>
      <div className=" flex flex-row justify-evenly gap-12">
      <div className="flow-root w-full">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {data?.cartItem?.map((product) => (
              <li key={product._id} className="flex py-6">
                <div className="h-36 w-36 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    className="h-full w-full object-cover object-center"
                    width={100}
                    height={100}
                    src={product.product.images[0]}
                    alt=""
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{product.product.name}</h3>
                      <p className="ml-4">${product.product.price}</p>
                    </div>
                   
                    <p className="mt-1 text-sm text-gray-500">Blue</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {product.quantity}</p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => handleDeleteProduct(product._id)}
                      >
                        <RiDeleteBin7Line />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
  

      <div className="flex flex-col w-1/2  mt-2">
        <div className="cart-total-area">
          <ul className="cart-total-chart border p-2 border-cyan-300">
            <li className="flex flex-row justify-between gap-16 lg:gap-32">
              <span>Subtotal</span> <span>${calculateTotalAmount()}</span>
            </li>
            <li className="flex flex-row justify-between gap-16 lg:gap-32">
              <span>
                <strong>Total</strong>
              </span>{" "}
              <span>
                <strong>${calculateTotalAmount()}</strong>
              </span>
            </li>
          </ul>
        </div>

        <a href="/shop" className="btn-info btn my-5 text-white flex gap-2">
          Continue shopping <LuArrowRightCircle className="text-2xl" />
        </a>
      </div>
      </div>
    </div>
  );
}
