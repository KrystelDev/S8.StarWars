import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListShip() {
  const [list, setList] = useState([]);
  const [nextPage, setNextPage] = useState(
    "https://swapi.py4e.com/api/starships/?page=1"
  );
  let panelShips;

  //Array StartShip
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

  //Onlick: more Starship
  const handelRetriveMoreShips = () => {
    axios({
      url: nextPage,
    })
      .then((response) => {
        setList((previus) => previus.concat(response.data.results));
        setNextPage(response.data.next);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  list.map((item, index) => (item.id = index + 2));

  panelShips = list.map((item, index) => (
    <div key={index} className="panelShips">
      <Link to={`/detall/${item.name}`} state={item}>
        <h3>{item.name}</h3>
        <p>{item.model}</p>
      </Link>
    </div>
  ));
  //console.log(list);

  return (
    <div>
      <div>{panelShips}</div>
      {nextPage && <button onClick={handelRetriveMoreShips}>View more</button>}
    </div>
  );
}

export default ListShip;
