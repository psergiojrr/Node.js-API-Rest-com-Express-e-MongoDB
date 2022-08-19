import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://aula:aula@cluster0.y53x8v3.mongodb.net/alura-node'
)

let db = mongoose.connection

export default db
