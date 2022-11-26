// Write your solution in this file!
const employee = {
    name: "Jeff",
    streetAddress: "2664-Ngoingwa"
}
function updateEmployeeWithKeyAndValue (employee, key, value){
    const newObj = {
        ...employee, [key]: value
    };
    return newObj;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}