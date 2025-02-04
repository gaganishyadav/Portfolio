import { useState ,useEffect} from "react"
import "./app.css"

const Header = () => {
  return(
    <div>
      <div className="header">
        <p id='name'>Gaganish</p>
      </div>
    </div>
  )
}

const Buttons = () => {
  const submitting = (event) => {
    event.preventDefault()
    console.log('submitted')
    alert('sure')
  }

  const notify = (option) => {
    if (option===1) {
      setTimeout(() => {
        document.getElementById('notiftext').textContent='Redirecting to Github!'
        document.getElementById("notification").style.visibility='visible'
        document.getElementById("root").style.filter='blur(5px) brightness(0.95)'
        }, 700)
      setTimeout(() => {
        window.location.href = "https://www.github.com/gaganishyadav"
      }, 1500)
    }
    else if(option===2) {
      setTimeout(() => {
        document.getElementById('notiftext').textContent='Redirecting to LinkedIn!'
        document.getElementById("notification").style.visibility='visible'
        document.getElementById("root").style.filter='blur(5px) brightness(0.95)'
        }, 700)
      setTimeout(() => {
        window.location.href = "https://www.linkedin.com/in/gaganishyadav"
      }, 1500)
    }
    else if(option===3){
      document.getElementById("root").style.filter='blur(5px)'
      let form = document.createElement("form");
      form.setAttribute("onSubmit", ()=>submitting);
      let name = document.createElement("input");
      name.setAttribute("type", "text");
      name.setAttribute("name", "Name");
      let mail = document.createElement("input");
      mail.setAttribute("type", "email");
      mail.setAttribute("name", "Email");
      let submit = document.createElement("input");
      submit.setAttribute("type", "submit");
      submit.setAttribute("value", "Submit");
      form.appendChild(name)
      form.appendChild(mail)
      form.appendChild(submit)
      document.getElementById('contact').appendChild(form)
    }
  }
  return(
    <div className="buttons">
      <div className="button">
        <button className="a" onClick={()=>notify(1)}>Git</button>
        <button className="b" onClick={()=>notify(1)}>hub</button>
      </div>
      <div className="button">
        <button className="a" onClick={()=>notify(2)}>Link</button>
        <button className="b" onClick={()=>notify(2)}>edin</button>
      </div>
      <div className="button">
        <button className="a" onClick={()=>notify(3)}>Conta</button>
        <button className="b" onClick={()=>notify(3)}>ct Me</button>
      </div>  
    </div>
)}

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
      <Buttons/>
      <Ender />
    </div>
  )
}

export default App