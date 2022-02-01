import * as mongodb from 'mongodb'

const user = process.env.MONGODB_USER!
const password = process.env.MONGODB_PASSWORD!
const url = `mongodb+srv://${user}:${password}@auth-test.nygqn.mongodb.net/auth-test?retryWrites=true&w=majority`

export const databaseClient = new mongodb.MongoClient(url, { auth: { username: user, password } })
