import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider.js"
import { AnimalList } from "./animal/AnimalList.js"
import { AnimalForm } from "./animal/AnimalForm.js"
import { AnimalDetail } from "./animal/AnimalDetail.js"
import { CustomerProvider } from "./customer/CustomerProvider.js"
import { CustomerList } from "./customer/CustomerList.js"
import { EmployeeProvider } from "./employee/EmployeeProvider.js"
import { EmployeeList } from "./employee/EmployeeList.js"
import { LocationProvider } from "./location/LocationProvider.js"
import { LocationList } from "./location/LocationList.js"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <CustomerProvider>
                    <LocationProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>

                        
                        <Route exact path="/animals/detail/:animalId(\d+)">
		                    <AnimalDetail />
	                    </Route>
            

                        <Route exact path="/animals/create">
                             <AnimalForm />
                        </Route>
                    </LocationProvider>
                </CustomerProvider>
            </AnimalProvider>




            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>    

            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>    

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
        </>
    )
}
