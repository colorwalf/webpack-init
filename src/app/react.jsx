// import React,  from 'react'
// import ReactDOM from 'react-dom'
// eslint-disable-next-line react/prop-types
// const Title = ({ text }) =>
// <h5 className="text-bold">{text}</h5>
// const Title = (props) =>
// <h5 className="text-bold">{props.text}</h5>

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.setCount.bind(this);
//     this.state = {count: 0};
//   }

//   setCount(newnumber) {
//     this.setState({count: newnumber});
//   }

//   render() {
//     const count = this.state.count;
//     return (
//       <div>
//         <h1>Hello CodeSandbox</h1>
//         <h2 You clicked {count} times!</h2>
//         <button onClick={()=> setCount(count-1)}>Decrement</button>
//         <button onClick={()=> setCount(count+1)}>Decrement</button>
//       </div>
//     );
//   }
// }
import React from 'react'
import ReactDOM from 'react-dom'
import App from './compoents/counter'

const MainScreen = () => <div className='alert'>
  <h3>計數器</h3>
  <App />
</div>

const rootElement = document.getElementById('root')
ReactDOM.render(<MainScreen />, rootElement)

// const cartList = [
//   'test1', 'text2'
// ]

// class Card extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSignUp = this.handleSignUp.bind(this);
//     this.state = {login: ''};
//   }

//   handleSignUp(e) {
//     this.setState({login: e.target.value});
//   }

//   render() {
//     return <div>
//         Hello, {this.props.name}
//         <button onClick={this.handleSignUp}>
//           Sign Me Up!
//         </button>
//     </div>;
//   }
// }

// const Card = () => {
//   return (
//     <div>
//       {cartList.map((el, inx) => {
//         return <Title key={inx} text={el} />
//       })
//       }
//       <Card2 />
//     </div>
//   )
// }

// const Card2 = () => {
//   return <div>
//     <Title text={'我是測試'} />
//   </div>
// }
// var Index = function Index () {
//   return React.createElement('a', {
//     className: 'helloworld'
//   }, 'Hello React,Webpack4,Babel7!')
// }

// ReactDOM.render(<Card />, document.querySelector('#root'))
// ReactDOM.render(React.createElement(Index, null), document.querySelector('#root'))
