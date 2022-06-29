const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "test",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "test",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "test",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "test",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};
addSubmission(submissions, "Andrew", "93", "test");
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 3);
console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  let index = (array, name);
  array.splice(index, 1);
};
deleteSubmissionByName(submissions, 0);
console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
editSubmission(submissions, 2, 89);
console.log(submissions);

//
const findSubmissionByName = (array, name) => {
  return array.find((student) => {
    return student.name === name;
  });
};
console.log(findSubmissionByName(submissions, "Jack"));

const findLowestScore = (array) => {
  array.forEach(score);
};
