const jwt = require('jsonwebtoken');
const { getDB } = require('./db');


const login = async (email, password) => {
    const db = getDB();
    const user = await db.collection('users').findOne({ email });

    function compare(a, b) {
        return a === b
    }
    if (!user) {
        console.log('User not found');
    }
    const isMatch = compare(password, user.password);
    if (!isMatch) {
        console.log('Invalid password');
        alert('Wrong Password')
        return null
    }
    const token = jwt.sign({ _id: user._id }, 'secret');
    return token;
};

const adminLogin = async (email, password) => {
    const db = getDB();
    const user = await db.collection('Admin').findOne({ email });

    function compare(a, b) {
        return a === b
    }
    if (!user) {
        console.log('Admin not found');
    }
    const isMatch = compare(password, user.password);
    if (!isMatch) {
        alert('Wrong Password')
        console.log('Invalid password');
        return null
    }
    const token = jwt.sign({ _id: user._id }, 'secret');
    return token;
};

module.exports = { login, adminLogin };

