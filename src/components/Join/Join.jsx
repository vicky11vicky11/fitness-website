import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_0gbe3wo',
                'template_u853iva',
                form.current,
                'Zza3fHy6xEn2-9Rs3'
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div className="join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Enter Your Email Address"
                    />
                    <button type="submit" className="btn btn-join">
                        Join Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Join;
