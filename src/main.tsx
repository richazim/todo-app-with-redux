import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import { Provider as ReduxToolkitProvider } from 'react-redux'
import store from './lib/redux-toolkit/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxToolkitProvider store={store}>
      <App />
    </ReduxToolkitProvider>
  </StrictMode>,
)
