export default function createIteratorObject(report) {
  let allEmployees = [];

  for (const department of Object.values(report.allEmployees)) {
    allEmployees = [...allEmployees, ...department];
  }

  return allEmployees[Symbol.iterator]();
}
