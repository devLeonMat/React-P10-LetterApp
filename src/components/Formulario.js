import React, {useState} from "react";


const Formulario = ({saveSearchLetter}) => {

    const [search, saveSearch] = useState({
        artist: '',
        song: ''
    });
    const [error, saveError] = useState(false);


    const {artist, song} = search;


    // function for input
    const updateState = e => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    };

    // build apis
    const SearchInformation = e => {
        e.preventDefault();
        if (artist.trim() === '' || song.trim() === '') {
            saveError(true);
            return;
        }
        // send to principal component
        saveSearchLetter(search);

    };


    return (
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">
                    <form className="col card text-white bg-transparent mb-5 pt-5 pb-2" onSubmit={SearchInformation}>
                        <fieldset>
                            <legend className="text-center">
                                Buscador letras y canciones
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre artista"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre de la canción"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Formulario;