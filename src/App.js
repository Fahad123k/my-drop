import './App.css';
// import images
// import portrait from 'https://cdn-icons-png.flaticon.com/512/64/64572.png';
import portrait from '../src/images/user3.png';
import list from '../src/images/list.png';
import user from '../src/images/user.png';
import edit from '../src/images/edit.png';
import inbox from '../src/images/envelope.png';
import settings from '../src/images/settings.png'
import help from '../src/images/question.png'
import logout from '../src/images/log-out.png'

// import HOOKS
import React, { useState,useEffect,useRef } from 'react';


function App() {
  // use state hooks
  const [open, setOpen] = useState(false);


  // use ref hook
  let menuRef=useRef();
  let menuRef2=useRef();
  // useEffect functions Hooks
  useEffect(()=>{
    let handler =(e)=>{
      // if click on it self means menu coantianer it prevents from hide
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
        
      }

      // if(!menuRef2.current.contains(e.target)){
      //   console.log(menuRef2.current);
      // }
    };
    document.addEventListener("mousedown",handler);
    document.addEventListener("onMouseOver",handler);
    
    // remove event handler
    return()=>{
      document.removeEventListener("mousedown",handler)
      document.removeEventListener("onMouseOver",handler)
    }
  });
  return (
    <div className="App" >


      <div className="menu-container" ref={menuRef}>
        <div className="menu-trigger" onClick={() => { setOpen(!open) }} onMouseOver={() => { setOpen(!open) }}>
          <img src={list} />
        </div>
        <div className={`dropdown-menu ${open ? 'active' : 'inactive '}`} >
          <h3>The Coder<br /><span>React Developer</span></h3>
          <ul>
            <DropdownItem img={user} text={"My Profile"} />
            <DropdownItem img={edit} text={"Edit Profile"} />
            <DropdownItem img={inbox} text={"Messages"} />
            <DropdownItem img={settings} text={"Settings"} />
            <DropdownItem img={help} text={"Help"} />
            <DropdownItem img={logout} text={"Logout"} />

          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img>
      <a >{props.text}</a>
    </li>
  )
}
export default App;
