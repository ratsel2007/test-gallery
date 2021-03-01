import React from 'react'

export const Modal = ({
    photos,
    currentPhoto,
    handleVisibleModal,
    prevPhoto,
    nextPhoto
}) => {
    return (
        <div className="modal">
            <div className="flex-column">
                <button className="link" onClick={handleVisibleModal}>Закрыть</button>
                <div className="slider">
                    <button onClick={prevPhoto}>Предыдущее</button>
                    <img src={photos[`${currentPhoto}`].url} alt="fullPhoto"/>
                    <button onClick={nextPhoto}>Следующее</button>
                </div>
                <div className="slider-number">Номер фото: {currentPhoto + 1} из {photos.length}</div>
            </div>
        </div>
    )
}