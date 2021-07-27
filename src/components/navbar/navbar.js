import {Link} from 'react-router-dom'
import "./navbar.css"
import {Menu, Coffee} from 'react-feather'

function ItemSearch() {
    return (
        <section className="smart-scroll">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <Link className="navbar-brand heading-black" to="/">
                        MEGA
                    </Link>
                    <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                        data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <Menu color="#FFF"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link page-scroll" to="/commands">Commands</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link page-scroll" to="/items">Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link page-scroll" to="/recipes">Recipes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link page-scroll" to="/patches">Patchnotes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link page-scroll d-flex flex-row align-items-center text-primary" to="/support"><Coffee width="18" height="18"/>Support</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default ItemSearch;