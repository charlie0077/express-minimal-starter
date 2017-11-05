import Item from '../model/item'

class ItemCtrl {
  get (req, res, next) {
    return res.json({ status: 200, data: Item.get() })
  }
}

export default new ItemCtrl()
