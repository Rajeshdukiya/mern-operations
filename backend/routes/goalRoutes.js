const express = require ('express');
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalControllers');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoals);
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals);

module.exports = router;