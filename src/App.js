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
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((result) => setData(result.data))
      .catch((err) => {});
  }, []);

  if (datas === null) {
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
          <Route path="/" element={<MainPage 전달값={datas} />} />
          <Route path="/user/:id" element={<UserPage 전달값={datas} />} />
          <Route
            path="/user/:id/detail/:id/completed/:id"
            element={<DeailPage 전달값={datas} />}
          />
        </Routes>
      </div>
      <div id="footer"></div>

      <hr />
    </div>
  );
}

export default App;
