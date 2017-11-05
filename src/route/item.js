import Router from 'express-promise-router'
import itemCtrl from '../controller/item'

const router = Router()

router.route('/')
  .get(itemCtrl.get)

router.route('/async')
  .get(itemCtrl.getAsync)

router.route('/sync')
  .get(itemCtrl.getSync)

export default router
