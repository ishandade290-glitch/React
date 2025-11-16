import React from "react";
import "./App.css";
import { useState } from "react";
import Post from "./component/Post";
import WelcomeMessage from "./component/Welcome_Messages";
import ItemList from "./component/ItemList";

const posts = [
  { id: 1, title: "Car", description: "Its Car" },
  { id: 2, title: "Phone", description: "Its Phone" },
];

const text = ["Car","Phone", "bicycle"]

const App = () => {
  const [count, setCount] = useState(0);

  const onClickBtn = () => {
    setCount(count + 1);
    console.log("count", count);
  };

  const onClickBtnMinus = () => {
    setCount(count - 1);
    console.log("count", count);
  };

  return (
    <>
      <h2>Hello World</h2>
      <button onClick={onClickBtn}>+</button>
      <button onClick={onClickBtnMinus}>-</button>
      <h3>{count}</h3>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} description={post.description} />
      ))}
        <WelcomeMessage username={"Maksat"} />
        <ItemList items={text} />
      
    </>
  );
};

export default App;
