import {
  MongoClient,
  Collection,
  ObjectId,
} from "mongodb";
import { User } from "../types/typeUser";
import dotenv from "dotenv";

dotenv.config();
const mongodb_uri = process.env.mongodb_uri;
const mongodb_db = process.env.mongodb_db;

const mongoConnection = new MongoClient(mongodb_uri as string);
const collection: Collection = mongoConnection
  .db(mongodb_db)
  .collection("collection");

export const getUsers = async (
  id?: string | undefined
): Promise<object | null> => {
  try {
    await mongoConnection.connect();
    if (!id) {
      return await collection.find().toArray();
    } else {
      return await collection.findOne({ _id: new ObjectId(id) });
    }
  } catch (err) {
    throw err;
  } finally {
    await mongoConnection.close();
  }
};

export const addUser = async (user: User): Promise<void> => {
  try {
    await mongoConnection.connect();
    console.log("Added");
    await collection.insertOne(user);
  } catch (err) {
    throw err;
  } finally {
    await mongoConnection.close();
  }
};
