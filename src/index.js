import locale from './lang/hr.json'
import './index.css'
import { MapControl } from "./controls/map"
import { Api } from './controls/api'
import { Authorization } from './controls/auth'

addEventListener("load", () => main())

function main() {
    const auth = new Authorization();
    auth.login(keycloak => {
        const api = new Api(keycloak)
        const map = new MapControl(api)
        map.render(document.body)
    })
}