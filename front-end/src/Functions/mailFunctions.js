
// ------------ Mail Functions ------------

// export function sendMail(event) {
//   event.preventDefault()
//   console.log(event)
//   let email = {
//     fullName: event.target[0].value,
//     email: event.target[1].value,
//     subject: event.target[2].value,
//     message: event.target[3].value
//   }

//   console.log(email)

//   const serviceID = "service_eun4ifs";
//   const templateID = "template_3ytz8si";

//   "emailjs function works but for some reason throws an error when the app is rendered. why?"
//   emailjs.send(serviceID, templateID, email)
//   .then((res) => {
//       event.target[0].value = "";
//       event.target[1].value = "";
//       event.target[2].value = "";
//       event.target[3].value = "";
//       console.log(res);
//       alert("Thank You! Your submission was sent.")
//   }
//   )
//   .catch((err) => console.log(err))
// }


