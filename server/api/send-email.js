const { Resend } = require('resend')

module.exports = function (req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    return res.end(
      JSON.stringify({ success: false, message: 'Method not allowed' })
    )
  }

  let body = ''
  req.on('data', (chunk) => {
    body += chunk
  })
  req.on('end', async () => {
    try {
      const {
        firstName,
        lastName,
        project,
        address,
        postal,
        city,
        mobile,
        email,
        message,
      } = JSON.parse(body)

      if (!firstName || !lastName || !address || !postal || !city || !email) {
        res.statusCode = 400
        res.setHeader('Content-Type', 'application/json')
        return res.end(
          JSON.stringify({ success: false, message: 'Champs requis manquants' })
        )
      }

      const resend = new Resend(process.env.RESEND_API_KEY)

      const to =
        process.env.NODE_ENV === 'development'
          ? process.env.EMAIL_TO_DEV
          : process.env.EMAIL_TO_PROD

      const { error } = await resend.emails.send({
        from: 'Flo Rénovation <notifications@mt-develop.com>',
        to,
        subject: 'Nouveau message de contact Flo-Renovation',
        html: `
          <p>Demande de contact de <strong>${firstName} ${lastName}</strong> :</p>
          <p><strong>Projet :</strong> ${project || 'non renseigné'}</p>
          <p><strong>Adresse :</strong> ${address}, ${postal} ${city}</p>
          <p><strong>Téléphone :</strong> ${mobile || 'non renseigné'}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong> ${message || 'aucun'}</p>
        `,
      })

      if (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        return res.end(
          JSON.stringify({ success: false, message: error.message })
        )
      }

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ success: true }))
    } catch (err) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ success: false, message: err.message }))
    }
  })
}
