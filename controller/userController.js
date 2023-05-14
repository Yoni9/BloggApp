const User = require("../models/user");

module.exports = {
 
  createUser: async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
      } catch (error) {
        console.log(error);
        res.status(400).send(error);
      }
  },


  getUser: async (req, res)=> {
    try {
        const users = await User.find();
        res.send(users);
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
  },


};
