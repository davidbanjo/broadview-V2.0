import { Phone } from 'lucide-react'
import ContactForm from '../../components/forms/ContactForm'
import Address from './addresses/Address'
import ContactHero from './conatct-hero/ContactHero'
import './contact.css'
import Twitter_X from '../../components/icons/Twitter-X'

const Contact = () => {
  return (
    <div className='bts-contact-us'>
        <div className='bts-contact-us-row'>
            <div className='bts-contact-us-col'>
                <ContactHero />
                <div className='bts-spacer-x2'></div>
                <div className='bts-spacer-x2'></div>
                <div className='bts-contact-section' style={{ display: "flex", gap: "50px" }}>
                    <img className='bts-contact-img' src='img/assets/bts-broadview-young-woman-in-headset.png' alt='bts-broadview-young-woman-in-headset' />
                    <ContactForm />
                </div>
                <div className='bts-spacer-x2'></div>
                <div className='bts-spacer-x2'></div>
                <div>
                    <div>
                        <Address 
                            state="New Jersey"
                            address="3000 Atrium Way, Suite 200, Mt. Laurel, NJ, 08054"
                            phone="+1 (856) 552-0417"
                        />
                        <Address 
                            state="Delaware"
                            address="18 Blevins Dr, Newcastle, DE 19720"
                            phone="+1 (856) 552-0417"
                        />
                        <Address 
                            state="Texas"
                            address="2902 E Arkansas Ln, Suite C, Arlington, TX 76010"
                            phone="+1 (856) 552-0417"
                        />
                    </div>
                </div>
                <div className='bts-spacer-x2'></div>
                <div className='bts-spacer-x2'></div>
                {/* <div className=''>
                    <Phone color="#FA931C" width="16" height="16" />
                    <Twitter_X color="#FA931C" width={16} height={16} />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Contact