import {makeAutoObservable} from "mobx"

class Store {
    constructor() {
        makeAutoObservable(this)
    }

    state = {
        authors: [],
        albums: [],
        photos: []
    }

    fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.state.authors = json)

        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => this.state.albums = json)

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => this.state.photos = json)
    }
}

export default new Store()