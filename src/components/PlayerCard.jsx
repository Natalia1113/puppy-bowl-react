import React from 'react';

const PlayerCard = (props, key) => {

    const {breed, cohortId, createdAt, id, imageUrl, name, status, teamId, updatedAt} = props.data;

    const { setShowModal, setGetDetails} = props;

    const openModal = () => {
        setShowModal(true);
        setGetDetails(props.data);
    }

    return (
    <>
    <div className="single-player-card">
        <div className="header-info">
            <p className="pup-title">
                {name}
            </p>
            <p className="pup-number">
                #{id}
            </p>
        </div>
        <div className="img">
            <img src={imageUrl} alt="" />
        </div>
        <div className="options">
            <button className="seeDetailsBtn" onClick={() => openModal()}>See Details</button>
        </div>
    </div>
    </>
    );
};

export default PlayerCard;