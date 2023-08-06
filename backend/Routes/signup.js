const express = require('express')
const app = express();
const router = express.Router()
const SignUp = require('../model/signup.model');


app.use(express.json())

router.post('/', async (req, res) => {
    const signups = new SignUp({
        name: req.body.name,
        emailAddress: req.body.emailAddress,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    })

    try {
        const signup = await signups.save()
        res.json(signup)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports = router;