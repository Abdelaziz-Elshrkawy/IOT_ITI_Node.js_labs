import { MongoClient, UUID, Collection } from "mongodb";
import { User } from "../types/typeUser";
import dotenv from "dotenv";

dotenv.config();
const mongodb_uri = process.env.mongodb_uri;
const mongodb_db = process.env.mongodb_db;

const mongoConnection = new MongoClient(mongodb_uri as string);
const collection: Collection = mongoConnection
  .db(mongodb_db)
  .collection("collection");


export const getUsers = async (_id?: UUID): Promise<[]> => {
  try {
    await mongoConnection.connect();
    console.log("connected");
    if (_id) return (await collection.find({ _id } as object).toArray()) as [];
    else return (await collection.find({}).toArray()) as [];
    
  } catch (err) {
    throw err;
  }

};

export const addUser = async (user: User): Promise<void> => {
  try {
    await mongoConnection.connect();
    console.log('Added')
    await collection.insertOne(user);
  } catch (err) {
    throw err;
  }
};
