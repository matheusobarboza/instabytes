import { Request, Response } from 'express'
import { findPostById } from '../services/findPostById.js'

export const loadPostController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const post = await findPostById(id)
    res.status(200).json(post)
  } catch (err) {
    console.error('Error loading post: ', err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}