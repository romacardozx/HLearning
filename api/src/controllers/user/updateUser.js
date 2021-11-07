const User = require('../../models/User');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    const newDataUser = req.body;
    try {
        const user = await User.findOneAndUpdate({_id:id},
            newDataUser, {
                new:true
            });
        if(user) {
            res.json(user);
        } else {
            res.json({msg: "The user that you're trying to edit doesn't exist"})
        }
    } catch(err) {
        console.log(err);
        next(err);
    }
}