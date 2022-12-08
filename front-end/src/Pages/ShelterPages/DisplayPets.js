import { Badge, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import PetCards from "./PetCards"


export default function DisplayPets({ pet, index }) {
    const { id } = useParams()

    const arrayOfSampleData = [1, 2, 3, 4, 0, 0, 0, 0, 5, 3, 1]
    let randomIndex = arrayOfSampleData[Math.floor(Math.random() * arrayOfSampleData.length)];

// Link would fetch data from working join table
    // useEffect(() => {
    //     getPets();
    //   }, []);

    //   const getNotifications = async () => {
    //     await axios.get(`URL`).then((res) => {
    //       const data = res.data
    //       console.log(data)
    //       setPets(data)
    //     }).catch((c) => console.warn("catch", c));
    //   }


    return (
        <Grid item xs={6} key={index}>
            <Badge 
            badgeContent= {randomIndex? (`♥ ${randomIndex}`) : null} 
            color="primary"
            >
                <PetCards pet={pet} index={index} id={id} />
             </Badge>
        </Grid>

    );


}


