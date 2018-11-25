import React from 'react'

export default props => (
    <form>
        <caption className="col-md-12"><h3> Fale com nossa equipe! </h3></caption>
        <div className="form-row">
            <div className="form-group col-md-4">
                <h4> Nome: </h4>
                <input type="text" /> 
            </div>
            <div className="form-group col-md-4">
                <h4> Email: </h4>
                <input type="text" />
            </div>
            <div className="form-group col-md-12">
                <h4> Assunto: </h4>
                <input type="text" />
            </div>
            <div className="form-group col-md-12">
                <h4> Mensagem: </h4>
                <textarea rows="4" cols="64" />
            </div>
            <br/>
        </div>
        <div className="form-row">
            <div className="form-group col-md-12">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </div>
    </form>
)