// // export default ContactForm
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm, ValidationError } from "@formspree/react"
import { cn } from "../../../utils/cn";
import ButtonMagic from "../buttons/ButtonMagic";
import { Link } from "react-router-dom";

function CTAForm({ center }) {

    const [ state, handleSubmit ] = useForm("mknlkgjb")

    if (state.succeeded) {
      return (
        <>
          <div className="bts-spacer-x1"></div>
          <div className="bts_form_submitted_cont max-w-md w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black dark:bg-black bts-contact-form-cont">
              {/* <img className="bts_form_submitted_img" src={SubmittedImg} alt="3d casual life thank you letter in envelope" /> */}
              <div>
                  <h3>Thanks for Reaching Out!</h3>
                  <p>A member of our team will reach out to you shortly to properly address your message request. However, kindly go ahead and schedule a Free consultation with us so we can better discuss how we can be of service. Thanks</p>
                  <a href="https://calendly.com/btech-informational/broadview-technical-information-session">
                    <ButtonMagic 
                        content="Book a Call"
                        className=""
                    />
                  </a>
              </div>
          </div>
          <div className="bts-spacer-x1"></div>
        </>
      )
    }

  return (
    <div className="max-w-md w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black dark:bg-black bts-contact-form-cont">
      <form className={`my-8 bts_contact_form ${center}`} onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="text-neutral-200" htmlFor="firstname">First name</Label>
            <div className="bts-spacer-x1"></div>
            <Input id="firstname" placeholder="John" type="text" name="name" />
            <ValidationError prefix="FirstName" field="name" errors={state.errors} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-neutral-200" htmlFor="lastname">Last name</Label>
            <div className="bts-spacer-x1"></div>
            <Input id="lastname" placeholder="Smith" type="text" name="name"/>
            <ValidationError prefix="LastName" field="name" errors={state.errors} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label className="text-neutral-200" htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-neutral-200" htmlFor="email">How can we help you?</Label>
          <textarea className="flex h-20 border-none bg-zinc-800 dark:bg-zinc-800 text-white dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-600 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400" id="message" name="message" cols={40} placeholder="Enter your message" required></textarea>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </LabelInputContainer>

        <button
          className="bg-zinc-800 relative group/btn from-zinc-900 dark:from-zinc-900 dark:to-zinc-900 to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={state.submitting}
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-0 w-full", className)}>
      {children}
    </div>
  );
};

export default CTAForm
