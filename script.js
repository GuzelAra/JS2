// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [17, 5, 7, 9];
const min = Math.min(...arr);
console.log(min);

// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let count = 0;
  
    return {
      increment() {
        count++;
      },
      decrement() {
        count--;
      },
      getCount() {
        return count;
      }
    };
  }

//   Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(root, className) {
    if (root.classList.contains(className)) {
      return root;
    }
  
    for (let i = 0; i < root.children.length; i++) {
      const result = findElementByClass(root.children[i], className);
      if (result !== null) {
        return result;
      }
    }
  
    return null;
  }