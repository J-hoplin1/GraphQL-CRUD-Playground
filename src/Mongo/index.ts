import mongoose, { connect } from 'mongoose'
import { Manager, Product } from './Schema'

// Set schema field require field not to be null
mongoose.Schema.Types.String.checkRequired(v => v !== false)

const run = async function () {
  await connect('mongodb://root:password1234!@mongo:27017', {
    dbName: 'gqlplayground',
  });
}

export {
  Manager,
  Product,
  run
}