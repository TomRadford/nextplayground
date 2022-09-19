export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(201).json({
      text: 'Data posted!',
    })
  }

  if (req.method === 'PUT') {
    return res.status(201).json({
      text: 'Data updated!',
    })
  }

  if (req.method === 'DELETE') {
    return res.status(201).json({
      text: 'Data deleted!',
    })
  }

  res.status(200).json({
    text: 'Hello!',
  })
}
