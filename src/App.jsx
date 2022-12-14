import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Menu from "./components/Menu";
import Checkout from "./components/Checkout";
import Accounts from "./components/Accounts";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrUser } from "./components/slices/currUserSlice";
import { setMenu } from "./components/slices/menuSlice";

function App() {
  const currUser = useSelector(selectCurrUser);
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // const menu = useSelector(selectWholeMenu);

  const dispatch = useDispatch()

  useEffect(() => {
  	axios.get("http://localhost:4000/").then(function(response) {
      dispatch(setMenu(response.data.meals))
      // setFilteredMenu(menu)
      // setLabels(response.data.labels)
      // console.log(menu)
  	})
  }, [])

  return (
    <div>
      {currUser===0 ? (
        <Login />
      ) : (
        <div className="flex flex-row">
          <div className="">
            <Accounts paginate={paginate} />
            <Menu paginate={paginate} currentPage={currentPage} />
          </div>
          <Checkout />
        </div>
      )}
    </div>
  );
}

export default App;
