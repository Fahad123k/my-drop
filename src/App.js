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
import React, { useState, useEffect, useRef,state } from 'react';


function App() {
  // use state hooks
  const [open, setOpen] = useState(false);
   
   const  dropListArry=[
      {
        "id": 1,
        "name": "List",
        "image": list,
      },
      {
        "id": 2,
        "name": "User",
        "image": user,
      },
      {
        "id": 3,
        "name": "Edit",
        "image": edit,
      },
      {
        "id": 4,
        "name": "Inbox",
        "image": inbox,
      },
      {
        "id": 5,
        "name": "Settings",
        "image": settings,
      },
      {
        "id": 6,
        "name": "Help",
        "image": help,
      },
      {
        "id": 7,
        "name": "Logout",
        "image": logout,
      },

    ];
  
  // list items
 
    const listTobeRendered = dropListArry.map((items) => (
      <li className="dropdownItem">
        <img src={items.image}></img>
        <a >{items.name}</a>
      </li>
    ));

  // use ref hook
  let menuRef = useRef();
  // useEffect functions Hooks
  useEffect(() => {
    let handler = (e) => {
      // if click on it self means menu coantianer it prevents from hide
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);

      }

      // if(!menuRef2.current.contains(e.target)){
      //   console.log(menuRef2.current);
      // }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("onMouseOver", handler);

    // remove event handler
    return () => {
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("onMouseOver", handler)
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

              {listTobeRendered}
              
            {/* <DropdownItem img={user} text={"My Profile"} />
            <DropdownItem img={edit} text={"Edit Profile"} />
            <DropdownItem img={inbox} text={"Messages"} />
            <DropdownItem img={settings} text={"Settings"} />
            <DropdownItem img={help} text={"Help"} />
            <DropdownItem img={logout} text={"Logout"} /> */}

          </ul>
        </div>
      </div>
    </div>
  );
}

// function DropdownItem(props) {
//   return (
//     <li className="dropdownItem">
//       <img src={props.img}></img>
//       <a >{props.text}</a>
//     </li>
//   )
// }
export default App;
