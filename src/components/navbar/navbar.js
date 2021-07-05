import style from 'styled-components';
import { useState, useEffect } from 'react';
import "./navbar.css"
import icons from 'feather-icons'
import {Grid, Coffee} from 'react-feather'

function ItemSearch(props) {
    const [_, set_] = useState()
    const handleChange = (e) => {
        console.log()
    }
    const formSubmit = (e) => {
        console.log()
    }
    useEffect(() => {
        console.log()
    }, []);
    return (
        <section className="smart-scroll">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <a className="navbar-brand heading-black" href="index.html">
                        MEGA
                    </a>
                    <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                        data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <Grid color="#FFF"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#features">Commands</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#pricing">Items</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#blog">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll d-flex flex-row align-items-center text-primary" href="#">
                                    <Coffee width="18" height="18"/>
                                    Donation
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default ItemSearch;