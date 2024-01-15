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

    getProperties() {
        const response = this.getData(api.properties, 'application/vnd.pgrst.object+json')
        return response.then(response => response.properties)
    }

    getSources() {
        return this.getData(api.sources)
    }
    getGeostyle() {
        return this.getData(api.geostyle)
    }
    setSensorsArea(body) {
        return this.postData(api.sensorsArea, body)
    }

    getTelemetry(request) {
        const params = new URLSearchParams()
        params.append('id', request.id)
        params.append('start_date', request.startDate)
        params.append('end_date', request.endDate)
        const requestUrl = `${api.telemetry}?${params.toString()}`
        return this.getData(requestUrl)
    }
    getMeter(request){
        const params = new URLSearchParams()
        params.append('id', request.id)
        params.append('query_date', request.queryDate)
        const requestUrl = `${api.meter}?${params.toString()}`
        return this.getData(requestUrl)
    }

    getTelemetryQuery(request) {
        const params = new URLSearchParams();
        params.append('id', request.id)
        params.append('query_date', request.queryDate)
        const requestUrl = `${api.telemetry}?${params.toString()}`
        return this.getData(requestUrl)
    }

    getGeoJsonData(url) {
        return this.getData(api.root + url, 'application/geo+json')
    }
}
