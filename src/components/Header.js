import React, { Component } from 'react'
import './Header.css'

export default class Header extends React.Component {

    constructor(props){
        super(props);

        this.state={
            date : new Date().toLocaleString()

        };


    }

 
render() {

    return (
    
            <div className='view_header__content'>
                    <h1>
                        <span> Today </span>

                        <small>
                            {this.state.date}
                        </small>

                    </h1>

                
            </div>
        )
    }
}

