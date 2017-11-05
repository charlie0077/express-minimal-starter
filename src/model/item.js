class ItemModel {
  async get () {
    console.log(this)
    const result = await this.query()
    if (result.item > 0.6) {
      throw new Error('Simulate throw error')
    }
    return result
  }

  // this is to simulate a promise api of database call
  query () {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.3) {
        setTimeout(resolve, 200, {item: Math.random()})
      } else {
        setTimeout(reject, 200, new Error('Simulate database error: invalid Query String'))
      }
    })
  }
}

export default new ItemModel()
