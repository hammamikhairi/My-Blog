import ReactDOM from 'react-dom';
import App from './App';
import './index.sass';


if (window.innerWidth < 768) {

  let touchstartX = 0
  let touchendX = 0

  document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
  })

  document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    if (window.location.href.includes('/blog/'))
      if (touchendX - touchstartX > (window.screen.width / 3))
        window.open('https://khairihammami.tech/#/', '_self' )
  })
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);