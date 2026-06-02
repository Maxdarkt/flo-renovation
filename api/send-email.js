const { Resend } = require('resend')

module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' })
  }

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
    } = req.body

    if (!firstName || !lastName || !address || !postal || !city || !email) {
      return res
        .status(400)
        .json({ success: false, message: 'Champs requis manquants' })
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
      return res.status(500).json({ success: false, message: error.message })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}
