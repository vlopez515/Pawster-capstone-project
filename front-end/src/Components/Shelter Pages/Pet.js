import React from 'react';
import { Badge } from 'react-bootstrap';

function Pet({ data, handleDelete, setVisible, visibleCard }) {
  
  return (
    <>
    <article>
            <h2> {data['name']} {data.status === 'adoptable' ? <Badge bg="success">Adopt Me!</Badge> : null}</h2>

            <div className='pet-ShowImg'>
                < img alt={`${data.name}-img`} src={data.photo ?
                    data.photo :
                    'https://peoplewithpets.com/wp-content/uploads/2019/06/people-with-Pet-no-floorplan-image.jpg'}
                ></img>
            </div>
            <div className='pet-ShowDets'>
            <h5>
                <span>Age</span>: {data.age} ({data.type}) 
            </h5>
            <h5>
                <span>Breed</span>: {data.breed}
            </h5>
            <h5>
                <span>Size</span>: {data.size}
            </h5>
            <h5>
                <span>Color</span>: {data.color}
                <h5>
                    <span>Declawed</span>: {data.declawed}
                </h5>
                <h5>
                    <span>Gender</span>: {data.gender}
                </h5>
                <h5>
                    <span>House Trained</span>: {data.house_trained ? 'Yes' : 'No'}
                </h5>
                <h5>
                    <span>Maintenance Level </span>: {data.maintenance_level}
                </h5>
                <h5>
                    <span>Shots Up to Date </span>: {data.shots_current ? 'Yes' : 'No'}
                </h5>
                <h5>
                    <span>Spayed / Neutered </span>: {data.spayed_neutered ? 'Yes' : 'No'}
                </h5>
                <h5>
                    <span>Dog Have Special Needs </span>: {data.special_needs ? 'Yes' : 'No'}
                </h5>

            </h5>
            <p>{data.description}</p>
            </div>
            
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={() => setVisible(!visibleCard)}>{visibleCard ? 'Edit' : 'Show Less'}</button>
            </div>
        </article>
    </>
  )
}

export default Pet