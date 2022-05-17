import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="header">
            <Link className="header__label" to={'/'}>ASFERRO</Link>
            <Link className="header__link" to={"/users/create"}>
                Create a new user
            </Link>
        </div>
    )
}