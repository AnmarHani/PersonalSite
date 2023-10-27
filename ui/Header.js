import Social from "./components/Social.js";
import * as classes from "../styles/classes.js";
const Header = () => {
  return (
    <header className={classes.flexRowContainer}>
      <a href="/">
        <p className={classes.title}>Anmar Hani</p>
      </a>
      <Social />
    </header>
  );
};
export default Header;
