import React, { useState } from "react"
import { AiOutlineHome } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsGraphUp } from "react-icons/bs"
import { IoMdAddCircleOutline } from "react-icons/io"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { Transition } from "@headlessui/react"

export const Nav = () => {
  const location = useLocation()
  //   console.log(location.pathname)

  const isHome = location.pathname === "/home"
  const isAnalytics = location.pathname === "/dashboard/analytics"
  const isAddProduct = location.pathname === "/dashboard/add/product"

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  return (
    <>
      <div className="bg-white flex justify-between px-4 pt-2 pb-1 items-center fixed w-full bottom-0 text-primary border-t-[rgb(73,75,71)]/[0.5] border-[1px] z-20">
        <Link to="/home">
          <div className="flex flex-col items-center gap-[1px] cursor-pointer">
            <AiOutlineHome
              className={`text-[22px] ${isHome && "text-accent"}`}
            />
            <h1 className={`${isHome && "text-accent font-medium"}`}>home</h1>
          </div>
        </Link>

        <Link to="/dashboard/analytics">
          <div className="flex flex-col items-center gap-[1px] cursor-pointer">
            <BsGraphUp
              className={`text-[22px] ${isAnalytics && "text-accent"}`}
            />
            <h1 className={`${isAnalytics && "text-accent font-medium"}`}>
              analytics
            </h1>
          </div>
        </Link>

        <Link to="/artisian/addproduct">
          <div className="flex flex-col items-center gap-[1px] cursor-pointer">
            <IoMdAddCircleOutline
              className={`text-[22px] ${isAddProduct && "text-accent"}`}
            />
            <h1 className={`${isAddProduct && "text-accent font-medium"}`}>
              add product
            </h1>
          </div>
        </Link>

        <div className="relative">
          <div
            className="flex flex-col items-center gap-[1px] cursor-pointer"
            onClick={toggleSidebar}
          >
            <GiHamburgerMenu className={`text-[22px] `} />
            <h1>more</h1>
          </div>
        </div>
      </div>

      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        toggleSidebar={toggleSidebar}
      />
    </>
  )
}
