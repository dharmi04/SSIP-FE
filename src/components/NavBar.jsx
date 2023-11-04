import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import hamburger from "../assets/hamburger.svg"
import accountimg from "../assets/account.svg"
import { RxCross1 } from "react-icons/rx"
import Account from "../Pages/Account"
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-primary w-full">
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <img className="h-8 w-8" src={account} alt="Workflow" /> */}
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-16 text-lg ">
                  <Link
                    to="/"
                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Cart
                  </Link>

                  <Link
                    to="/dashboard"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium"
                  >
                    Account
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  style={{ marginLeft: "10px" }} // Add this line to align to the left corner
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <img src={hamburger} alt="hamburger" className="" />
                  ) : (
                    // <img src={cross} alt="cross" />
                    <RxCross1 />
                  )}
                </button>
              </div>
              <Link to="/account">
  <img src={accountimg} alt="account" className="ml-4" />
</Link>

            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/home"
                  className="text-gray-300 hover:bg-gray-700 hover-text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Link
                  to="/"
                  className="text-gray-300 hover-bg-gray-700 hover-text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Cart
                </Link>

                <Link
                  to="/dashboard"
                  className="text-gray-300 hover-bg-gray-700 hover-text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  My Dashboard
                </Link>

                <Link
                  to="/login"
                  className="text-gray-300 hover-bg-gray-700 hover-text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Account
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default NavBar
