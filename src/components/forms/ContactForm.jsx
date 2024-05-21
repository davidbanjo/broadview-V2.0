import "./forms.css"
import SubmittedImg from "./assets/3d-casual-life-thank-you-letter-in-envelope.png"
import { useForm, ValidationError } from "@formspree/react"
import PrimaryBtn from "../buttons/PrimaryBtn"

const ContactForm = ({ center }) => {

    const [ state, handleSubmit ] = useForm("mknlkgjb")

    if (state.succeeded) {
        return (
            <>
                <div className="bts-spacer-x1"></div>
                <div className="bts_form_submitted_cont">
                    <img className="bts_form_submitted_img" src={SubmittedImg} alt="3d casual life thank you letter in envelope" />
                    <div>
                        <h2>Thanks for Reaching Out!</h2>
                        <p>A member of our team will reach out to you shortly to properly address your message request. However, kindly go ahead and schedule a Free consultation with us so we can better discuss how we can be of service. Thanks</p>
                        <PrimaryBtn 
                            value="Book a Call"
                            link="https://calendly.com/btech-informational/broadview-technical-information-session"
                        />
                    </div>
                </div>
                <div className="bts-spacer-x1"></div>
            </>
        );
    }

    return (
        <form className={`bts_contact_form ${center}`} onSubmit={handleSubmit} >
            <div>
                <fieldset>
                    <label htmlFor="name">First name *</label>
                    <input className="bts_input bts_contact_input" name="name" type="text" placeholder="Your name" required />
                    <ValidationError prefix="FirstName" field="name" errors={state.errors} />
                </fieldset>
                <fieldset>
                    <label htmlFor="name">Last name *</label>
                    <input className="bts_input bts_contact_input" name="name" type="text" placeholder="Your name" required />
                    <ValidationError prefix="LastName" field="name" errors={state.errors} />
                </fieldset>
            </div>
            <fieldset>
                <label htmlFor="email">Organization *</label>
                <input className="bts_input bts_contact_input" name="organization" type="text" placeholder="Your company name" required />
                <ValidationError prefix="Organization" field="organization" errors={state.errors} />
            </fieldset>
            <fieldset>
                <label htmlFor="email">Email *</label>
                <input className="bts_input bts_contact_input" name="email" type="email" placeholder="Your email address" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </fieldset>
            <fieldset>
                <label htmlFor="email">Phone number *</label>
                <input className="bts_input bts_contact_input" name="phone" type="text" placeholder="your phone number" required />
                <ValidationError prefix="Phone Number" field="phone" errors={state.errors} />
            </fieldset>
            <fieldset>
                <label htmlFor="email">How can we help you? *</label>
                <textarea className="bts_input bts_contact_input message" name="message" rows={10} cols={40} placeholder="Enter your message" required ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </fieldset>
            <button className="bts_form_submit bts_contact_submit_btn" type="submit" disabled={state.submitting}>
                Send Message
            </button>
        </form>
    )
}

export default ContactForm