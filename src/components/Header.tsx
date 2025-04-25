'use client'

import {
  PopoverGroup
} from '@headlessui/react'
import Logo from '../img/logo.png'
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-black">
      <nav aria-label="Global" className="flex max-w-8xl items-center justify-between p-6 lg:px-8">        <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            alt="Novalyze logo"
            src={Logo}
            className="h-15 w-auto"
          />
        </a>
      </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          <a href="/home" className="text-sm/6 font-semibold text-secondary">
            Home
          </a>
          <a href="#" className="text-sm/6 font-semibold text-secondary">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold text-secondary">
            Company
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="/login" className="text-sm/6 font-semibold text-secondary">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}

          <button
            onClick={handleLogout}
            className="text-sm/6 font-semibold text-secondary"
          >
            Log out <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
