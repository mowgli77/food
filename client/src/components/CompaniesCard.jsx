import React from 'react'

const CompaniesCard = ({company}) => {

    return (
        <a href={company.href}>
            <div id={company.anchorr} className={"companies-card"}>
                <div className={`companies-card__image ${!company.description && 'boss'}`}>
                    <img src={company.image}/>
                </div>
                <div className={`companies-card__description ${company.description && 'boss'}`}>
                    {company.description}
                </div>
                <div className={`companies-card__label`}>
                    {company.name}
                </div>
            </div>
        </a>)
}

export default CompaniesCard