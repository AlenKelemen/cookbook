import Keycloak from "keycloak-js"

export class Authorization {
    login(callback) {
        const keycloak = new Keycloak({
            url: 'https://auth.imagis.io',
            realm: 'imagis',
            clientId: 'imagis-client'
        })

        const initKeycloak = keycloak.init({ onLoad: 'check-sso' })
        initKeycloak.then(isAuth => {
            if (!isAuth) {
                keycloak.login();
            }
            callback(keycloak)
        })
            .catch(er => console.log(er)) 
    }
}