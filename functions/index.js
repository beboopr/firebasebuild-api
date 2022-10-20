import functions from 'firebase-functions'
import express from 'express'
import { createUser, getAllUsers } from './src/users.js'

//import { createUser, getAllUsers, updateUser } from './src/users.js'

const app = express()
app.use(express.json())

app.get('/test', (req, res) => res.send('Our first cloud API works, MF!'))

app.get('/users', getAllUsers)

app.post('/users', createUser)

// app.patch('/users/: uid', updateUser)

export const api = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
