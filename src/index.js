import './index.css'
import { elt } from './controls/util.js'
import { Api } from './controls/api'
import { Authorization } from './controls/auth'


addEventListener("load", () => main())

function main() {
    const cnt = elt('div', { className: 'container' })
    document.body.append(cnt)
    const h = (text) => cnt.append(elt('h3', {className:'mb-3'}, text))
    const t = (obj,rows=3) => cnt.append(elt('textarea', { className: 'form-control mb-3',rows }, 
    JSON.stringify(obj,undefined, 4)))

    const auth = new Authorization()
    auth.login(keycloak => {
        const api = new Api(keycloak)
        h('api.getUserRole()')
        t({ userRole: api.getUserRole()})
      
      /*   h('api.getSources()')
        api.getSources()
        .then(r => t(r,10))
        
        h('api.getGeostyle()')
        api.getGeostyle()
        .then(r => t(r,10)) */
const methods = [api.getSources(), api.getGeostyle()]
        Promise.all(methods)
        .then(r => r.forEach((x,i)=>{
            console.log(methods[i].toString())
            t(r,10)
        }))
      
    


    })






}