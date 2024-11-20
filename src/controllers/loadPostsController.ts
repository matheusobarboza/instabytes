import { Request, Response } from 'express'
import { getAllPosts } from '../services/getAllPosts.js'

export const loadPostsController = async (req: Request, res: Response) => {
  try {
    const allPosts = await getAllPosts()
    res.status(200).json(allPosts)
  } catch (err) {
    console.error('Error loading posts: ', err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}