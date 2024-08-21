const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')
const { text } = require('body-parser')

// @desc Get goals
// @route GET /api/goals
// @acces private
const getGoals = asyncHandler( async (req, res) =>{
    const goals = await Goal.find({ user: req.user.id })

    
    res.status(200).json(goals)
})

// @desc Set goals
// @route POST /api/goals
// @acces private
const setGoals = asyncHandler( async (req, res) =>{
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goal)
})

// @desc Update goals
// @route PUT /api/goals/:id
// @acces private
const updateGoals = asyncHandler( async (req, res) =>{

    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const  user = await UserActivation.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user,toString() !== user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
    
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})

// @desc Delete goals
// @route DELETE /api/goals/:id
// @acces private
const deleteGoals = asyncHandler( async (req, res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const  user = await UserActivation.findById(req.user.id)

    // Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user,toString() !== user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
    

    await goal.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals

}