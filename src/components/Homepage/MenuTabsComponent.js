import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Container} from "react-bootstrap";
import { 
    faPencilAlt,
    faCalendarPlus,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import { FaForumbee } from 'react-icons/fa';

export default function MenuTabs(){
    return(
        <nav className="nav nav-pills nav-justified">
            <a className="nav-item nav-link pill-item" href="/">
                <i className="fas fa-search-location"></i>
                Search places
            </a> 
            <a className="nav-item nav-link pill-item"
               href="/posts/details">
                <i className="fab fa-wpforms"></i>
                    Travel Forums
            </a>  
            <a className="nav-item nav-link pill-item" href="/posts"><FontAwesomeIcon icon={faPencilAlt}/>Write a post</a>
            <a className="nav-item nav-link pill-item"
               href="/plans"
               tabIndex="-1"
               aria-disabled="true">
                <FontAwesomeIcon icon={faCalendarPlus}/>
                Travel Plan</a>
        </nav>
    )
}
