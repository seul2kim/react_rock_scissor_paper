import React from 'react'

//컴포넌트는 항상 대문자로 시작
// 위아래 spell 주의

const Box = (props) => {
    //값이 제대로 넘어오는지 확인
    console.log(props); //오오오옹 이미지만 보여주면 된다. 

  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img src={props.item && props.item.img} className="item-img"/>  
      <h2>WIN</h2>
    </div>
  );
};

export default Box
