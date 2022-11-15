const model=require('../models/model')
// Get Categories



// Post route to create new categories is the following >
// post http://localhost:8080/api/categories
function get_categories(req,res){
    const create=new model.categories({
        type:"Savings",
        color:'#1F3B5C' //dark
    })
    
    create.save(function(err){
        if(!err)return res.json(create);
        return res.status(400).json({message:`Error while creating categories: ${err}`});
    })
    // res.json("Get Request from Categories")
}

module.exports={
    get_categories
}