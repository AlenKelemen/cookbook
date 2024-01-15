import Map from 'ol/Map.js'
import View from 'ol/View.js'
import { fromLonLat, transformExtent } from 'ol/proj'

export class MapControl {
    constructor(api) {
      this.api = api
    }
    render(element) {
        const container = document.createElement('div')
        container.id = 'map'
        container.className = 'map vh-100 vw-100'
        const map = new Map({
          target: container,
          controls: []
        })
        map.set('api', this.api)
        element.appendChild(container)
        console.log('title')
        this.#getView((view, title) => {
          map.setView(view)
          document.title = title
          console.log(title)
        })
        
        map.on('change:layers', evt => {
          //console.log('layers loaded:', evt)
        })
      }
      #getView(callback) {
        const properties = this.api.getProperties()
        properties.then(properties => {
          const view = new View({
            center: fromLonLat(properties.center),
            zoom: properties.zoom,
            maxZoom: 28,
            constrainResolution: true// animate to the closest zoom level keeping map sharp
          })
          callback(view, properties.title)
        })
      }
}