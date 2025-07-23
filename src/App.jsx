import './App.css'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Home2 from './Components/Home2/Home2'
import Home3 from './Components/Home3/Home3'
import Home4 from './Components/Home4/Home4'

function App() {
 

  return (
    <>
    <div id="main">
    <Header/>
     <Home/>   
     <Home2/>
     <Home3/>
     <Home4/>
     <Contact/>
    </div>
    </>
  )
}

export default App
// npm i gsap 
// npm i @gsap/react