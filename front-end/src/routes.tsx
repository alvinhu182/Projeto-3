import {Route, Routes as RDRoutes} from "react-router-dom"
import { HomeView } from "./views/home"
import { NotFoundView } from "./views/NotFound"
import { RegisterView } from "./views/Register"
export function Routes () {
    return (
      <RDRoutes>
          <Route path='/' element={<HomeView />} />
          <Route path='*' element={<NotFoundView/>} />
          <Route path='/cadastro' element={<RegisterView/>} />

      </RDRoutes>  
    )
}