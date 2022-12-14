import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chosenMeals, deleteMeal, orderMeal } from "./slices/mealsSelSlice";
import { selectCurrUser } from "./slices/currUserSlice";
import OrderPlaced from "./OrderPlaced";

function Checkout() {
  const dispatch = useDispatch();
  const mealsSelected = useSelector(chosenMeals);
  const currUser = useSelector(selectCurrUser);

  const [orderPop, setOrderPop] = useState(false);

  const [totalPrice, setTotalPrice] = useState(
    mealsSelected.length
      ? mealsSelected.reduce((accum, m) => {
          return accum + m.price;
        }, 0)
      : 0
  );
  useEffect(() => {
    setTotalPrice(
      mealsSelected.length
        ? mealsSelected.reduce((accum, m) => {
            return m.seat_id === currUser ? accum + m.price : accum;
          }, 0)
        : 0
    );
  }, [mealsSelected, currUser]);
  const [cartShowPop, setCartShowPop] = useState(false);
  return (
    <div className="md:w-[25%] flex md:flex-col flex-row md:static fixed bottom-0 md:rounded-none rounded-full w-full bg-[#5f63bf] md:px-4 md:py-6 px-4 py-2 mb-1 ">
      <div
        className={` ${
          cartShowPop &&
          "fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        } `}
      >
        <div
          className={` ${cartShowPop && "bg-[#5f63bf] w-full mx-4 px-3 py-3"}`}
        >
          <h3
            className={` ${
              !cartShowPop && "hidden"
            } md:block text-2xl font-semibold text-white`}
          >
            Your Orders
          </h3>
          {mealsSelected.length ? (
            mealsSelected.map(
              (m) =>
                m.seat_id === currUser && (
                  <div
                    key={m.id}
                    className={`md:block ${
                      !cartShowPop ? "hidden " : ""
                    } md:flex md:flex-row md:justify-between flex flex-row justify-between bg-white pl-2 my-1`}
                  >
                    <div className="flex flex-col py-2 text-[#5f63bf] font-semibold">
                      <p className="text-lg">{m.meal_title}</p>
                      <p className="text-sm italic">{m.drink_title}</p>
                    </div>
                    <div
                      onClick={() => dispatch(deleteMeal(m.id))}
                      className="w-1/5 cursor-pointer  flex justify-center items-center text-[#5f63bf] hover:text-white hover:bg-[#5f63bf] hover:border-2 hover-border-white"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                )
            )
          ) : (
            <div
              className={`md:block ${
                !cartShowPop && "hidden"
              } text-white font-semibold flex flex-col py-8`}
            >
              <p>No items</p>
            </div>
          )}
          {mealsSelected.length &&
          mealsSelected.filter((m) => m.seat_id === currUser).length === 0 ? (
            <div
              className={`${
                !cartShowPop && "hidden"
              } md:block text-white font-semibold flex flex-col py-8`}
            >
              <p>No items</p>
            </div>
          ) : (
            <div></div>
          )}
          <button
            onClick={() => setCartShowPop(false)}
            className={`md:hidden ${
              cartShowPop ? "block" : "hidden"
            }  px-6 py-2 mx-2 bg-red-600 hover:bg-white border-2 border-red-600 hover:text-red-600 font-medium text-white `}
          >
            Close
          </button>
        </div>
      </div>
      <div className="md:cursor-auto cursor-pointer flex flex-row items-center w-1/2 md:w-full justify-between text-white font-semibold">
        <p>Total</p>
        <p>₹ {Math.round(totalPrice * 100) / 100}</p>
      </div>
      <div
        onClick={() => setCartShowPop(!cartShowPop)}
        className="md:hidden text-white md:mx-0 grid items-center mx-12 block font-bold cursor-pointer flex justify-center"
      >
        <span>
          <i className="fa-solid fa-circle-chevron-up fa-2xl"></i>
        </span>
      </div>
      {(mealsSelected.length && mealsSelected.filter((m) => m.seat_id === currUser).length !== 0) ? <div className="flex md:justify-center justify-end w-1/2 md:w-full md:mt-6">
        <button
          onClick={() => {
            dispatch(orderMeal(currUser));
            setOrderPop(!orderPop);
          }}
          className="md:rounded-none rounded-full border-2 border-white  bg-[#5f63bf] hover:bg-[#434586] text-white py-2 px-6 font-semibold"
        >
          Order
        </button>
      </div>:<div></div>}
      <OrderPlaced orderPop={orderPop} setOrderPop={setOrderPop} />
    </div>
  );
}
export default Checkout;
