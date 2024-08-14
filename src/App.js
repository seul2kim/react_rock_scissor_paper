import './App.css';
import Box from './component/Box';
import { useState } from 'react';

//1. 박스2개 그리기
//박스 ( 타이틀, 사진, 결과값 )
//2. 가위,바위,보 버튼이 존재한다.
//3. 버튼을 클릭하게 되면 클릭한 값이 박스에 보인다. 
//4. 컴퓨터는 랜덤하게 아이템이 선택된다. 
//5. 3,4번의 결과로 누가 이겼는지 승패를 따진다.
//6. 디테일하게 들어가는 작업으로는 승패에 따라서 테두리 색상이 변경된다. ( 이기면 - 초록 ,지면 - 빨강 , 비기면 -검정색 )

const choice = {
  rock:{
    name:"Rock",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgNCOxgA9ud80kk_MVKq-XK01d_DT2r3BxA&s"},
  scissors:{
    name:"Scissor",
    img:"data:image/png;base64,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"},
  paper:{
    name:"Paper",
    img:"https://img.freepik.com/premium-vector/sheet-paper-illustration-vector_976369-1479.jpg"}
}

function App() {
  const [userSelect,setUserSelect] = useState(null);
  const [computerSelect,setComputerSelect] = useState(null); //맨처음에는 똑같이 Null이다. 
  const[result,setResult] = useState("");
  //내가 선택한 값으로 변경해줘야하니까 
  const play=(userChoice)=>{
    //userSelect = choice[userChoice]; //이렇게 해도 바뀌지 않는다고!! 변수는 초기화 된다구!! 귀찮아도 state를 바꿔주는함수 set 사용해야한다
    setUserSelect(choice[userChoice]); //이렇게 작성해야 맞는다. 
    console.log("선택됨",userChoice);

    //컴퓨터가 랜덤하게 값을 선택하는 함수 
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice)); //판단하는 함수 : judgement()   각각 사용자가 선택한값, 컴퓨터가 선택한값 
  };
  
 

  const randomChoice=()=>{ //random 함수는 0-1 사이에 있는 랜덤한 함수를 가지고 오는것이다. 
    let itemArray = Object.keys(choice);  //****object.keys 는 객체의 key값만 뽑아서 배열로 만들어주는 함수이다. 
    console.log("item array",itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);  //math.floor은 소수점 아래는 버리는 함수이다. 
    console.log("랜덤값 : ",randomItem);
    let fianl = itemArray[randomItem];
    return choice[fianl];

  };
  const judgement = (user,computer)=>{
    console.log("user",user,"computer",computer); 
    
    // object안에서도 name끼리 비교해야하는거니까
    // if(user.name === computer.name){
    //   return "비겼습니다."
    // }else if(user.name=="Rock"){
    //   if(computer === "scissors"){
    //     return "이겼습니다."
    //   }else{
    //     return "졌습니다."
    //   }
    // }

    //삼항연산식으로 표현하면
    if(user.name === computer.name){
      return "tie";
    }else if(user.name === "Rock")
      return computer.name === "Scissors" ? "win":"lose";
    else if(user.name === "Scissors") 
      return computer.name === "Paper" ? "win":"lose";
    else if(user.name === "Paper") 
      return computer.name === "Rock" ? "win":"lose";
  };

  return(
    //컴포넌트는 반드시 s하나를 return 해야하니까 하나로 감싸야지 에러가 발생하지 않는다.
    <div>
  <div className='main'>
<Box title="you" item={userSelect} result={result}/>
<Box title="computer" item={computerSelect} result={result}/>
  </div>

  
  <div className='main'>
    <button onClick={()=>play("scissors")}>가위</button>
    <button onClick={()=>play("rock")}>바위</button>
    <button onClick={()=>play("paper")}>보</button>
  </div>
  </div>
  );
}

export default App;
