import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src="https://flowbite.com/docs/images/logo.svg" width={32} height={32} alt="Flowbite Logo" />
    </Link>
  )
}
