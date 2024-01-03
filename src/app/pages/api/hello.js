export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await someAsyncOperation()
      res.status(200).json({ result })
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }
  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}