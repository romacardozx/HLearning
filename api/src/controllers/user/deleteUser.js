const User = require("../../models/User");

module.exports = async (req, res, next) => {
    const { id } = req.params;
    console.log("HOLIIIII LE PEGUE")
    try {
        let user = await User.findOneAndUpdate({_id:id}, {status: "Deleted"});
        if(user) {
            res.json({msg: "User deleted"});
        } else {
            res.json({msg: "The user that you're trying to delete doesn't exist"})
        }
    } catch(err) {
        console.log(err);
        next(err);
    }
}