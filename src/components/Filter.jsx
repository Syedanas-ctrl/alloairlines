import { useEffect, useState } from "react";
import { setFilter } from "./slices/filterMenuSlice";
import { useSelector, useDispatch } from "react-redux";
import { changeFilterPop, pop } from "./slices/popSlice";
import { selectWholeMenu } from "./slices/menuSlice";
import axios from "axios";

function Filter({paginate}) {
  const [labels, setLabels] = useState([])
  const dispatch = useDispatch();
  const popup = useSelector(pop);
  const menu = useSelector(selectWholeMenu);

  useEffect(()=>{
    axios.get("http://localhost:4000/").then(function(response) {
      setLabels(response.data.labels)
  	})
  }, [])

  const handleFilter = (id) => {
    const updatedFilter = menu.filter((m) => m.labels.includes(id));
    dispatch(setFilter(updatedFilter));
    paginate(1)
  };
  return (
    <div>
    <div className="flex justify-center">
    <h1 className="font-bold text-2xl md:mt-4 text-gray-800 md:block -mr-16 hidden mt-16"><span className="text-[#402d6a]">Menu</span></h1>
    </div>
      {popup.filterPop && (
        <div className="fixed inset-0 bg-black bg-opacity-30  flex justify-center ">
          <div className=" bg-white flex md:flex-row rounded-xl h-[60%] w-2/3 flex-col md:flex-wrap md:justify-center px-4 mx-4 mt-16 md:mt-0">
            <h3 className="md:hidden block mt-2 text-xl font-semibold">Filter</h3>
            <p className="md:hidden mb-2 block text-sm">
              Quickly swith beteen different categories
            </p>
            <div
              onClick={() => {dispatch(setFilter(menu)); dispatch(changeFilterPop(false)); paginate(1)}}
              className="cursor-pointer hover:bg-purple-200 flex flex-row justify-between md:mx-4 md:my-2 my-1 md:text-md text-md px-4 md:py-2 md:bg-purple-400 md:rounded-full"
            >
              <p>All</p>
            </div>
            {labels.map((l) => (
              <div
                key={l.id}
                onClick={() => {handleFilter(l.id); dispatch(changeFilterPop(false)); paginate(1) }}
                className="cursor-pointer hover:bg-purple-200 flex flex-row justify-between md:mx-4 md:my-2 my-1 px-4 md:py-1 md:bg-purple-400 md:text-md text-md md:rounded-full"
              >
                <p>{l.label}</p>
              </div>
            ))}
            <div className="flex justify-center">
              <button
                onClick={() => dispatch(changeFilterPop(false))}
                className="cursor-pointer hover:bg-white border-2 border-red-600 hover:text-red-600 font-medium bg-red-600 text-white py-2 md:mx-4 md:my-2 my-1 md:text-md text-md px-4 md:py-2 md:bg-purple-400 md:rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="md:block hidden md:flex md:flex-row md:flex-wrap justify-center px-4 mx-4 mt-6">
        <div
          onClick={() => {dispatch(setFilter(menu)); paginate(1)}}
          className="cursor-pointer flex flex-row justify-between mx-4 my-2 text-md px-4 py-2 hover:bg-[#434586]  bg-[#5f63bf] text-white font-medium rounded-full"
        >
          <p>All</p>
        </div>
        {labels.map((l) => (
          <div
            key={l.id}
            onClick={() => handleFilter(l.id)}
            className="cursor-pointer  flex flex-row justify-between mx-4 my-2 text-md px-4 py-2 hover:bg-[#434586] bg-[#5f63bf] text-white font-medium rounded-full"
          >
            <p>{l.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Filter;
