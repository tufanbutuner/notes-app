/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from "@headlessui/react";
import React, { ReactElement, useState } from "react";

import Modal from "../Modal/Modal";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <span className="sr-only">Take Note</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-500"
                onClick={handleClick}
              >
                New Task
                {showModal === true && <Modal />}
              </a>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
}
