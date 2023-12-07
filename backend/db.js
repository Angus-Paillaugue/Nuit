import { MongoClient } from 'mongodb';
import 'dotenv/config';

const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);
const database = client.db('Website');
const factsRef = database.collection('facts');
const tetrisScoresRef = database.collection('tetrisScores');

export { factsRef, tetrisScoresRef };