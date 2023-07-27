const express = require('express')
const app = express();
const router = express.Router()
const Item = require('../model/item.model')

app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const item = await Item.find()
        res.json(item)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.post('/', async (req, res) => {
    const items = new Post({
        itemId: req.body.itemId,
        itemName: req.body.itemName,
        itemQty: req.body.itemQty,
        itemPrice: req.body.itemPrice,
    })

    try {
        const saveItem = await items.save()
        res.json(saveItem)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        res.json(item)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.put('/:id', async(req, res)=>{
    try {
        const itemUpdate = await Item.findById(req.params.id)
        itemUpdate.itemId= req.body.itemId;
        itemUpdate.itemName= req.body.itemName;
        itemUpdate.itemQty= req.body.itemQty;
        itemUpdate.itemPrice= req.body.itemPrice;
        const update = await postUpdate.save()
        res.json(update)
    } catch (error) {
        res.send('Err: ' + err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const itemId = await Item.findById(req.params.id)
        const response = await itemId.remove();
        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports = router;