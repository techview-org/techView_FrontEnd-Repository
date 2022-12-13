import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import CommentList from './commentList'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const button = {
    backgroundColor:"transparent",
    height:"50",
    width:"120",
    color:"black",
    marginRight:"0",
    borderColor:"transparent"
  }

export default function CommentDropDown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button  style = {button} >
                   
                    <ChevronDownIcon  style = {button} aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <CommentList />
                </Menu.Items>
            </Transition>
        </Menu>
    )
}