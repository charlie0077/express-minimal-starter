import Router from 'express-promise-router'
import item from './item'

const router = Router()

router.use('/item', item)

export default router
