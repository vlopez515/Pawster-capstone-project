import React from 'react';
// import { Button, Form } from 'react-bootstrap/';
// import { sendMail } from '../../Functions/mailFunctions';
import { FormGroup, Box,  FormControl, TextField, InputLabel, FormHelperText, Typography, Grid, Card, CardContent } from '@mui/material';

export default function ContactForm() {

    return (
        <>
            {/* <Form onSubmit={sendMail}>

                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Your Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Message Subject" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTextarea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" className="message" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form> */}



            <div>
                <Typography>
                    Reac-App
                </Typography>
                <Card>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="First Name" placeholder='Enter first name..' variant="outlined" fullWidth/>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="First Name" placeholder='Enter first name..' variant="outlined" fullWidth/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>


        </>
    )
}
