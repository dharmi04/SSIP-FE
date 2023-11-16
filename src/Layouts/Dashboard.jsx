import React from "react"
import { Outlet } from "react-router"
import { Nav } from "../components/Dashboard/Nav"

/**
 * This main layout is for our Main Page. This include all our pages that customer can see i.e., all the product pages
 */

export const Dashboard = () => {
  return (
    <div className="bg-secondary overflow-hidden">
      <div className="pb-10 pt-5">
        <Outlet />
      </div>
      <Nav />
    </div>
  )
}
