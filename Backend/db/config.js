const mongoose =require('mongoose')

const connectToDB = () => {
        mongoose
        .connect('mongodb://localhost:27017/',{
            dbName: 'BookNest'
        })
        .then(()=>{
            console.log('Connected to DB')
        })
        .catch(()=>{
            console.log('Error Connected to DB')
        })
}

module.exports = connectToDB