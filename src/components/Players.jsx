import React, { useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';

const Players = (props) => {

    const [dogs, setDogs] = useState([0,0]);
    const [showModal, setShowModal] = useState(false);
    const [getDetails, setGetDetails] = useState({});

    const {searchQuery} = props;

    const data = async function(){
        const response = await fetch(
            'https://fsa-puppy-bowl.herokuapp.com/api/2303-ft-et-web-ft/players'
        );
        const result = await response.json();

        setDogs(result.data.players.filter(dog => dog.name.toLowerCase().includes(searchQuery.toLowerCase())));

        // filter results based on search if the user has searched for anything
    }

    useEffect(() =>{
        data();
        console.log(showModal)
        return;
    }, [dogs.length > 0, searchQuery])

    const closeModal = () => {
        setShowModal(false);
        setGetDetails({})
    }

    return (
    <>
    <div id="all-players-container">
    {showModal && (
        <div className="modal">
            <p>Name: {getDetails.name}</p>
            <p>Bread: {getDetails.breed}</p>
            <p>Status: {getDetails.status}</p>
            <p>ID: #{getDetails.id}</p>
            <p>Cohort ID: #{getDetails.cohortId}</p>
            <p>Team ID: #{getDetails.teamId}</p>
            <button onClick={() => closeModal()}>Close Details</button>
        </div>
    )}
    {dogs.length > 0 && dogs.map((item, index) => 
        (<PlayerCard key={index} data={item} setShowModal={setShowModal}  setGetDetails={setGetDetails} />)
    )}
    </div>
    </>)
};

export default Players;