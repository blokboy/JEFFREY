import withDatabase from './withDatabase'
import withSession from './withSession'

const middleware = handler => withDatabase(withSession(handler))

export default middleware