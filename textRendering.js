const text_rendering = (input_arr) => {
  for (let i of [...Array(input_arr.length).keys()].map((i) => i + 1)) {
    const printable_arr = [];
    for (let j of input_arr[i - 1]) {
      if (j == 0) printable_arr.push(" ");
      else printable_arr.push("*");
    }
    console.log(printable_arr.join(" "));
    console.log("\n");
  }
};

const text_zero = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
];

text_rendering(text_zero);
