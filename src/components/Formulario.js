import React from "react";

const Formulario = () => {
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form className="col card text-white bg-transparent mb-5 pt-5 pb-2" action="">
                        <fieldset>
                            <legend className="text-center">
                                Buscador letras y canciones
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input type="text" className="form-control" name="artista"
                                               placeholder="Nombre artista"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input type="text" className="form-control" name="artista"
                                               placeholder="Nombre artista"/>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right" >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Formulario;