import express from 'express'
import itemCtrl from '../controller/item'

const router = express.Router()

router.route('/')
  .get(itemCtrl.get)

export default router
