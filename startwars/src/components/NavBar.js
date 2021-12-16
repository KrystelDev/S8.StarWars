import { Link } from "react-router-dom";
import { Fragment } from "react";
import StarWarsLogo from "../img/starWarsLogo.png";

function NavBar() {
  return (
    <Fragment>
      <nav className="ContainerStarWarsLogo">
        <div>
          <div>
            <img
              className="StarWarsLogo"
              src={StarWarsLogo}
              alt="Star Wars logo TM"
            />
          </div>
          <div className="logins">
            <button>LOGIN</button>
            <button>SINGUP</button>
          </div>
        </div>
        <div className="bordeMenuPageTop"></div>
        <div className="menuPage">
          <button>
            <Link to="/">HOME</Link>
          </button>
          <button>
            <Link to="/StartShips">STARTSHIPS</Link>
          </button>
        </div>
        <div className="bordeMenuPageBottom"></div>
      </nav>
    </Fragment>
  );
}
export default NavBar;
