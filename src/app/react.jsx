import React from 'react'
import ReactDOM from 'react-dom'

var Index = function Index () {
  return React.createElement('div', {
    className: 'helloworld'
  }, 'Hello React,Webpack4,Babel7!')
}

ReactDOM.render(React.createElement(Index, null), document.querySelector('#root'))
