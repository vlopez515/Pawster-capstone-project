import { Chip, Stack } from "@mui/material";
import * as React from "react";
import "./ViewPet.css";

export default function ViewPet({ petShown }) {
  return (
//     <div class="wrap animate pop">
//     <div class="overlay">
//         <div class="overlay-content animate slide-left delay-2">
//             <h1 class="animate slide-left pop delay-4">Trees</h1>
//             <p class="animate slide-left pop delay-5" style="color: white; margin-bottom: 2.5rem;">Kingdom: <em>Plantae</em></p>
//         </div>
//         <div class="image-content animate slide delay-5"></div>
//                 <div class="dots animate">
//                     <div class="dot animate slide-up delay-6"></div>
//                     <div class="dot animate slide-up delay-7"></div>
//                     <div class="dot animate slide-up delay-8"></div>
//                 </div>
//     </div>
//         <div class="text">
//             <p>Trees are woody perennial plants that are a member of the kingdom <em>Plantae</em>. All species of trees are grouped by their genus, family, and order. This helps make identifying and studying trees easier.</p>
//             <p>Apart from providing oxygen for the planet and beauty when they bloom or turn color, trees are very useful. Certain species of hardwood and softwood trees are excellent for timber, making furniture, and paper.</p>
//             <p>When managed properly, trees are a good source of renewable energy and construction material.</p>
//         </div>
// </div>
    <div className="petShown">
        <div className="overlay">
            <div className="overlay-content">
      

      <div className="petShown-pic-container">
        <img
          className="petShow-pic"
          src={`${petShown.image_url}`}
          alt={`${petShown.name}-pic`}
        />
      </div>
      <div className="petInfo">
      <Stack direction="column" spacing={1}>
        <Chip label={`${petShown.age}`} size='small'/>
        <Chip label={`${petShown.breed}`} size='small'/>
        <Chip label={`${petShown.gender}`} size='small'/>
        <Chip label={`${petShown.color}`} size='small'/>
        <Chip label={`House Trained - ${petShown.house_trained ? "Yes" : "No"}`} size='small'/>
        <Chip label={`Special Needs - ${petShown.special_needs ? "Yes" : "No"}`} size='small'/>
        <Chip label={`Shelter # - ${petShown.phone_number}`} size='small'/>
        </Stack>
        {petShown.description ? petShown.description : "None Provided"}
      </div>
    </div>
    </div>
    </div>
  );
}
