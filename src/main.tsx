import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// import ThemeProvider from material-tailwind
import { ThemeProvider } from '@material-tailwind/react'
// import BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom'
// import store from redux
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store/index.ts'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
