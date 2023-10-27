import * as classes from "../../styles/classes.js";

export default function index(props) {
  return (
    <main className={classes.container}>
      <a className={classes.text} href="software-projects">
        &gt; Software Projects
      </a>
      <a className={classes.text} href="https://www.hackster.io/AnmarHani">
        &gt; Hardware Projects
      </a>
    </main>
  );
}
