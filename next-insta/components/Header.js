import React from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'

const Header = (props) => {
  return (
    <div>
      <div className="flex max-w-6xl justify-between">
        <div className="relative hidden h-24 w-24 cursor-pointer lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain" // aspect ratio 유지
          />
        </div>

        <div className="relative h-10 w-10 flex-shrink-0 lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain" // aspect ratio 유지
          />
        </div>

        <div className="bg-red relative mt-1 p-3">
          <div className="absolute inset-y-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  )
}

export default Header
