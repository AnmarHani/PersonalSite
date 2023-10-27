import Head from "next/head";

import * as classes from "../styles/classes";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Anmar Hani</title>
      </Head>

      <main>
        <a className={classes.text} href="projects">
          &gt; Projects
        </a>
        <a href="https://anmarhaniv1.hashnode.dev/" className={classes.text}>
          &gt; Articles
        </a>
        <a href="about-me" className={classes.text}>
          &gt; About Me
        </a>
        <a
          href="https://github.com/AnmarHani/portofoliov2/blob/main/public/Resume-light.pdf"
          className={classes.text}
        >
          &gt; Show Resume
        </a>
      </main>
    </>
  );
}
