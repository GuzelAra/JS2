const student = {
  title: "",
  author: "",
  pages: 0,
  displayInfo() {
    console.log(
      `Название книги ${this.title}, автор ${this.author}, количество страниц ${this.pages} `
    );
  },
};

student.title = "Aelita";
student.author = "Tolstoy";
student.pages = 165;
student.displayInfo();
