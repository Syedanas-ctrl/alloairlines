import { useState, useEffect } from "react";
import Menuutil from "./Menuutil";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, filterMenu } from "./slices/filterMenuSlice";
import { selectWholeMenu, setMenu } from "./slices/menuSlice";

function Menu({paginate, currentPage}) {
  const menu = useSelector(selectWholeMenu);

  const dispatch = useDispatch();
  const filteredMenu = useSelector(filterMenu);
  useEffect(() => {
    // dispatch(setMenu(meals))
    dispatch(setFilter(menu));
  }, []);
  // console.log("filter", menu);
  
  //for Pagination
    const pageNumbers = [1 , 2];
    // const [currentPage, setCurrentPage] = useState(1);
    const [mealsPerPage] = useState(4);
    const totalMeals = filterMenu.length
    const indexOfLastMeal = currentPage * mealsPerPage;
    const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
    const currentMeals = filteredMenu.slice(indexOfFirstMeal, indexOfLastMeal);
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    // for (let i = 1; i <= Math.ceil(totalMeals / mealsPerPage); i++) {
    //   pageNumbers.push(i);
    // }
  return (
    <div>
      <h1 className="font-bold flex justify-center text-2xl md:mt-2 text-gray-800 block md:hidden mt-16"><span className="text-[#402d6a]">Menu</span></h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-4 md:mx-12 mx-2 my-8">
        {currentMeals.map((m) => (
          <Menuutil
            id={m.id}
            img={m.img}
            title={m.title}
            starter={m.starter}
            desert={m.desert}
            price={m.price}
            drinks={m.drinks}
          />
        ))}
      </div>
      <ol className="flex justify-center items-center gap-1 text-xs font-medium md:mb-12 mb-20">
        {pageNumbers.map((number) => (
          number<=currentMeals.length && <li key={number}>
            <a
              onClick={() => paginate(number)}
              className="block border-2 border-[#434586] h-8 w-8 rounded-full flex items-center justify-center hover:text-white hover:bg-[#434586] mx-2 text-center leading-8"
            >
              {number}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Menu;
