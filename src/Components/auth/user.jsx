import React, { Component } from 'react';
import Register from './register';
import Login from './login'
import styles from './auth.module.css'
import { Link, Route } from 'react-router-dom'

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: 'false',
            show: 'true',
            bt1: true,
            bt2: false
        }
    }
    handle = (e) => {
        if (e.target.name === 'login') {
            this.setState({ check: 'true' })
            this.setState({ show: 'false' })
            this.setState({ bt1: true })
            this.setState({ bt2: false })
        }
        if (e.target.name === 'register') {
            this.setState({ show: 'true' })
            this.setState({ check: 'false' })
            this.setState({ bt1: false })
            this.setState({ bt2: true })
        }
    }
    render() {
        const { match } = this.props
        console.log(this.props)
        return (
            <div>
                <Link to={`${match.url}/register`}>
                    <button style={{ outline: "none" }} className={this.state.bt2 ? `${styles.active} ${styles.head}` : `${styles.inactive} ${styles.head}`} name="register" onClick={this.handle}>Register</button>
                </Link>
                <Link to={`${match.url}/login`}>
                    <button style={{ outline: "none" }} className={this.state.bt1 ? `${styles.active} ${styles.header}` : `${styles.inactive} ${styles.header}`} name="login" onClick={this.handle}>Login</button>
                </Link>
                {this.state.show === 'true' ?
                    <div >
                        <Route
                            exact path={`${match.path}/register`}
                            component={() => <Register />}
                        />
                    </div> :
                    <div style={{ display: 'none' }}>
                        <Route
                            exact path={`${match.path}/register`}
                            component={() => <Register />}
                        />
                    </div>
                }
                {this.state.check === 'true' ?
                    <div >
                        <Route
                            path={`${match.path}/login`}
                            component={() => <Login />}
                        />
                    </div> :
                    <div style={{ display: 'none' }}>
                        <Route
                            path={`${match.path}/login`}
                            component={() => <Login />}
                        />
                    </div>
                }

            </div>
        )
    }
}