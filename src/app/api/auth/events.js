import { db } from '../../api/auth/firebase-config';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    
    const snapshot = await db.ref('events').once('value');
    const events = snapshot.val();

    res.status(200).json(events || []);
  } else if (req.method === 'POST') {
    
    const newEvent = req.body;

    const ref = await db.ref('events').push(newEvent);
    const eventId = ref.key;

    res.status(201).json({ id: eventId });
  } else {
    res.status(405).end(); 
  }
}