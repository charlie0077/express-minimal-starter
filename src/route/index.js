import express from 'express'
import item from './item'

const router = express.Router()

router.use('/item', item)

export default router
