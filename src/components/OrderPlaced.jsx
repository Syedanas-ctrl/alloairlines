import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const OrderPlaced = ({orderPop, setOrderPop}) => {
  const dispatch = useDispatch()
  return(
        <div>
        {orderPop && (
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
              <div className="bg-white p-2 rounded w-96">
                <h3 className="flex justify-center font-medium text-lg mb-12">Order Successful</h3>
                <div className="flex justify-center">
                    <button
                      onClick={() => setOrderPop(false)}
                      className="px-6 py-2 mx-2 bg-red-600 hover:bg-white border-2 border-red-600 hover:text-red-600 font-medium text-white "
                    >
                      Close
                    </button>
                  </div>
              </div>
            </div>
          )}
        </div>
    )
}
export default OrderPlaced