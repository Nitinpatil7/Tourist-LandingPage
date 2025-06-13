const destinations = require('./model/destination');
const packages = require('./model/packages');
exports.postdestination=async(req,res)=>{
    try {
        const {image, destination , price} = req.body;
        const newdestination = new destinations({
            image , destination , price
        })

        await newdestination.save();
        res.status(200).json({message:"Destination added successfully", data: newdestination});
    } catch (error) {
        res.status(400).json({message:"Error adding destination", error: error.message});
    }
}

exports.postpackages=async(req,res)=>{
    try {
        const {image, destination } = req.body;
        const newpackages = new packages({
            image , destination 
        })

        await newpackages.save();
        res.status(200).json({message:"Destination added successfully", data: newpackages});
    } catch (error) {
        res.status(400).json({message:"Error adding destination", error: error.message});
    }
}

exports.getdestination = async(req,res)=>{
    try {
        const destination = await destinations.find();
        res.status(200).json({message:"Destination fetched successfully", data: destination});

    } catch (error) {
        res.status(400).json({message:"Error fetching destination", error: error.message});
    }
}


exports.getpackages = async(req,res)=>{
    try {
        const destination = await packages.find();
        res.status(200).json({message:"Destination fetched successfully", data: destination});

    } catch (error) {
        res.status(400).json({message:"Error fetching destination", error: error.message});
    }
}