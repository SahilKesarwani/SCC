import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styleFeedbackForm.css";
import FeedbackFormApi from "../apis/FeedbackFormApi";

export default function FeedbackForm() {
  const [certificate, setCertificate] = useState(0);
  const [state, handleSubmit] = useForm("xeqbyjrd");
const fetchCertificate = (e) => {
    e.preventDefault();
    setCertificate(`${e.target[0].value.slice(0,e.target[0].value.indexOf('@'))}`)
}
  
  return (
    <>
      {state.succeeded && (
        <>
          <h1>Thanks for sharing the feedback</h1>
          <h3>Collect your certificate</h3>
          <div>
            <div>Email :</div>
            <form onSubmit={fetchCertificate} className="certificateForm">
              <select name="team" id="team" className="teamSelect">
                <option value="">Select Email</option>
                {FeedbackFormApi.map((email) => {
                  return (
                    <option value={email.email} key={email.email}>
                      {email.email.toUpperCase()}
                    </option>
                  );
                })}
              </select>
              <input type="submit" value="Submit" className="submitFeebackBtn" />
            </form>
          </div>
          {certificate!=0 && <a href={require(`../images/CodingCauldron/Certificates/${certificate}.jpg`)} target="_blank"  className="downloadBtn">View Certificate</a>}
          {certificate!=0 && <a href={require(`../images/CodingCauldron/Certificates/${certificate}.jpg`)} target="_blank" download className="downloadBtn">Download</a>}
          {certificate!=0 && <div className="certificateCard">
            <img src = {require(`../images/CodingCauldron/Certificates/${certificate}.jpg`)}/>
          </div>}
        </>
      )}

      {!state.succeeded && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="emailLabel">Email Address</label>
          <input id="email" type="email" name="email" placeholder="Type your email address"/>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="emailLabel">Your Feedback</label>

          <textarea id="message" name="message" placeholder="It was a very good and pleasing interview. We really loved the process it happened and help us to learn something new..."/>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className="submitFeebackBtn">
            Submit
          </button>
        </form>
      )}
    </>
  );
}
