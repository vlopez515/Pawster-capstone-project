import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./GetUserLikedInfo.css"
import Chat from './Chat'
import ChatScreen from './ChatScreen';


export default function GetUserLikedInfo() {
    const [allPets, setAllPets] = useState([])
    const [allMessages, setAllMessages] = useState([])
    const [onlyPetMsg, setPetMsg] = useState([])

    let messages;

    useEffect(() => {
        getAllPets();
        getMessages();
    }, [onlyPetMsg])

    const getAllPets = () => {
        axios.get(`https://pawster.onrender.com/pets`)
            .then((res) => {
                setAllPets(res.data)
            })
            .catch((err) => { console.log(err) })
    }

    const getMessages = () => {
        axios.get(`http://localhost:2345/messages`).then((res) => {
            const data = res.data
            const sortedData = data.sort((a, b) => a.petid - b.petid)
            setAllMessages(sortedData)
        }).catch((c) => console.warn("catch", c));
    }


    let filteredPets = allPets.filter(pet => pet.userliked === true);


    return (
        <>
        
        <div className="view-messages-container">
            <div className='only-chat-icons'>
            <span>
                <h2>Messages</h2>
            </span>
            
                {
                    filteredPets.map(e => <Chat pet={e} petId={e.id} setPetMsg={setPetMsg} allMessages={allMessages} />)
                }
            </div>
            {
                onlyPetMsg.length ?
                    (
                        <div className="only-messages">
                            <div className="chatScreen">
                                <ChatScreen onlyPetMsg={onlyPetMsg} filteredPets={filteredPets} setPetMsg={setPetMsg} />
                            </div>
                        </div>

                    ) :
                    null
            }
        </div>
        </>
    )
}

