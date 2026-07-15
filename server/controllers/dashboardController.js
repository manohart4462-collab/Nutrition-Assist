const User = require("../models/User");

const getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // BMI
    const heightInMeters = user.height / 100;
    const bmi =
      user.height && user.weight
        ? (user.weight / (heightInMeters * heightInMeters)).toFixed(1)
        : null;

    // Simple BMR Formula
    let calories = 0;

    if (user.gender === "Male") {
      calories =
        10 * user.weight +
        6.25 * user.height -
        5 * user.age +
        5;
    } else {
      calories =
        10 * user.weight +
        6.25 * user.height -
        5 * user.age -
        161;
    }

    res.json({
      name: user.name,
      bmi,
      calories: Math.round(calories),
      goal: user.goal,
      waterTarget: 3,
      waterConsumed: 0,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getDashboard,
};