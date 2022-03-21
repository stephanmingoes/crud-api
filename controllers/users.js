const User = require("../models/users");
const mongoose = require("mongoose");

// Fetch all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      message: "Success",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Fetch specific user
const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user)
      return res.status(404).json({ message: "No user with that id exists." });
    res.status(200).json({ message: "Success", data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Create a new user
const createUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await User.create({
      ...user,
    });
    res.status(201).json({ message: "Success", data: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Update existing user
const updateUser = async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ message: "No user with that id exists." });

    const updateUser = await User.findByIdAndUpdate(
      id,
      { ...user },
      { new: true }
    );
    res.status(201).json({ message: "Success", data: updateUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
