import ContactForm from '../../components/forms/ContactForm'
import Address from './addresses/Address'
import ContactHero from './conatct-hero/ContactHero'
import './contact.css'

const Contact = () => {
  return (
    <div className='bts-contact-us'>
        <div className='bts-contact-us-row'>
            <div className='bts-contact-us-col'>
                <ContactHero />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                        <p className=''>
                            Have questions, ideas, or ready to collaborate? We're all ears! Broadview Technical Solutions is your go-to partner for software development, business consulting, and talent recruiting.
                        </p>
                            <br/>
                            <Address />
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact