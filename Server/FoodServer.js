const express = require('express');
const app = express();
const { connectDB, getDB } = require('./db');
const cors = require('cors')

app.use(express.json());
app.use(cors())

connectDB();


app.post('/addFoodItem', async (req, res) => {

    let cnt
    try {
        const db = getDB();
        cnt = await db.collection('FoodItems').find().count()

        data = {
            _id: cnt + 1,
            FoodName: req.body.foodName,
            Description: req.body.foodDes,
            Price: req.body.foodPrice,
            Calories: req.body.foodCal,
            Type: req.body.urlParamName,
            ImgSrc: req.body.foodImgSrc
        }
        try {

            const name = data.FoodName
            const food = await db.collection('FoodItems').findOne({ FoodName: name });

            if (food) {
                console.log("FOOD ALREADY EXSISTS")
                return res.status(400).json({ msg: 'Food item already exists' });

            }

            await db.collection('FoodItems').insertOne(data);

            res.json({ msg: '1 tem inserted' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
    catch (err) {
        console.error(err.message);
    }

});

app.get('/getFoodItems', async (req, res) => {
    try {
        const db = getDB();
        const items = await db.collection('FoodItems').find().toArray();

        res.send(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/getStarterItems', async (req, res) => {
    try {
        const db = getDB();
        const items = await db.collection('FoodItems').find({ Type: "starter" }).toArray();

        res.send(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


app.listen(5001, () => {
    console.log('Server started on port 5001');
});