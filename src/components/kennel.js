import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { Employees } from "./employees/Employees"
import "./animal/Animal.css"
import { Locations } from "./locations/Locations"
import { Customers } from "./customers/Customers"
import { PropsAndState } from "./PropsAndState"

//Look carefully at the <article> tag. In React, we add classes to a component with `className` instead of `class`.
export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

    
    <PropsAndState yourName="Matt" />
    <h2>Animals</h2>
    <article className="animals">
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
    </article>
    

        
        <h2>Employees</h2>
        <article className="employees">
            <Employees />
            <Employees />
            <Employees />
        </article> 

        <h2>Locations</h2>
        <article className="locations">
            <Locations />
            <Locations />
        </article> 

        <h2>Customers</h2>
        <article className="customers">
            <Customers />
            <Customers />
            <Customers />
            <Customers />
        </article> 
        
    </>
)
