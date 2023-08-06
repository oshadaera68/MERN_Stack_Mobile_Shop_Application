const express = require('express');
const router = express.Router();
const app = express();
const SignIn = require('../model/signin.model');

app.use(express.json())

router.post('/signup', async (req, res) => {
    const signIn = new SignIn({
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