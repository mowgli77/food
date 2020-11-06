import React from 'react'

const CompaniesCard = ({company}) => {

    return (
        <a href={company.href}>
            <div className={"companies-card"}>
                <div className={"companies-card__image"}>
                    <img src={company.image}/>
                </div>
                <div className={"companies-card__label"}>
                    {company.name}
                </div>

            </div>
        </a>)
}

export default CompaniesCard