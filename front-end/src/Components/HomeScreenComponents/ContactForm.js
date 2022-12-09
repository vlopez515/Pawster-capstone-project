import React from 'react';
import { sendMail } from '../../Functions/mailFunctions';
import {Grid} from '@mui/material'; 

export default function ContactForm() {
  return (
        <>
            <Grid>
            
            <form onSubmit={sendMail} className="contact-Form">
                <label>Full Name: {" "}</label>
                <input name="fullName" type="text" placeholder="Enter Your Full Name"></input>
                <br />

                <label>Email: {" "}</label>
                <input name="email" type="email" placeholder="Enter email" ></input>
                <br />

                <label>Subject: {" "}</label>
                <input name="subject" type="text" placeholder="Enter Subject Line" ></input>
                <br />
                <label>Message: {" "} </label>
                <textarea name="message" placeholder="Enter message" ></textarea>
                <br />
                <button>Submit</button>
            </form>
            </Grid>

        </>
    )
}
