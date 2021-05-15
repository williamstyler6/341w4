const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callBack) => {
    MongoClient.connect(
        'mongodb+srv://tylerwilliams6:bp7yEzdJ8qxKw6og@341cluster.u9uur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        )
        .then(client => {
            console.log('Connected!');
            _db = client.db();
            callBack(client);
        })
        .catch(err => {
            console.log(err);
            throw err;
        });

        const getDb = () => {
            if (_db) {
                return _db;
            }
            throw "Error here!"
        }
};

exports.mongoConnect = mongoConnect;
exports.mongodb = mongodb;
