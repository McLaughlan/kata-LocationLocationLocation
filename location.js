function updateRemoteStudents(arr) {
  newArr = structuredClone(arr);

  return newArr.map((student) => {
    if (!student.location) {
      student.location = "remote";
    }
    return student;
  });
}

module.exports = updateRemoteStudents;
