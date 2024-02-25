'use client'
import React, { useState } from "react";

interface FilterProps {}

const Filter: React.FC<FilterProps> = () => {
  const [activeCategory, setActiveCategory] = useState<boolean>(false);
  const [ChildrenCategory, setChildrenCategory] = useState<boolean>(false);
  const [manCategory, setManCategory] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<string>('');

  // Function to handle color selection
  const handleColorSelection = (color: string | null) => {
    setSelectedColor(color);
  };

  const handleManCheckbox = () => {
    setManCategory((prev) => !prev);
  };

  const handleCheckbox = () => {
    setActiveCategory((prev) => !prev);
  };
  
  const handleChildrenCheckbox = () => {
    setChildrenCategory((prev) => !prev);
  };

  // Function to handle minimum price input
  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const p = event.target.value;
    setMinPrice(p);
  };

  return (
    <div className=" lg:pt-16 w-[35vh]  lg:w-[35vh]    px-2 lg:px-8 py-5">
      <div className="flex flex-col">
        <h6 className="text-md lg:text-lg mb-6">Catagories</h6>

        <ul className="flex flex-col">
          {/* Category 1 */}
          <div className="flex flex-col justify-start">
            <div className="flex flex-row gap-2 justify-start items-center w-full lg:w-[25vh]">
              <input
                type="checkbox"
                name=""
                onClick={handleCheckbox}
                checked={activeCategory}
              />
              Woman wear
            </div>
            {activeCategory === true && (
              <ul className="ml-5">
                <div>
                  <input type="checkbox" />
                  Midi Dresses
                </div>
                <div>
                  <input type="checkbox" />
                  Maxi Dresses
                </div>
                <div>
                  <input type="checkbox" />
                  Prom Dresses
                </div>
                <div>
                  <input type="checkbox" />
                  Little Black Dresses
                </div>
                <div>
                  <input type="checkbox" />
                  Mini Dresses
                </div>
              </ul>
            )}
          </div>

          {/* Category 2 */}
          <div className="flex flex-col justify-start">
            <div className="flex flex-row gap-2 justify-start items-center w-full">
              <input
                type="checkbox"
                name=""
                onClick={handleManCheckbox}
                checked={manCategory}
              />
              Man wear
            </div>
            {manCategory === true && (
              <ul className="ml-5">
                <div>
                  <input type="checkbox" />
                  Midi Dresses
                </div>
                <div>
                  <input type="checkbox" />
                  Maxi Dresses
                </div>
                <div>
                  <input type="checkbox" />
                  Prom Dresses
                </div>
                <div>
                  <input type="checkbox" />
                  Little Black Dresses
                </div>
                <div>
                  <input type="checkbox" />
                  Mini Dresses
                </div>
              </ul>
            )}
          </div>

          {/* Category 3 */}
          <div className="flex flex-col justify-start">
            <div className="flex flex-row gap-2 justify-start items-center w-[25vh]">
              <input
                type="checkbox"
                name=""
                onClick={handleChildrenCheckbox}
                checked={ChildrenCategory}
              />
              Children wear
            </div>
            {ChildrenCategory === true && (
              <ul className="ml-5">
                <div>
                  <input type="checkbox" />
                  Midi Dresses
                </div>
                <div>
                  <input type="checkbox" />
                  Maxi Dresses
                </div>
                <div>
                  <input type="checkbox" />
                  Prom Dresses
                </div>
                <div>
                  <input type="checkbox" />
                  Little Black Dresses
                </div>
                <div>
                  <input type="checkbox" />
                  Mini Dresses
                </div>
              </ul>
            )}
          </div>
        </ul>

        {/* Filter by Warranty */}
        <div className="  mb-70 mt-10 border-y-2 py-8">
          <h6 className="text-md lg:text-lg mb-5">Filter by Warrenty</h6>
          <div className="">
            <ul className="flex flex-col justify-start gap-2">
              <div className="flex flex-row gap-1 text-xs lg:text-md">
                <input type="checkbox" name="nowarranty" id="" /> No Warranty
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" name="sellerwarranty" id="" /> Seller
                Warranty
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" name="brandwarranty" id="" /> Brand
                Warranty
              </div>
            </ul>
          </div>
        </div>

        {/* Filter by Color */}
        <div className="container mx-auto mb-8 border-b-2 pb-8">
          <h6 className="text-md lg:text-lg mb-5">Filter by Color</h6>
          <div className="">
            <ul className="flex flex-row flex-wrap justify-start gap-2">
              <div
                className="flex flex-row gap-2"
                onClick={() => handleColorSelection(null)}
              >
                <input type="checkbox" className=" lg:mr-2" />
                <span>All</span>
              </div>
              <div
                className="red"
                onClick={() => handleColorSelection("red")}
              >
                <input type="checkbox" className=" lg:mr-2" />
                <span>Red</span>
              </div>
              <div
                className="yellow"
                onClick={() => handleColorSelection("yellow")}
              >
                <input type="checkbox" className=" lg:mr-2" />
                <span>Yellow</span>
              </div>
              <div
                className="blue"
                onClick={() => handleColorSelection("blue")}
              >
                <input type="checkbox" className=" lg:mr-2" />
                <span>Blue</span>
              </div>
              <div
                className="purple"
                onClick={() => handleColorSelection("purple")}
              >
                <input type="checkbox" className=" lg:mr-2" />
                <span>Purple</span>
              </div>
              <div
                className="black"
                onClick={() => handleColorSelection("black")}
              >
                <input type="checkbox" className=" lg:mr-2" />
                <span>Black</span>
              </div>
              <div
                className="white"
                onClick={() => handleColorSelection("white")}
              >
                <input type="checkbox" className=" lg:mr-2" />
                <span>White</span>
              </div>
              <div
                className="green"
                onClick={() => handleColorSelection("green")}
              >
                <input type="checkbox" className=" lg:mr-2" />
                <span>Green</span>
              </div>
              <div
                className="brown"
                onClick={() => handleColorSelection("brown")}
              >
                <input type="checkbox" className=" lg:mr-2" />
                <span>Brown</span>
              </div>
              <div
                className="orange"
                onClick={() => handleColorSelection("orange")}
              >
                <input type="checkbox" className=" lg:mr-2" />
                <span>Orange</span>
              </div>
              <div
                className="magenta"
                onClick={() => handleColorSelection("magenta")}
              >
                <input type="checkbox" className=" lg:mr-2" />
                <span>Magenta</span>
              </div>
              <div
                className="army-green"
                onClick={() => handleColorSelection("army-green")}
              >
                <input type="checkbox" className=" lg:mr-2" />
                <span>Army Green</span>
              </div>
            </ul>
          </div>
        </div>

        {/* Filter by Price */}
        <div className="container mx-auto">
          <h6 className="text-md lg:text-lg mb-5">Filter by Price</h6>

          {/* Price range slider */}
          <div className="mb-4 border-b-2 pb-8">
            <label className="block mb-1">
              Price Range: <span>{minPrice}</span>
            </label>
            <div className="flex items-center">
              <span className="font-medium text-2xl  lg:mr-2">+</span>
              <input
                type="range"
                min="0"
                max="100"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <span className="font-medium text-2xl ml-2">-</span>
            </div>
          </div>
        </div>

        {/* Filter by Size */}
        <div className=" size mb-50">
          <h6 className="text-md lg:text-lg mb-5">Filter by Size</h6>
          <div className="">
            <ul className="flex flex-row justify-start gap-1">
              <div className="hover:bg-btnbg px-1 lg:px-3 py-2">XS</div>
              <div className="hover:bg-btnbg px-1 lg:px-3 py-2">S</div>
              <div className="hover:bg-btnbg px-1 lg:px-3 py-2">M</div>
              <div className="hover:bg-btnbg px-1 lg:px-3 py-2">L</div>
              <div className="hover:bg-btnbg px-1 lg:px-3 py-2">XL</div>
              <div className="hover:bg-btnbg px-1 lg:px-3 py-2">XXL</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
