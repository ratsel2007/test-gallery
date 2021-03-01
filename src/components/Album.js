import React, {Fragment, useState} from 'react'
import {Link, Redirect} from "react-router-dom"
import {Modal} from "./Modal"


export const Album = (props) => {
    const {album, photos} = props.location

    const [photoNumber, setPhotoNumber] = useState(0)
    const [visibleModal, setVisibleModal] = useState(false)

    if (!album || !photos) return <Redirect to="/"/>

    const prevPhoto = () => {
        if (photoNumber > 0) {
            setPhotoNumber(prev => prev - 1)
        } else {
            return
        }
    }

    const nextPhoto = () => {
        if (photoNumber < photos.length - 1) {
            setPhotoNumber(prev => prev + 1)
        } else {
            return
        }
    }

    const handleVisibleModal = () => {
        setVisibleModal(prev => !prev)
    }

    return (
        <Fragment>
            <div className="header flex-row">
                <div>Фотографии альбома</div>
                <Link className="link" to={'/'}>На главную</Link>
            </div>

            <div className="container album">
                <div className='album-card'>
                    <div className='album-card__title'>{album.title}</div>
                    <div className="slider">
                        <button onClick={prevPhoto}>Предыдущее</button>
                        <img src={photos[`${photoNumber}`].thumbnailUrl} alt="smallPhoto" onClick={handleVisibleModal}/>
                        <button onClick={nextPhoto}>Следующее</button>
                    </div>
                    <div className="slider-number">Номер фото: {photoNumber + 1} из {photos.length}</div>
                </div>
            </div>

            {
                visibleModal &&
                <Modal
                    photos={photos}
                    currentPhoto={photoNumber}
                    handleVisibleModal={() => handleVisibleModal()}
                    prevPhoto={() => prevPhoto()}
                    nextPhoto={() => nextPhoto()}
                />
            }
        </Fragment>
    )
}