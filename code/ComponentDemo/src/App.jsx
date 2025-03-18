 import Headers from './components/Header'
 import Footer from "./components/Footer";
 import Movie from './components/Movie';
import './App.css'

 function App ()
 {
    let arr = [1,2,3,4,5,6];

  return (
    <>
        <Headers />
        <div className='movies'>
           { 
            arr.map( (v)=> (
            <Movie/>
            ))   }
        </div>
        <Footer/>
    </>
  )
 }

 export default App