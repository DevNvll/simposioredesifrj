import logo from "../assets/img/logo-ifrj.png"
import { useRouter } from "next/router"
import Link from "next/link"
import cx from "classnames"
import { useState } from "react"

function NavItem({ href, label, mobile = false, ...props }) {
  const router = useRouter()
  const active = router.pathname
  return !mobile ? (
    <li
      className={cx(
        "xl:ml-6 xl:ml-8 text-primary-500 font-medium mt-4 md:mt-0",
        {
          "text-primary-700 ": active === href
        },
        "hover:bg-gray-800 sm:rounded p-2",
        { "hover:bg-gray-100": mobile }
      )}
    >
      <Link href={href}>
        <a
          className={cx({
            "pb-2 border-solid md:border-b border-primary-500": active === href
          })}
        >
          {label}
        </a>
      </Link>
    </li>
  ) : (
    <Link href={href}>
      <a>
        <li
          className={cx(
            "xl:ml-6 text-gray-900 font-medium mt-4 md:mt-0 mb-2",
            {
              "text-primary-700 bg-gray-100 ": active === href
            },
            "hover:bg-gray-100 sm:rounded p-2"
          )}
        >
          {label}
        </li>
      </a>
    </Link>
  )
}

export function Navbar({ location, ...props }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 z-50 flex justify-center w-full p-4 ">
      <nav className="container flex justify-between">
        <div className="flex items-center content-center">
          <img
            className="object-cover object-left h-16"
            src={logo}
            alt="Logo Instituto Federal"
            style={{ width: "45px" }}
          />
        </div>
        <div className="flex flex-col justify-center md:flex-row">
          <ul className="items-center justify-between hidden xl:flex">
            <NavItem href="/" label="Início" />
            <NavItem href="/programacao" label="Programação" />
            <NavItem href="/submissoes" label="Submissões" />
            <NavItem href="/incricoes" label="Pré-Inscrições" />
            <NavItem href="/contato" label="Fale com a Organização" />
          </ul>
          <button
            onClick={() => {
              setMenuOpen(true)
            }}
            type="button"
            className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md xl:hidden hover:text-primary-300 hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-primary-300"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={cx("fixed xl:hidden top-0 w-full h-64 p-4", {
          hidden: !menuOpen
        })}
      >
        <div className="flex flex-col w-full h-auto bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between px-5 pt-4 ">
            <img className="h-8" src={logo} alt="Logo Instituto Federal" />

            <button
              onClick={() => {
                setMenuOpen(false)
              }}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-primary-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-primary-300"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="m-4 mt-4">
            <NavItem href="/" label="Início" mobile />
            <NavItem href="/programacao" label="Programação" mobile />
            <NavItem href="/submissoes" label="Submissões" mobile />
            <NavItem href="/incricoes" label="Pré-Inscrições" mobile />
            <NavItem href="/contato" label="Fale com a Organização" mobile />
          </ul>
        </div>
      </div>
    </header>
  )
}
