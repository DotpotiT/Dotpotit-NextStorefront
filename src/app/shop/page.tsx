"use client";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

import AllProductCard from "@/Components/AllProductCard/AllProductCard";
import Filter from "@/Components/Filter/Filter";
import FilterDrawer from "@/Components/FilterDrawer/FilterDrawer";
import CateGories from "@/Components/CateGories/CateGories";
const productsData = [
  {
    _id: "1",
    name: "Product 1",
    price: 100,
    discount: 10,
    images: ["image1.jpg", "image2.jpg"],
  },
  {
    _id: "2",
    name: "Product 2",
    price: 200,
    discount: 20,
    images: ["image3.jpg", "image4.jpg"],
  },
  {
    _id: "3",
    name: "Product 2",
    price: 200,
    discount: 20,
    images: ["image3.jpg", "image4.jpg"],
  },
  {
    _id: "4",
    name: "Product 2",
    price: 200,
    discount: 20,
    images: ["image3.jpg", "image4.jpg"],
  },
  {
    _id: "4",
    name: "Product 2",
    price: 200,
    discount: 20,
    images: ["image3.jpg", "image4.jpg"],
  },
  {
    _id: "4",
    name: "Product 2",
    price: 200,
    discount: 20,
    images: ["image3.jpg", "image4.jpg"],
  },
  {
    _id: "4",
    name: "Product 2",
    price: 200,
    discount: 20,
    images: ["image3.jpg", "image4.jpg"],
  },
  // Add more products as needed
];

interface Product {
  _id: string;
  discount: number;
  price: number;
  name: string;
  images: string[];
}

function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(6);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(false);

  const toggleFilterDrawer = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen);
  };

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const indexOfLastProduct: number = currentPage * productsPerPage;
  const indexOfFirstProduct: number = indexOfLastProduct - productsPerPage;
  const currentProducts: Product[] = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="pt-24">
      <CateGories/>
      <div className="text-sm lg:hidden">
        <input
          id="my-drawer1"
          type="checkbox"
          className="drawer-toggle"
          checked={isFilterDrawerOpen}
          onChange={toggleFilterDrawer}
        />
        <div className="pt-8  ml-2">
          <label htmlFor="my-drawer1" className="btn">
            {isFilterDrawerOpen ? (
              ""
            ) : (
              <span className="flex flex-row gap-2">
                <FaFilter /> Filter
              </span>
            )}
          </label>
        </div>
        {isFilterDrawerOpen && <FilterDrawer onClose={toggleFilterDrawer} />}
      </div>
      <div className="px-2 lg:px-[250px] pt-4 lg:pt-0">
        <div className="flex flex-row justify-between lg:gap-11">
          <div className="hidden lg:flex">
            <Filter />
          </div>
          <div className="pt-2">
            <div className="grid grid-cols-2 mb-8 lg:grid-cols-3 justify-between gap-4">
              {currentProducts.map((product: Product) => (
                <AllProductCard
                  key={product._id}
                  id={product._id}
                  discount={product.discount}
                  price={product.price}
                  name={product.name}
                  image={product.images[0]}
                />
              ))}
            </div>
            <nav aria-label="">
              <ul className=" flex flex-row gap-2">
                {Array.from(
                  { length: Math.ceil(products.length / productsPerPage) },
                  (_, i) => (
                    <li
                      key={i}
                      className={`page-item ${
                        currentPage === i + 1 ? "active" : ""
                      }`}
                    >
                      <a
                        onClick={() => paginate(i + 1)}
                        className="checkbox p-2"
                        href="#"
                      >
                        {i + 1}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
