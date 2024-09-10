import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (

        <header className="bg-[#000]">

        <div className="container mx-auto navbar">
            <div className="flex-1">
                <Link to="/"><a className="btn btn-ghost text-xl text-white">Logo Here</a></Link>
            </div>

            <div className="navbar-center  lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        </header>
    )

}

export default Navbar