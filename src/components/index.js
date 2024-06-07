import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Posts from "./Posts/Posts";

function Main() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(function () {
    fetch("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setSearch(data);
      });
  }, []);

  function handleSearch(value) {
    setSearch(posts.filter((s) => s.title.toLowerCase().includes(value)));
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <Posts search={search} />
    </>
  );
}

export default Main;
