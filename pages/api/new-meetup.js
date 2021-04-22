// api/new-meetup
import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await MongoClient.connect('mongodb+srv://yathendra:WJxCHKd4olvKLPyL@clusternextbasic.wrn8i.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupCollection = db.collection('meetups');
    const result = meetupCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: 'Meet Up Inserted'});
  }
}

export default handler;