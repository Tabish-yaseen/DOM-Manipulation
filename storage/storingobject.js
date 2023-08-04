let student = {
    Name: 'Tabish',
    LastName: 'Mir',
    // Age: 25,
    // Marksgrades: [90, 85, 95, 75]
};

let studentstrng = JSON.stringify(student);
localStorage.setItem('student', studentstrng);
console.log(localStorage.setItem('student', studentstrng));
