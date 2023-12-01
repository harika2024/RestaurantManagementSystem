const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://harikaanaparthi99:Abcdefg123@cluster0.8v8igti.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

let db;

const connectDB = async () => {
    try {
        await client.connect();
        db = client.db("Resdb");
        console.log("Connected to MongoDB Atlas");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

const getDB = () => db;

module.exports = { connectDB, getDB };
