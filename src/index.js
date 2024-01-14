import './index.css'
import { api } from './controls/api'

const header = document.createElement('h1')
header.innerText='Hello from index.js'

const button = document.createElement('button')
button.innerHTML ='<i class="fas fa-camera"></i> Click me'
button.className='btn btn-primary mb-3'

const apiInf = document.createElement('textarea')
apiInf.classList='form-control'
apiInf.innerText = JSON.stringify(api)
apiInf.id='api-inf'

const lbl = document.createElement('label')
lbl.innerText='Api content from api.json'
lbl.htmlFor='api-inf'

const subContaner=document.createElement('div')
subContaner.append(lbl,apiInf)

const container = document.createElement('div')
container.className='container'
container.append(header,button,subContaner)
document.body.append(container)
