import { useSelector, useDispatch } from "react-redux";
import { changeAddPassengerPop, pop } from "./slices/popSlice";


const Addseat = ({}) => {
    const popup = useSelector(pop)
    const dispatch = useDispatch()

    return(
        <div
          onClick={() => dispatch(changeAddPassengerPop(!popup.addPassengerPop)) }
          className={`${!popup.selectSeatPop ? "md:block hidden" : " " } bg-[#434586] hover:bg-white  text-white border-[#5f63bf] hover:text-[#5f63bf] border-2 md:border-t-0 md:border-b-0 md:border-l-2 md:border-r-2 px-2 md:border-white h-12  md:grid md:justify-center md:items-center flex items-center justify-center font-normal cursor-pointer`}
        >
          <span className="font-medium  text-md">Order for others <i className="fa-solid fa-plus"></i></span>
        </div>
    )
}
export default Addseat