import React from 'react';
import pad from '../resources/pad.png';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            img: '#',
        }
    }

    api = async () => {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
        let data = await res.json();
        this.setState({
            img: data.sprites.front_default
        })
    }

    hadleName = event => {
        this.setState({
            name: event.target.value
        })
    }

    hadleSubmit = event => {
        this.api();
        event.preventDefault();
    }

    render() {
        return (
            <div className="row justify-content-center mt-5">
                <div className="card" style={{ width: "18rem", border: "none" }}>
                    <div className="card-body bg-danger" style={{borderRadius: "5%"}}>
                        <div className="bg-primary">
                            <div className="row justify-content-between" style={{border: "5px solid #CDC8C7", borderRadius: "5%"}}>
                                <img className="card-img-top bg-success" style={{borderRadius: "5%"}} src={this.state.img} />
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                                    <button className="btn btn-dark mx-2"></button>
                                    <button className="btn btn-dark"></button>
                                </div>
                            <form onSubmit={this.hadleSubmit}>
                            <button type="submit" className="btn btn-dark mt-2">Buscar</button>
                                <div className="row justify-content-center">
                                    <div className="col-sm-5 mt-5">
                                        <input type="text" className="bg-success form-control"
                                            value={this.state.name}
                                            onChange={this.hadleName}
                                        />
                                    </div>
                                    <div className="row justify-content-end">
                                        <img src={pad} width="100" height="80" className="my-4 mx-3 pr-3" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }

}

export default Form;