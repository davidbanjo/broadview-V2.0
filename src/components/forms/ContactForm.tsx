// // export default ContactForm
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm, ValidationError } from "@formspree/react"
import { cn } from "../../../utils/cn";

function ContactForm({ center }) {

    const [ state, handleSubmit ] = useForm("mknlkgjb")

    if (state.succeeded) {
      console.log("Form submitted");
    }

  return (
    <div className="max-w-md w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200">
        Reach Out To Us
      </h2>
      <p className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300">
      Fill out the form below to kick-start our journey together. Whether you're a startup, a growing business, or an established enterprise, we're here to drive your success through innovation and expertise.
Let's build the future together!
      </p>

      <form className={`my-8 bts_contact_form ${center}`} onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="text-neutral-200" htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" name="name" />
            <ValidationError prefix="FirstName" field="name" errors={state.errors} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-neutral-200" htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" name="name"/>
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
          <textarea id="message" name="message" cols={40} placeholder="Enter your message" required></textarea>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </LabelInputContainer>

        <button
          className="bg-zinc-800 relative group/btn from-zinc-900 dark:from-zinc-900 dark:to-zinc-900 to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
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
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactForm
