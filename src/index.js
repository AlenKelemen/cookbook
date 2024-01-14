import './index.css'
import { Api } from './controls/api';
import { Authorization } from './controls/auth'

addEventListener("load", () => main())

function main() {
    const auth = new Authorization();
    auth.login(keycloak => {
        const api = new Api(keycloak)
        document.body.innerText= 'Logged as: ' + api.getUserRole()
        console.log(api)
        api.getSources()
        .then(r => console.log(r))
        fetch('dof/')
        
    })
    
}