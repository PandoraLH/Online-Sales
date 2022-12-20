import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage/HomePage'
<<<<<<< HEAD
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PickRolePage from '../pages/PickRolePage/PickRolePage'
=======
>>>>>>> fixcolor
import App from '../App'
import PATH from './routerPath/publicPath'
import Header from '../components/Header/Header'
import RolePage from '../pages/RolePage/RolePage'
import SignUpDriver from '../pages/SignUpDriver/SignUpDriver'
import SignUpOwner from '../pages/SignUpOwner/SignUpOwner'
import SignUpUser from '../pages/SignUpUser/SignUpUser'


const AppRouter = () => (
  <Routes>
    <Route path='/:page' element={<HomePage />}></Route>
    <Route exact path='/' element={<HomePage />}></Route>
    
    <Route exact path="*" element={<ErrorPage code={404} />} />
    <Route exact path={PATH.HOME_PAGE_PATH} element={<HomePage />} />
<<<<<<< HEAD
    <Route exact path={PATH.SIGN_UP_PATH} element={<SignUpPage />} />
    <Route exact path={PATH.LOGIN_PATH} element={<LoginPage />} />
    <Route exact path={PATH.PICKROLE_PATH} element={<PickRolePage/>} />
=======

    <Route exact path={PATH.ROLE_PICK_PATH} element={<RolePage />} />
    <Route exact path={PATH.SIGN_UP_DRIVER} element={<SignUpDriver />} />
    <Route exact path={PATH.SIGN_UP_OWNER} element={<SignUpOwner />} />
    <Route exact path={PATH.SIGN_UP_USER} element={<SignUpUser />} />

>>>>>>> fixcolor
        {/* for production deployment */}
    <Route path="/index.html" element={<Navigate to={PATH.HOME_PAGE_PATH} />} />
  </Routes>
)

export default AppRouter
