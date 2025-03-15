// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="card">
//         <img src="image.png" alt="" />
//            <h1> Car</h1>
//            <h1>Hello World</h1>
//     </div>
//   )
// }

// export default App

import Header from "./component/Header"

function App()
{
  // it will only return one value so keep code inside container like div,section,nav...

  let name = "Raj";

  return (
    /* <>  = fragment */
    <>
      <h1>Hello </h1>
      <h1>{name}</h1>
      <Header />
      <Header />
      <Header />
      <Header />
      
    </>
    )
}
export default App

/*
    <div class="ele">
      <h1>Hello Wolrd</h1>
      <h1>Its me</h1>
    </div>   */


