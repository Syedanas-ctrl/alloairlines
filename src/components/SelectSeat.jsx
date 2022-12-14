import Addseat from "./Addseat";
import { useSelector, useDispatch } from "react-redux";
import { changeSelectSeatPop, pop } from "./slices/popSlice";
import { selectAllAccounts } from "./slices/AccountsSlice";
import {setCurrUser} from "./slices/currUserSlice"

const Selectseat = () => {
  const dispatch = useDispatch()
  const popup = useSelector(pop)
  const accounts = useSelector(selectAllAccounts)
  
  return (
    <div>
      {popup.selectSeatPop && (
        <div className="fixed inset-0 bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-2 rounded">
            <h3 className="flex justify-center text-lg font-medium">Select seat</h3>
            <div className="flex flex-col">
                {accounts.map((a, idx) => (
                <div
                    key={idx}
                    onClick={() => {dispatch(setCurrUser(a)); dispatch(changeSelectSeatPop(false))}}
                    className="bg-[#5f63bf] hover:text-[#5f63bf] hover:bg-white border-2 border-[#5f63bf] mx-1 px-8 py-4 my-1 flex justify-center items-center text-white font-medium cursor-pointer"
                >
                    <span className="">Seat No - {a}</span>
                </div>
                ))}
            </div>
            <Addseat />
            <div className="flex justify-center my-1">
                <button className="px-6 py-2 mx-2 bg-red-600 text-white mt-6 border-2 border-red-600 hover:bg-white hover:text-red-600 " onClick={() => dispatch(changeSelectSeatPop(false))}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Selectseat;
