import React, { useEffect } from 'react'
import classes from './Cockpit.module.css'

const cockpit = (props) => {

    useEffect(() => {
        console.log("[Cockpit.js useEffect]")
        // Http request...
        const timer = setTimeout(() => {
            alert("Saved data to cloud!")
        }, 1000)

        return () => {
            clearTimeout(timer)
            console.log("[Cockpit.ja cleanup work in useEffect]")
        }
    }, [])

    useEffect(() => {
        console.log("[Cockpit.js 2nd useEffect]")
        return () => { console.log("[Cockpit.ja cleanup work in 2nd useEffect]") }
    })


    const assignClasses = []
    if (props.personsLenght <= 2) {
        assignClasses.push(classes.red) //assignClasses=["red"]
    }
    if (props.personsLenght <= 1) {
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
export default React.memo(cockpit) 