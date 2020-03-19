import logo from "../assets/img/logo-ifrj.png"
import { useRouter } from "next/router"
import Link from "next/link"
import cx from "classnames"

function NavItem({ href, label, ...props }) {
  const router = useRouter()
  const active = router.pathname
  return (
    <li
      className={cx("ml-8 text-primary-500 font-medium", {
        "text-primary-700 ": active === href
      })}
    >
      <Link href={href}>
        <a
          className={cx({
            "pb-2 border-solid border-b border-primary-500": active === href
          })}
        >
          {label}
        </a>
      </Link>
    </li>
  )
}

export function Navbar({ location, ...props }) {
  return (
    <header className="top-0 fixed flex bg-white justify-center p-4 border-solid border-t-4 border-secondary-400 z-50 w-full shadow">
      <nav className="container flex justify-between">
        <div className="flex items-center content-center">
          <img className="h-16" src={logo} alt="Logo Instituto Federal" />
        </div>
        <div className="flex">
          <ul className="flex items-center justify-between">
            <NavItem href="/" label="Início" />
            <NavItem href="/programacao" label="Programação" />
            <NavItem href="/submissoes" label="Submissões" />
            <NavItem href="/incricoes" label="Pré-Inscrições" />
            <NavItem href="/contato" label="Fale com a Organização" />
          </ul>
        </div>
      </nav>
    </header>
  )
}
