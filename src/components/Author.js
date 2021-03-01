import React, {Fragment, useState} from 'react'
import {observer} from "mobx-react-lite"
import store from "../store"
import {toJS} from "mobx"
import {Albums} from "./Albums"

export const Author = observer(({author}) => {
    const [visibleAlbums, setVisibleAlbums] = useState(false)

    const albums = toJS(store.state.albums).filter(album => album.userId === author.id)

    const handleVisibleAlbums = () => {
        setVisibleAlbums(prev => !prev)
    }

    return (
        <Fragment>
            <h1 className="author" onClick={handleVisibleAlbums}>{author.name}</h1>
            <div className="flex-row">
                { visibleAlbums && albums.map(album => <Albums key={album.id} album={album}/>) }
            </div>
        </Fragment>
    )
})