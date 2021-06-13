const router = express.Router();  
const reviewControllers = require('../Controllers/registers.controllers');

// implement application routes / endpoints
router.get('/', async (req, res)=> {
    let registers = await registerControllers.fetchAllRegisters();
    return res.json({registers})
});

router.post('/add', async (req, res) => {
    let {fullName, email, password, gender,location} = req.body;
    let created = await registerControllers.createRegister({fullName, email, password, gender,location })
    return res.json({created})
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const {fullName} = req.query
    let data = await registerControllers.fetchRegister(id);
    return res.json({ data });
})

router.put('/:id/update', async (req, res) => {
    const {id} = req.params;
    const {email} = req.body;
    let updated = await registerControllers.updateRegister(id, email)
    res.json({data: updated})
})

router.put('/:id/update', async (req, res) => {
    const {id} = req.params;
    const {gender} = req.body;
    let updated = await registerControllers.updateRegister(id, gender)
    res.json({data: updated})
})

router.put('/:id/update', async (req, res) => {
    const {id} = req.params;
    const {location} = req.body;
    let updated = await registerControllers.updateRegister(id, location)
    res.json({data: updated})
})


router.delete('/:id/delete', async (req, res) => {
    const {id} = req.params;
    response = await registerControllers.deleteRgister(id)
    return res.json({data: response})
})

module.exports = router