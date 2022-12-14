import Addseat from "./Addseat";
import Filter from "./Filter";
import Popup from "./Popup";
import Selectseat from "./SelectSeat";
import { useSelector, useDispatch } from "react-redux";
import { changeSelectSeatPop, pop, changeFilterPop } from "./slices/popSlice";
import { selectAllAccounts } from "./slices/AccountsSlice";
import { selectCurrUser, setCurrUser } from "./slices/currUserSlice";

const Accounts = ({ paginate }) => {
  const dispatch = useDispatch();
  const popup = useSelector(pop);
  const accounts = useSelector(selectAllAccounts);
  const currUser = useSelector(selectCurrUser);
  return (
    <div className="flex flex-col md:bg-white bg-[#5f63bf] rounded-full md:items-center justify-center md:mt-0 md:mb-6 md:static fixed w-full mt-1">
      <div className=" bg-[#5f63bf] md:rounded-none rounded-full  w-full md:mt-0 mt-1 h-12 flex justify-between items-center px-3 md:pl-12 md:pr-0 md:justify-between  flex flex-row">
        <div className="flex flex-row items-center  text-white font-bold">
          <h3>ALLO</h3>
          <i className="fa-solid fa-plane ml-2 fa-xl"></i>
        </div>
        <div className="flex flex-row h-full">
          {accounts.map((a, idx) => (
            <div
              key={idx}
              onClick={() => dispatch(setCurrUser(a))}
              className={`md:block hidden  ${
                a === currUser ? "md:bg-white md:text-[#5f63bf]" : "md:text-white hover:bg-[#434586]"
              } p-2 border-l-2 border-white h-full md:grid md:justify-center  md:items-center font-medium cursor-pointer`}
            >
              <p className="">Passenger-{a}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center -ml-32 ">
          <div className="md:hidden  block text-white ">
            <span className="">Seat No - {currUser}</span>
          </div>
          <Addseat />
          <div
            onClick={() => dispatch(changeSelectSeatPop(!popup.selectSeatPop))}
            className="md:hidden text-white block font-bold cursor-pointer flex justify-center"
          >
            <span><i className="fa-solid fa-circle-chevron-down"></i></span>
          </div>
        </div>
        <button
          onClick={() => dispatch(changeFilterPop(!popup.filterPop))}
          className="md:hidden border-white border-2 block  rounded-full text-white w-8 h-8 top-1/2 bg-[#5f63bf]"
        >
          <i className="fa-solid fa-filter"></i>
        </button>
      </div>
      {/* popups */}
      <Filter paginate={paginate} />
      <Selectseat />
      <Popup />
    </div>
  );
};
export default Accounts;
