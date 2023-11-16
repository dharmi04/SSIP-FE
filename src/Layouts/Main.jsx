import React from "react"
import { Outlet } from "react-router"
import { Nav } from "../components/Nav.jsx"

/**
 * This main layout is for our Main Page. This include all our pages that customer can see i.e., all the product pages
 */

export const Main = () => {
  return (
    <div>
      <Outlet />
      <Nav />
    </div>
  )
}
