import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage/HomePage'
import App from '../App'
import PATH from './routerPath/publicPath'
import Header from '../components/Header/Header'
import RolePage from '../pages/RolePage/RolePage'
import SignUpDriver from '../pages/SignUpDriver/SignUpDriver'
import SignUpOwner from '../pages/SignUpOwner/SignUpOwner'
import SignUpUser from '../pages/SignUpUser/SignUpUser'
import DriverPage from '../pages/DriverPage/DriverPage'
import OwnerPage from '../pages/OwnerPage/OwnerPage'

const AppRouter = () => (
  <Routes>
    <Route path='/:page' element={<RolePage />}></Route>
    <Route exact path='/' element={<RolePage />}></Route>
    
    <Route exact path="*" element={<ErrorPage code={404} />} />
    <Route exact path={PATH.HOME_PAGE_PATH_DYNAMIC} element={<HomePage />} />

    <Route exact path={PATH.ROLE_PICK_PATH} element={<RolePage />} />
    <Route exact path={PATH.SIGN_UP_DRIVER} element={<SignUpDriver />} />
    <Route exact path={PATH.SIGN_UP_OWNER} element={<SignUpOwner />} />
    <Route exact path={PATH.SIGN_UP_USER} element={<SignUpUser />} />
    
    <Route exact path={PATH.DRIVER_PATH} element={<DriverPage />} />
    <Route exact path={PATH.DRIVER_PATH_DYNAMIC} element={<DriverPage />} />

          {/* for production deployment */}
    <Route exact path={`${PATH.OWNER_DYNAMIC_PATH}/*`} element={<OwnerPage />} />
        {/* for production deployment */}
    <Route path="/index.html" element={<Navigate to={PATH.HOME_PAGE_PATH} />} />
  </Routes>
)

export default AppRouter
