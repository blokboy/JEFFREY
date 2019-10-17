import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import '../styles/themes.scss'
import Lifestyle from '../public/lifestyle.svg'
import Link from 'next/link'

const Home = () => (
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
        <div className="portrait">
            <img src={Lifestyle} alt="Person using phone to interact with app." className="lifestyle" />
          </div>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">
            JEFFREY
          </p>
          <p className="subtitle">
            the best butler ever.
          </p>
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
      .portrait {
        width: 30%;
        height: 30%;
        margin: 0 auto;
        background: transparent;
        animation: float 6s ease-in-out infinite;
      }
      .subtitle {
        cursor: default;
        font-weight: lighter;
        font-size: 18px;
        font-family: Comic Sans MS;
        text-align: center;
        width: 100%;
        padding: 5px;
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
          typing 3.5s steps(50, end),
          blink-caret .75s step-end;
      }
      /* The typing effect */
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      /* The typewriter cursor effect */
      @keyframes blink-caret {
        from, to { border-color: white }
        50% { border-color: transparent; }
      }
      @keyframes float {
        0% {
          transform: translatey(0px);
        }
        50% {
          transform: translatey(-20px);
        }
        100% { 
          transform: translatey(0px);
        }
      }
    `}</style>
  </div>
)

export default Home
