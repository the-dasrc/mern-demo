const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/get-all',(req, res, next) => {
    User.find({}, 'name')
    .then(data => res.json(data))
    .catch(next);
});

router.post('/create',(req, res, next) => {
    if(req.body.name){
        User.create(req.body)
        .then(data => res.json(data))
        .catch(next);
    }else{
        res.json({error: 'name required'})
    }
});


router.delete('/user/:id',(req, res, next) => {
   User.findOneAndDelete({"_id": req.params.id})
   .then(data => res.json(data))
   .catch(next);
});

module.exports = router;