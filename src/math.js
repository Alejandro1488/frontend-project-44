export const magicNumbers = (min = 1, max = 100) => {
    const minimal = Math.ceil(min);
    const maximal = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (maximal - minimal + 1)) + minimal;
    return randomNumber;
  };
  export const calculator = (x, y, oper) => {
    let result = 0;
    if (oper === '+') result = x + y;
    if (oper === '-') result = x - y;
    if (oper === '*') result = x * y;
    return result;
  };

  export const getOperator = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    const operator = arr[index];
    return operator;
  };
  export const getDivisor = (a, b) => {
    let x = a;
    let y = b;
    while (x !== y) {
      if (x > y) {
        x -= y;
      } else {
        y -= x;
      }
    }
    return x;
  };
  export const obchii = (a, b) => {
    let result = ' ';
    const length = magicNumbers(5, 10);
    const diserd = magicNumbers(1, length - 2);
    for (let i = 0; i < length; i += 1) {
      const form = (a + (b * i));
      result += (i !== diserd) ? `${form}` : '.. ';
    }
    return result;
  };
  export const progression = (a, b) => {
    let result = '';
    const length = magicNumbers(6, 10);
    const elected = magicNumbers(1, length - 2);
    for (let i = 0; i < length; i += 1) {
      const form = (a + (b * i));
      result += (i !== elected) ? `${form} ` : '.. ';
    }
    return result;
  };
  export const gitProgress = (str) => {
    const sort = str.split(' ');
    const indexNum = sort.indexOf('..');
    const oneNumber = parseInt(sort[indexNum - 1], 10);
    const twoNumber = parseInt(sort[indexNum + 1], 10);
    const solution = (oneNumber + twoNumber) / 2;
    return `${solution}`;
  };