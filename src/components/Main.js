import React, {Fragment, useEffect} from 'react'
import {observer} from "mobx-react-lite"
import store from "../store"
import {toJS} from "mobx"
import {Author} from "./Author"

export const Main = observer(() => {
    useEffect(() => {
        store.fetchData()
    }, [])

    return (
        <Fragment>
            <div className="header">Список авторов</div>
            <div className="container">
                { toJS(store.state.authors).map(author => <Author key={author.id} author={author}/>) }
            </div>
        </Fragment>


    )
})