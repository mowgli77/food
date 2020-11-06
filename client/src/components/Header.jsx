import React from 'react'

const Header = ({ searchText }) => {

    return (
        <header className="header header__center">
            <div className={"header__search"}>
                <input placeholder={'Search'} type={'text'} onKeyUp={searchText} />
            </div>
        </header>
    );
}

export default Header