import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contacts, { loader as contactsLoader, action as newContactAction} from './features/contact-list/Contacts.jsx'
import ErrorPage from './features/contact-list/screens/ErrorPage.jsx'
import Contact from './features/contact-list/screens/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Contacts/>,
    errorElement: <ErrorPage/>,
    loader: contactsLoader,
    action: newContactAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact/>
      }
    ]  
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
