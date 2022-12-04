import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ContactDevCards() {
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
        <div className="container pb-5 text-center">
            <h3>Developers</h3>
            <p>If you'd like to reach out to the developers regarding app functionality and style, use the below icons to send an email or vist their respective links! </p>
            <Row xs={1} md={1} lg={2} xl={3}>
                {developers.map((per, indx) => (
                    <Col className="container-fluid p-2">
                        <Card key={indx} className='w-auto'>
                            <Card.Img variant="top" src={per.photo}/>
                            <Card.Body className="text-center">
                                <Card.Title>
                                    {per.name}
                                </Card.Title>
                                <Card.Text>
                                    {/* Email Link */}
                                    <a href={`mailto:${per.email}?subject=Contact Us RE: Pawster`}>
                                        <FontAwesomeIcon icon={faEnvelope}>
                                    </FontAwesomeIcon>
                                    </a>
                                    {/* LinkedIn */}
                                    <a href={per.linkedin} className={`${per.name}-linkedin m-2`} rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                    {/* Github */}
                                    <a href={per.github} className={`${per.name}-github `} rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
        </>
    )
}

