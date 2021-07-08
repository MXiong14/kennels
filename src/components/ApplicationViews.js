import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider.js"
import { AnimalList } from "./animal/AnimalList.js"
import { Customers } from "./customers/Customers.js"
import { Employees } from "./employees/Employees.js"
import { Locations } from "./locations/Locations.js"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>


            <Route path="/customers">
                <Customers />
            </Route>

            <Route path="/employees">
                <Employees />
            </Route>

            <Route path="/locations">
                <Locations />
            </Route>
        </>
    )
}
