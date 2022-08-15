import './app.css'
import App from './App.svelte'
import "cirrus-ui/dist/cirrus.css"
import "@fortawesome/fontawesome-free/css/all.css"

const app = new App({
  target: document.getElementById('app')
})

export default app
