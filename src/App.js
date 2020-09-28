import React, {Fragment, useState, useEffect} from 'react';
import Formulario from "./components/Formulario";

import axios from 'axios';


function App() {

    // state defined
    const [searchLetter, saveSearchLetter] = useState('');

    useEffect(() => {
        if (Object.keys(searchLetter).length === 0) return;

        const findLetterApi = async () => {
            const [artist, song] = searchLetter;
            const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
            const result = await axios(url);
            console.log(result);
        };
        findLetterApi();


    }, [searchLetter]);

    return (
        <Fragment>
            <Formulario saveSearchLetter={saveSearchLetter}/>
        </Fragment>
    );
}

export default App;
