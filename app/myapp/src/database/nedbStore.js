import Datastore from 'nedb'

export default new Datastore({
  autoload: true,
  filename: './test.db'
})
