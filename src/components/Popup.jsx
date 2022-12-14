import { useSelector, useDispatch } from "react-redux";
import { changeAddPassengerPop, pop } from "./slices/popSlice";
import { addAccount, selectAllAccounts } from "./slices/AccountsSlice";
import { useState } from "react";
import { selectCurrUser, setCurrUser } from "./slices/currUserSlice";

const Popup = () => {
  const dispatch = useDispatch()
  const popup = useSelector(pop)
  const [newUser, setNewUser] = useState("")
  const currUser = useSelector(selectCurrUser);
  const handleAccountAdd = (e) => {
    e.preventDefault()
    if( !isNaN(newUser) && newUser!=currUser ){
    dispatch( addAccount(newUser))
    dispatch(setCurrUser(newUser))
    setNewUser("")
    }
  }
  return(
        <div>
        {popup.addPassengerPop && (
            <div className="fixed inset-0 bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center">
              <div className="bg-white p-2 rounded">
                <h3 className="flex justify-center font-medium text-lg">Order for Someone else</h3>
                <form >
                  <div className="flex flex-row justify-between items-center my-2">
                    <p>Enter seat number</p>
                    <input
                      onChange={(e) => setNewUser(e.target.value)}
                      className="bg-purple-100 focus:outline-none px-2 border-2 ml-12 py-1"
                      type="tel"
                      required
                    />
                  </div>
                
                  <div className="flex justify-center">
                    <button
                      onClick={() => dispatch(changeAddPassengerPop(false))}
                      className="px-6 py-2 mx-2 bg-red-600 hover:bg-white border-2 border-red-600 hover:text-red-600 font-medium text-white "
                    >
                      Close
                    </button>
                    <button
                      className="px-6 py-2 mx-2 bg-[#434586] text-white hover:bg-white border-2 border-[#434586] hover:text-[#434586] font-medium"
                      type="submit"
                      onClick={(e) => {
                        handleAccountAdd(e);
                        dispatch(changeAddPassengerPop(false));
                      }}
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
    )
}
export default Popup