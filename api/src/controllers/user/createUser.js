const User = require('../../models/User');

// Crear User desde el front (solo hacemos una copia de lo que administra Auth0)

module.exports = async (req, res, next) => {
    const data  = req.body    
    try {
        const user = new User(data);      
        await user.save();
        res.json({msg: "User created", user});
    } catch(err) {
        next(err)
    }
}