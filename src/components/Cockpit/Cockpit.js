import React, { useEffect } from 'react'
import classes from './Cockpit.module.css'

const cockpit = (props) => {

    useEffect(() => {
        console.log("[Cockpit.ja useEffect]")
        // Http request...
        setTimeout(()=>{
            alert("Saved data to cloud!")
        },1000)
    },[props.persons])


    const assignClasses = []
    if (props.persons.length <= 2) {
        assignClasses.push(classes.red) //assignClasses=["red"]
    }
    if (props.persons.length <= 1) {
        assignClasses.push(classes.bold) //assignClasses=["red","bold"]
    }

    let btnClass = ''
    if (props.showPersons) {
        btnClass = classes.Red
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignClasses.join(" ")}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}
export default cockpit