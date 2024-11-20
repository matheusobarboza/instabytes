import { ObjectId } from "mongodb"
import { db } from "../db/index.js"

export const findPostById = async (id: string) => {
  try {
    const postsCollection = (await db).collection('posts')
    return postsCollection.findOne({
      _id: new ObjectId(id)
    })
  } catch (error) {
    throw new Error(error)
  }
}