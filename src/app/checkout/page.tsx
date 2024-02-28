"use client";
import React, { useState } from "react";
import axios from "axios";

interface FormData {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  address1: string;
  address2: string;
  province: string;
  postCode: string;
  country: string;
  termsAccepted: boolean;
}

function CheckOut(props: any) {
  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState<string>("");
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    province: "",
    postCode: "",
    country: "",
    termsAccepted: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
  
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({
        ...prevData,
        [id]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };
  

  const handlePaymentOptionChange = (option: string) => {
    setSelectedPaymentOption(option);
    if (option === "payOnline") {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post("/api/submitForm", formData);
      console.log("Server response:", response.data);
      setFormData({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        address1: "",
        address2: "",
        province: "",
        postCode: "",
        country: "",
        termsAccepted: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formData.emailAddress.match(emailRegex);
  };

  const isPhoneNumberValid = () => {
    const phoneRegex = /^\d{10}$/;
    return formData.phoneNumber.match(phoneRegex);
  };

  const isFormValid = () => {
    return (
      formData.fullName &&
      isEmailValid() &&
      isPhoneNumberValid() &&
      formData.address1 &&
      formData.province &&
      formData.postCode &&
      formData.country &&
      formData.termsAccepted
    );
  };

  return (
    <div className="px-2 lg:px-[420px] py-6 pt-32">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-5">
          <div className="flex flex-col w-full">
            <div className="checkout_details_area mt-50 ">
              <div className="cart-page-heading">
                <h5>Billing Address</h5>
              </div>

              <div className="container">
                <div className="flex flex-col justify-between gap-5">
                  <div className="mb-3 w-full">
                    <label htmlFor="fullName">
                      Full Name <span>*</span>
                    </label>
                    <input
                      className="form-control p-3 w-full"
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="emailAddress">
                      E-mail Address <span>*</span>
                    </label>
                    <input
                      className="form-control p-3 w-full"
                      type="email"
                      id="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      required
                    />
                    {!isEmailValid() && (
                      <p className="text-red-500">
                        Please enter a valid email address.
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phoneNumber">
                      Phone Number <span>*</span>
                    </label>
                    <input
                      className="form-control p-3 w-full"
                      type="tel"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                    {!isPhoneNumberValid() && (
                      <p className="text-red-500">
                        Please enter a valid 10-digit phone number.
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="address1">
                      Address Line 1 <span>*</span>
                    </label>
                    <input
                      className="form-control p-3 w-full"
                      type="text"
                      id="address1"
                      value={formData.address1}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="address2">Address Line 2</label>
                    <input
                      className="form-control p-3 w-full"
                      type="text"
                      id="address2"
                      value={formData.address2}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="province">
                      Province / City <span>*</span>
                    </label>
                    <input
                      className="form-control p-3 w-full"
                      type="text"
                      id="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="postCode">
                      Post / ZIP code <span>*</span>
                    </label>
                    <input
                      className="form-control p-3 w-full"
                      type="text"
                      id="postCode"
                      value={formData.postCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country">
                      Country <span>*</span>
                    </label>
                    <select
                      className="form-control p-3 w-full"
                      id="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="USA">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="INDIA">India</option>
                      <option value="UAE">United Arab Emirates</option>
                      <option value="BD">Bangladesh</option>
                      <option value="GERMANY">Germany</option>
                      {/* Add more countries as needed */}
                    </select>
                  </div>
                  <div className="flex flex-row gap-3 mb-2">
                    <input
                      type="checkbox"
                      id="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="termsAccepted">
                      I accept the terms and conditions
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-details-confirmation">
            <div className="cart-page-heading">
              <h5>Your Order</h5>
              <p>The Details</p>
            </div>

            <ul className="order-details-form mb-4">
              <li>
                <span>Product</span> <span>Total</span>
              </li>
              <li>
                <span>Cocktail Yellow dress</span> <span>৳ 59.90</span>
              </li>
              <li>
                <span>Subtotal</span> <span>৳ 59.90</span>
              </li>
              <li>
                <span>Shipping</span> <span>Free</span>
              </li>
              <li>
                <span>Total</span> <span>৳ 59.90</span>
              </li>
            </ul>
            <div className="flex flex-col justify-evenly">
              <div className="flex flex-row justify-between">
                <div>
                  <div className="flex flex-row gap-2">
                    <input
                      type="checkbox"
                      name="paymentOption"
                      id="payOnline"
                      onChange={() => handlePaymentOptionChange("payOnline")}
                      checked={selectedPaymentOption === "payOnline"}
                    />{" "}
                    Pay Online
                  </div>
                  <div className="flex flex-row gap-2">
                    <input
                      type="checkbox"
                      name="paymentOption"
                      id="cashOnDelivery"
                      onChange={() =>
                        handlePaymentOptionChange("cashOnDelivery")
                      }
                      checked={selectedPaymentOption === "cashOnDelivery"}
                    />{" "}
                    Cash On Delivery
                  </div>
                </div>
                <h3>
                  Fee : ৳ {selectedPaymentOption === "payOnline" ? "10" : "0"}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`w-full bg-btnbg my-2 py-2 ${
            (isOnline ||
              selectedPaymentOption === "cashOnDelivery" ||
              selectedPaymentOption === "pickshop") &&
            isFormValid()
              ? "bg-green-500"
              : "bg-gray-500 cursor-not-allowed"
          }`}
          disabled={
            !(
              isOnline ||
              selectedPaymentOption === "cashOnDelivery" ||
              selectedPaymentOption === "pickshop"
            ) || !isFormValid()
          }
        >
          {" "}
          Place Order {isOnline ? "Online" : "Offline"}
        </button>
      </form>
    </div>
  );
}

export default CheckOut;
