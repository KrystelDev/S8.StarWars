import { useState, useEffect } from "react";
import axios from "axios";

function ListShip() {
  const [list, setList] = useState([]);
  const [nextPage, setNextPage] = useState(
    "https://swapi.py4e.com/api/starships/?page=1"
  );
  let panelShips;

  useEffect(() => {
    axios({
      url: nextPage,
    })
      .then((response) => {
        console.log(response.data.results);
        setList(response.data.results);
        setNextPage(response.data.next);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList, setNextPage]);

  const handelRetriveMoreShips = () => {
    axios({
      url: nextPage,
    })
      .then((response) => {
        setList((previus) => previus.concat(response.data.results));
        console.log(list);
        setNextPage(response.data.next);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  panelShips = list.map((item, index) => (
    <div key={index} className="panelShips">
      <h3>{item.name}</h3>
      <p>{item.model}</p>
    </div>
  ));
  console.log(list);

  return (
    <div>
      <div>{panelShips}</div>
      {nextPage && <button onClick={handelRetriveMoreShips}>View more</button>}
    </div>
  );
}

export default ListShip;
