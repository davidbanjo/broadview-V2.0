import { useState } from "react"
import emailjs from '@emailjs/browser'
import "./forms.css"

const NewsletterCTA = () => {

  const [ email, setEmail ] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        'service_i1p3r9e', 
        'template_2v93lkw',
        {
          email,
        },
        'QLHtTJxDckkNvJvPX'
      )

      if (response.status === 200) {
        alert('Success')
        setEmail('');
      }
    } catch (error) {
      console.error('Error sending email', error)
    }
  }

  return (
    <div className="bts_newsletter_container">
        <form onSubmit={sendEmail}>
            <input type="email" className="bts_input bts_newsletter_email_input" placeholder="Your E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="bts_form_submit">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterCTA
