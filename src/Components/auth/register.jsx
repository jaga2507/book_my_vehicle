import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './auth.module.css';
import { connect } from 'react-redux'
import { register_user } from '../../Redux/userAction'
import { Redirect, Link } from 'react-router-dom'
import swal from 'sweetalert'


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: "",
            name: "",
            age: "",
            email: "",
            mobile: "",
            password: "",
            lisenceId: "",
            history: []

        }
    }
    handle = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = () => {
        const { name, age, email, password, mobile, lisenceId } = this.state
        if (name.length > 0 && age.length > 0 && email.length > 0 && password.length > 0 && mobile.length > 0 && lisenceId.length > 0) {
            swal("Registered Successful", "Your Details has been saved ", "success");
            this.props.register_user(this.state);
            this.setState({ name: "", mobile: "", age: "", email: "", pwd: "", license: "" })
        }
        else {
            alert("Data is missing")
        }
    }
    componentDidMount() {
        this.setState({ userId: this.props.user_data.length + 1 })
    }
    render() {
        const { is_auth } = this.props
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
                    <TextField label="License Number" value={this.state.license} name="lisenceId" onChange={this.handle} />
                    <br />
                    <TextField label="Password" value={this.state.pwd} name="password" onChange={this.handle} />
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

