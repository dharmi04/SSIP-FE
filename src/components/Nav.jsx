import React, { useEffect } from "react"
import { AiOutlineHome } from "react-icons/ai"
import { BsCartPlus } from "react-icons/bs"
import { VscAccount } from "react-icons/vsc"
import { GiHamburgerMenu } from "react-icons/gi"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import { useAuthStore } from "../store/authStore"

export const Nav = () => {
  // const [accssToken, setAccssToken] = React.useState("")
  // // Check is cookie is present
  // useEffect(() => {
  //   const cookie = document.cookie
  //   // console.log(document.cookie)
  //   const cookieArr = cookie.split("=")
  //   // console.log(cookieArr)
  //   if (cookieArr[0] === "accessToken") {
  //     setAccssToken(cookieArr[1])
  //   }
  // }, [])

  const accssToken = useAuthStore((state) => state.accessToken)
  const setAccssToken = useAuthStore((state) => state.setAccessToken)
  const role = useAuthStore((state) => state.role)
  const setRole = useAuthStore((state) => state.setRole)

  useEffect(() => {
    const cookie = document.cookie
    // console.log(document.cookie)
    const cookieArr = cookie.split(";")
    // console.log(cookieArr)

    if (cookieArr[0]?.split("=")[0] === "accessToken") {
      setAccssToken(cookieArr[0].split("=")[1])
    }
    if (cookieArr[1]?.split("=")[0] === "role") {
      setRole(cookieArr[1].split("=")[1])
    }
  }, [accssToken])

  const location = useLocation()

  const isHome = location.pathname === "/home"
  const isCart = location.pathname === "/cart"
  const isProfile = location.pathname === "/profile"
  const isMore = location.pathname === "/dashboard"
  const isLogin =
    location.pathname === "/auth/get-started/login" ||
    location.pathname === "/auth/login"

  return (
    <>
      <div className="bg-white flex justify-between px-4 pt-2 pb-1 items-center fixed w-full bottom-0 text-primary border-t-[rgb(73,75,71)]/[0.5] border-[1px]">
        <Link to="/home">
          <div className="flex flex-col items-center gap-[1px] cursor-pointer">
            <AiOutlineHome
              className={`text-[22px] ${isHome && "text-accent"}`}
            />
            <h1 className={`${isHome && "text-accent font-medium"}`}>home</h1>
          </div>
        </Link>
        <Link to="/cart">
          <div className="flex flex-col items-center gap-[1px] cursor-pointer">
            <BsCartPlus className={`text-[22px] ${isCart && "text-accent"}`} />
            <h1 className={`${isCart && "text-accent font-medium"}`}>cart</h1>
          </div>
        </Link>

        <Link to={accssToken ? "#" : "/auth/get-started/login"}>
          <div className="flex flex-col items-center gap-[1px] cursor-pointer">
            <VscAccount
              className={`text-[22px] ${
                isProfile || (isLogin && "text-accent")
              }`}
            />
            <h1
              className={`${
                isProfile || (isLogin && "text-accent font-medium")
              }`}
            >
              {
                // If accessToken is present then show profile else show login
                accssToken ? "profile" : "login"
              }
            </h1>
          </div>
        </Link>

        {role === "artisan" && (
          <Link to="/dashboard/analytics">
            <div className="flex flex-col items-center gap-[1px] cursor-pointer">
              <GiHamburgerMenu
                className={`text-[22px] ${isMore && "text-accent"}`}
              />
              <h1 className={`${isMore && "text-accent font-medium"}`}>more</h1>
            </div>
          </Link>
        )}

        {/* <Link to="/dashboard/analytics">
          <div className="flex flex-col items-center gap-[1px] cursor-pointer">
            <GiHamburgerMenu
              className={`text-[22px] ${isMore && "text-accent"}`}
            />
            <h1 className={`${isMore && "text-accent font-medium"}`}>more</h1>
          </div>
        </Link> */}
      </div>
    </>
  )
}
