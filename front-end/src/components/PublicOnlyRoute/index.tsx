import { useSelector } from "react-redux"
import { selectIsLoadingUser, selectIsUserLoggedIn } from "../../store/slice/userSlice"
import { Loading } from "../Loading"

type Props ={
    children: React.ReactNode
}

export function PublicOnlyRoute ({ children}: Props){
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
  const isLoadingUser = useSelector(selectIsLoadingUser)
  if (isLoadingUser){
      return
  }
  return <Loading />
    return children
}