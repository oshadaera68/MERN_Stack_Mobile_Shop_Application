const express = require('express');
const router = express.Router();
const app = express();
const SignIn = require('../model/signin.model');

app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const signin = await SignIn.find()
        res.json(signin)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.post('/', async (req, res) => {
    const signIn = new Post({
        userName: req.body.userName,
        password: req.body.password
    })

    try {
        const signins = await signIn.save()
        res.json(signins)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports = router;