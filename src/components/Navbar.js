import logo from "../assets/img/logo-ifrj.png"
import logoClean from "../assets/img/logo/ifrj-clean.png"
import { useRouter } from "next/router"
import Link from "next/link"
import cx from "classnames"
import { useState } from "react"

function NavItem({ href, label, mobile = false, reversed, ...props }) {
  const router = useRouter()
  const active = router.pathname
  return !mobile ? (
    <Link href={href}>
      <a className={cx({})}>
        <li
          className={cx(
            "transition duration-200 ease-in-out xl:ml-6 xl:ml-8 text-primary-500 font-medium mt-4 md:mt-0 p-2 rounded",
            {
              "text-primary-700 ": active === href,
              "hover:bg-gray-800": !reversed && !mobile,
              "hover:bg-gray-100": reversed && !mobile
            }
          )}
        >
          {label}
        </li>
      </a>
    </Link>
  ) : (
    <Link href={href}>
      <a>
        <li
          className={cx(
            "xl:ml-6 text-gray-900 font-medium mt-4 md:mt-0 mb-2 rounded",
            {
              "text-primary-700 bg-gray-100 ": active === href
            },
            "hover:bg-gray-100 p-2"
          )}
        >
          {label}
        </li>
      </a>
    </Link>
  )
}

export function Navbar({ location, scrolled, reverse, landing, ...props }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const reversed = scrolled || reverse || !landing
  return (
    <header
      className={cx(
        "transition duration-200 ease-in-out fixed top-0 z-50 flex justify-center w-full p-4 ",
        {
          "bg-white shadow": reversed
        }
      )}
    >
      <nav className="container flex justify-between">
        <div className="flex items-center content-center">
          <img className="h-12" src={logoClean} alt="Logo Instituto Federal" />
        </div>
        <div className="flex flex-col justify-center md:flex-row">
          <ul className="items-center justify-between hidden xl:flex">
            <NavItem href="/" label="Início" reversed={reversed} />
            <NavItem
              href="/programacao"
              label="Programação"
              reversed={reversed}
            />
            <NavItem
              href="/submissoes"
              label="Submissões"
              reversed={reversed}
            />
            <NavItem
              href="/incricoes"
              label="Pré-Inscrições"
              reversed={reversed}
            />
            <NavItem
              href="/contato"
              label="Fale com a Organização"
              reversed={reversed}
            />
          </ul>
          <button
            onClick={() => {
              setMenuOpen(true)
            }}
            aria-label="Abrir Menu"
            type="button"
            className={cx(
              "inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md xl:hidden",
              !reversed
                ? "hover:text-primary-300 hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-primary-300"
                : "hover:text-primary-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-primary-300"
            )}
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
            <img className="h-8" src={logoClean} alt="Logo Instituto Federal" />

            <button
              onClick={() => {
                setMenuOpen(false)
              }}
              aria-label="Fechar"
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
