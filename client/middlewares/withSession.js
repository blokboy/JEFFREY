require('dotenv').config()
import session from 'next-session'
import connectMongo from 'connect-mongo'

const MongoStore = connectMongo(session)

// dont forget to switch to mongo URI for final deploy
const withSession = handler => session.withSession(handler, {
    store: new MongoStore({ url: process.env.MONGOLAB_URI })
})

export default withSession