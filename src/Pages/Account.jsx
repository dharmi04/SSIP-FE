import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from "react-router-dom"
import { Nav } from '../components/Nav'

const Account = () => {
    return (
        <div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-col-2 p-6 space-x-10 space-y-5'>
                <div className='bg-grey2 rounded-md p-4 text-center justify-center text-2xl font-bold font-sans'>My Profile</div>
                <div className='bg-grey2 rounded-md p-4 text-center justify-center text-2xl font-bold font-sans'>Dashboard</div>
                <Link
                    to="/addproduct"
                >
                    <div className='bg-grey2 rounded-md p-4 text-center justify-center text-2xl font-bold font-sans'>Sell Product</div>
                </Link>
                <div className='bg-grey2 rounded-md p-4 text-center justify-center text-2xl font-bold font-sans'>Orders</div>
                <div className='bg-grey2 rounded-md p-4 text-center justify-center text-2xl font-bold font-sans'>Buy Again</div>

            </div>
            <Nav />
        </div>
    )
}

export default Account
