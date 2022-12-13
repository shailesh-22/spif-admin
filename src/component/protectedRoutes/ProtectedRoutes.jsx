import React from 'react'
import { Route , Redirect } from 'react-router-dom'

const ProtectedRoutes = ({auth, component: component, }) => {
  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes