import Item from '../model/item'

class ItemCtrl {
  // aasync fnction
  async getAsync (req, res, next) {
    console.log(this)
    return res.json({ asyncResult: await Item.get() })
  }

  // normal function
  getSync (req, res, next) {
    return res.json({ syncResult: Math.random() })
  }

  // async function that simulate both async and sync behaviour
  async get (req, res, next) {
    if (Math.random() > 0.3) {
      return res.json({ asyncResult: await Item.get() })
    } else {
      return res.json({ syncResult: Math.random() })
    }
  }
}

export default new ItemCtrl()
