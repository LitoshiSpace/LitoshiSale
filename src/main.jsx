//  Dependencies
// ===========================================================

import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './core/Router'


//  Middlewares
// ===========================================================

import { Provider } from 'react-redux'
import { store } from './stores/store'
//import './services/i18n'


//  Styles
// ===========================================================

import './styles/Global.css'


//  Core
// ===========================================================

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <React.Suspense fallback="...loading">
          <Router />
        </React.Suspense>
      </Provider>
    </React.StrictMode>
  )