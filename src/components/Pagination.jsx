import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterMenu, setFilter } from "./slices/filterMenuSlice";

function Pagination(){
    const dispatch = useDispatch()
    const pageNumbers = [];
    const [currentPage, setCurrentPage] = useState(1);
    const [mealsPerPage] = useState(4);
    const filteredMenu = useSelector(filterMenu)
    const totalMeals = filterMenu.length
    const indexOfLastMeal = currentPage * mealsPerPage;
    const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
    const [currentMeals] = filteredMenu.slice(indexOfFirstMeal, indexOfLastMeal);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // dispatch(setFilter(currentMeals))

    for (let i = 1; i <= Math.ceil(totalMeals / mealsPerPage); i++) {
      pageNumbers.push(i);
    }
    
    return (
      <ol className="flex justify-center gap-1 text-xs font-medium md:mb-12 mb-20">

        {pageNumbers.map(number => (
            <li key={number}>
                <a
                    onClick={() => paginate(number)}
                    className="block h-8 w-8 rounded-full border border-gray-100 text-center leading-8"
                >
                    {number}
                </a>
            </li>
        ))}
        
      </ol>
  );
};

export default Pagination;