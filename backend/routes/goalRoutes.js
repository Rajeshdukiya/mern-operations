const express = require ('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.status(200).json({massage: "get goals"})
})

router.post('/', (req, res)=> {
    res.status(200).json({massage: "set goal"})
})

router.put('/:id', (req, res)=> {
    res.status(200).json({massage: `Update goal ${req.params.id}`})
})

router.delete('/:id', (req, res)=> {
    res.status(200).json({massage: `Delete goal ${req.params.id}`})
})

module.exports = router;