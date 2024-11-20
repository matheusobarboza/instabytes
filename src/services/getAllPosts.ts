import { db } from "../db/index.js"

export const getAllPosts = async () => {
  try {
    const postsCollection = (await db).collection('posts')
    return await postsCollection.find().toArray()
  } catch (error) {
    throw new Error(error)
  }
}