/* eslint-disable */
import { useState } from "react";

import * as classes from "../../styles/classes";
import Head from "next/head";

export const getStaticProps = async () => {
  let response = await fetch("https://api.github.com/users/AnmarHani/repos");
  let data = await response.json();
  const topics = new Set();
  data.forEach((repo) => {
    repo.topics.forEach((topic) => {
      topics.add(topic);
    });
  });

  return {
    props: {
      repositories: data,
      topics: Array.from(topics),
    },
  };
};
export default function Index(props) {


  const [query, setQuery] = useState(props.repositories);

  const filterRepositories = (event) => {
    let filteredRepositories = props.repositories.filter((repo) => {
      return event.target.value != "all"
        ? repo.topics.includes(event.target.value)
        : props.repositories;
    });

    setQuery(filteredRepositories);
  };

  return (
    <main>
      <div className={classes.filterContainer}>
        <select onChange={(e) => filterRepositories(e)}>
          <option value="all">All Projects</option>
          {props.topics.map((topic, index) => (
            <option key={index} value={`${topic}`}>
              {topic}
            </option>
          ))}
        </select>
        , Total of: {query.length}
      </div>

      {query.map((repo) => (
        <a className={classes.text} href={repo.html_url} key={repo.id}>
          &gt;{repo.name}
          <p className={classes.descriptionSecondary}>{repo.description}</p>
        </a>
      ))}
    </main>
  );
}
