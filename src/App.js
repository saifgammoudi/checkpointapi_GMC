import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import { UserInfo } from "./Components/UserInfo/UserInfo";
import UserList from "./Components/UserList/UserList";
function App() {
  const [listOfUSer, setListOfUSer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUSer(res.data);
        setLoading(false);
      } catch (error) {
        console.log("err");
      }
    };
    fetchData();
  }, []);

  console.log(listOfUSer);
  return (
    <BrowserRouter>
      <div>
        <Route
          exact={true}
          path="/"
          render={() => <UserList listOfUSer={listOfUSer} />}
        />
        <Route
          path="/User/:name"
          render={(props) => <UserInfo {...props} listOfUSer={listOfUSer} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
