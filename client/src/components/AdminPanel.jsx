import React, {useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useAuth} from "../hooks/auth.hook";
import {NavLink, Redirect} from "react-router-dom";
import CompanyRemastering from "./CompanyRemastering"
import UpdateCompanyModal from "./UpdateCompanyModal";

const AdminPanel = ({companies}) => {

    const [isModalUpdate, setModalUpdate] = useState(false)
    const [companyForModal, setCompanyForModal] = useState({})
    const [form, setForm] = useState({
        image: '',
        name: '',
        href: ''
    })

    const {request} = useHttp()
    const {token, logout} = useAuth()

    const updateCompany = (company) => {
        setCompanyForModal(company)
        setModalUpdate(true)
    }

    const formHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const saveCompanyHandler = async () => {
        try {
            const data = await request('/api/companies/save', 'POST', {...form})
            console.log(data)
            setForm({
                image: '',
                name: '',
                href: ''
            })
        } catch (e) {
        }
    }

    if (token === null) {
        return <Redirect to={'/admin'}/>
    }

    return (
        <div>
            {isModalUpdate && <UpdateCompanyModal onCancel={() => setModalUpdate(false)} company={companyForModal} />}
            {token && <div>
                <header className="header header__between">
                    <div className={"header__logo"}>Admin Panel</div>
                    <div>
                        <NavLink to={'/'}><button>Go to Companies List</button></NavLink>
                        <button onClick={logout}>Logout</button>
                    </div>
                </header>
                <div className={'content'}>
                    <div className={'admin-panel'}>
                        <h2>Add Company</h2>
                        <input placeholder="Enter a link for the image"
                               id="image"
                               type="text"
                               name={"image"}
                               value={form.image}
                               onChange={formHandler}
                        />
                        <input placeholder="Enter a name"
                               id="name"
                               type="text"
                               name={"name"}
                               value={form.name}
                               onChange={formHandler}
                        />
                        <input placeholder="Enter a link for the website"
                               id="href"
                               type="text"
                               name={"href"}
                               value={form.href}
                               onChange={formHandler}
                        />
                        <button onClick={saveCompanyHandler}>Save</button>
                    </div>
                    <div className={'admin-panel'}>
                        <h2>Delete Company</h2>
                        <div>
                            {companies.map(company => <CompanyRemastering company={company} updateCompany={updateCompany}/>)}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default AdminPanel