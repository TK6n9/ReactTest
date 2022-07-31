import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function MainPage(props) {
  function save(name, val) {
    typeof Storage !== "undefined" &&
      localStorage.setItem(name, JSON.stringify(val));
  }

  const newArray = props.전달값.reduce(function (acc, current) {
    if (acc.findIndex(({ userId }) => userId === current.userId) === -1) {
      acc.push(current);
    }
    return acc;
  }, []);

  save("name", newArray);

  https: return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        총 유저수 : {newArray.length}
      </div>
      {newArray.map(function (data, index) {
        return (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link
                to={`/user/${data.userId}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <div style={{ margin: "8px" }}>
                  <span>유저아이디 :{data.userId}</span>
                </div>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
}

export default MainPage;
