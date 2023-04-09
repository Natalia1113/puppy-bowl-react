import React, {useEffect, useState} from 'react';
import PlayerForm from './PlayerForm';
import Players from './Players';
import { fetchAllPlayers, fetchSinglePlayer } from '../api/ajaxHelpers';

const Main = () => {
    const [toggle, setToggle] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (!toggle){
       const getPlayers = async () => {
        const players= await fetchAllPlayers();
        console.log(players);    
        };
        getPlayers();
    } else {
        (async () => {
            const player = await fetchSinglePlayer();
            console.log("single player", player);
        })();
    }
    }, [toggle]);


    return (
    <>
        <PlayerForm setSearchQuery={setSearchQuery}/>
        <Players searchQuery={searchQuery} myProp={'this is my prop'}/>
    </>)
};

export default Main;