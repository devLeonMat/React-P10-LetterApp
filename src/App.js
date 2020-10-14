import React, {Fragment, useState, useEffect} from 'react';
import Formulario from "./components/Formulario";
import Song from "./components/song";

import axios from 'axios';
import Info from "./components/Info";


function App() {

    // state defined
    const [searchLetter, saveSearchLetter] = useState({});
    const [info, saveInfo] = useState({});
    const [letter, saveLetter] = useState('');
    const [error, saveError] = useState(false);

    useEffect(() => {
        if (Object.keys(searchLetter).length === 0) return;

        const findLetterApi = async () => {
            const {artist, song} = searchLetter;
            const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
            const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
            await Promise.all([
                axios(url),
                axios(url2)
            ]).then((value) => {
                console.log(value[0]);
                saveLetter(value[0].data.lyrics);
                saveInfo(value[1].data.artists[0]);
                saveError(false);
                saveError(false);
            }).catch(() => {
                saveError(true);
            });
        };
        findLetterApi();
    }, [searchLetter]);

    return (
        <Fragment>
            <Formulario saveSearchLetter={saveSearchLetter}/>
            <div className="container mt-5">
                {
                    error ? (
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Cancion o Grupo no encontrados</h2>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-md-6">
                                <Info info={info}/>
                            </div>
                            <div className="col-md-6">
                                <Song lyrics={letter}/>
                            </div>
                        </div>
                    )
                }
            </div>

        </Fragment>
    );
}

export default App;
