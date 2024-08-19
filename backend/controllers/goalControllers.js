// @desc Get goals
// @route GET /api/goals
// @acces private
const getGoals = (req, res) =>{
    res.status(200).json({massage: "get goals"})
}

// @desc Set goals
// @route POST /api/goals
// @acces private
const setGoals = (req, res) =>{
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({massage: "set goal"})
}

// @desc Update goals
// @route PUT /api/goals/:id
// @acces private
const updateGoals = (req, res) =>{
    res.status(200).json({massage: `Update goals ${req.params.id}`})
}

// @desc Delete goals
// @route DELETE /api/goals/:id
// @acces private
const deleteGoals = (req, res) =>{
    res.status(200).json({massage: `Delete goals ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals

}