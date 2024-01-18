import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contacts, { loader as contactsLoader, action as newContactAction} from './features/contact-list/Contacts.jsx'
import ErrorPage from './features/contact-list/screens/ErrorPage.jsx'
import Contact, {loader as contactLoader, action as favoriteContactAction} from './features/contact-list/screens/Contact.jsx'
import EditContact, {action as editContactAction} from './features/contact-list/screens/Edit.jsx'
import {action as destroyContactAction } from './features/contact-list/screens/Destroy.jsx';
import Index from './features/contact-list/screens/Index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Contacts/>,
    errorElement: <ErrorPage/>,
    loader: contactsLoader,
    action: newContactAction,
    children: [
      {
        index: true,
        element: <Index/>
      },
      {
        path: 'contacts/:contactId',
        element: <Contact/>,
        loader: contactLoader,
        action: favoriteContactAction,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact/>,
        loader: contactLoader,
        action: editContactAction
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyContactAction
      }
    ]  
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
