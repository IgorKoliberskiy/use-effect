import "./App.css";
import Details from "./components/Details";
import List from "./components/List";
import { useEffect, useState } from "react";

function App() {
  let [info, setInfo] = useState([]);
  let [loading, setLoading] = useState(true);
  let [CreatedDetails, setCreatedDetails] = useState(null)

  
  
  let fetchData = function() {
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  };
  
  
  function handleChangeList(event) {
    setCreatedDetails(<Details props={{id :event.target.id, name: event.target.textContent}}></Details>)
  }

  useEffect(fetchData, []);
  return (
    <>
      {loading && <p>Loading...</p>}
      <div className="App">
        <List props={info} click={handleChangeList} />
        {CreatedDetails ? CreatedDetails : ''}
      </div>
    </>
  );
}

export default App;
