import './index.css'
import { api } from './controls/api'
import locale from './lang/hr.json'

const wmsUrl = locale.rasterDOFPath
const params = new URLSearchParams({
    SERVICE: 'WMS',
    VERSION: '1.3.0',
    REQUEST: 'GetMap',
    FORMAT: 'image/png',
    TRANSPARENT: true,
    layers: 'cp:CP.CadastralParcel',
    WIDTH: 256,
    HEIGHT: 256,
    CRS: 'EPSG:3857',
    BBOX: '1803913.8675301597,5749287.519497817,1805136.8599827224,5750510.51195038'
}) 
const imageUrl = `${wmsUrl}?${params}`
console.log(imageUrl)
const imageElement = document.createElement('img')
imageElement.src = imageUrl
document.body.appendChild(imageElement)