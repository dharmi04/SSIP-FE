import React from "react"
import { AiOutlineHome } from "react-icons/ai"
import { BsCartPlus } from "react-icons/bs"
import { VscAccount } from "react-icons/vsc"
import { GiHamburgerMenu } from "react-icons/gi"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"

export const Nav = () => {
  const location = useLocation()

  const isHome = location.pathname === "/home"
  const isCart = location.pathname === "/cart"
  const isProfile = location.pathname === "/profile"
  const isMore = location.pathname === "/dashboard"

  return (
    <>
      <div className="bg-white flex justify-between px-4 pt-2 pb-1 items-center fixed w-full bottom-0 text-primary border-t-[rgb(73,75,71)]/[0.5] border-[1px]">
        <div className="flex flex-col items-center gap-[1px] cursor-pointer">
          <AiOutlineHome className={`text-[22px] ${isHome && "text-accent"}`} />
          <h1 className={`${isHome && "text-accent font-medium"}`}>home</h1>
        </div>

        <div className="flex flex-col items-center gap-[1px] cursor-pointer">
          <BsCartPlus className={`text-[22px] ${isCart && "text-accent"}`} />
          <h1 className={`${isCart && "text-accent font-medium"}`}>cart</h1>
        </div>

        <div className="flex flex-col items-center gap-[1px] cursor-pointer">
          <VscAccount className={`text-[22px] ${isProfile && "text-accent"}`} />
          <h1 className={`${isProfile && "text-accent font-medium"}`}>
            profile
          </h1>
        </div>

        <Link to="/dashboard/analytics">
          <div className="flex flex-col items-center gap-[1px] cursor-pointer">
            <GiHamburgerMenu
              className={`text-[22px] ${isMore && "text-accent"}`}
            />
            <h1 className={`${isMore && "text-accent font-medium"}`}>more</h1>
          </div>
        </Link>
      </div>
    </>
  )
}
