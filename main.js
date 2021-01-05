import './style.css'
import mapbox from 'mapbox-gl';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

console.log('mapbox-gl version:', mapbox.version);
