import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

const root = ReactDOM.createRoot(document.getElementById('root'))

const refresh = () => {
  root.render(
    <App counter={counter} />
  )
}
// setInterval https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
setInterval(() => {
  refresh()
  counter += 1
}, 1000)