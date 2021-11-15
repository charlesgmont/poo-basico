// Objeto literal

const natalia = {
    name : "Natalia",
    lastName: "Lopez",
    age: 20,
    cursosAprobados: [
        "Curso definitivo HTML",
        "Curso Práctio de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

// Prototipos

function Student(name, lastName, age, cursosAprobados) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    Student.prototype.aprobarCurso = function (nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    };
    
    const juanita = newStudent(
        "Juanita Alejandra",
        5,
        [
            "Curso producción de videojuegos",
        ],
    );

};

// Prototipos de la sintaxis clases

class Student2 {
    constructor({
        name,
        age, 
        cursosAprobados = [],
        email,
    }) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    };

}
    const miguelito = new Student2({
        email: "miguelito@plazi.com",
        age: 28,
        name: "Miguel",
    });