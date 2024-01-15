import locale from './lang/hr.json'

const param = {
    SERVICE: 'WMS',
    VERSION: '1.3.0',
    REQUEST: 'GetMap',
    FORMAT: 'image/png',
    TRANSPARENT: true,
    layers: 'cp:CP.CadastralParcel',
    WIDTH: 256,
    HEIGHT: 256,
    STYLES: "",
    CRS: 'EPSG:3857',
    BBOX: '1807888.5930009894,5748370.275158394,1808194.34111413,5748676.023271535'
}

const params = new URLSearchParams(param)
const imageElement = document.createElement('img')
imageElement.src = `${locale.rasterCPPath}?${params}`
document.body.appendChild(imageElement)

param.layers = 'DOF_TOPONIMI'
const params1 = new URLSearchParams(param)
const imageElement1 = document.createElement('img')
imageElement1.src = `${locale.rasterDOFPath}?${params1}`
document.body.appendChild(imageElement1)
