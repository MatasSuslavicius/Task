
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
      <nav className="nav">
        <Link to="/" className="site-title">
          Home
        </Link>
      </nav>
    )
  }