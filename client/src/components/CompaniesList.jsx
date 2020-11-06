import React from 'react'
import CompaniesCard from "./CompaniesCard";

const CompaniesList = ({companies}) => {

    return (
        <div className={companies.length < 3 ? 'companies-list-less-then-3' : 'companies-list'}>
            {companies.map(company => <CompaniesCard key={company.id} company={company}/>)}
        </div>
    )
}

export default CompaniesList