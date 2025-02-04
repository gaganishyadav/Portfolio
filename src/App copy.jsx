import "./app.css"
import banner from "./imgs/headbanner.png"

const Header = () => {
  return(
    <div className="header">
      <div className="item1">
        <button>Github</button>
        <button>LinkedIn</button>
        <button>Contact</button>
      </div>
      <div className="item2"> <img src = {banner}/> </div>
    </div>
  )
}

const Ender = () => {
  return(
    <div>
      End block
    </div>
  )
}

const App = () => {
  return(
    <div>
      <Header/>
      <Ender />
    </div>
  )
}

export default App