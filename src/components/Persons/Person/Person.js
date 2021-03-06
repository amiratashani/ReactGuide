import React, { Component,Fragment } from 'react'

import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Auxiliary'
import classes from './Person.module.css'


class Person extends Component {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    render() {
        console.log("[Person.js rendering...]")

        return (
            <Aux>
                < p key="i1" onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
                < p key="i2"> {this.props.children}</p >
                <input key="i3" type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
           </Aux>
        )
    }



}
export default withClass(Person,classes.Person);
