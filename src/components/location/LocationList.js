import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  //takes 2 arguments: a function ref and a trigger(or set of triggers)
  useEffect(() => {
    console.log("LocationList: useEffect - getLocation") //will happen once
    getLocations()

  }, []) //leaving the array empty means only call the function once -- when the component first renders


  return (
    <div className="locations">
      {console.log("LocationsList: Render", locations)}
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
  )
}