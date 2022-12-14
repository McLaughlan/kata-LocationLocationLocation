const updateRemoteStudents = require("../location.js");

describe("updateRemoteStudents()", () => {
  test("returns a new array", () => {
    const students = [];
    const result = updateRemoteStudents(students);
    expect(result).not.toBe(students);
  });
  test("does not mutate original array", () => {
    const students = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    const studentsCopy = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    updateRemoteStudents(students);
    expect(students).toEqual(studentsCopy);
  });
  test("Correctly updates one student who is missing a location", () => {
    const students = [{ name: "Ramanujan", age: 22 }];
    const expected = [{ name: "Ramanujan", age: 22, location: "remote" }];
    const result = updateRemoteStudents(students);
    expect(result).toEqual(expected);
  });
  test("Correctly updates an array with multiple students", () => {
    const students = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    const expected = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22, location: "remote" },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    const result = updateRemoteStudents(students);
    expect(result).toEqual(expected);
  });
});
