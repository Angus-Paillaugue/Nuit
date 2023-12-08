import { MongoClient } from 'mongodb';
import 'dotenv/config';

const client = new MongoClient("mongodb+srv://NIC_backend:ixLV65haancQDUkW@niccluster.xgmwvj4.mongodb.net/");
const database = client.db('Website');
const factsRef = database.collection('facts');

export { factsRef };