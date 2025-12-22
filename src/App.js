import parse from 'html-react-parser'
function App(props)
{
  var ans=""
  for (var s in props.data)
  {
    ans=ans+`<li>${s} = ${props.data[s]}</li>`
    console.log(s)
  }
  return(
    <>
    {parse("<ol>"+ans+"</ol>")}
    </>
  )
}
export default App


/*import React from 'react';
import parse from 'html-react-parser'
class App extends React.Component
{
  constructor(props)
  {
    var ans=""
    super(props)
    for(var s in props.data)
    { 
      ans=ans+`<li>${s} = ${props.data[s]}<br></br></li>`
      console.log(s)
    } 
    //var h="<ol>"
    this.state={
      //res: h+ans
      res:"<ol type='I'>"+ans+"</ol>"

    }
  }
  render()
  {
    return (<>
    <h1>combine react state +props</h1>
    {parse(this.state.res)}
    <div id="res"></div>
    </>
    )
  }
}
export default App


/*import React from "react"
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      srno:this.props.data.rno,
      studentname:this.props.data.sname,
      studentmark:this.props.data.mark,
      studentrank:this.props.data.rank,
      studentgrade:this.props.data.grade,
      studentlocation:this.props.data.location,
    }
  }
  render()
  {
    return(
      <>
      <h1>studentdetails:</h1>
      <h2>Student Rno:{this.state.srno}</h2>
      <h2>Student Name:{this.state.studentname}</h2>
      <h2>Student Mark:{this.state.studentmark}</h2>
      <h2>Student Rank:{this.state.studentrank}</h2>
      <h2>Student Grade:{this.state.studentgrade}</h2>
      <h2>Student Location:{this.state.studentlocation}</h2>
      

      </>
    )
  }
}
/*export default App
import React from "react";
class App extends React.Component
{
  constructor()
  {
    super()
    this.state=
    {sno:575,
     sname:"kowsalya",
     marks:[90, 89 ,97 ,87 ,90]
    }
  }
  show=()=>{
    this.setState({sname: "kowsalya Elamvaluthi" })
  }
  dis=()=>{
    this.setState({marks:[10,23,45,34,45]})
  }
  dis1=()=>{
    const newmarks=[...this.state.marks]
    newmarks[2]=99
    this.setState({marks:newmarks})
  }
render()
{
  return(<>
  <h1>This is class components</h1>
  <h2>Serial Number:{this.state.sno}</h2>
  <h2>Student Name:{this.state.sname}</h2>
  {this.state.marks.map((v,index)=><>mark:{index+1}={v}<br></br></>)}
  <button onClick={this.show}>update name</button>
  <button onClick={this.dis}>update all Mark</button>
  <button onClick={this.dis1}>update single Mark</button>
  </>)
} 
}
export default App

import { aadhar, accno, place, sname } from "./mycomponents/commonvar"
import Kowsalya from "./mycomponents/Kowsalya"
function App()
{
  return(
    <>
      <Kowsalya/>
      <h1>This is default app components</h1>
      <h2>My Name is:{sname}</h2>
      <h3>My city:{place}</h3>
      <h3>My accno:{accno}</h3>
      <h3>My aadhar:{aadhar}</h3>
    </>
  
  )
}
/*export default App
function App()
{
  var arr=[11,22,33,44,78,98,43,27,12,56,111,119,222]
  var s=0
  var ma=arr[0]

   var order=arr
   var fans=""
  return(
    <>
      <h1>React Loop map method</h1>
      <h2>old model</h2>
      {arr[0]}
      {arr[1]}
      {arr[2]}
      {arr[3]}
      <h2>New Model Map (loop)</h2>
      {arr.map((v)=><>{v}+</>)}
      <h2>New Model Map (loop)</h2>
      <ol type="I">
      {arr.map((v)=><li>{v}</li>)}
      </ol>
      <h2>Task: Sum of array</h2>
      <div style={{display:"none"}}>
      {arr.map((item)=><>{s=s+item}<br></br></>)}
      </div>
      <h3>Sum of Array:{s}</h3>

      
      <div style={{display:"none"}}>
      {arr.map((v)=><>{ma<v && <>{ma=v} </>}</>)}    
      </div>
      <h3>Max of Array:{ma}</h3>

      <h2>Ascending order</h2>
      <div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}</div>
      {order.map((item)=><>{item} + </>)}
    
      <h2>descending order</h2>
      <div style={{display:"none"}}>{order.sort((x,y)=>(y-x))}</div>
      {order.map((item)=><>{item},</>)}

      <h3>Adding element in an array</h3>
      <div style={{display:"none"}}>{order.push(999)}</div>
      {order.map((item)=><>{item},</>)}
      <br></br>
      <h3>remove last element in an array</h3>
      <div style={{display:"none"}}>{order.pop()}</div>
      <div style={{display:"none"}}>{order.pop()}</div>
      <div style={{display:"none"}}>{order.pop()}</div>      
      {order.map((item)=><>{item},</>)}

    <h2>Remove last comma or plus or any char</h2>
      <div style={{display:"none"}}>{order.map((item)=><>{fans=fans+item+","}</>)}</div>
      {fans.slice(0,-1)}  
    </>
  )
}
export default App
/*function App ()
{
  var arr=[11,22,33,44,55,66]
  return(<>
  <h2><u>spread operator</u></h2>
  <h3>index 0: {arr[0]}</h3>
  <h3>index 1: {arr[1]}</h3>
  <h3>index 4: {arr[5]}</h3>
  <h3>index 6: {arr[6]}</h3>
  </>)
}
export default App
/*function App()
{
  var arr=[11,22,33,44,55,66]
  var [v1,v2,...v3]=arr
  return(<>
  <h2><u>spread operator</u></h2>
  <h3>index 0: {v1}</h3>
  <h3>index 1: {v2}</h3>
  <h3>index 5: {v3}</h3> 
  </>)
}
export default App
/*function App()
{
  var res="pass"
  var avg=89.6
  return(
    <>
    <h2>
      {
        (res==="pass" && 
          ((avg>=85 && "Outstanding") || 
        (avg>=75 && "Excellent") ||
      (avg>=65 && "Very good") ||
    (avg>=50 && "good") ||
  "fail")) || "No grade becouse fail" }</h2></>
  )
}
 export default App
 /*function App()
 {
  var unit=410
  return(
    <>
    <center><h2>Electricity Bill Calculation</h2></center>
    <h3>{(unit<=100 && "Rs.0") || 
    (unit<=101 && unit<=125 && "Rs.50") ||
    (unit>=126 && unit<=200 && "Rs."+(unit-100)*2 ) ||
    (unit>=201 && unit<=300 && "Rs."+(200+(unit-200)*3)) ||
    (unit>=301 && unit<=400 && "Rs."+(500+(unit-300)*4)) ||
    "₹ " +(900+(unit-400)*5)}
 </h3>
    </>
  )
}
 export default App   
 /* /*function App()
 {
  var avg=45
  return(
    <>
    <h1>React Simple if else if statement </h1>
    <h2>{(avg>=85 && "OutStanding") || (avg>=75 && "Excellent") || (avg>=65 && "very good") || (avg>=50 && "good") ||"fair"}</h2>
    </>
  )
 }
 export default App
 
 
 
 
 /*function App()
 {
  let year=2025
  return(
    <>
     <h1>React simple if-else statement</h1>
     <h2>{(year%4===0 && "Leap year" )|| "Not a leap year"}</h2></>
  )
 }
export default App


  /* function APP() 
{
  let age=17
  return(
    <>
    <h1> React simple if-else Statement </h1>
    <h2>{(age>=18 && "Eligible for Vote") || "Not Eligible"}</h2>
    </>
  )
}
export default APP

function App()
{
  let num=0
  return(
    <>
    <h1>React simple if-else statement</h1>
    {num>0?"positive":num<0?"negative":"zero"}
    </>
  )
}
export default App
function App()
{
  let num=19
  return (<>
     <h1>React simple if statement</h1>
     <h2>{(num%2===0 && "even") || "odd"}</h2>
  </>)
}
export default App

function App() 
{
  var mark=40
  return(<>
       <h1>React Simple if statement</h1> 
       )

  if(true)  { }
  
  var v=100
    let l=200
    const c=300
    v++;
    l++;
    console.log("Let:"+l);
     
     console.log("const:"+c);                          

      return(
      <>
      <h1> variable: global:{v}</h1> 
      <h1>does not work let and const: because local</h1>      </>
     )
}
 export default App
{ function App() {
   let myfun=(a,b,c)=>{
     var tot=a+b+c
    document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`;
   }
  return(<>

    <h2>Arrow function without parameter</h2>
    <h3>Note: onCilck C must be caps <br></br>don't use double qutoes</h3>
    <h3>Note: in calling function must use parenthesis when  passing args</h3>
     <button onClick={()=>myfun(10,20,30)}>Click me </button>
    <div id="res"></div>
    </>)<h2>{(mark>34 && "pass")|| "fail"}</h2>
   </> )
 }
 export default App



 function App(
  
 
 export default App
 import myimg from'./image/one.jpg'
 function app()
 
   return(<>
   <h2>Image Demo using path as expression</h2>
   <img src={myimg} width="500" height="auto" alt='path is wrong'></img>
   </>)
 }
 export default app
 function app()
 {
   var a=100
   var b=200
   var c=400
   return(
     <>
     <h2>Biggest Among 2 no's using conditional or ternaray operator</h2>
     <h1>Biggest Number a or b :{a>b?a:b}</h1>
     <h3>Biggest Number a or b or c:{(a>b && a>c) ?a:(b>c?b:c)}</h3>
     </>
   )
 }
 export default app
 function app(){
    javascript learned code 
   var  a=10
   var  b=20
  var c="kowsalya arulmozhim"


   return(<>
   <h1>Total:{a+b}</h1>
   <marquee bgcolor='yellow'><font size='7'>{c}</font></marquee>
   </>)
 }
 export default App 


 import React from "react"

 class Parent extends React.Component
 {
   render()
   {
     return(<>
    <h1>This is parent Class</h1>
    <h1>This is parent Class</h1>
    <h1>This is parent Class</h1>
     <h1>This is parent Class</h1>
    
     </>)

  }
}
 class App extends Parent {
  render()
  {
     return(<>

      <Parent/>
        <h2>Welcome to React</h2>
       <h2>Hello</h2>
       <h2>Welcome</h2>
      <h2>kowsalya</h2>
        <h2>You All</h2>
        <p>Amet duis veniam exercitation aliquip eiusmod. Irure elit ex esse sunt proident sunt in. Laboris excepteur ea anim anim laborum. Adipisicing id consequat do ad consequat dolor Lorem. Labore aliqua officia ullamco cillum nisi tempor sunt ipsum cupidatat.

 Laborum aute ad magna nostrud amet reprehenderit enim voluptate aliquip esse nisi. Consectetur ullamco ut in consequat magna adipisicing sunt cupidatat commodo. Ullamco irure pariatur nisi velit esse elit. Esse velit elit aute nostrud nostrud mollit sit in aliquip Lorem id tempor reprehenderit dolore.
 -</p>
        </>)
       }
 }
 export default App
  import logo from './logo.svg';
 import './App.css';

 function App() {
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
        href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); 
}

export default App
*/
