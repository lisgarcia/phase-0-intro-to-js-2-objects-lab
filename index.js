// Write your solution in this file!
const employee = {} 
employee.name="Sam"
employee.streetAddress="11 Broadway"

function updateEmployeeWithKeyAndValue (employee, key, value){ 
 const nextEmployee= {...employee}
 nextEmployee[key]=value
 return nextEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.name="Sam"
employee.streetAddress="12 Broadway"
  
    return employee;
}
function deleteFromEmployeeByKey (employee, key){
    const newEmployee={...employee}
    delete newEmployee[key]
    return newEmployee
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee[key]
return employee
}
