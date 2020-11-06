import React from 'react'
import Header from "./Header";
import CompaniesList from "./CompaniesList";

const Content = ({ searchText, companies }) => {

    return (
        <div>
            <Header searchText={searchText}/>
            <div className={'content'}>
                <CompaniesList companies={companies}/>
            </div>
        </div>
    )
}

export default Content