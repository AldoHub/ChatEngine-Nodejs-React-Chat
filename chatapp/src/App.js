import { useState } from 'react';
import './App.css';


//import the pages
import Auth from "./components/Auth";
import Chat from "./components/Chat";





const App = () => {
  //user data
  const [user, setUser] = useState(null);

  //render the component according the user status
  if(!user){
    //onAuth callback will set the user state and render the Chats page (and pass the user as prop)
    return <Auth onAuth={(user) => setUser(user)}></Auth>
  }else{
    return <Chat user={user}></Chat>
  }

 
}

export default App;
