import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.scss'
import store from './redux/store'
import AppRouter from './routers/AppRouter'
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback="loading">
          <Header />
          <div className='App tw-mt-20'>
            <AppRouter />
          </div>
        </Suspense>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
