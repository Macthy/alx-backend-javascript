export default function* createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  for (const employeesList of departments) {
    for (const employee of employeesList) {
      yield employee;
    }
  }
}
