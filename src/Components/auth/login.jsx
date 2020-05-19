import React, { Component } from 'react';
import styles from './auth.module.css'
import TextField from '@material-ui/core/TextField';
import { login_user } from '../../Redux/userAction'
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'
import swal from 'sweetalert'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            pwd: ""
        }
    }
    handle = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submit = () => {
        const { pwd, username } = this.state;
        if (pwd.length > 0 && username.length > 0) {
            this.props.login_user(username, pwd)
        }
        else {
            alert("Dtat Missing")
        }
    }

    render() {
        const { is_auth, is_error } = this.props
        if (is_auth) {
            swal("Loogin Successful", "Book Your Vehicles ", "success");
            return (<Redirect to='/' />)
        }
        else {
            return (
                <div className={styles.login}>
                    {is_error ? <div style={{ color: "red", marginBottom: "10px" }}>Invalid username or password</div> : null}
                    <TextField label="Username" value={this.state.username} name="username" onChange={this.handle} />
                    <br />
                    <TextField label="Password" value={this.state.pwd} name="pwd" onChange={this.handle} />
                    <br />
                    <button className={styles.submit} onClick={this.submit} >Login</button>
                    <br />
                    <br />
                    <p style={{ fontSize: "20px", color: "black" }}>If you don't' have an account <Link to='/register'>Sign up</Link>
                    </p>
                </div >
            )
        }
    }
}

const mapStateToProps = state => ({
    is_auth: state.user.isauth,
    is_error: state.user.is_error
})
const mapDispatchToProps = dispatch => ({
    login_user: (email, pwd) => dispatch(login_user(email, pwd))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);