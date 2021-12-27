import { Link } from "react-router-dom";
import { Fragment } from "react";
import StarWarsLogo from "../img/starWarsLogo.png";

function NavBar() {
  return (
    <Fragment>
      <nav>
        <div className="ContainerUp">
          <div className="boxStarWarsLogo">
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
        <div className="bordeMenuPage">
          <button>
            <Link to="/">HOME</Link>
          </button>
          <button>
            <Link to="/StartShips">STARTSHIPS</Link>
          </button>
        </div>

        {/* <div className="bordeMenuPageBottom"></div> */}
      </nav>
    </Fragment>
  );
}
export default NavBar;
