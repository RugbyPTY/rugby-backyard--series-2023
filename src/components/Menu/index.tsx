import { Dispatch, SetStateAction, useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import isologo from "../../assets/isologo.svg";
import isotipo from "../../assets/isotipo.svg";

import { goToElement } from "../../utils/scroll";

import { MENU_ENTRIES } from "../../configs/menu";

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between relative">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              src={isotipo}
              className="mr-1 h-6 sm:h-9 invert"
              alt="Rugby PTY isotipo"
            />
            {/* <Logo className="sm:h-[10rem] h-16 w-auto hover:drop-shadow-[0_0_1em_#61dafbaa] fill-titanes-500" /> */}
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700 absolute top-0 right-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon
              className="h-10 w-10 sm:h-10 sm:w-10"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {MENU_ENTRIES.map(({ label, scroll }) => (
                <a
                  key={label}
                  // href="#"
                  data-scroll-to={scroll}
                  onClick={() => {
                    goToElement(scroll);
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-xl"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="py-6 sr-only">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky font-sans">
      <section className="py-2 bg-accent text-white text-right px-10 sr-only">
        <p className="text-sm">
          <strong className="mx-2">xxxxxxxx:</strong>xxxxxxxxxxxxxxxx
          <strong className="mx-2">xxxxxxxx:</strong>xxxxxxxx
        </p>
        {/* <div className="flex justify-between">
        {Array.from(new Array(4)).map(() => (
							<div className="mx-1 h-6 w-6 bg-white rounded" />
						))}
            </div> */}
      </section>
      <nav className="first-letter:border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img
              src={isotipo}
              className="mr-1 h-6 sm:h-9 invert"
              alt="Rugby PTY isotipo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              <img
                src={isologo}
                className="mr-3 h6 sm:h-6 invert"
                alt="Rugby PTY isologo"
              />
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="https://wa.me/50761023295?text=Quiero%20inscribirme%20el%20evento%20de%20Rugby%20PTY"
              className="text-white bg-three hover:bg-accent font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Inscripción
            </a>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="#FFF"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="#FFF"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <ul className="hidden lg:flex lg:space-x-4 max-lg:space-y-2 max-lg:w-full">
            {MENU_ENTRIES.map(({ label, scroll }) => (
              <li
                key={label}
                className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded"
              >
                <a
                  // href={`#${scroll}`}
                  data-scroll-to={scroll}
                  onClick={() => goToElement(scroll)}
                  className="lg:hover:text-accent text-white block font-semibold text-[15px]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <MobileMenu setMobileMenuOpen={setIsOpen} mobileMenuOpen={isOpen} />
    </header>
  );
}

export default Menu;
