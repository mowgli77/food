import React, {useCallback, useEffect, useState} from 'react'
import './App.css'
import Content from "./components/Content"
import Auth from "./components/Auth"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {useHttp} from "./hooks/http.hook"
import AdminPanel from "./components/AdminPanel"
import Snow from "./components/Snow";

const data = [
    {
        id: 1,
        image: 'https://p2.zoon.ru/preview/2Zwr-hEzDLUFkEjPZ15c4A/492x440x85/0/1/c/51515622a0f3025414000004_515156cdde646.jpg',
        name: 'SUSHIYA', href: 'https://sushiya.ua/'
    },
    {
        id: 2,
        image: 'https://p2.zoon.ru/preview/2Zwr-hEzDLUFkEjPZ15c4A/492x440x85/0/1/c/51515622a0f3025414000004_515156cdde646.jpg',
        name: 'SUSHIYA', href: 'https://sushiya.ua/'
    },
    {
        id: 3,
        image: 'https://p2.zoon.ru/preview/2Zwr-hEzDLUFkEjPZ15c4A/492x440x85/0/1/c/51515622a0f3025414000004_515156cdde646.jpg',
        name: 'SUSHIYA', href: 'https://sushiya.ua/'
    },
    {
        id: 4,
        image: 'https://p2.zoon.ru/preview/2Zwr-hEzDLUFkEjPZ15c4A/492x440x85/0/1/c/51515622a0f3025414000004_515156cdde646.jpg',
        name: 'SUSHIYA', href: 'https://sushiya.ua/'
    },
    {
        id: 5,
        image: 'https://p2.zoon.ru/preview/2Zwr-hEzDLUFkEjPZ15c4A/492x440x85/0/1/c/51515622a0f3025414000004_515156cdde646.jpg',
        name: 'SUSHIYA', href: 'https://sushiya.ua/'
    },
    {
        id: 6,
        image: 'https://p2.zoon.ru/preview/2Zwr-hEzDLUFkEjPZ15c4A/492x440x85/0/1/c/51515622a0f3025414000004_515156cdde646.jpg',
        name: 'SUSHIYA', href: 'https://sushiya.ua/'
    },
    {
        id: 7,
        image: 'https://p2.zoon.ru/preview/2Zwr-hEzDLUFkEjPZ15c4A/492x440x85/0/1/c/51515622a0f3025414000004_515156cdde646.jpg',
        name: 'SUSHIYA', href: 'https://sushiya.ua/'
    },
    {
        id: 8,
        image: 'https://p2.zoon.ru/preview/2Zwr-hEzDLUFkEjPZ15c4A/492x440x85/0/1/c/51515622a0f3025414000004_515156cdde646.jpg',
        name: 'SUSHIYA', href: 'https://sushiya.ua/'
    }
]

var fetchedCompanies = []

function App() {

    const [companies, setCompanies] = useState(fetchedCompanies)
    const {request} = useHttp()

    const fetchCompanies = useCallback(async () => {
        const data = await request('/api/companies')
        fetchedCompanies = data
        setCompanies(data)
    }, [request])

    useEffect(() => {
        fetchCompanies()
    }, [fetchCompanies])

    const searchText = (e) => {
        let text = e.currentTarget.value.toUpperCase();
        let filterCompaniesN = fetchedCompanies.filter(s => s.name.toUpperCase().includes(text))
        let filterCompaniesD = fetchedCompanies.filter(s => {
            if (s.description) {
                return s.description.toUpperCase().includes(text)
            }
        })
        let filterCompanies = filterCompaniesN.concat(filterCompaniesD)
        if (text.trim().length === 0) {
            setCompanies(fetchedCompanies)
        } else {
            setCompanies(filterCompanies)
        }
    }

    return (
        <div className={'app'}>
            <Snow />
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}
                           render={() => <Content companies={companies} searchText={searchText}/>}
                    />
                    <Route exact path={"/admin"}
                           render={() => <Auth/>}
                    />
                    <Route exact path={"/admin/panel"}
                           render={() => <AdminPanel companies={companies}/>}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App

//sdfgdrhfyjhg
