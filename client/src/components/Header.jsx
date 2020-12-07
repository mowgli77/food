import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom";


const Header = ({ searchText }) => {

    const location = useLocation()

    useEffect(() => {
        const hash = location.hash
        setTimeout(() => {
            if (hash && document.getElementById(hash.substr(1))) {
                console.log(hash)
                document.getElementById(hash.substr(1)).scrollIntoView({behavior: "auto"})
            }
        }, 300)
    }, [location.hash])


    return (
        <header className="header header__center">
            <div className={"heder__title"}>Christmas Sale</div>
            <div className={"header__search"}>
                <input placeholder={'Search'} type={'text'} onKeyUp={searchText} />
            </div>
        </header>
    );
}

export default Header