import React, { useEffect, useState } from 'react';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { AiOutlineNotification } from "react-icons/ai";

// import { getCartProducts, getWishListProducts } from '../actions/products';
import Link from 'next/link';

function NavCart() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [wishlists, setWishlists] = useState([]);


  const fetchData = async () => {
    // try {
    //   const res = await getCartProducts();
    //   if (res.data && res.data.cartItem) {
    //     setProducts(res.data.cartItem); // Assuming cartItem is an array of cart products
    //   }
    // } catch (error) {
    //   console.error("Error fetching cart products:", error);
    // }
  }

  const fetchWishlist = async () => {
    // try {
    //   const res = await getWishListProducts();
    //   setWishlists(res.data.
    //     wishlistItem.wishlist
    //     )
    //   // if (res.data && res.data.cartItem) {
    //   //   setProducts(res.data.cartItem); // Assuming cartItem is an array of cart products
    //   // }
    // } catch (error) {
    //   console.error("Error fetching wishlist products:", error);
    // }
  };

  useEffect(() => {

    fetchWishlist()
    fetchData();
  }, []);

  const handleViewCartClick = () => {
    setDropdownOpen(false);
  };
console.log(wishlists)

  
  return (
    <div>
      <div className="hidden lg:flex justify-between gap-6"> 
       
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
            <FaHeart className="h-5 w-5"/>
              <span className="badge badge-sm indicator-item">{wishlists.length}</span>
            </div>
          </div>
          <div tabIndex={0} className={`mt-3 z-[20] card card-compact dropdown-content w-52 bg-base-200 shadow ${dropdownOpen ? 'open' : ''}`}>
{/* 
    {wishlists.map((wishlistItem) => (
      <div key={wishlistItem._id} className="card-body grid grid-cols-3 justify-evenly gap-5">
       
        <div className="avatar">
  <div className="w-16 rounded-full">
    <img src={wishlistItem.product.images[0]} />
  </div>
</div>
        <div className='flex flex-col '>
        <p className="font-medium text-md w-32 overflow-hidden">{wishlistItem.product.name}</p>
        <p className="font-medium text-md">৳{wishlistItem.product.price}</p>
        </div>
      
      </div>
    ))} */}

</div>

        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <AiOutlineNotification className="h-5 w-5"/>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaShoppingCart className="h-5 w-5"/>
              <span className="badge badge-sm indicator-item">8</span>
              {/* {products.length} */}
            </div>
          </div>
          <div tabIndex={0} className={`mt-3 z-[20] card card-compact dropdown-content w-52 bg-base-100 shadow ${dropdownOpen ? 'open' : ''}`}>
            <div className="card-body">
              <span className="font-bold text-lg">6 Items</span>
              {/* Here you can calculate subtotal based on products */}
              <Link href='/cart' className="card-actions">
                <button className="btn btn-primary btn-block" onClick={handleViewCartClick}>View cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavCart;
