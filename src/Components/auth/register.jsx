import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './auth.module.css';
import { connect } from 'react-redux'
import { register_user } from '../../Redux/userAction'
import { Redirect, Link } from 'react-router-dom'


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            age: "",
            email: "",
            mobile: "",
            pwd: "",
            license: "",
            history: []

        }
    }
    handle = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = () => {
        const { name, age, email, pwd, mobile, license } = this.state
        if (name.length > 0 && age.length > 0 && email.length > 0 && pwd.length > 0 && mobile.length > 0 && license.length > 0) {
            this.props.register_user(this.state);
            console.log(this.state)
            this.setState({ name: "", mobile: "", age: "", email: "", pwd: "", license: "" })
        }
        else {
            alert("Data is missing")
        }
    }
    componentDidMount() {
        this.setState({ id: this.props.user_data.length + 1 })
    }
    render() {
        console.log(this.props)
        const { is_auth, user_data } = this.props
        console.log(is_auth, user_data)
        if (is_auth)
            return (<Redirect to='/' />)
        else {
            return (
                <div className={styles.form}>
                    <TextField label="Name" value={this.state.name} name="name" onChange={this.handle} />
                    <br />
                    <TextField label="Email" value={this.state.email} name="email" onChange={this.handle} />
                    <br />
                    <TextField label="Mobile" value={this.state.mobile} name="mobile" onChange={this.handle} />
                    <br />
                    <TextField label="Age" value={this.state.age} name="age" onChange={this.handle} />
                    <br />
                    <TextField label="License Number" value={this.state.license} name="license" onChange={this.handle} />
                    <br />
                    <TextField label="Password" value={this.state.pwd} name="pwd" onChange={this.handle} />
                    <br />
                    <button className={styles.submit} onClick={this.handleSubmit}>Register</button>
                    <br />
                    <br />
                    <p>If you have an account <Link to='/login'>Sign in</Link>
                    </p>
                </div>
            )
        }
    }
}


const mapStateToProps = state => ({
    is_auth: state.user.isauth,
    user_data: state.user.user_data

})
const mapDispatchToProps = dispatch => ({
    register_user: (datas) => dispatch(register_user(datas))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);

