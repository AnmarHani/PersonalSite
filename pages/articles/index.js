/* eslint-disable */
import { useState } from "react";

import * as classes from "../../styles/classes";

export const getStaticProps = async () => {
  let response = await fetch("https://dev.to/api/articles?username=anmarhani");
  let data = await response.json();

  const tags = new Set();
  data.forEach((article) => {
    article.tag_list.forEach((tag) => {
      tags.add(tag);
    });
  });

  return {
    props: {
      articles: data,
      tags: Array.from(tags),
    },
  };
};
export default function Index(props) {
  const [query, setQuery] = useState(props.articles);

  const filterArticles = (event) => {
    let filteredArticles = props.articles.filter((article) => {
      return event.target.value != "all"
        ? article.tag_list.includes(event.target.value)
        : props.articles;
    });

    setQuery(filteredArticles);
  };

  return (
    <main>
      <select
        className={classes.filterContainer}
        onChange={(e) => filterArticles(e)}
      >
        <option value="all">All Articles</option>
        {props.tags.map((tag) => (
          <option key={tag} value={`${tag}`}>
            {tag}
          </option>
        ))}
      </select>
      , Total of: {query.length}
      {query.map((article) => (
        <a className={classes.text} href={article.url} key={article.id}>
          &gt;{article.title}
          <p className={classes.descriptionSecondary}>{article.description}</p>
        </a>
      ))}
    </main>
  );
}
