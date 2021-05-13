import React, { Component } from 'react';
import { auth } from 'actions/auth/auth'
import { connect } from 'react-redux'

class UserPage extends Component{

  constructor() {
    super()

    this.state = {
      name: 'Jhon',
      count: 0,
      usuario: '',
      password: ''
    }
    // console.log('constructor')
  }

  componentDidMount() {
    const { name } = this.state
    // console.log('componentDidMount', name)
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    // console.log('nextProps', nextProps)
    // console.log('nextState', nextState)
  }

  componentDidUpdate(prevProps, { count }) {
    // console.log('componentDidUpdate', this.state.count, count)
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount')
  }

  contador = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { auth } = this.props
    const { usuario, password } = this.state
    const request = {
      usuario,
      password
    }
    auth(request)
  }

  onChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    console.log('this.props', this.props)
    // console.log('this.state' , this.state)
    return (
      <>
        <div> textInComponent </div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="usuario" onChange={this.onChange} />
          <input type="password" name="password" onChange={this.onChange} />
          <br />
          <button type="submit">Log in</button>
        </form>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  auth: (object) => dispatch(auth(object))
})

const mapStateToProps = (state) => ({
  login: state.auth.auth
})

const Main = connect(mapStateToProps, mapDispatchToProps)(UserPage)

export default  Main
