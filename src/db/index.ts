
import { Db, MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '../env.js';

let dbInstance: Db | null = null

const client = new MongoClient(env.DB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const connectToDatabase = async (): Promise<Db> => {
  if (!dbInstance) {
    try {
      await client.connect()
      console.log('Connected to MongoDB')
      dbInstance = client.db('imersao-instabytes')
    } catch (err) {
      console.error('Error connecting to database: ', err)
      throw err
    }
  }
  return dbInstance
}

export const db = connectToDatabase()