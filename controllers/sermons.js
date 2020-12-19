const Sermon = require('../models/sermon');
const User = require('../models/user');

// default action 
exports.index = async (req, res, next) => {
    try {
        const sermons = await Sermon.find();
        res.status(200).json(sermons);
    }
    catch (error) {
        next(error);
    }
};

// show action 
exports.show = async (req, res, next) => {
    try {
        const sermons = await Sermon.findById(req.params.id);

        res.status(200).json(sermons);
    } catch (error) {
        next(error);
    }
}

// create action
exports.create = async (req, res, next) => {
    try {
        const { sermon, description, dateOfPublish } = req.body;

        const user = await User.findById(req.user._id);

        const sm = await Sermon.create({
            author: user.name,
            sermon,
            description,
            date: new Date(dateOfPublish)
        });

        res.status(200).json({ message: "The Sermon was created successfully", sermon: sm });
    } catch (error) {
        next(error);
    }
};

// update action
exports.update = async (req, res, next) => {
    try {
        const { _id, sermon, description, dateOfPublish } = req.body;
        const sm = await Sermon.findOneAndUpdate({ _id: _id }, {
            sermon,
            description,
            date: new Date(dateOfPublish)
        });

        res.status(200).json({ message: "The Sermon was updated successfully", sermon: sm });
    } catch (error) {
        next(error);
    }
};

// delete action 
exports.destroy = async (req, res, next) => {
    try {
        const { _id } = req.body;
        await Sermon.findOneAndDelete({ _id: _id });

        res.status(200).json({ message: "The Sermon was deleted successfully" });
    } catch (error) {
        next(error);
    }
};