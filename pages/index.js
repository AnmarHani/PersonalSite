import Head from 'next/head'
import Link from 'next/link'

import * as classes from '../styles/classes'

export default function Home(props) {
  return (
    <div className='container'>
      <Head>
        <title>Anmar Hani</title>
        <meta name="description" content="Anmar Hani Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div>
          <Link href="projects">
            <a className={classes.text} href="">
              &gt; Projects
            </a>
          </Link>
          <a href="https://anmarhaniv1.hashnode.dev/" className={classes.text}>
            &gt; Articles
          </a>
          <a href="about-me" className={classes.text}>
            &gt; About Me
          </a>
          <a href="https://github.com/AnmarHani/portofoliov2/blob/main/public/Resume-light.pdf" className={classes.text}>
            &gt; Show Resume
          </a>
        </div>
      </main>
    </div>
  )
}
