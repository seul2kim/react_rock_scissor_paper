import React from "react";

// //컴포넌트는 항상 대문자로 시작
// // 위아래 spell 주의

const Box = (props) => {
//     //값이 제대로 넘어오는지 확인
//     console.log(props); //오오오옹 이미지만 보여주면 된다. 
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  if (props.title === "Computer") {
    console.log("computer", result);
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2 data-testid="item-name">{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;