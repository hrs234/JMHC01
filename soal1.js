const validatePattern = input => {
  const libs = {
    1: ["2", "5", "4"],
    2: ["1", "4", "5", "6", "3"],
    3: ["2", "5", "6"],
    4: ["1", "2", "5", "8", "7"],
    5: ["1", "2", "3", "4", "6", "7", "8", "9"],
    6: ["3", "2", "5", "8", "9"],
    7: ["4", "5", "8"],
    8: ["7", "4", "5", "6", "9"],
    9: ["8", "5", "6"]
  };

  //   check the length
  if (input.length > 7 || input.length < 5) {
    return "SALAH A";
  }

  // check the pattern
  for (let init = 0; init < input.length; init++) {
    let successTemp = input[0];

    if (
      libs[successTemp].find(res => {
        return res == input[init + 1];
      }) !== undefined
    ) {
      successTemp = libs[successTemp].find(res => {
        return res == input[init + 1];
      });
    } else {
      return "SALAH B";
    }
  }

  return "BENAR";
};

console.log(validatePattern("123654"));

/* patern
1  2  3
4  5  6
7  8  9
*/
