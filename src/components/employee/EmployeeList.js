import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
  //takes 2 arguments: a function ref and a trigger(or set of triggers)
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployee") //will happen once
    getEmployees()

  }, []) //leaving the array empty means only call the function once -- when the component first renders


  return (
    <div className="employees">
      {console.log("EmployeesList: Render", employees)}
      {
        employees.map(employee => {
          return <EmployeeCard key={employee.id} employee={employee} />
        })
      }
    </div>
  )
}