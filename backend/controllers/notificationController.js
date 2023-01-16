const mongoose = require('mongoose');
const Notification = require('../models/notificationModel');
const Patient = require('../models/patientModel');

// get all notifications
const getNotifications = async (req, res) => {
    // currently sort by createdAt in ascending order
    const notifications = await Notification.find().sort({createdAt: 1});

    res.status(200).json(notifications);
}

// see if need to add a function to get all notifications with a doctor and a patient

// get a single notification
const getNotification = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const notification = await Notification.findById(id);

    if(!notification){
        return res.status(404).json({error: 'No such notification'});
    }

    res.status(200).json(notification);
}

// create a notification
const createNotification = async (req,res)=>{
    // mainly here is to check if the data is valid with the structure first before passing to mongodb
    try{
        // add new document
        const notification = await Notification.create(req.body);
        // update the patient's notifications array for 2 way referencing
        const patient = await Patient.updateOne(
            {_id: notification.patient},
            {$push: {
                "notifications": notification._id
            }}
        );
        // confirm patient exist, hence no need to check if patient and medicine exist
        res.status(200).json(notification);
    }catch(error){
        res.status(400).json({error: error.message})
    }

}

// delete a notification
const deleteNotification = async (req, res) => {

    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const notification = await Notification.findByIdAndDelete(id); 
    // replace deleteOne with findByIdAndDelete to get the deleted document back

    if(!notification){
        return res.status(404).json({error: 'No such notification'});
    }

    // update the patient's notifications array for 2 way referencing
    const patient = await Patient.updateOne(
        {_id: notification.patient},
        {$pull: {
            "notifications": notification._id
        }}
    );
    // confirm patient exist, hence no need to check if patient and medicine exist
    res.status(200).json(notification);
}

// update a notification
const updateNotification = async (req, res) => {
    const { id } = req.params;
    
    // always validate the id first before passing to mongodb
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'id is not valid'});
    }

    const notification = await Notification.updateOne({_id: id},{...req.body}) //... means spread operator, so it will spread the req.body into dedicated key-value pairs

    if(!notification){
        return res.status(404).json({error: 'No such notification'});
    }

    res.status(200).json(notification); 
}


module.exports = {
    getNotifications,
    getNotification,
    createNotification,
    deleteNotification,
    updateNotification
}
