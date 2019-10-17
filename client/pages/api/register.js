require('dotenv').config()
import withMiddleware from '../../middlewares/withMiddleware'
const authy = require('authy')(process.env.AUTHY_API_KEY)

const handler = async (req, res) => {
    try {
        if(req.method === 'POST') {
            const { name, email, phone } = req.body
    
            const userExists = await req.db.collection('users').countDocuments({ phone })
            
            if(userExists)
                return res.send({ message: 'There is already a user with this phone number.' })
            else {
                const user = await authy.register_user(email, phone, (err, res) => {
                    console.log(res)
                    return res
                })
                console.log(user)
                return res.send({ message: 'Endpoint hit!', name, email, phone, user })
            }
            
            // We need to add the user to Authy first and then we get back the
            // Authy user ID and then we add them to the database from there.
        }
    } catch({ err }) {
        return res.send({ err })
    }
    
}

export default withMiddleware(handler)