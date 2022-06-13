import {Route, Routes as RDRoutes} from "react-router-dom"
import { PrivateRoute } from "./components/PrivateRoute"
import { PublicOnlyRoute } from "./components/PublicOnlyRoute"
import { HomeView } from "./views/home"
import { LoginView } from "./views/Login"
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
        }
      />
      <Route
        path='/login'
        element={
          <PublicOnlyRoute>
            <LoginView />
          </PublicOnlyRoute>
        }
      />
      <Route
        path='/nova-corrida'
        element={
          <PrivateRoute>
            <NewRunView />
            </PrivateRoute>
        }
      />
      <Route path='*' element={<NotFoundView />} />
    </RDRoutes>
  )
}
