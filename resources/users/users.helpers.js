// const {find,findById,remove,update,create} = require("./users.model");
const Users = require("./users.model");

async function find(req,res,next) {
    console.log("in here spirit break out living oyt ")
    try {
       const users = await Users.find();
       res.json(users);
    } catch(e) {
        next({status:500,message:e})
    }
}

async function create(req,res,next) {
    try {
       const users = await Users.create(req.body);
       res.json(users);
    } catch(e) {
        next({status:500,message:e})
    }
}




module.exports  = {
    find,
    // findById,
    // remove,
    // update,
    create
}

