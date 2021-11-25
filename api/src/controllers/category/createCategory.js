const Category = require('../../models/Category');

module.exports = async (req, res, next) => {
    const { name } = req.body
    try {
        const category = new Category({
            name: name,           
        });
        await category.save();
        res.json({msg: "Category created", category});
    } catch(err) {
        next(err)
    }
}