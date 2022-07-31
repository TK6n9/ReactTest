import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import Paging from "../paging";

function UserPage(props) {
  let [tab, setTab] = useState(0);

  const params = useParams();

  let NewArray = [];

  for (let i = 0; i < props.전달값.length; i++) {
    if (props.전달값[i].userId == params.id) {
      NewArray.push(props.전달값[i]);
    }
  }

  function TabContent(props) {
    if (props.tab === 0)
      return (
        <>
          <div>
            {" "}
            {NewArray.map(function (data, index) {
              return (
                <Link
                  to={`/user/${data.userId}/detail/${data.id}/completed/all`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "10px",
                      fontSize: "16px",
                    }}
                  >
                    제목은 : {data.title}{" "}
                    <div style={{ fontSize: "16px" }}>
                      <div
                        style={{
                          color: data.completed === true ? "red" : "blue",
                          fontWeight: "700",
                        }}
                      >
                        {JSON.stringify(data.completed)}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      );
    else if (props.tab === 1)
      return (
        <>
          <div>
            {" "}
            {NewArray.map(function (data, index) {
              return data.completed === false ? (
                <Link
                  to={`/user/${data.userId}/detail/${data.id}/completed/${data.completed}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "10px",
                      fontSize: "16px",
                    }}
                  >
                    제목은 : {data.title} {JSON.stringify(data.completed)}
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: data.completed === true ? "red" : "blue",
                      }}
                    >
                      {JSON.stringify(data.completed)}
                    </div>
                  </div>
                </Link>
              ) : (
                ""
              );
            })}
          </div>
          {/* <Paging></Paging> */}
        </>
      );
    else
      return (
        <>
          <div>
            {NewArray.map(function (data, index) {
              return data.completed === true ? (
                <Link
                  to={`/user/${data.userId}/detail/${data.id}/completed/${data.completed}`}
                  style={{
                    fontSize: "16px",

                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "10px",
                      fontSize: "16px",
                    }}
                  >
                    제목은 : {data.title} {JSON.stringify(data.completed)}
                    <div
                      style={{
                        color: data.completed === true ? "red" : "blue",
                        fontWeight: "700",
                      }}
                    >
                      {JSON.stringify(data.completed)}
                    </div>
                  </div>
                </Link>
              ) : (
                ""
              );
            })}
          </div>
          {/* <Paging></Paging> */}
        </>
      );
  }

  return (
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
        유저이름은 :{NewArray[0].userId}
        <br />
      </div>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link eventKey="link-0" onClick={() => setTab(0)}>
                모두
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={() => setTab(1)}>
                초안
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" onClick={() => setTab(2)}>
                완료
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <TabContent tab={tab} />
        </Card.Body>
      </Card>
    </>
  );
}

export default UserPage;
