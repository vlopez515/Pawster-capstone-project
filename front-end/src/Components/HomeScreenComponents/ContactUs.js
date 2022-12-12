import React from 'react';
import { Container, Button, Box, Stack, FormControl, Select, MenuItem, TextField, Input, InputLabel, FormHelperText } from '@mui/material';
import EmailIcon from '@material-ui/icons/Email';
import ContactDevCards from './ContactDevCards';
import ContactForm from './ContactForm';
import "./ContactUs.css"


export default function ContactUs() {
  const developers = [
    {
      name: "Ziqian Pan",
      email: "ziqianpan@pursuit.org",
      photo: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F72cf6d22-c8e8-43a9-802b-94da5d383848%2FZiqian_Pan.jpg?table=block&id=20acab6a-b2ac-4f6f-a870-ee09fa004c3d&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2",
      github: "https://github.com/ZiqianPan",
      linkedin: "https://www.linkedin.com/in/ziqian-pan-943a171a4/"
    },
    {
      name: "Victor Lopez",
      email: "victorlopez@pursuit.org",
      photo: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba207bb8-6949-469a-9ebf-f829125e24d9%2FVictor_Lopez.jpg?table=block&id=d404fc8f-d13d-45c0-b86a-b605f69618e4&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2",
      github: "https://github.com/vlopez515",
      linkedin: "https://www.linkedin.com/in/victor-lopez-71804415a/"
    },
    {
      name: "Ametza Maldonado",
      email: "ametzayinmaldonado@pursuit.org",
      photo: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff9e70505-a810-41e9-8c68-dd0877044085%2FAmetzayin_Maldonado.jpg?table=block&id=f33006ab-54c5-4cc0-b992-b289d44f96f1&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2",
      github: "https://github.com/ametzamaldonado",
      linkedin: "https://www.linkedin.com/in/ametzayin-maldonado-3528b6124",
    },
    {
      name: "Jamal Ruiz",
      email: "jamalruiz@pursuit.org",
      photo: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F62805030-6405-4570-9ef5-950f738d7502%2FJamal_Ruiz.jpg?table=block&id=0c98b713-69f7-4fe9-a0cc-c11592e74f90&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2",
      github: "https://github.com/jamalRuiz",
      linkedin: "www.linkedin.com/in/jamal-ruiz-473a641a6",
    },
    {
      name: 'Olayinka Fakanbi',
      email: 'olayinkafakanbi@pursuit.org',
      photo: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F312b1033-01d7-4b1c-a075-64ca0c79b05c%2FOlayinka_Fakanbi.jpg?id=a5b8ac40-ed54-464d-9702-7dd5c24a0e22&table=block&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2',
      github: 'https://github.com/Olayinka19',
      linkedin: 'http://linkedin.com/in/olayinka-fakanbi-2a46a6229',
    }
  ]
  return (
    <>
      {/* <Stack direction='row' spacing={2} align="center" sx={{ p: '5%' }}> */}
      <br/>
      <br/>
      <br/>
        <Container align="center" sx={{ p: '5%' }}>
          <br />
          <p>Got something you want to talk about? Contact us or email us and we promise to get back to you as soon as we can.</p>
        </Container>

        <Container align="center" sx={{ pb: '2%' }}>
          <h3>Help / Support</h3>
          <p>For all things technical and app-related. Send us an email: {" "}
            <Button variant="outlined" href="mailto:pawster.app@gmail.com?subject=Pawster App - Technical Concern"><EmailIcon /></Button>
          </p>
        </Container>
      {/* </Stack> */}



      <Container sx={{ px: "5%" }}>
        <ContactDevCards />
      </Container>



      <Container align="center" sx={{ pt: 5, pb: 0 }}>
        {/* <div className="text-center p-4">
          <h3>Questions or Concerns</h3>
          <p>Any general questions about the website or topics/concerns you'd like for the Pawster team to address, please feel free to let us know using the form below. We appreciate your feedback!</p>
        </div> */}


        {/* <Stack direction='row' spacing={2} align="center" sx={{ p: '5%' }}> */}
          {/* <Container sx={{ border: 3 }}>
            <div className="col-md-6">
              <h4>Contact Form</h4>
              <hr />
              <ContactForm />
            </div>
          </Container> */}
          <Container sx={{ border: 3, p: 3 }}>
            <div className="col-md-6 border-start">
              <h3 className="main-heading">Headquaters</h3>
              <hr />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.866474495898!2d-73.94411554933569!3d40.74296354355667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592c26359e19%3A0x17661f3fc4273c31!2s47-10%20Austell%20Pl%2C%20Long%20Island%20City%2C%20NY%2011101!5e0!3m2!1sen!2sus!4v1668983117259!5m2!1sen!2sus" width="100%" height="auto" style={{ border: "0" }} allowFullScreen="" loading="lazy" title="Headquaters-map"></iframe>
              <div className="text-center p-4">
                <p>47-10 Austell Pl, 2nd floor</p>
                <p>Long Island City, NY 11101</p>
                <p>PH#: (123) 456-7890</p>
              </div>
            </div>

          </Container>
        {/* </Stack> */}
      </Container>

    </>
  )
}


