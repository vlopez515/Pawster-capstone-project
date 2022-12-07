import QsAccordion from "./QsAccordion"
import { Container } from '@mui/system'

export default function Support() {
  const questionsAnswers = [
    {
      ques: "Is the Pet I See on Pawster Still Available for Fostering?",
      answer: "The pet's listed in Pawster are available for fostering/adoption if they still appear as 'available'. If you are chosen by the shelter to foster your selected pet, you will recieve a message from them directly.",
    },
    {
      ques: "How Do I Meet a Pet I See on Pawster?",
      answer: "You will have the option to meet the pet in person before making things official. This is up to the discretion of the shelter and yourself. Please keep a look out for both your messages page and email for further updates.",
    },
    {
      ques: "Does Contacting the Shelter or Rescue Group Reserve the Pet I’m Interested In?",
      answer: "Contacting the Shelter directly for a pet you see listed on Pawster does not help reserve the pet for you. It is still on a first come first serve basis.",
    },
    {
      ques: "How Will I Know If I’ve Been Approved to Foster a Pet?",
      answer: "You will know you've been matched with your respective pet once you've received a message and screening call from the shelter. They will communicate with you further on how you can pick up your fur-pal!",
    },
    {
      ques: "How Long Will It Take to Hear Back?",
      answer: "There is no way of providing you with a time frame as all shelters operate differently. It will all depend on the shelter themselves. Don't get discouraged if you don't hear back :) !",
    },

  ]
  return (
    <>
      <Container align="center" sx={{ padding: "2%" }}>
        <div >
          <h2>Pet-Fostering FAQs</h2>
        </div>
      </Container>
      <Container direction="row" >
        {questionsAnswers.map((item, index) => <QsAccordion item={item} index={index} key={index} />)}
      </Container>
      

    </>
  )

}