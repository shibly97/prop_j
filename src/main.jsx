import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DOMPurify from 'dompurify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
)

function MyComponent({ userContent }) {
  const sanitizedContent = DOMPurify.sanitize(userContent);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
}
