import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ------------ Mail Functions ------------

export function sendMail(event) {
  event.preventDefault()
  console.log(event.target[0].value)
  
  let email = {
    fullName: event.target[0].value,
    email: event.target[1].value,
    subject: event.target[2].value,
    message:event.target[3].value
  }

  console.log(email)

  const serviceID = "service_eun4ifs";
  const templateID = "template_3ytz8si";

  // "emailjs function works but for some reason throws an error when the app is rendered. why?"
  emailjs.send(serviceID, templateID, email)
  .then((res) => {
      event.target[0].value = "";
      event.target[1].value = "";
      event.target[2].value = "";
      event.target[3].value = "";
      console.log(res);
      alert("Thank You! Your submission was sent.")
  }
  )
  .catch((err) => console.log(err))
}

// Modal not functional yet. Template only below.
export function successModal (){
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Message Sent!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Thank You! Someone from our team will reach out to you shortly.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}