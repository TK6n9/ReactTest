import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MainPage from "./component/MainPage";
import UserPage from "./component/UserPage";
import DeailPage from "./component/DetailPage";
import Button from "react-bootstrap/Button";

function App() {
  let navigate = useNavigate();

  const [datas, setData] = useState([]);
  const [users, setUser] = useState([]);
  const [reply, setReply] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/todos"),
        axios.get("https://jsonplaceholder.typicode.com/users"),
        axios.get("https://jsonplaceholder.typicode.com/comments?postId=1"),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          setData(res1.data);
          setUser(res2.data);
          setReply(res3.data);
        })
      )
      .catch((err) => {
        console.log("에러발생했습니다 : ", err);
      });
  }, []);

  if (datas === null) {
    return <h1>방어막...</h1>;
  }

  if (users === null) {
    return <h1>방어막...</h1>;
  }
  if (reply === null) {
    return <h1>방어막...</h1>;
  }

  return (
    <div className="container">
      <hr />
      <div
        id="header"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/"></Link>
        <Button
          variant="outline-success"
          size="large"
          onClick={function () {
            navigate("/");
          }}
        >
          메인페이지가기
        </Button>
      </div>
      <hr />

      <div id="body">
        <Routes>
          <Route
            path="/"
            element={<MainPage 전달값={datas} 유저값={users} />}
          />
          <Route
            path="/user/:id"
            element={<UserPage 전달값={datas} 유저값={users} />}
          />
          <Route
            path="/user/:id/detail/:id/completed/:id"
            element={<DeailPage 전달값={datas} 유저값={users} 댓글={reply} />}
          />
        </Routes>
      </div>

      <div id="footer"></div>

      <hr />
    </div>
  );
}

export default App;
