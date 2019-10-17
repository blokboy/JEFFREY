import React, { useState, useEffect } from 'react' 
import Head from 'next/head'
import '../styles/themes.scss'
import Link from 'next/link'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SimpleReactValidator from 'simple-react-validator'
import Router from 'next/router'
import axios from 'axios'

const Register = () => {
  const [validator, setValidator] = useState(new SimpleReactValidator({ locale: 'en' }))
  const [state, setState] = useState({
      'name': '',
      'phone': '',
      'email': ''
  })

  const handleChange = name => e => {
    e.preventDefault()
    setState({ ...state, [name] : e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if(validator.allValid()) {
        const user = await axios.post('/api/register', { ...state })
        console.log(user)
    } else {
        validator.showMessages()
        Router.push('/register')
    }
  }

  return (
    <div>
        <Head>
            <title>JEFFREY</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <section className="hero is-danger is-fullheight">
            <div className="hero-head">
            <nav className="navbar">
                <div className="container">
       
                </div>
            </nav>
            </div>

            <div className="hero-body">
            <div className="container has-text-centered">
                <p className="title">
                    Registration
                </p>
                <div className="form">
                    <TextField
                        id="outlined-name"
                        label="Name (or Nickname)"
                        className="name"
                        value={state.name}
                        onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    {validator.message('name', state.name, 'required|alpha_num_dash_space')}
                    <TextField
                        id="outlined-email"
                        label="Email"
                        className="email"
                        value={state.email}
                        onChange={handleChange('email')}
                        margin="normal"
                        variant="outlined"
                    />
                    {validator.message('email', state.email, 'required|email')}
                    <TextField
                        id="outlined-phone"
                        label="Phone Number"
                        className="phone"
                        value={state.phone}
                        onChange={handleChange('phone')}
                        margin="normal"
                        variant="outlined"
                    />
                    {validator.message('phone', state.phone, 'required|phone')}
                    <br />
                    <Button variant="contained" color="secondary" className="submit" onClick={(e) => handleSubmit(e)}>
                        Register
                    </Button>
                </div>
            </div>
            </div>

            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                <div className="container">
                    <ul>
                    <li>
                    <Link href="/login">
                        <a>Login</a>
                    </Link> 
                    </li>
                    <li>
                    <Link href="/">
                        <a>Home Page</a>
                    </Link> 
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        </section>

        <style jsx>{`
            .form {
                width: 300px;
                height: 400px;
                margin: 0 auto;
                background: transparent;
            }
        `}</style>

    </div>
)}

export default Register