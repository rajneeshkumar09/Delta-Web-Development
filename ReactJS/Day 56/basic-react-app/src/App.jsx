import './App.css'
//import the Title component from Title.jsx file in app.jsx file.
import Title from './Title.jsx';
// import {Title} from './Title.jsx';
import ProductTab from './ProductTab.jsx';

// function Title() {
//   return <h2>I am the Title!</h2>
// }

// function Description() {
//   return <h3>I am the Description!</h3>
// }

let name = "Rajneesh Kumar";
function CurlyBraces() {
  return (
    <>
      <h2>2 * 2 = {2 * 2}</h2>
      {/* In {2 * 2} template, the curly braces is used to implement the javascript logic in react js codebase. */}
    </>
  );
}

function App() {
  return (
    // <></> : This is used to prevent the process of making an extra node in DOM, is Known as React fregment.
    <>
      <h1>Hello, Mr.{name.toUpperCase()}</h1>
      {/* <h1>Hello World!</h1> */}
      <h2>This is my app component</h2>
      <p>Inside app component we have :</p>
      <Title/>
      {/* <Description/> */}
      <Title/>
      {/* <Description/> */}
      <CurlyBraces/>
      <button type="button">Click me</button>
      <ProductTab/>
    </>
  )
}

export default App
