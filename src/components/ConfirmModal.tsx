import { CartItem } from "../App";
import Button from "./Button";
import OrderSummary from "./OrderSummary";

type ConfirmModalProps = {
  cart: CartItem[];
  confirmModal: () => void;
  reset: () => void;
};

const ConfirmModal = ({ cart, confirmModal, reset }: ConfirmModalProps) => {
  return (
    <>
      <div
        onClick={confirmModal}
        className="fixed h-screen w-screen top-0 left-0 bg-gray-500 opacity-70"
      ></div>
      <div className="fixed h-[600px] w-[592px] top-0 left-0 bottom-0 right-0 m-auto bg-white rounded-xl p-10 font-redhat-text tracking-normal flex flex-col justify-between gap-6 overflow-y-scroll">
        <div>
          <img
            src="images/icon-order-confirmed.svg"
            alt="icon order confirmed"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-[40px] leading-[120%]  text-Rose-900 font-bold">
            Order Confirmed
          </h2>
          <p className="text-Rose-500">We hope you enjoy your food!</p>
        </div>
        <OrderSummary cart={cart} />
        <Button onClick={reset} label="Start New Order" />
      </div>
    </>
  );
};

export default ConfirmModal;
