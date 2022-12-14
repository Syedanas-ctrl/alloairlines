import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMeal, chosenMeals } from "./slices/mealsSelSlice";
import { selectCurrUser } from "./slices/currUserSlice"

function Menuutil({ id, img, title, starter, desert, price, drinks}){
    const dispatch = useDispatch()
    const currUser = useSelector(selectCurrUser)
    const [selectedDrink, setSelectedDrink] = useState({id: "", title: "", price: 0})
    const mealsSelected = useSelector(chosenMeals)

    const handleMealAdd = (id, meal_title, drink_id, drink_title, drink_price, meal_price) => {
      const curr_id = mealsSelected.length
        ? mealsSelected[mealsSelected.length - 1].id+1
        : 1;
      const totPrice = meal_price + drink_price
      dispatch( addMeal(curr_id, currUser, id, meal_title, drink_id, drink_title, totPrice))
      setSelectedDrink({id: "", title: "", price: 0})
    };


    return(
        <div key={id} className="flex md:p-3 p-1 rounded md:my-3 ">
            <div className="flex-shrink-0 mt-2">
              <img
                className="md:w-32 rounded-full md:h-32 h-28 w-28 "
                src={img}
                alt="food item"
              />
            </div>
            <div className="ml-3 max-w-[70%]">
              <div>
                <h3 className="md:text-2xl text-xl text-gray-800 font-semibold">
                  {title}
                </h3>
              </div>
              <div className="text-gray-600 w-full my-2 md:text-md text-sm">
                Lorem, ipsum dolor sit amet consecteturectus minus eius
                perferendis quia...
              </div>
              <div className="flex flex-row md:text-md text-sm text-white justify-between py-1 bg-[#5f63bf] font-medium  px-2 my-1">
                <p><i className="fa-solid fa-utensils pr-2"></i>Starter</p>
                <p>{starter}</p>
              </div>
              <div className="flex flex-row justify-between md:text-md text-sm text-white py-1 bg-[#5f63bf] font-medium px-2 my-1">
                <p><i className="fa-solid fa-cheese pr-2"></i>Desert</p>
                <p>{desert}</p>
              </div>
              <div className="grid md:text-md text-md justify-items-end py-1 px-2 my-1 font-medium">
                <p className="">₹ {price}</p>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row flex-wrap">
                  {drinks.map((d) => (
                    <button key={d.id} onClick={() => {setSelectedDrink(d); }} className= {` ${selectedDrink === d ? "bg-[#5f63bf] text-white" : "bg-white"} md:text-md border-2 border-[#5f63bf] hover:bg-[#5f63bf]  hover:text-white text-sm mx-1 py-1 my-1 px-2`}>
                      {d.title}....₹{d.price}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => handleMealAdd(id, title, selectedDrink.id, selectedDrink.title, selectedDrink.price, price)}
                  className="rounded-full w-10 h-10 flex items-center justify-center px-2 py-1 border shadow hover:bg-[#402d6a] text-white mr-3 my-2 bg-[#5f63bf]"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
    )
}
export default Menuutil