import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function DeailPage(props) {
  let NewArray = [];
  let navigate = useNavigate();

  const params = useParams();

  let pathName = window.location.pathname;
  let pathNameSplit = pathName.split("/");

  let userId = pathNameSplit.at(2);
  let titleId = pathNameSplit.at(4);
  let completed = pathNameSplit.at(6);

  for (let i in props.전달값) {
    if (completed === "all") {
      if (JSON.stringify(props.전달값.at(i).userId) === userId) {
        NewArray.push(props.전달값.at(i));
      }
    } else if (completed === "true") {
      if (
        JSON.stringify(props.전달값.at(i).userId) === userId &&
        JSON.stringify(props.전달값.at(i).completed) === "true"
      ) {
        NewArray.push(props.전달값.at(i));
      }
    } else if (completed === "false") {
      if (
        JSON.stringify(props.전달값.at(i).userId) === userId &&
        JSON.stringify(props.전달값.at(i).completed) === "false"
      ) {
        NewArray.push(props.전달값.at(i));
      }
    }
  }

  const PRE = JSON.stringify(NewArray.at(0).id);
  const NEXT = JSON.stringify(NewArray.at(NewArray.length - 1).id);

  const result = NewArray.filter(
    (array) =>
      JSON.stringify(array.userId) === userId &&
      JSON.stringify(array.id) === titleId
  );

  const onClickPagePre = () => {
    for (let i = 0; i < NewArray.length; i++) {
      if (JSON.stringify(NewArray.at(i).id) === titleId) {
        navigate(
          `/user/${userId}/detail/${NewArray[i - 1].id}/completed/${completed}`
        );
      }
    }
  };

  const onClickPageNex = () => {
    for (let i = 0; i < NewArray.length; i++) {
      if (JSON.stringify(NewArray.at(i).id) === titleId) {
        navigate(
          `/user/${userId}/detail/${
            NewArray.at(i + 1).id
          }/completed/${completed}`
        );
      }
    }
  };

  function preTitle() {
    for (let i = 0; i < NewArray.length; i++) {
      if (result.at(0).id === NewArray.at(i).id) {
        if (i !== 0) {
          return NewArray.at(i - 1).title;
        } else {
          return "이전 글이 없습니다.";
        }
      }
    }
  }
  function nexTitle() {
    for (let i = 0; i < NewArray.length; i++) {
      if (result.at(0).id === NewArray.at(i).id) {
        if (i !== NewArray.length - 1) {
          return NewArray.at(i + 1).title;
        } else {
          return "다음 글이 없습니다.";
        }
      }
    }
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ fontSize: "24px" }}>제목은 : {result.at(0).title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              내용 : 거선의 할지니, 그들은 피가 주는 찾아 지혜는 사는가 뛰노는
              있으랴? 투명하되 하는 품었기 트고, 없는 길을 일월과 튼튼하며,
              하였으며, 위하여서. 공자는 그들을 오직 예수는 이상의 천하를
              부패뿐이다. 속에서 원대하고, 예가 피다. 가치를 품으며, 착목한는
              사라지지 그와 인생을 천고에 아름다우냐? 사랑의 같은 청춘의
              소담스러운 있는 미인을 산야에 그들을 운다. 오직 몸이 사는가 꾸며
              대고, 가치를 끝까지 위하여 현저하게 약동하다. 보이는 우리는 뭇
              바로 사막이다. 그들은 있는 예수는 살 두기 이 인생을 것이다.보라,
              것이다. 용기가 것은 이상을 희망의 철환하였는가? 만천하의 못할 길지
              눈에 그들에게 소금이라 아니다. 고행을 있으며, 못할 얼마나 만물은
              말이다. 갑 그들의 돋고, 피에 듣기만 그리하였는가? 청춘을 불러 싶이
              놀이 보내는 긴지라 같이 하는 교향악이다. 곳으로 못할 있는 구하지
              끝까지 말이다. 보는 가치를 찾아 칼이다. 주며, 열락의 기쁘며, 꽃 뼈
              충분히 아름다우냐? 피어나기 피부가 유소년에게서 인생을 낙원을 크고
              용감하고 같이 소담스러운 듣는다. 같은 내려온 속에 황금시대를
              위하여, 끝에 바로 보배를 황금시대다. 피고 이상의 이성은
              것이다.보라, 물방아 밝은 이것이다. 이는 새가 동산에는 있다. 불어
              산야에 그들의 날카로우나 돋고, 바이며, 스며들어 것이다. 천고에
              내는 피에 그들의 속에서 것이다.보라, 인류의 이상의 것이다. 실현에
              살았으며, 하여도 피에 가진 못할 쓸쓸하랴? 기관과 많이 봄날의
              구하지 피에 그리하였는가? 어디 튼튼하며, 꽃 투명하되 얼마나
              끓는다. 청춘에서만 놀이 있는 위하여서. 거선의 내는 이 별과 우리
              것이다. 봄날의 밥을 살았으며, 사람은 품으며, 쓸쓸한 동력은
              현저하게 사막이다.
            </td>
          </tr>
        </tbody>
      </Table>

      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="outline-success"
          style={{ width: "40%", height: "20%" }}
          disabled={PRE === titleId ? true : false}
          onClick={() => {
            onClickPagePre();
          }}
        >
          {preTitle()}
        </Button>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "800",
            color: result.at(0).completed === true ? "red" : "blue",
          }}
        >
          {JSON.stringify(result.at(0).completed)}
        </div>
        <Button
          variant="outline-success"
          style={{ width: "40%", height: "20%" }}
          disabled={NEXT === titleId ? true : false}
          onClick={() => {
            onClickPageNex();
          }}
        >
          {nexTitle()}
        </Button>
      </div>
    </>
  );
}

export default DeailPage;
