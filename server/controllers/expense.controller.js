const model=require('../models/model')
// Get Categories



// Post route to create new categories is the following >
// post http://localhost:8080/api/categories
async function create_categories(req,res){
    const create=new model.Categories({
        type:"Investment",
        color:'#FCBE44' //dark
    })
    
    await create.save(function(err){
        if(!err)return res.json(create);
        return res.status(400).json({message:`Error while creating categories: ${err}`});
    })
    // res.json("Get Request from Categories")
}


// get http://localhost:8080/api/categories
async function get_categories(req,res){
    let data=await model.Categories.find({})


    let filter = await data.map(v =>Object.assign({},{type:v.type,color:v.color}))
    return res.json(filter);
}

// post http://localhost:8080/api/transaction
async function create_transaction(req,res){
    if(!req.body)return res.status(400).json("Post HTTP Data not Provided!")
    let {name,type,amount}=req.body;

    const create=await new model.Transaction({
        name,
        type,
        amount,
        date:new Date()
    })

    create.save((err)=>
    {if(!err)return res.json(create);
    return res.status(400).json({message:`Error while creating Transaction ${err}`})})

}


// get http://localhost:8080/api/transaction
async function get_transaction(req,res){
    let data=await model.Transaction.find({});
    return res.json(data);
}


//  delete: http://localhost:8080/api/transaction
async function delete_transaction(req, res){
    if (!req.body) res.status(400).json({ message: "Request body not Found"});
    await model.Transaction.deleteOne(req.body, function(err){
        if(!err) res.json("Record Deleted!");
    }).clone().catch(function(err){ res.json("Error while deleting Transaction Record")});
}

//  get: http://localhost:8080/api/labels
async function get_labels(req, res){

    model.Transaction.aggregate([
        {
            $lookup : {
                from: "categories",
                localField: 'type',
                foreignField: "type",
                as: "categories_info"
            }
        },
        {
            $unwind: "$categories_info"
        }
    ]).then(result => {
        let data = result.map(v => Object.assign({}, { _id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categories_info['color']}));
        res.json(data);
    }).catch(error => {
        res.status(400).json("Looup Collection Error");
    })

}

//Aggregate allows us to join two requests and look up 
// Lookup is a function that allows us to lookup for a specific field from a specific collection

module.exports={
    create_categories,
    get_categories,
    create_transaction,
    get_transaction,
    delete_transaction,
    get_labels
}