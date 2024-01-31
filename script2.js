const student = {
  name: "",
  age: 0,
  grade: "",

  displayInfo() {
    console.log(
      `Имя студента ${this.name}, возраст ${this.age}, класс ${this.grade} `
    );
  },
};

student.name = "Boo";
student.age = 34;
student.grade = 10;
student.displayInfo();
