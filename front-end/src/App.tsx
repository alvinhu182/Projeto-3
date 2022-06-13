import { Button, Container } from "react-bootstrap";
import Title from "react-bootstrap"
import { Routes } from "./routes";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";
import { useDispatch,  } from "react-redux";
import { deleteUser,  updateUser } from "./store/slice/userSlice";
import { getUser } from "./services/getUser";

function App() {
  const dispatch = useDispatch()
  
  useEffect(() =>{
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
       const user =  await getUser(currentUser.uid)
        dispatch(updateUser(user))

      } else {
        dispatch(deleteUser())

      }
    })
    
  },[dispatch])
  return (
  <Routes />
   
  );
}

export default App;
