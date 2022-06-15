import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLoadingUser, selectIsUserLoggedIn } from "../../store/slice/userSlice"
import { Loading } from "../Loading"

type Props ={
    children: JSX.Element
}

export function PublicOnlyRoute ({ children}: Props){
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
  const isLoadingUser = useSelector(selectIsLoadingUser)

  if (isLoadingUser){
    return <Loading />
  }
  if (isUserLoggedIn) {
      return <Navigate to ='/nova-corrida' />
  }
  
    return children
}