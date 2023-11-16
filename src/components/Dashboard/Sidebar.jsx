import React, { useState } from "react"
import { RxCross1 } from "react-icons/rx"
import { MdOutlineInventory2 } from "react-icons/md"
import { BsCartPlus } from "react-icons/bs"

export const Sidebar = ({ isSideBarOpen, setIsSideBarOpen, toggleSidebar }) => {
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
          <div className="flex gap-3 items-center cursor-pointer">
            <MdOutlineInventory2 className="text-2xl" />
            <h1 className="text-2xl">View Inventory</h1>
          </div>
          <div className="flex gap-3 items-center cursor-pointer">
            <BsCartPlus className="text-2xl" />
            <h1 className="text-2xl">View Orders</h1>
          </div>
        </div>
      </div>
    </>
  )
}
