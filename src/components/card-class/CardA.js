import React from "react";


class CardA extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        console.log(this.props)

        const name = this.props.name
        const role = this.props.role

        return (
            <div className="card">
                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-female-battle-royale-flaticons-lineal-color-flat-icons.png" alt="avatar" className="image"/>
                <div className="container">
                    <h4><b>{name}</b></h4>
                    <p>{role}</p>
                </div>
            </div>
        )
    }
}



export default CardA