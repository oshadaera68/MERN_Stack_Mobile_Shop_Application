const express = require('express')
const app = express();
const router = express.Router()
const signUp = require('../model/signup.model');


app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const signup = await signUp.find()
        res.json(signup)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.post('/', async (req, res) => {
    const signIns = new signUp({
        name: req.body.name,
        emailAddress: req.body.emailAddress,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    })

    try {
        const signups = await signUp.save()
        res.json(signups)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports = router;