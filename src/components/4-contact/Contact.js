import Lottie from 'react-lottie';
import doneAnimation from "../../animations/Animation - done.json";
import contactUsAnimation from "../../animations/contact-us.json"
import "./Contact.css"
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xayrnvkr");
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: doneAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptionsContactUs = {
    loop: true,
    autoplay: true,
    animationData: contactUsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section id='contact-us' className='contact-us'>
      <h1 className="title"><span className="icon-mail" /> Contact us</h1>
      <p className="subtitle">Contact us for more information and get notified when I publish something new.</p>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email" className="label">Email address:</label>
            <input type="email" className="email" required id="email" name="email" placeholder="Email address" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "2rem" }}>
            <label htmlFor="textarea" className="textarea">Your message:</label>
            <textarea id="textarea" required className="textarea" placeholder="Message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (

            <p className='flex' style={{ color: "black" }}>Your message has ben sent successfully
              <Lottie
                options={defaultOptions}
                height={70}
                width={70}
              />
            </p>
          )}
        </form>
        <div   className="animation ">
          <Lottie
            options={defaultOptionsContactUs}
            height={400}
            width={400}
          />
        </div>
      </div>
    </section>
  )
}
