import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './redux/store.js'
import { ThemeProvider } from './context/ThemeContext.jsx'

// Bootstrap - installed and used across the app for layout & components
import 'bootstrap/dist/css/bootstrap.min.css'

// CSS Stylesheet approach - global styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
