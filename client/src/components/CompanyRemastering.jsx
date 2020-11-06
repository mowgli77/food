import React from 'react'
import {useHttp} from "../hooks/http.hook";

const CompanyRemastering = ({company, updateCompany}) => {

    const { request } = useHttp()

    const deleteCompany = async () => {
        const data = await request('/api/companies/delete', 'DELETE', { id: company._id})
        console.log(data.message)
    }


    return (
    <div className={'remast'}>
        <div className={'remast__tittle'}>
            {company.name}
        </div>
        <div className={'remast__options'}>
            <button onClick={() => updateCompany(company)}>Update</button>
            <button onClick={deleteCompany}>Delete</button>
        </div>
    </div>
    )
}

export default CompanyRemastering