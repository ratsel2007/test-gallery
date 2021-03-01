import React from 'react'
import {Link} from "react-router-dom"
import {observer} from "mobx-react-lite"
import {toJS} from "mobx"
import store from "../store"

export const Albums = observer(({album}) => {
    const photos = toJS(store.state.photos).filter(photo => photo.albumId === album.id)

    return (
        <div className="card">
            <img src={photos[0].thumbnailUrl} alt="cover"/>
            <div className="flex-column">
                <div className="card-title"> {album.title} </div>
                Количество фотографий: {photos.length}
                <Link className="link" to={{
                    pathname: `/${album.id}`,
                    album,
                    photos
                }} >Подробнее</Link>
            </div>
        </div>
    )
})