const express = require('express');
const router = express.Router();
const checkAuth = require('./check-auth');

const Statistic = require('./statisticModel');

//API post template count
router.post('/add/template/:id', async(req,res)=>{
    try{
        const statistic = new Statistic({
            userID: req.params.id,
            template: req.body.template
        });
        await statistic.save();
        res.redirect('/template/all');
    }catch (error){
        console.log(error);
    }
});

//API get alll template count
router.get('/template/all', async(req, res)=>{
    try{
        const statistic = await Statistic.find();
        res.send(statistic);
    }catch(err){
      console.log(err);
    }
});
module.exports = router;


