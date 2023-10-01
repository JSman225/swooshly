const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient('mongodb+srv://leonardikarl:hvX91y0gskxo39aF@swooshly.tcrshyy.mongodb.net/?retryWrites=true');

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const searchTerm = event.queryStringParameters.q; // Get the search term from the query parameters
        const database = (await clientPromise).db('swooshly_user_data');
        const collection = database.collection('users');

        // Create a text index on the 'username' field (if not already created)
        await collection.createIndex({ username: 'text' });

        // Create a case-insensitive regex pattern for the search term
        const searchRegex = new RegExp(searchTerm, "i");

        // Perform the search using the regex pattern on the indexed 'username' field
        const results = await collection
            .find({ username: { $regex: searchRegex } })
            .limit(6)
            .toArray();

        return {
            statusCode: 200,
            body: JSON.stringify(results),
        };
    } catch (error) {
        return { statusCode: 500, body: error.toString() };
    }
};

module.exports = { handler };