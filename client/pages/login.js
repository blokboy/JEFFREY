import React, { useState, useEffect } from 'react' 
import Head from 'next/head'
import '../styles/themes.scss'
import Link from 'next/link'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SimpleReactValidator from 'simple-react-validator'
import Router from 'next/router'

const Login = () => {
  const [validator, setValidator] = useState(new SimpleReactValidator({ locale: 'en' }))
  const [phone, setPhone] = useState('')


  const handleChange = e => {
    e.preventDefault()
    setPhone(e.target.value)
  }
    
  const handleSubmit = async e => {
    e.preventDefault()
    if(validator.allValid()) {
        console.log(phone)
    } else {
        validator.showMessages()
        Router.push('/login')
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
                    Login
                </p>
                <div className="form">
                    <TextField
                        id="outlined-phone"
                        label="Phone Number"
                        className="phone"
                        value={phone}
                        onChange={(e) => handleChange(e)}
                        margin="normal"
                        variant="outlined"
                    />
                    {validator.message('phone', phone, 'required|phone')}
                     <br />
                    <Button variant="contained" color="secondary" className="submit" onClick={(e) => handleSubmit(e)}>
                        Login
                    </Button>
                </div>
            </div>
            </div>

            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullwidth">
                <div className="container">
                    <ul>
                    <li>
                    <Link href="/">
                        <a>Home Page</a>
                    </Link> 
                    </li>
                    <li>
                    <Link href="/register">
                        <a>Register</a>
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
                height: 150px;
                margin: 0 auto;
                background: transparent;
            }
        `}</style>
    </div>
)}

export default Login