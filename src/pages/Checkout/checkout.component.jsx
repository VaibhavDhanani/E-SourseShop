import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotalCost,
} from "../../redux/Cart/cart.selector";
import CheckoutItem from "./checkout-item.component";

const Checkout = ({ cartItems, subTotal }) => {
  let shippingCharge = (subTotal * 0.1).toFixed(2);
  let total = parseFloat(subTotal) + parseFloat(shippingCharge);
  return (
    <section className="h-auto bg-gray-200 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900 font-mono">
            Your Cart
          </h1>
        </div>
        <div className="mx-auto mt-8 max-w-2xl md:mt-12">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">
                  {cartItems.map((item) => (
                    <CheckoutItem key={item.id} item={item} />
                  ))}
                </ul>
              </div>
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-base text-gray-400">Subtotal</p>
                  <p className="text-lg font-semibold text-gray-900">
                    &#8377;{subTotal}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-base text-gray-400">Shipping</p>
                  <p className="text-lg font-semibold text-gray-900">
                    &#8377;{shippingCharge}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-xl font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  <span className="text-xs font-normal text-gray-400">IN</span>{" "}
                  &#8377;{total}
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                >
                  Checkout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  subTotal: selectCartTotalCost,
});

export default connect(mapStateToProps)(Checkout);
