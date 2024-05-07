import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const main = () => {
  return (
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  )
}

export default main