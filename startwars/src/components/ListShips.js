import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SelectedStartShip from "./SelectedStartShip";

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
      <div>
        <h3 onClick={() => SelectedStartShip({ item, index })}>{item.name}</h3>
        <button onClick={() => SelectedStartShip({ item, index })}>
          <Link to={`/StartShips/${item.name}`}>+</Link>
        </button>
      </div>
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
