import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  //takes 2 arguments: a function ref and a trigger(or set of triggers)
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers") //will happen once
    getCustomers()

  }, []) //leaving the array empty means only call the function once -- when the component first renders


  return (
    <div className="customers">
      {console.log("CustomersList: Render", customers)}
      {
        customers.map(customer => {
          return <CustomerCard key={customer.id} customer={customer} />
        })
      }
    </div>
  )
}