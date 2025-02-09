"use client"

import React from 'react'
import Form from 'next/form'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { MobileDrawer } from './MobileDrawer'
import { ClerkLoaded, SignInButton, SignOutButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import { TrolleyIcon } from '@sanity/icons'

export default function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <header>
      <div className="container flex items-center">
        <Logo />
        <nav className="flex-1 border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <Form action={"/search"} className='flex-0 md:pr-12 md:pl-12'>
              <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search className='size-4 text-gray-500' />
                  </div>
                  <input type="search" id="search" name='query' className="block w-full p-2 ps-10 pe-14 focus:outline-none bg-transparent text-xs text-gray-900 border border-transparent border-b-gray-300 dark:bg-gray-700 dark:border-b-gray-600" placeholder="what would you like please?" required />
                  <button type="submit" className="text-gray-500 absolute top-1 end-1 bottom-1 hover:bg-gray-100 focus:outline-none font-small rounded-lg text-xs px-2 py-1.5">Search</button>
              </div>
            </Form>
            <div className='md:hidden'>
              <MobileDrawer />
            </div>
            <div className="hidden flex-1 w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-1 justify-center p-4 px-8 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 text-xs text-gray-500">
                <li>
                  <Link href="#" className="block py-2 px-3 text-white bg-brand-900 rounded-sm md:bg-transparent md:text-brand-800 md:p-0 dark:text-white md:dark:text-brand-800" aria-current="page">Home</Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-brand-800 md:p-0 dark:text-white md:dark:hover:text-brand-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                </li>
                <li>
                  <HeaderMenu />
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-brand-800 md:p-0 dark:text-white md:dark:hover:text-brand-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-brand-800 md:p-0 dark:text-white md:dark:hover:text-brand-800 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                </li>
              </ul>
            </div>
            <ClerkLoaded>
              {
                isSignedIn ? (
                  <div className='hidden md:flex items-center pl-8 flex-0'>
                    <Link href={"/orders"}>
                      <button className='relative flex items-center mr-4 text-gray-500 hover:bg-gray-100 focus:outline-none font-small rounded-lg text-xs px-2 py-1.5'>
                        <TrolleyIcon className='size-6' />
                        <span>My Orders</span>
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-brand-900 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div>
                      </button>
                    </Link>
                    <div className='flex items-center space-x-2 mr-4'>
                      <UserButton />
                      <div>
                        <p className='text-xs text-gray-500'>Welcome back</p>
                        <p className='text-md text-bold'>{user !== null ? user?.fullName : 'my friend'}</p>
                      </div>
                    </div>
                    <SignOutButton>
                      <button type="button" className="text-white bg-brand-900 hover:bg-brand-800 focus:outline-none font-small rounded-full text-xs px-4 py-1.5">Sign out</button>
                    </SignOutButton>
                  </div>
                ) : (
                <div className='hidden md:block pl-8 flex-0'>
                  <SignInButton mode='modal'>
                    <button className="text-gray-500 hover:text-brand-800 focus:outline-none font-small text-xs px-4 py-1.5">Sign in</button>
                  </SignInButton>
                  <SignUpButton mode='modal'>
                    <button className="text-white bg-brand-900 hover:bg-brand-800 focus:outline-none font-small rounded-full text-xs px-4 py-1.5">Sign up</button>
                  </SignUpButton>
                </div>
                )
              }
            </ClerkLoaded>
          </div>
        </nav>
      </div>
    </header>
  )
}
