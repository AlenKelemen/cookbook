import api from '../config/api.json'

export class Api {
    constructor(keycloak) {
        this.keycloak = keycloak
    }
    getData(url, mediaType = 'application/json') {
        const tokenUpdate = this.keycloak.updateToken()
        return tokenUpdate.then(() => {
            return fetch(url, {
                headers: {
                    'Authorization': 'Bearer ' + this.keycloak.token,
                    'X-Profile-Select': this.getUserRole(),
                    'Content-Type': 'application/json',
                    'Accept': mediaType,
                }
            })
                .then(response => response.json())
        })
    }
    getSources() {
        return this.getData(api.sources)
    }
    getGeostyle() {
        return this.getData(api.geostyle)
    }
    postData(url, body, mediaType = 'application/json') {
        const tokenUpdate = this.keycloak.updateToken()
        tokenUpdate.then(() => {
            return fetch(url, {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + this.keycloak.token,
                    'X-Profile-Select': this.getUserRole(),
                    'Content-Type': 'application/json',
                    'Prefer': 'params=single-object',
                    'Accept': mediaType,
                },
                body
            })
        })
    }
    getUserRole() {
        return this.keycloak.resourceAccess["imagis-client"].roles[0]
    }

}