import { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import CallToAction from "@/components/call-to-action";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const shippingFee = 200;

  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed successfully!");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong!");
      removeAll();
    }
  }, [searchParams, removeAll]);

  // Calculate total price based on item quantities
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price) * (item.quantity || 1); // Ensure quantity defaults to 1
  }, 0);

  const isCheckoutDisabled =
    !address || !phoneNumber || !paymentMethod || loading;

  const onCheckout = async () => {
    if (isCheckoutDisabled) {
      toast.error(
        "Please fill in address, phone number, and select a payment method."
      );
      return;
    }

    setLoading(true); // Set loading state to true

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: items.map((item) => item.id),
          quantities: items.map((item) => item.quantity || 1), // Ensure quantity defaults to 1
          address,
          phoneNumber,
          paymentMethod,
        }
      );

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("An error occurred during checkout.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Item Total:</div>
          <Currency value={totalPrice} />
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            Delivery Fee:
          </div>
          <Currency value={shippingFee} />
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-bold text-gray-900">
            Total Payment:
          </div>
          <Currency value={totalPrice + shippingFee} />
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          placeholder="Enter your address"
        />
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Payment Method
        </label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        >
          <option value="" disabled>
            Select payment method
          </option>
          <option value="cod">Cash on Delivery</option>
          <option value="bkash">Bkash</option>
        </select>
        {paymentMethod === "cod" && (
          <p className="mt-2 text-sm bg-white shadow-md shadow-black p-4 transition-all duration-300">
            ক্যাশঅন ডেলিভারিতে অর্ডার করতে আমাদের +8801865490908 বিকাশ নাম্বারে
            ডেলিভারি চার্জ ২০০ টাকা সেন্ড মানি করে আমাদের হোয়াটসআপ এ যোগাযোগ
            করুন। আমরা আপনার সাথে যোগাযোগ করে আপনার পণ্য আপনার নিকট পৌছে দিবো।
            ধন্যবাদ।
          </p>
        )}
      </div>
      <Button
        disabled={isCheckoutDisabled}
        onClick={onCheckout}
        className="w-full mt-6 bg-[#009900]"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-3 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v5.5l4.5-4.5L20 9l-6 6-4.5-4.5L12 12v5.5a8 8 0 01-8-8z"
              ></path>
            </svg>
            Processing...
          </div>
        ) : (
          "Checkout"
        )}
      </Button>
    </div>
  );
};

export default Summary;
