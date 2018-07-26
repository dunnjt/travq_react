import React, { PureComponent } from 'react'
import { Mutation } from 'react-apollo'

import LOGIN from '../graphql/login.graphql'

class Login extends PureComponent {
    state = {email: '', password: ''}
    handleChange = event => 
        this.setState({ [event.target.id] : event.target.value })
    render() {
        return (
            <Mutation mutation={LOGIN} update={(cache, {data: { createLogon }}) => {
                const data = { auth: {userId: createLogon.id, __typename: 'Auth'} }
                cache.writeData({ data })
            }}>
                {(login) => (
                    <div className='modal fade' id='loginModal' tabIndex='-1' role='dialog' aria-labelledby='loginModalLabel' aria-hidden='true'>
                    <div className='modal-dialog' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title' id='loginModalLabel'>Log In</h5>
                            </div>
                            <div className='modal-body'>
                                <div className='text-left mb-3'>Login with your email and password.</div>
                                <form>
                                    <div className='form-group'>
                                        <input onChange={this.handleChange} value={this.state.email} id='email' type='text' className='form-control' placeholder='Email' />
                                    </div>
                                    <div className='form-group'>
                                        <input onChange={this.handleChange} value={this.state.password} id='password' type='password' className='form-control' placeholder='Password' />
                                    </div>
                                </form>
                            </div>
                            <div className='text-center'>
                                <button onClick={() => {
                                    login({variables: {email: this.state.email, password: this.state.password}})
                                    this.setState({email: '', password: ''})
                                    }} type='button' className='btn btn-travq'>Login</button><br />
                                <button type='button' className='btn py-2 my-1 btn-link' data-dismiss='modal'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </Mutation>
        )
    }
}

export default Login
    