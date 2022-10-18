import functions from 'firebase-functions';
import express from 'express';
import { createUser, getAllUsers, updateUser} from './src/users.js';

const app = express()

app.use(express.json())
app.post('/users', getAllUsers)
app.post('/users', createUser)
//to update 
app.patch('/users/:uid', updateUser)

app.get('/test', (re,res) => res.send('out first cloud API works, MF!'))

export const api = functions.https.onRequest(app)


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
