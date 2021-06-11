const express = require ('express');
const bodyParser = require('body-parser')
const path = require('path')

const router = express.Router();  
const reviewControllers = require('../Controllers/register.controllers');

// implement application routes / endpoints
router.get('/', async (req, res)=> {
    let registers = await registerControllers.fetchAllReviews();
    return res.json({registers})
});

router.post('/add', async (req, res) => {
    let {fullName, message} = req.body;
    let created = await registerControllers.createReview({fullName, message })
    return res.json({created})
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const {fullName} = req.query
    let data = await registerControllers.fetchReview(id);
    return res.json({ data });
})

router.put('/:id/update', async (req, res) => {
    const {id} = req.params;
    const {message} = req.body;
    let updated = await registerControllers.updateReview(id, message)
    res.json({data: updated})
})

router.delete('/:id/delete', async (req, res) => {
    const {id} = req.params;
    response = await registerControllers.deleteReview(id)
    return res.json({data: response})
})

module.exports = router