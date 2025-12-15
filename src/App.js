function App()
{
  if(true)
  {
     var v=100
     let l=200
     const c=300
     v++;
     l++;
     console.log("Let:"+l);
     
     console.log("const:"+c);
  }

     return(
      <>
      <h1> variable: global:{v}</h1> 
      <h1>does not work let and const: because local</h1>
      </>
     )
}
export default App




/*function App()
{
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
    </>)
  
}
export default App
/*import myimg from'./image/one.jpg'
function app()
{
  return(<>
  <h2>Image Demo using path as expression</h2>
  <img src={myimg} width="500" height="auto" alt='path is wrong'></img>
  </>)
}
export default app
/*function app()
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
/*function app(){
  // javascript learned code 
  var  a=10
  var  b=20
  var c="kowsalya arulmozhim"


  return(<>
  <h1>Total:{a+b}</h1>
  <marquee bgcolor='yellow'><font size='7'>{c}</font></marquee>
  </>)
}
export default app 


/*import React from "react"

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
class App extends Parent
{
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
/*import logo from './logo.svg';
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

export default App;
*/