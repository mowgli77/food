import React from 'react'

const CompanyRemastering = ({company, updateCompany, deleteCompany}) => {

    return (
    <div className={'remast'}>
        <div className={'remast__tittle'}>
            {company.name}
        </div>
        <div className={'remast__options'}>
            <button onClick={() => updateCompany(company)}>Update</button>
            <button onClick={() => deleteCompany(company)}>Delete</button>
        </div>
    </div>
    )
}

export default CompanyRemastering