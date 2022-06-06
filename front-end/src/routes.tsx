import {Route, Routes as RDRoutes} from "react-router-dom"
import { PublicOnlyRoute } from "./components/PublicOnlyRoute"
import { HomeView } from "./views/home"
import { NewRunView } from "./views/NewRun"
import { NotFoundView } from "./views/NotFound"
import { RegisterView } from "./views/Register"
export function Routes () {
    return (
      <RDRoutes>
          <Route path='/' element={<HomeView />} />
          <Route
           path='/cadastro'
            element={
              <PublicOnlyRoute>
            <RegisterView />
            </PublicOnlyRoute>
            } />
          <Route path='/nova-corrida' element={<NewRunView/>}/>
          <Route path='*' element={<NotFoundView/>} />
          

      </RDRoutes>  
    )
}