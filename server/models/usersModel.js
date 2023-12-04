const { ObjectId } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);

exports.add = async function(username, email, pass) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("redditYopta");
        const collection = db.collection("users");
        const data = {userName: username, email: email, password: pass};
        await collection.insertOne(data);
        return Promise.resolve('success');
    }catch(err) {
        throw(err)
    }
}

exports.getByEmail = async function(email) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("redditYopta");
        const collection = db.collection("users");
        const result = await collection.findOne({email: email})
        return Promise.resolve(result);
    }catch(err) {
        throw(err)
    }
}

exports.getByUserName = async function(username) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("redditYopta");
        const collection = db.collection("users");
        const result = await collection.findOne({userName: username})
        return Promise.resolve(result);
    }catch(err) {
        throw(err)
    }
}

exports.useCheck = async function (email, username) {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("redditYopta");
        const collection = db.collection("users");
        const resultLogin = await collection.findOne({userName: username})
        const resultEmail = await collection.findOne({email: email})
        console.log(resultEmail, resultLogin)
        if (resultEmail != null || resultLogin != null) {
            console.log("use123")
            return Promise.resolve("in use")
        }
    }catch(err) {
        throw(err)
    }
}

exports.edit = async function(body) {
    try {

    }catch(err) {
        throw(err)
    }
  }