const db = require('../util/database')

class Product {
    constructor(title, price, description, imageUrl) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    save() {
        const db = getDb();
        db.collection('products')
        .insertOne(this)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        products.push(this);
        const db = getDb();
    }

    static fetchAll() {
        return products;
    }
}