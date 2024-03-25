// studentgrade.js
function gradeForMark(mark) {
// check if mark is between 0 and 100
    if (mark > 79 && mark <= 100) {
      return "A";
    } else if (mark >= 60 && mark <= 79) {
      return "B";
    } else if (mark >= 50 && mark <= 59) {
      return "C";
    } else if (mark >= 40 && mark <= 49) {
      return "D";
    } else if (mark >= 0 && mark <= 39) {
      return "E";
    } else {
      return "Invalid input: Mark should be between 0 and 100";// Invalid input
    }
  }
  
  // Prompt user for input
  const inputMarks = window.prompt("Enter a student's mark between 0 and 100.");
  // Convert input to integer
  const mark = parseInt(inputMarks);
  // Call gradeForMark function
  const grade = gradeForMark(mark);
  // Display result
  console.log("Grade:", grade);
  