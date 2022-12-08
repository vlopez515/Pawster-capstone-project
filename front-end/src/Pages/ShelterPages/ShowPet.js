import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

import Pet from './Pet';
import PetEditForm from "../newPetForm/PetEditForm"

const API = process.env.REACT_APP_API_URL;

export default function ShowPet({ pets }) {
    let { id, petId } = useParams();
    const [ visibleCard, setVisible ] = useState(true)
    let navigate = useNavigate();
    let data = pets.find(pet => pet.id == petId)

    const deletePet = () => {
        axios
            .delete(`${API}/pets/${petId}`)
            .then(() => {
                navigate(`/shelter/${id}`);
            })
            .catch((c) => console.error("catch", c));
    };

    const handleDelete = () => {
        deletePet();
    };

    return (
        <>
            <div className="pet-ShowPage">
                {/* Pet Shown */}
                {data ?
                    (
                        <div id="pet-ShowInfo" className={ visibleCard ? 'visible' : 'invisible'}>
                            <Pet data={data} handleDelete={handleDelete} setVisibe={setVisible} visibleCard={visibleCard}/>
                        </div>
                    )
                    :
                    <h1> No data available </h1>

                }

                {/* Edit Form  */}
                {data ?
                    (
                        <div id="pet-editForm" className={!visibleCard === true ? 'visible' : 'invisible'}>
                            <PetEditForm visibleCard={visibleCard} />
                        </div>
                    )
                    :
                    null
                }
            </div>
        </>
    );
}


