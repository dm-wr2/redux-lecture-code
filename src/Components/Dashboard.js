import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../redux/reducer';
import {getPokemon} from '../redux/pokeReducer';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getPokemon();
    }

    changeAvenger = () => {
        //axios request or anything to change the data
        let newAvenger = {
            id: 2,
            name: 'Thor',
            image: 'https://mcuexchange.com/wp-content/uploads/2018/06/thor.jpg',
            hobbies: ['Hammers', 'Lightning', 'Speaking Groot']
        }

        this.props.getUser(newAvenger);
    }

    render() {
        console.log(this.props)
        return (
            <div className='dashboard'>
                <h1>{this.props.reducer.user.name}</h1>
                <p className='hobbies'>Hobbies</p>
                {this.props.reducer.user.hobbies.map((hobby, i) => (
                    <p key={i}>{hobby}</p>
                ))}
                <button onClick={this.changeAvenger}>Change Avenger</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser, getPokemon})(Dashboard);
//export default connect(null, {getUser})(Dashboard);