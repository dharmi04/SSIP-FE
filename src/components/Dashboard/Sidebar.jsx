import React, { useEffect, useState } from "react"
import { RxCross1 } from "react-icons/rx"
import { MdOutlineInventory2 } from "react-icons/md"
import { BsCartPlus } from "react-icons/bs"
import { MdAccountTree } from "react-icons/md"
import { Link } from "react-router-dom"
import { useAuthStore } from "../../store/authStore"
import { useNavigate } from "react-router-dom"

export const Sidebar = ({ isSideBarOpen, setIsSideBarOpen, toggleSidebar }) => {
  const navigate = useNavigate()

  const handleLogout = useAuthStore((state) => state.handleLogout)
  const role = useAuthStore((state) => state.role)
  const accessToken = useAuthStore((state) => state.accessToken)

  console.log(role)
  console.log(accessToken)

  // If user is not logged in, then redirect to login page
  useEffect(() => {
    if (!accessToken || !role) {
      navigate("/auth/get-started/login")
    }
  }, [accessToken, role])

  // If sidebar is open, then disable scrolling
  if (isSideBarOpen) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <div
        className={`bg-primary fixed bottom-0 h-[40%] w-[96vw]
        ${
          isSideBarOpen ? "left-0" : "-left-[96vw]"
        }  transition-all duration-300 ease-linear
      `}
      >
        <div className="mt-5 mr-9 flex justify-end cursor-pointer ">
          <RxCross1
            className="text-2xl text-secondary"
            onClick={toggleSidebar}
          />
        </div>

        {/* // TODO: Give Routes */}

        <div className="text-white ml-12 space-y-4">
          <Link to="/artisians/inventory">
            <div className="flex gap-3 items-center cursor-pointer">
              <MdOutlineInventory2 className="text-2xl" />
              <h1 className="text-2xl">View Inventory</h1>
            </div>
          </Link>
          <div className="flex gap-3 items-center cursor-pointer">
            <BsCartPlus className="text-2xl" />
            <h1 className="text-2xl">View Orders</h1>
          </div>
          <div>
            <Link to="/account" className="">
              <div className="flex gap-3 items-center cursor-pointer">
                <MdAccountTree className="text-2xl" />
                <h1 className="text-2xl">Account</h1>
              </div>
            </Link>
          </div>
          <div>
            <button
              className="bg-accent text-white px-5 pt-1 pb-2 rounded-md text-xl"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
