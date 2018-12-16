const samples = [
  { before: [3, 0, 0, 1], instr: "0 3 0 2", after: [3, 0, 1, 1] },

  { before: [2, 0, 0, 2], instr: "4 0 3 1", after: [2, 1, 0, 2] },

  { before: [0, 1, 1, 1], instr: "14 0 0 2", after: [0, 1, 0, 1] },

  { before: [3, 0, 1, 1], instr: "11 0 0 3", after: [3, 0, 1, 1] },

  { before: [1, 2, 2, 0], instr: "9 0 2 1", after: [1, 0, 2, 0] },

  { before: [0, 2, 3, 3], instr: "11 2 2 3", after: [0, 2, 3, 1] },

  { before: [2, 0, 1, 2], instr: "4 0 3 2", after: [2, 0, 1, 2] },

  { before: [2, 0, 2, 2], instr: "6 3 3 3", after: [2, 0, 2, 0] },

  { before: [0, 1, 2, 2], instr: "1 1 2 3", after: [0, 1, 2, 0] },

  { before: [0, 3, 0, 0], instr: "14 0 0 0", after: [0, 3, 0, 0] },

  { before: [2, 2, 0, 2], instr: "4 0 3 3", after: [2, 2, 0, 1] },

  { before: [2, 3, 2, 1], instr: "13 2 2 0", after: [1, 3, 2, 1] },

  { before: [2, 1, 1, 2], instr: "4 0 3 1", after: [2, 1, 1, 2] },

  { before: [1, 2, 2, 1], instr: "9 0 2 0", after: [0, 2, 2, 1] },

  { before: [2, 2, 0, 2], instr: "4 0 3 1", after: [2, 1, 0, 2] },

  { before: [1, 0, 2, 3], instr: "9 0 2 1", after: [1, 0, 2, 3] },

  { before: [1, 1, 3, 2], instr: "10 1 3 1", after: [1, 0, 3, 2] },

  { before: [0, 2, 1, 3], instr: "14 0 0 1", after: [0, 0, 1, 3] },

  { before: [2, 1, 2, 1], instr: "11 0 0 1", after: [2, 1, 2, 1] },

  { before: [1, 1, 2, 2], instr: "3 2 3 1", after: [1, 2, 2, 2] },

  { before: [3, 0, 2, 3], instr: "8 1 0 1", after: [3, 0, 2, 3] },

  { before: [1, 3, 2, 2], instr: "9 0 2 2", after: [1, 3, 0, 2] },

  { before: [2, 0, 3, 2], instr: "4 0 3 2", after: [2, 0, 1, 2] },

  { before: [2, 1, 1, 2], instr: "10 1 3 1", after: [2, 0, 1, 2] },

  { before: [2, 1, 2, 3], instr: "1 1 2 2", after: [2, 1, 0, 3] },

  { before: [3, 1, 2, 1], instr: "1 1 2 3", after: [3, 1, 2, 0] },

  { before: [2, 2, 2, 3], instr: "5 2 2 1", after: [2, 2, 2, 3] },

  { before: [2, 0, 2, 2], instr: "4 0 3 2", after: [2, 0, 1, 2] },

  { before: [2, 3, 1, 1], instr: "11 0 0 0", after: [1, 3, 1, 1] },

  { before: [2, 3, 2, 2], instr: "4 0 3 1", after: [2, 1, 2, 2] },

  { before: [3, 1, 3, 0], instr: "0 1 0 1", after: [3, 1, 3, 0] },

  { before: [3, 1, 2, 3], instr: "12 3 0 3", after: [3, 1, 2, 1] },

  { before: [1, 0, 3, 1], instr: "6 3 3 1", after: [1, 0, 3, 1] },

  { before: [0, 1, 2, 3], instr: "1 1 2 3", after: [0, 1, 2, 0] },

  { before: [1, 2, 1, 3], instr: "2 1 3 1", after: [1, 0, 1, 3] },

  { before: [1, 2, 2, 3], instr: "9 0 2 2", after: [1, 2, 0, 3] },

  { before: [3, 3, 3, 2], instr: "11 0 2 1", after: [3, 1, 3, 2] },

  { before: [2, 1, 0, 2], instr: "10 1 3 3", after: [2, 1, 0, 0] },

  { before: [3, 3, 3, 3], instr: "5 3 3 0", after: [3, 3, 3, 3] },

  { before: [0, 3, 2, 0], instr: "13 0 0 0", after: [1, 3, 2, 0] },

  { before: [3, 0, 2, 2], instr: "3 2 3 3", after: [3, 0, 2, 2] },

  { before: [1, 3, 2, 1], instr: "9 0 2 1", after: [1, 0, 2, 1] },

  { before: [1, 1, 2, 3], instr: "1 1 2 0", after: [0, 1, 2, 3] },

  { before: [1, 1, 0, 2], instr: "15 1 0 1", after: [1, 1, 0, 2] },

  { before: [0, 1, 1, 3], instr: "2 2 3 3", after: [0, 1, 1, 0] },

  { before: [3, 1, 3, 3], instr: "0 3 0 3", after: [3, 1, 3, 3] },

  { before: [0, 0, 3, 3], instr: "14 0 0 3", after: [0, 0, 3, 0] },

  { before: [2, 1, 2, 2], instr: "1 1 2 2", after: [2, 1, 0, 2] },

  { before: [2, 1, 0, 2], instr: "4 0 3 0", after: [1, 1, 0, 2] },

  { before: [2, 1, 2, 1], instr: "7 3 2 0", after: [1, 1, 2, 1] },

  { before: [3, 1, 2, 2], instr: "10 1 3 2", after: [3, 1, 0, 2] },

  { before: [3, 1, 1, 3], instr: "0 1 0 2", after: [3, 1, 1, 3] },

  { before: [3, 0, 2, 1], instr: "7 3 2 0", after: [1, 0, 2, 1] },

  { before: [2, 2, 0, 2], instr: "4 0 3 0", after: [1, 2, 0, 2] },

  { before: [0, 3, 3, 3], instr: "13 3 3 0", after: [1, 3, 3, 3] },

  { before: [2, 1, 2, 3], instr: "5 3 3 3", after: [2, 1, 2, 3] },

  { before: [1, 1, 2, 1], instr: "7 3 2 0", after: [1, 1, 2, 1] },

  { before: [3, 0, 1, 3], instr: "2 2 3 2", after: [3, 0, 0, 3] },

  { before: [0, 2, 2, 1], instr: "14 0 0 2", after: [0, 2, 0, 1] },

  { before: [0, 3, 3, 1], instr: "14 0 0 2", after: [0, 3, 0, 1] },

  { before: [0, 1, 2, 2], instr: "3 2 3 0", after: [2, 1, 2, 2] },

  { before: [0, 3, 2, 0], instr: "14 0 0 1", after: [0, 0, 2, 0] },

  { before: [0, 1, 2, 2], instr: "10 1 3 0", after: [0, 1, 2, 2] },

  { before: [1, 3, 2, 1], instr: "7 3 2 1", after: [1, 1, 2, 1] },

  { before: [1, 0, 2, 3], instr: "9 0 2 3", after: [1, 0, 2, 0] },

  { before: [0, 3, 2, 2], instr: "6 3 3 0", after: [0, 3, 2, 2] },

  { before: [0, 0, 0, 3], instr: "13 3 3 0", after: [1, 0, 0, 3] },

  { before: [2, 0, 2, 2], instr: "3 2 3 0", after: [2, 0, 2, 2] },

  { before: [0, 0, 2, 2], instr: "3 2 3 3", after: [0, 0, 2, 2] },

  { before: [2, 2, 2, 1], instr: "7 3 2 0", after: [1, 2, 2, 1] },

  { before: [3, 3, 1, 3], instr: "0 3 0 2", after: [3, 3, 3, 3] },

  { before: [1, 1, 1, 1], instr: "15 1 0 3", after: [1, 1, 1, 1] },

  { before: [1, 2, 2, 0], instr: "9 0 2 3", after: [1, 2, 2, 0] },

  { before: [2, 2, 2, 1], instr: "12 2 0 2", after: [2, 2, 1, 1] },

  { before: [2, 1, 2, 2], instr: "1 1 2 0", after: [0, 1, 2, 2] },

  { before: [1, 0, 2, 2], instr: "5 2 2 2", after: [1, 0, 2, 2] },

  { before: [0, 0, 2, 2], instr: "3 2 3 1", after: [0, 2, 2, 2] },

  { before: [0, 1, 0, 2], instr: "10 1 3 1", after: [0, 0, 0, 2] },

  { before: [3, 1, 1, 3], instr: "2 2 3 1", after: [3, 0, 1, 3] },

  { before: [0, 2, 1, 0], instr: "8 0 1 3", after: [0, 2, 1, 0] },

  { before: [1, 1, 3, 3], instr: "2 1 3 0", after: [0, 1, 3, 3] },

  { before: [0, 0, 2, 2], instr: "14 0 0 0", after: [0, 0, 2, 2] },

  { before: [1, 2, 2, 3], instr: "9 0 2 3", after: [1, 2, 2, 0] },

  { before: [2, 2, 1, 3], instr: "5 3 3 1", after: [2, 3, 1, 3] },

  { before: [2, 2, 2, 2], instr: "4 0 3 0", after: [1, 2, 2, 2] },

  { before: [0, 0, 3, 0], instr: "14 0 0 3", after: [0, 0, 3, 0] },

  { before: [3, 2, 2, 0], instr: "12 2 1 1", after: [3, 1, 2, 0] },

  { before: [2, 1, 1, 2], instr: "4 0 3 2", after: [2, 1, 1, 2] },

  { before: [3, 2, 2, 3], instr: "5 3 3 3", after: [3, 2, 2, 3] },

  { before: [3, 2, 2, 2], instr: "3 2 3 0", after: [2, 2, 2, 2] },

  { before: [0, 0, 0, 1], instr: "6 3 3 0", after: [0, 0, 0, 1] },

  { before: [1, 1, 0, 0], instr: "15 1 0 1", after: [1, 1, 0, 0] },

  { before: [0, 0, 1, 1], instr: "14 0 0 2", after: [0, 0, 0, 1] },

  { before: [1, 3, 0, 3], instr: "13 3 3 1", after: [1, 1, 0, 3] },

  { before: [1, 1, 3, 1], instr: "15 1 0 3", after: [1, 1, 3, 1] },

  { before: [1, 1, 2, 1], instr: "5 2 2 2", after: [1, 1, 2, 1] },

  { before: [3, 2, 2, 1], instr: "7 3 2 1", after: [3, 1, 2, 1] },

  { before: [1, 1, 2, 0], instr: "15 1 0 2", after: [1, 1, 1, 0] },

  { before: [0, 0, 3, 0], instr: "11 2 2 0", after: [1, 0, 3, 0] },

  { before: [0, 2, 2, 3], instr: "12 2 1 2", after: [0, 2, 1, 3] },

  { before: [0, 0, 3, 2], instr: "14 0 0 3", after: [0, 0, 3, 0] },

  { before: [1, 3, 2, 3], instr: "13 2 2 2", after: [1, 3, 1, 3] },

  { before: [1, 1, 2, 1], instr: "7 3 2 3", after: [1, 1, 2, 1] },

  { before: [0, 1, 3, 0], instr: "8 0 1 1", after: [0, 0, 3, 0] },

  { before: [1, 0, 2, 2], instr: "9 0 2 0", after: [0, 0, 2, 2] },

  { before: [0, 1, 0, 3], instr: "8 0 1 3", after: [0, 1, 0, 0] },

  { before: [0, 2, 1, 3], instr: "2 1 3 3", after: [0, 2, 1, 0] },

  { before: [2, 3, 2, 3], instr: "11 0 0 0", after: [1, 3, 2, 3] },

  { before: [0, 0, 2, 1], instr: "6 3 3 3", after: [0, 0, 2, 0] },

  { before: [2, 2, 3, 2], instr: "11 0 0 0", after: [1, 2, 3, 2] },

  { before: [3, 1, 2, 1], instr: "7 3 2 1", after: [3, 1, 2, 1] },

  { before: [0, 2, 2, 1], instr: "7 3 2 1", after: [0, 1, 2, 1] },

  { before: [0, 1, 0, 3], instr: "14 0 0 1", after: [0, 0, 0, 3] },

  { before: [1, 1, 2, 1], instr: "9 0 2 3", after: [1, 1, 2, 0] },

  { before: [0, 3, 3, 3], instr: "8 0 1 3", after: [0, 3, 3, 0] },

  { before: [0, 3, 0, 3], instr: "13 3 3 3", after: [0, 3, 0, 1] },

  { before: [0, 2, 2, 3], instr: "8 0 3 0", after: [0, 2, 2, 3] },

  { before: [2, 3, 2, 1], instr: "12 2 0 0", after: [1, 3, 2, 1] },

  { before: [0, 3, 3, 0], instr: "8 0 1 0", after: [0, 3, 3, 0] },

  { before: [1, 1, 1, 2], instr: "10 1 3 3", after: [1, 1, 1, 0] },

  { before: [0, 3, 1, 1], instr: "8 0 3 0", after: [0, 3, 1, 1] },

  { before: [2, 1, 3, 3], instr: "2 1 3 0", after: [0, 1, 3, 3] },

  { before: [1, 1, 2, 3], instr: "1 1 2 2", after: [1, 1, 0, 3] },

  { before: [3, 3, 2, 3], instr: "2 2 3 3", after: [3, 3, 2, 0] },

  { before: [0, 1, 1, 3], instr: "13 3 2 0", after: [0, 1, 1, 3] },

  { before: [0, 2, 0, 2], instr: "13 0 0 1", after: [0, 1, 0, 2] },

  { before: [3, 1, 2, 3], instr: "1 1 2 0", after: [0, 1, 2, 3] },

  { before: [0, 3, 3, 3], instr: "11 2 2 1", after: [0, 1, 3, 3] },

  { before: [0, 2, 3, 2], instr: "8 0 2 3", after: [0, 2, 3, 0] },

  { before: [3, 1, 1, 0], instr: "0 1 0 0", after: [1, 1, 1, 0] },

  { before: [2, 1, 2, 1], instr: "0 2 0 3", after: [2, 1, 2, 2] },

  { before: [0, 1, 2, 3], instr: "13 3 3 1", after: [0, 1, 2, 3] },

  { before: [1, 0, 2, 0], instr: "9 0 2 3", after: [1, 0, 2, 0] },

  { before: [3, 1, 2, 0], instr: "11 0 0 0", after: [1, 1, 2, 0] },

  { before: [0, 2, 1, 0], instr: "14 0 0 1", after: [0, 0, 1, 0] },

  { before: [2, 1, 3, 2], instr: "4 0 3 3", after: [2, 1, 3, 1] },

  { before: [0, 2, 2, 3], instr: "2 1 3 0", after: [0, 2, 2, 3] },

  { before: [2, 3, 3, 1], instr: "11 2 2 1", after: [2, 1, 3, 1] },

  { before: [0, 2, 2, 1], instr: "12 2 1 2", after: [0, 2, 1, 1] },

  { before: [2, 3, 2, 2], instr: "3 2 3 2", after: [2, 3, 2, 2] },

  { before: [2, 3, 3, 2], instr: "4 0 3 0", after: [1, 3, 3, 2] },

  { before: [3, 1, 3, 3], instr: "0 3 0 0", after: [3, 1, 3, 3] },

  { before: [0, 2, 1, 3], instr: "8 0 3 2", after: [0, 2, 0, 3] },

  { before: [2, 1, 2, 2], instr: "3 2 3 3", after: [2, 1, 2, 2] },

  { before: [2, 2, 2, 2], instr: "12 2 1 1", after: [2, 1, 2, 2] },

  { before: [2, 1, 2, 2], instr: "3 2 3 1", after: [2, 2, 2, 2] },

  { before: [3, 0, 3, 3], instr: "0 3 0 2", after: [3, 0, 3, 3] },

  { before: [1, 0, 3, 0], instr: "11 2 2 3", after: [1, 0, 3, 1] },

  { before: [0, 2, 2, 0], instr: "12 2 1 1", after: [0, 1, 2, 0] },

  { before: [1, 1, 0, 0], instr: "15 1 0 2", after: [1, 1, 1, 0] },

  { before: [2, 1, 0, 2], instr: "4 0 3 1", after: [2, 1, 0, 2] },

  { before: [1, 2, 2, 3], instr: "2 2 3 2", after: [1, 2, 0, 3] },

  { before: [3, 1, 2, 3], instr: "2 1 3 1", after: [3, 0, 2, 3] },

  { before: [1, 1, 1, 3], instr: "15 1 0 2", after: [1, 1, 1, 3] },

  { before: [1, 2, 3, 0], instr: "11 2 2 3", after: [1, 2, 3, 1] },

  { before: [1, 1, 0, 2], instr: "15 1 0 2", after: [1, 1, 1, 2] },

  { before: [3, 1, 3, 2], instr: "10 1 3 3", after: [3, 1, 3, 0] },

  { before: [1, 1, 2, 2], instr: "3 2 3 0", after: [2, 1, 2, 2] },

  { before: [2, 1, 2, 1], instr: "1 1 2 1", after: [2, 0, 2, 1] },

  { before: [3, 1, 3, 1], instr: "0 1 0 2", after: [3, 1, 1, 1] },

  { before: [3, 1, 1, 2], instr: "0 1 0 2", after: [3, 1, 1, 2] },

  { before: [1, 3, 3, 1], instr: "12 2 3 2", after: [1, 3, 0, 1] },

  { before: [3, 1, 1, 2], instr: "10 1 3 3", after: [3, 1, 1, 0] },

  { before: [1, 1, 1, 2], instr: "10 1 3 0", after: [0, 1, 1, 2] },

  { before: [0, 1, 0, 2], instr: "8 0 3 3", after: [0, 1, 0, 0] },

  { before: [3, 0, 0, 3], instr: "5 3 3 1", after: [3, 3, 0, 3] },

  { before: [1, 1, 2, 2], instr: "1 1 2 1", after: [1, 0, 2, 2] },

  { before: [0, 0, 1, 1], instr: "6 3 3 3", after: [0, 0, 1, 0] },

  { before: [1, 2, 2, 2], instr: "6 3 3 3", after: [1, 2, 2, 0] },

  { before: [2, 3, 2, 1], instr: "7 3 2 3", after: [2, 3, 2, 1] },

  { before: [3, 3, 1, 1], instr: "11 0 0 0", after: [1, 3, 1, 1] },

  { before: [3, 0, 2, 1], instr: "7 3 2 2", after: [3, 0, 1, 1] },

  { before: [2, 0, 3, 2], instr: "4 0 3 1", after: [2, 1, 3, 2] },

  { before: [2, 3, 2, 1], instr: "5 2 2 1", after: [2, 2, 2, 1] },

  { before: [1, 1, 0, 2], instr: "10 1 3 3", after: [1, 1, 0, 0] },

  { before: [0, 3, 1, 3], instr: "8 0 2 1", after: [0, 0, 1, 3] },

  { before: [2, 0, 1, 2], instr: "4 0 3 1", after: [2, 1, 1, 2] },

  { before: [1, 3, 3, 3], instr: "5 3 3 0", after: [3, 3, 3, 3] },

  { before: [2, 2, 2, 2], instr: "4 0 3 3", after: [2, 2, 2, 1] },

  { before: [3, 1, 2, 0], instr: "1 1 2 1", after: [3, 0, 2, 0] },

  { before: [1, 3, 3, 1], instr: "6 3 3 3", after: [1, 3, 3, 0] },

  { before: [1, 1, 3, 1], instr: "15 1 0 2", after: [1, 1, 1, 1] },

  { before: [1, 1, 1, 1], instr: "15 1 0 1", after: [1, 1, 1, 1] },

  { before: [1, 3, 2, 3], instr: "5 3 3 0", after: [3, 3, 2, 3] },

  { before: [2, 0, 2, 1], instr: "7 3 2 2", after: [2, 0, 1, 1] },

  { before: [0, 1, 1, 2], instr: "10 1 3 2", after: [0, 1, 0, 2] },

  { before: [0, 2, 1, 3], instr: "2 2 3 2", after: [0, 2, 0, 3] },

  { before: [1, 1, 2, 0], instr: "1 1 2 2", after: [1, 1, 0, 0] },

  { before: [1, 0, 1, 3], instr: "2 2 3 2", after: [1, 0, 0, 3] },

  { before: [3, 1, 0, 3], instr: "0 3 0 3", after: [3, 1, 0, 3] },

  { before: [0, 2, 0, 1], instr: "8 0 3 0", after: [0, 2, 0, 1] },

  { before: [3, 1, 1, 0], instr: "11 0 0 1", after: [3, 1, 1, 0] },

  { before: [1, 2, 2, 2], instr: "6 3 3 1", after: [1, 0, 2, 2] },

  { before: [1, 2, 1, 3], instr: "2 2 3 3", after: [1, 2, 1, 0] },

  { before: [0, 3, 3, 2], instr: "14 0 0 1", after: [0, 0, 3, 2] },

  { before: [2, 2, 2, 1], instr: "7 3 2 2", after: [2, 2, 1, 1] },

  { before: [2, 2, 0, 2], instr: "4 0 3 2", after: [2, 2, 1, 2] },

  { before: [0, 1, 1, 3], instr: "8 0 2 1", after: [0, 0, 1, 3] },

  { before: [2, 1, 1, 2], instr: "10 1 3 3", after: [2, 1, 1, 0] },

  { before: [3, 0, 2, 3], instr: "13 3 2 1", after: [3, 0, 2, 3] },

  { before: [0, 3, 2, 1], instr: "14 0 0 3", after: [0, 3, 2, 0] },

  { before: [2, 3, 2, 1], instr: "5 2 2 0", after: [2, 3, 2, 1] },

  { before: [2, 1, 2, 3], instr: "2 2 3 0", after: [0, 1, 2, 3] },

  { before: [0, 1, 3, 2], instr: "10 1 3 1", after: [0, 0, 3, 2] },

  { before: [1, 1, 2, 0], instr: "9 0 2 2", after: [1, 1, 0, 0] },

  { before: [0, 3, 0, 3], instr: "14 0 0 0", after: [0, 3, 0, 3] },

  { before: [0, 2, 0, 3], instr: "2 1 3 0", after: [0, 2, 0, 3] },

  { before: [0, 0, 2, 1], instr: "13 2 2 3", after: [0, 0, 2, 1] },

  { before: [0, 1, 2, 2], instr: "1 1 2 2", after: [0, 1, 0, 2] },

  { before: [3, 1, 3, 3], instr: "2 1 3 3", after: [3, 1, 3, 0] },

  { before: [0, 3, 2, 0], instr: "5 2 2 0", after: [2, 3, 2, 0] },

  { before: [1, 2, 2, 1], instr: "9 0 2 1", after: [1, 0, 2, 1] },

  { before: [1, 3, 2, 3], instr: "2 2 3 3", after: [1, 3, 2, 0] },

  { before: [2, 3, 0, 2], instr: "4 0 3 3", after: [2, 3, 0, 1] },

  { before: [2, 2, 3, 1], instr: "12 2 3 0", after: [0, 2, 3, 1] },

  { before: [0, 1, 2, 2], instr: "13 0 0 1", after: [0, 1, 2, 2] },

  { before: [1, 0, 2, 1], instr: "7 3 2 2", after: [1, 0, 1, 1] },

  { before: [0, 3, 3, 0], instr: "14 0 0 2", after: [0, 3, 0, 0] },

  { before: [3, 0, 3, 1], instr: "11 0 2 0", after: [1, 0, 3, 1] },

  { before: [1, 2, 0, 1], instr: "6 3 3 0", after: [0, 2, 0, 1] },

  { before: [2, 1, 2, 1], instr: "1 1 2 0", after: [0, 1, 2, 1] },

  { before: [3, 3, 2, 3], instr: "0 3 0 0", after: [3, 3, 2, 3] },

  { before: [0, 3, 2, 3], instr: "5 3 3 0", after: [3, 3, 2, 3] },

  { before: [0, 1, 3, 3], instr: "14 0 0 3", after: [0, 1, 3, 0] },

  { before: [0, 0, 3, 1], instr: "13 0 0 1", after: [0, 1, 3, 1] },

  { before: [0, 3, 2, 2], instr: "3 2 3 2", after: [0, 3, 2, 2] },

  { before: [2, 2, 2, 3], instr: "2 1 3 0", after: [0, 2, 2, 3] },

  { before: [2, 2, 2, 3], instr: "12 2 1 0", after: [1, 2, 2, 3] },

  { before: [0, 0, 1, 0], instr: "14 0 0 3", after: [0, 0, 1, 0] },

  { before: [1, 1, 1, 2], instr: "15 1 0 0", after: [1, 1, 1, 2] },

  { before: [2, 0, 2, 1], instr: "7 3 2 0", after: [1, 0, 2, 1] },

  { before: [3, 0, 2, 1], instr: "11 0 0 3", after: [3, 0, 2, 1] },

  { before: [3, 1, 2, 2], instr: "10 1 3 3", after: [3, 1, 2, 0] },

  { before: [0, 1, 2, 3], instr: "13 3 1 0", after: [0, 1, 2, 3] },

  { before: [0, 1, 0, 3], instr: "14 0 0 3", after: [0, 1, 0, 0] },

  { before: [0, 3, 2, 3], instr: "8 0 2 3", after: [0, 3, 2, 0] },

  { before: [1, 3, 2, 2], instr: "9 0 2 0", after: [0, 3, 2, 2] },

  { before: [1, 0, 2, 1], instr: "9 0 2 1", after: [1, 0, 2, 1] },

  { before: [0, 1, 0, 3], instr: "2 1 3 1", after: [0, 0, 0, 3] },

  { before: [0, 0, 2, 3], instr: "14 0 0 0", after: [0, 0, 2, 3] },

  { before: [2, 2, 2, 1], instr: "12 2 1 0", after: [1, 2, 2, 1] },

  { before: [3, 3, 3, 1], instr: "0 3 0 3", after: [3, 3, 3, 1] },

  { before: [3, 3, 0, 1], instr: "0 3 0 1", after: [3, 1, 0, 1] },

  { before: [0, 1, 2, 3], instr: "1 1 2 0", after: [0, 1, 2, 3] },

  { before: [3, 3, 3, 3], instr: "0 3 0 3", after: [3, 3, 3, 3] },

  { before: [1, 0, 2, 2], instr: "3 2 3 1", after: [1, 2, 2, 2] },

  { before: [1, 2, 2, 2], instr: "12 2 1 3", after: [1, 2, 2, 1] },

  { before: [0, 1, 1, 2], instr: "10 1 3 1", after: [0, 0, 1, 2] },

  { before: [1, 0, 2, 2], instr: "9 0 2 2", after: [1, 0, 0, 2] },

  { before: [1, 1, 2, 2], instr: "10 1 3 1", after: [1, 0, 2, 2] },

  { before: [3, 3, 1, 1], instr: "0 3 0 1", after: [3, 1, 1, 1] },

  { before: [2, 1, 2, 2], instr: "12 2 0 0", after: [1, 1, 2, 2] },

  { before: [2, 0, 3, 2], instr: "4 0 3 0", after: [1, 0, 3, 2] },

  { before: [2, 2, 3, 2], instr: "4 0 3 3", after: [2, 2, 3, 1] },

  { before: [2, 3, 3, 3], instr: "13 3 3 2", after: [2, 3, 1, 3] },

  { before: [3, 3, 2, 1], instr: "7 3 2 1", after: [3, 1, 2, 1] },

  { before: [0, 3, 2, 0], instr: "8 0 2 2", after: [0, 3, 0, 0] },

  { before: [0, 1, 3, 2], instr: "13 2 1 1", after: [0, 0, 3, 2] },

  { before: [0, 1, 2, 2], instr: "13 0 0 0", after: [1, 1, 2, 2] },

  { before: [2, 2, 1, 3], instr: "2 1 3 0", after: [0, 2, 1, 3] },

  { before: [1, 1, 1, 0], instr: "15 1 0 1", after: [1, 1, 1, 0] },

  { before: [2, 2, 2, 2], instr: "3 2 3 2", after: [2, 2, 2, 2] },

  { before: [1, 1, 2, 3], instr: "15 1 0 3", after: [1, 1, 2, 1] },

  { before: [2, 0, 3, 2], instr: "4 0 3 3", after: [2, 0, 3, 1] },

  { before: [3, 0, 3, 3], instr: "0 3 0 3", after: [3, 0, 3, 3] },

  { before: [0, 2, 1, 1], instr: "8 0 2 1", after: [0, 0, 1, 1] },

  { before: [1, 3, 2, 0], instr: "5 2 2 3", after: [1, 3, 2, 2] },

  { before: [0, 2, 2, 1], instr: "6 3 3 1", after: [0, 0, 2, 1] },

  { before: [1, 1, 3, 0], instr: "15 1 0 1", after: [1, 1, 3, 0] },

  { before: [2, 0, 1, 3], instr: "5 3 3 0", after: [3, 0, 1, 3] },

  { before: [1, 1, 2, 1], instr: "15 1 0 1", after: [1, 1, 2, 1] },

  { before: [2, 1, 2, 2], instr: "3 2 3 0", after: [2, 1, 2, 2] },

  { before: [1, 1, 3, 2], instr: "15 1 0 3", after: [1, 1, 3, 1] },

  { before: [0, 2, 1, 1], instr: "14 0 0 0", after: [0, 2, 1, 1] },

  { before: [0, 0, 2, 0], instr: "5 2 2 1", after: [0, 2, 2, 0] },

  { before: [0, 1, 2, 3], instr: "2 1 3 2", after: [0, 1, 0, 3] },

  { before: [3, 1, 2, 2], instr: "3 2 3 0", after: [2, 1, 2, 2] },

  { before: [1, 2, 2, 2], instr: "9 0 2 2", after: [1, 2, 0, 2] },

  { before: [2, 2, 2, 1], instr: "5 2 2 1", after: [2, 2, 2, 1] },

  { before: [1, 1, 2, 1], instr: "7 3 2 1", after: [1, 1, 2, 1] },

  { before: [3, 0, 0, 1], instr: "0 3 0 3", after: [3, 0, 0, 1] },

  { before: [3, 2, 3, 3], instr: "12 3 0 3", after: [3, 2, 3, 1] },

  { before: [3, 1, 2, 2], instr: "10 1 3 1", after: [3, 0, 2, 2] },

  { before: [1, 0, 1, 3], instr: "13 3 2 1", after: [1, 0, 1, 3] },

  { before: [0, 0, 0, 2], instr: "14 0 0 1", after: [0, 0, 0, 2] },

  { before: [3, 0, 3, 1], instr: "0 3 0 1", after: [3, 1, 3, 1] },

  { before: [1, 1, 2, 3], instr: "1 1 2 3", after: [1, 1, 2, 0] },

  { before: [3, 1, 2, 1], instr: "1 1 2 1", after: [3, 0, 2, 1] },

  { before: [3, 3, 0, 3], instr: "13 3 3 2", after: [3, 3, 1, 3] },

  { before: [3, 3, 2, 3], instr: "2 2 3 2", after: [3, 3, 0, 3] },

  { before: [1, 2, 2, 1], instr: "9 0 2 2", after: [1, 2, 0, 1] },

  { before: [3, 1, 0, 1], instr: "0 3 0 1", after: [3, 1, 0, 1] },

  { before: [2, 2, 3, 2], instr: "4 0 3 0", after: [1, 2, 3, 2] },

  { before: [2, 0, 2, 1], instr: "7 3 2 1", after: [2, 1, 2, 1] },

  { before: [1, 1, 2, 2], instr: "9 0 2 2", after: [1, 1, 0, 2] },

  { before: [0, 1, 3, 2], instr: "6 3 3 2", after: [0, 1, 0, 2] },

  { before: [3, 3, 0, 2], instr: "6 3 3 3", after: [3, 3, 0, 0] },

  { before: [3, 1, 3, 1], instr: "11 0 2 2", after: [3, 1, 1, 1] },

  { before: [0, 1, 2, 1], instr: "7 3 2 3", after: [0, 1, 2, 1] },

  { before: [1, 2, 2, 1], instr: "7 3 2 1", after: [1, 1, 2, 1] },

  { before: [3, 1, 0, 2], instr: "10 1 3 2", after: [3, 1, 0, 2] },

  { before: [0, 1, 3, 2], instr: "14 0 0 2", after: [0, 1, 0, 2] },

  { before: [0, 3, 0, 2], instr: "14 0 0 1", after: [0, 0, 0, 2] },

  { before: [0, 1, 2, 1], instr: "1 1 2 3", after: [0, 1, 2, 0] },

  { before: [1, 1, 2, 1], instr: "9 0 2 1", after: [1, 0, 2, 1] },

  { before: [0, 1, 2, 2], instr: "10 1 3 2", after: [0, 1, 0, 2] },

  { before: [1, 0, 2, 2], instr: "3 2 3 2", after: [1, 0, 2, 2] },

  { before: [2, 3, 3, 1], instr: "12 2 3 3", after: [2, 3, 3, 0] },

  { before: [2, 0, 3, 1], instr: "12 2 3 0", after: [0, 0, 3, 1] },

  { before: [2, 1, 2, 1], instr: "7 3 2 2", after: [2, 1, 1, 1] },

  { before: [3, 3, 2, 2], instr: "3 2 3 0", after: [2, 3, 2, 2] },

  { before: [0, 1, 0, 1], instr: "8 0 1 1", after: [0, 0, 0, 1] },

  { before: [1, 1, 2, 1], instr: "6 3 3 2", after: [1, 1, 0, 1] },

  { before: [0, 1, 2, 2], instr: "1 1 2 0", after: [0, 1, 2, 2] },

  { before: [3, 3, 1, 3], instr: "2 2 3 2", after: [3, 3, 0, 3] },

  { before: [3, 2, 1, 3], instr: "5 3 3 1", after: [3, 3, 1, 3] },

  { before: [2, 1, 2, 2], instr: "4 0 3 0", after: [1, 1, 2, 2] },

  { before: [3, 3, 2, 2], instr: "13 2 2 2", after: [3, 3, 1, 2] },

  { before: [2, 1, 3, 2], instr: "4 0 3 2", after: [2, 1, 1, 2] },

  { before: [3, 0, 2, 2], instr: "3 2 3 1", after: [3, 2, 2, 2] },

  { before: [2, 0, 1, 2], instr: "4 0 3 3", after: [2, 0, 1, 1] },

  { before: [3, 2, 2, 0], instr: "5 2 2 3", after: [3, 2, 2, 2] },

  { before: [0, 0, 3, 3], instr: "5 3 3 3", after: [0, 0, 3, 3] },

  { before: [0, 1, 0, 3], instr: "13 3 1 0", after: [0, 1, 0, 3] },

  { before: [2, 2, 3, 2], instr: "4 0 3 2", after: [2, 2, 1, 2] },

  { before: [0, 3, 0, 1], instr: "14 0 0 2", after: [0, 3, 0, 1] },

  { before: [3, 3, 3, 0], instr: "11 0 0 2", after: [3, 3, 1, 0] },

  { before: [0, 3, 3, 3], instr: "14 0 0 1", after: [0, 0, 3, 3] },

  { before: [2, 2, 1, 1], instr: "6 3 3 2", after: [2, 2, 0, 1] },

  { before: [3, 2, 0, 3], instr: "5 3 3 0", after: [3, 2, 0, 3] },

  { before: [2, 2, 2, 3], instr: "2 1 3 1", after: [2, 0, 2, 3] },

  { before: [2, 3, 2, 2], instr: "3 2 3 1", after: [2, 2, 2, 2] },

  { before: [0, 1, 2, 1], instr: "7 3 2 1", after: [0, 1, 2, 1] },

  { before: [0, 1, 2, 2], instr: "3 2 3 1", after: [0, 2, 2, 2] },

  { before: [3, 1, 2, 0], instr: "0 1 0 2", after: [3, 1, 1, 0] },

  { before: [2, 2, 2, 0], instr: "0 2 0 1", after: [2, 2, 2, 0] },

  { before: [1, 1, 3, 0], instr: "15 1 0 0", after: [1, 1, 3, 0] },

  { before: [0, 3, 0, 3], instr: "5 3 3 0", after: [3, 3, 0, 3] },

  { before: [3, 3, 3, 3], instr: "0 3 0 0", after: [3, 3, 3, 3] },

  { before: [3, 0, 2, 0], instr: "5 2 2 2", after: [3, 0, 2, 0] },

  { before: [2, 3, 2, 2], instr: "6 3 3 0", after: [0, 3, 2, 2] },

  { before: [1, 0, 2, 3], instr: "9 0 2 0", after: [0, 0, 2, 3] },

  { before: [2, 3, 2, 0], instr: "5 2 2 1", after: [2, 2, 2, 0] },

  { before: [3, 3, 3, 1], instr: "12 2 3 3", after: [3, 3, 3, 0] },

  { before: [1, 1, 1, 3], instr: "2 2 3 2", after: [1, 1, 0, 3] },

  { before: [3, 1, 1, 2], instr: "11 0 0 2", after: [3, 1, 1, 2] },

  { before: [1, 1, 0, 2], instr: "15 1 0 3", after: [1, 1, 0, 1] },

  { before: [1, 1, 1, 1], instr: "15 1 0 2", after: [1, 1, 1, 1] },

  { before: [0, 1, 0, 3], instr: "2 1 3 2", after: [0, 1, 0, 3] },

  { before: [2, 0, 2, 2], instr: "3 2 3 2", after: [2, 0, 2, 2] },

  { before: [0, 3, 3, 3], instr: "11 2 2 3", after: [0, 3, 3, 1] },

  { before: [0, 1, 2, 2], instr: "3 2 3 3", after: [0, 1, 2, 2] },

  { before: [0, 3, 3, 0], instr: "8 0 1 1", after: [0, 0, 3, 0] },

  { before: [3, 1, 3, 2], instr: "10 1 3 1", after: [3, 0, 3, 2] },

  { before: [3, 2, 2, 3], instr: "12 2 1 2", after: [3, 2, 1, 3] },

  { before: [3, 2, 2, 0], instr: "5 2 2 0", after: [2, 2, 2, 0] },

  { before: [3, 1, 1, 2], instr: "10 1 3 1", after: [3, 0, 1, 2] },

  { before: [3, 0, 3, 1], instr: "11 0 2 2", after: [3, 0, 1, 1] },

  { before: [3, 1, 0, 3], instr: "0 1 0 1", after: [3, 1, 0, 3] },

  { before: [0, 1, 2, 1], instr: "7 3 2 2", after: [0, 1, 1, 1] },

  { before: [2, 1, 2, 0], instr: "12 2 0 1", after: [2, 1, 2, 0] },

  { before: [0, 1, 0, 2], instr: "14 0 0 2", after: [0, 1, 0, 2] },

  { before: [2, 3, 2, 1], instr: "0 2 0 3", after: [2, 3, 2, 2] },

  { before: [1, 1, 0, 2], instr: "10 1 3 1", after: [1, 0, 0, 2] },

  { before: [3, 1, 2, 3], instr: "13 3 3 2", after: [3, 1, 1, 3] },

  { before: [2, 3, 2, 3], instr: "0 2 0 1", after: [2, 2, 2, 3] },

  { before: [3, 1, 2, 3], instr: "1 1 2 3", after: [3, 1, 2, 0] },

  { before: [2, 2, 1, 2], instr: "4 0 3 0", after: [1, 2, 1, 2] },

  { before: [0, 0, 3, 1], instr: "14 0 0 0", after: [0, 0, 3, 1] },

  { before: [3, 2, 3, 0], instr: "11 0 2 3", after: [3, 2, 3, 1] },

  { before: [2, 1, 1, 1], instr: "11 0 0 1", after: [2, 1, 1, 1] },

  { before: [3, 2, 2, 2], instr: "12 2 1 2", after: [3, 2, 1, 2] },

  { before: [0, 1, 3, 2], instr: "10 1 3 2", after: [0, 1, 0, 2] },

  { before: [1, 1, 2, 2], instr: "15 1 0 1", after: [1, 1, 2, 2] },

  { before: [0, 0, 3, 3], instr: "8 0 2 3", after: [0, 0, 3, 0] },

  { before: [2, 0, 0, 0], instr: "11 0 0 1", after: [2, 1, 0, 0] },

  { before: [3, 2, 3, 3], instr: "0 3 0 2", after: [3, 2, 3, 3] },

  { before: [2, 2, 2, 2], instr: "4 0 3 2", after: [2, 2, 1, 2] },

  { before: [1, 1, 1, 3], instr: "15 1 0 0", after: [1, 1, 1, 3] },

  { before: [0, 1, 2, 0], instr: "8 0 1 0", after: [0, 1, 2, 0] },

  { before: [3, 1, 3, 1], instr: "12 2 3 0", after: [0, 1, 3, 1] },

  { before: [1, 1, 2, 2], instr: "3 2 3 2", after: [1, 1, 2, 2] },

  { before: [3, 1, 2, 2], instr: "3 2 3 1", after: [3, 2, 2, 2] },

  { before: [1, 1, 0, 1], instr: "15 1 0 0", after: [1, 1, 0, 1] },

  { before: [2, 3, 1, 3], instr: "2 2 3 3", after: [2, 3, 1, 0] },

  { before: [2, 0, 3, 1], instr: "12 2 3 2", after: [2, 0, 0, 1] },

  { before: [2, 0, 0, 3], instr: "8 1 0 0", after: [0, 0, 0, 3] },

  { before: [1, 1, 2, 0], instr: "15 1 0 0", after: [1, 1, 2, 0] },

  { before: [3, 0, 0, 0], instr: "8 2 0 3", after: [3, 0, 0, 0] },

  { before: [2, 0, 2, 2], instr: "0 2 0 3", after: [2, 0, 2, 2] },

  { before: [2, 0, 2, 2], instr: "4 0 3 3", after: [2, 0, 2, 1] },

  { before: [0, 2, 2, 1], instr: "7 3 2 2", after: [0, 2, 1, 1] },

  { before: [2, 2, 0, 1], instr: "6 3 3 1", after: [2, 0, 0, 1] },

  { before: [2, 1, 1, 2], instr: "10 1 3 2", after: [2, 1, 0, 2] },

  { before: [2, 0, 1, 3], instr: "2 2 3 0", after: [0, 0, 1, 3] },

  { before: [2, 0, 0, 2], instr: "4 0 3 3", after: [2, 0, 0, 1] },

  { before: [1, 2, 2, 2], instr: "3 2 3 0", after: [2, 2, 2, 2] },

  { before: [0, 3, 2, 1], instr: "8 0 1 0", after: [0, 3, 2, 1] },

  { before: [0, 2, 2, 3], instr: "8 0 3 2", after: [0, 2, 0, 3] },

  { before: [0, 2, 2, 0], instr: "5 2 2 3", after: [0, 2, 2, 2] },

  { before: [3, 0, 3, 1], instr: "12 2 3 0", after: [0, 0, 3, 1] },

  { before: [0, 2, 1, 3], instr: "2 1 3 0", after: [0, 2, 1, 3] },

  { before: [1, 1, 2, 2], instr: "1 1 2 0", after: [0, 1, 2, 2] },

  { before: [2, 0, 2, 0], instr: "0 2 0 2", after: [2, 0, 2, 0] },

  { before: [0, 1, 3, 2], instr: "10 1 3 3", after: [0, 1, 3, 0] },

  { before: [1, 1, 2, 0], instr: "15 1 0 3", after: [1, 1, 2, 1] },

  { before: [2, 1, 2, 3], instr: "1 1 2 0", after: [0, 1, 2, 3] },

  { before: [1, 3, 1, 3], instr: "2 2 3 3", after: [1, 3, 1, 0] },

  { before: [2, 3, 2, 0], instr: "12 2 0 1", after: [2, 1, 2, 0] },

  { before: [3, 0, 3, 3], instr: "12 3 0 2", after: [3, 0, 1, 3] },

  { before: [3, 1, 1, 3], instr: "2 2 3 0", after: [0, 1, 1, 3] },

  { before: [3, 2, 2, 3], instr: "2 1 3 3", after: [3, 2, 2, 0] },

  { before: [2, 2, 2, 1], instr: "7 3 2 3", after: [2, 2, 2, 1] },

  { before: [1, 1, 1, 1], instr: "6 2 3 3", after: [1, 1, 1, 0] },

  { before: [2, 3, 2, 3], instr: "5 2 2 2", after: [2, 3, 2, 3] },

  { before: [2, 3, 2, 2], instr: "4 0 3 0", after: [1, 3, 2, 2] },

  { before: [0, 1, 2, 1], instr: "13 2 2 2", after: [0, 1, 1, 1] },

  { before: [1, 3, 2, 2], instr: "9 0 2 3", after: [1, 3, 2, 0] },

  { before: [0, 0, 0, 3], instr: "14 0 0 1", after: [0, 0, 0, 3] },

  { before: [0, 2, 0, 0], instr: "14 0 0 2", after: [0, 2, 0, 0] },

  { before: [1, 3, 2, 1], instr: "9 0 2 3", after: [1, 3, 2, 0] },

  { before: [3, 2, 2, 3], instr: "13 3 2 1", after: [3, 0, 2, 3] },

  { before: [1, 0, 2, 0], instr: "9 0 2 0", after: [0, 0, 2, 0] },

  { before: [0, 3, 2, 1], instr: "5 2 2 1", after: [0, 2, 2, 1] },

  { before: [3, 1, 2, 3], instr: "1 1 2 1", after: [3, 0, 2, 3] },

  { before: [0, 3, 1, 2], instr: "14 0 0 2", after: [0, 3, 0, 2] },

  { before: [2, 1, 1, 3], instr: "13 3 2 1", after: [2, 0, 1, 3] },

  { before: [0, 0, 2, 2], instr: "6 3 3 3", after: [0, 0, 2, 0] },

  { before: [0, 1, 3, 0], instr: "8 0 2 0", after: [0, 1, 3, 0] },

  { before: [1, 1, 1, 2], instr: "15 1 0 2", after: [1, 1, 1, 2] },

  { before: [0, 1, 3, 2], instr: "8 0 2 3", after: [0, 1, 3, 0] },

  { before: [1, 1, 3, 3], instr: "15 1 0 0", after: [1, 1, 3, 3] },

  { before: [2, 2, 1, 2], instr: "11 0 1 0", after: [1, 2, 1, 2] },

  { before: [1, 0, 2, 2], instr: "3 2 3 0", after: [2, 0, 2, 2] },

  { before: [0, 0, 2, 2], instr: "3 2 3 0", after: [2, 0, 2, 2] },

  { before: [2, 2, 2, 2], instr: "3 2 3 0", after: [2, 2, 2, 2] },

  { before: [2, 2, 2, 0], instr: "12 2 0 0", after: [1, 2, 2, 0] },

  { before: [0, 1, 1, 2], instr: "10 1 3 0", after: [0, 1, 1, 2] },

  { before: [0, 0, 0, 2], instr: "14 0 0 3", after: [0, 0, 0, 0] },

  { before: [1, 3, 3, 3], instr: "13 3 3 2", after: [1, 3, 1, 3] },

  { before: [3, 2, 2, 3], instr: "5 3 3 0", after: [3, 2, 2, 3] },

  { before: [1, 1, 3, 1], instr: "15 1 0 1", after: [1, 1, 3, 1] },

  { before: [2, 3, 2, 2], instr: "4 0 3 2", after: [2, 3, 1, 2] },

  { before: [3, 3, 2, 3], instr: "0 3 0 1", after: [3, 3, 2, 3] },

  { before: [1, 1, 2, 0], instr: "9 0 2 3", after: [1, 1, 2, 0] },

  { before: [1, 2, 2, 0], instr: "9 0 2 2", after: [1, 2, 0, 0] },

  { before: [0, 3, 2, 1], instr: "7 3 2 1", after: [0, 1, 2, 1] },

  { before: [2, 0, 2, 3], instr: "5 2 2 0", after: [2, 0, 2, 3] },

  { before: [2, 0, 0, 2], instr: "4 0 3 2", after: [2, 0, 1, 2] },

  { before: [3, 3, 1, 1], instr: "0 3 0 2", after: [3, 3, 1, 1] },

  { before: [0, 3, 3, 0], instr: "14 0 0 1", after: [0, 0, 3, 0] },

  { before: [3, 2, 1, 1], instr: "0 3 0 1", after: [3, 1, 1, 1] },

  { before: [1, 1, 2, 2], instr: "15 1 0 0", after: [1, 1, 2, 2] },

  { before: [2, 2, 1, 2], instr: "6 3 3 0", after: [0, 2, 1, 2] },

  { before: [2, 1, 2, 2], instr: "4 0 3 2", after: [2, 1, 1, 2] },

  { before: [1, 1, 1, 2], instr: "10 1 3 1", after: [1, 0, 1, 2] },

  { before: [1, 1, 0, 0], instr: "15 1 0 0", after: [1, 1, 0, 0] },

  { before: [1, 2, 2, 3], instr: "9 0 2 1", after: [1, 0, 2, 3] },

  { before: [2, 0, 1, 2], instr: "4 0 3 0", after: [1, 0, 1, 2] },

  { before: [1, 3, 3, 3], instr: "12 3 2 3", after: [1, 3, 3, 1] },

  { before: [3, 1, 1, 2], instr: "0 1 0 0", after: [1, 1, 1, 2] },

  { before: [3, 0, 2, 1], instr: "0 3 0 3", after: [3, 0, 2, 1] },

  { before: [3, 3, 0, 1], instr: "0 3 0 0", after: [1, 3, 0, 1] },

  { before: [1, 3, 3, 2], instr: "6 3 3 2", after: [1, 3, 0, 2] },

  { before: [0, 2, 1, 0], instr: "8 0 2 2", after: [0, 2, 0, 0] },

  { before: [2, 2, 2, 0], instr: "12 2 0 2", after: [2, 2, 1, 0] },

  { before: [2, 1, 2, 3], instr: "5 2 2 0", after: [2, 1, 2, 3] },

  { before: [0, 0, 1, 3], instr: "5 3 3 3", after: [0, 0, 1, 3] },

  { before: [1, 0, 2, 3], instr: "13 2 2 2", after: [1, 0, 1, 3] },

  { before: [1, 1, 2, 3], instr: "15 1 0 2", after: [1, 1, 1, 3] },

  { before: [2, 2, 2, 2], instr: "3 2 3 3", after: [2, 2, 2, 2] },

  { before: [1, 1, 0, 1], instr: "15 1 0 2", after: [1, 1, 1, 1] },

  { before: [1, 1, 2, 3], instr: "15 1 0 0", after: [1, 1, 2, 3] },

  { before: [1, 1, 0, 3], instr: "2 1 3 1", after: [1, 0, 0, 3] },

  { before: [2, 0, 2, 1], instr: "12 2 0 1", after: [2, 1, 2, 1] },

  { before: [0, 2, 1, 2], instr: "8 0 1 1", after: [0, 0, 1, 2] },

  { before: [1, 1, 2, 3], instr: "1 1 2 1", after: [1, 0, 2, 3] },

  { before: [0, 3, 2, 3], instr: "2 2 3 0", after: [0, 3, 2, 3] },

  { before: [0, 0, 2, 3], instr: "13 3 3 2", after: [0, 0, 1, 3] },

  { before: [2, 1, 3, 2], instr: "10 1 3 1", after: [2, 0, 3, 2] },

  { before: [1, 1, 2, 3], instr: "2 1 3 3", after: [1, 1, 2, 0] },

  { before: [0, 0, 3, 2], instr: "14 0 0 2", after: [0, 0, 0, 2] },

  { before: [0, 2, 2, 1], instr: "7 3 2 3", after: [0, 2, 2, 1] },

  { before: [1, 0, 3, 2], instr: "11 2 2 3", after: [1, 0, 3, 1] },

  { before: [3, 2, 3, 3], instr: "11 0 0 1", after: [3, 1, 3, 3] },

  { before: [0, 3, 2, 2], instr: "14 0 0 2", after: [0, 3, 0, 2] },

  { before: [3, 2, 1, 1], instr: "6 3 3 2", after: [3, 2, 0, 1] },

  { before: [0, 2, 2, 3], instr: "2 2 3 0", after: [0, 2, 2, 3] },

  { before: [1, 2, 1, 2], instr: "6 3 3 3", after: [1, 2, 1, 0] },

  { before: [2, 1, 2, 1], instr: "7 3 2 1", after: [2, 1, 2, 1] },

  { before: [1, 1, 1, 2], instr: "10 1 3 2", after: [1, 1, 0, 2] },

  { before: [0, 0, 1, 1], instr: "14 0 0 1", after: [0, 0, 1, 1] },

  { before: [3, 3, 3, 1], instr: "11 0 2 1", after: [3, 1, 3, 1] },

  { before: [2, 1, 2, 2], instr: "12 2 0 2", after: [2, 1, 1, 2] },

  { before: [1, 2, 2, 1], instr: "7 3 2 0", after: [1, 2, 2, 1] },

  { before: [1, 2, 2, 2], instr: "9 0 2 1", after: [1, 0, 2, 2] },

  { before: [3, 3, 2, 1], instr: "7 3 2 3", after: [3, 3, 2, 1] },

  { before: [2, 1, 1, 2], instr: "6 3 3 3", after: [2, 1, 1, 0] },

  { before: [2, 2, 1, 3], instr: "2 2 3 2", after: [2, 2, 0, 3] },

  { before: [3, 2, 2, 2], instr: "3 2 3 1", after: [3, 2, 2, 2] },

  { before: [2, 2, 2, 1], instr: "0 2 0 0", after: [2, 2, 2, 1] },

  { before: [0, 1, 3, 1], instr: "14 0 0 1", after: [0, 0, 3, 1] },

  { before: [2, 0, 3, 1], instr: "8 1 0 0", after: [0, 0, 3, 1] },

  { before: [2, 3, 0, 2], instr: "4 0 3 2", after: [2, 3, 1, 2] },

  { before: [2, 0, 2, 2], instr: "3 2 3 1", after: [2, 2, 2, 2] },

  { before: [0, 0, 3, 2], instr: "8 0 2 2", after: [0, 0, 0, 2] },

  { before: [3, 1, 1, 2], instr: "10 1 3 2", after: [3, 1, 0, 2] },

  { before: [3, 2, 2, 1], instr: "7 3 2 2", after: [3, 2, 1, 1] },

  { before: [2, 2, 2, 2], instr: "4 0 3 1", after: [2, 1, 2, 2] },

  { before: [1, 1, 2, 2], instr: "9 0 2 1", after: [1, 0, 2, 2] },

  { before: [3, 0, 2, 2], instr: "5 2 2 1", after: [3, 2, 2, 2] },

  { before: [0, 2, 0, 1], instr: "14 0 0 0", after: [0, 2, 0, 1] },

  { before: [2, 2, 2, 1], instr: "5 2 2 0", after: [2, 2, 2, 1] },

  { before: [2, 1, 2, 3], instr: "1 1 2 1", after: [2, 0, 2, 3] },

  { before: [2, 3, 0, 2], instr: "4 0 3 1", after: [2, 1, 0, 2] },

  { before: [2, 3, 2, 1], instr: "7 3 2 0", after: [1, 3, 2, 1] },

  { before: [2, 0, 2, 2], instr: "12 2 0 0", after: [1, 0, 2, 2] },

  { before: [1, 2, 2, 2], instr: "3 2 3 2", after: [1, 2, 2, 2] },

  { before: [0, 0, 2, 1], instr: "7 3 2 0", after: [1, 0, 2, 1] },

  { before: [2, 2, 3, 3], instr: "11 2 2 3", after: [2, 2, 3, 1] },

  { before: [3, 3, 2, 0], instr: "5 2 2 2", after: [3, 3, 2, 0] },

  { before: [3, 2, 2, 2], instr: "3 2 3 2", after: [3, 2, 2, 2] },

  { before: [2, 3, 2, 2], instr: "4 0 3 3", after: [2, 3, 2, 1] },

  { before: [2, 1, 1, 2], instr: "11 0 0 1", after: [2, 1, 1, 2] },

  { before: [0, 0, 2, 1], instr: "7 3 2 2", after: [0, 0, 1, 1] },

  { before: [0, 2, 1, 0], instr: "14 0 0 3", after: [0, 2, 1, 0] },

  { before: [1, 1, 2, 0], instr: "15 1 0 1", after: [1, 1, 2, 0] },

  { before: [0, 1, 2, 3], instr: "1 1 2 1", after: [0, 0, 2, 3] },

  { before: [0, 3, 1, 0], instr: "14 0 0 3", after: [0, 3, 1, 0] },

  { before: [0, 2, 3, 2], instr: "8 0 3 0", after: [0, 2, 3, 2] },

  { before: [0, 1, 3, 3], instr: "13 0 0 0", after: [1, 1, 3, 3] },

  { before: [2, 1, 2, 0], instr: "1 1 2 0", after: [0, 1, 2, 0] },

  { before: [3, 0, 1, 1], instr: "11 0 0 0", after: [1, 0, 1, 1] },

  { before: [0, 2, 1, 3], instr: "14 0 0 3", after: [0, 2, 1, 0] },

  { before: [0, 2, 2, 1], instr: "14 0 0 0", after: [0, 2, 2, 1] },

  { before: [0, 2, 3, 0], instr: "14 0 0 1", after: [0, 0, 3, 0] },

  { before: [2, 2, 2, 2], instr: "3 2 3 1", after: [2, 2, 2, 2] },

  { before: [3, 0, 2, 1], instr: "7 3 2 3", after: [3, 0, 2, 1] },

  { before: [2, 2, 2, 1], instr: "6 3 3 0", after: [0, 2, 2, 1] },

  { before: [2, 1, 3, 2], instr: "10 1 3 2", after: [2, 1, 0, 2] },

  { before: [2, 1, 2, 2], instr: "5 2 2 3", after: [2, 1, 2, 2] },

  { before: [3, 2, 1, 1], instr: "0 3 0 3", after: [3, 2, 1, 1] },

  { before: [2, 1, 2, 3], instr: "1 1 2 3", after: [2, 1, 2, 0] },

  { before: [2, 3, 2, 0], instr: "0 2 0 1", after: [2, 2, 2, 0] },

  { before: [3, 0, 3, 1], instr: "11 0 0 3", after: [3, 0, 3, 1] },

  { before: [2, 3, 1, 1], instr: "6 2 3 2", after: [2, 3, 0, 1] },

  { before: [2, 0, 3, 2], instr: "11 2 2 0", after: [1, 0, 3, 2] },

  { before: [0, 1, 1, 2], instr: "10 1 3 3", after: [0, 1, 1, 0] },

  { before: [0, 1, 3, 3], instr: "12 3 2 2", after: [0, 1, 1, 3] },

  { before: [0, 1, 1, 2], instr: "14 0 0 1", after: [0, 0, 1, 2] },

  { before: [0, 1, 2, 3], instr: "1 1 2 2", after: [0, 1, 0, 3] },

  { before: [1, 1, 2, 2], instr: "1 1 2 3", after: [1, 1, 2, 0] },

  { before: [0, 1, 0, 1], instr: "14 0 0 3", after: [0, 1, 0, 0] },

  { before: [2, 0, 0, 1], instr: "6 3 3 1", after: [2, 0, 0, 1] },

  { before: [1, 2, 1, 3], instr: "13 3 2 3", after: [1, 2, 1, 0] },

  { before: [2, 1, 2, 1], instr: "6 3 3 3", after: [2, 1, 2, 0] },

  { before: [0, 1, 0, 2], instr: "6 3 3 3", after: [0, 1, 0, 0] },

  { before: [3, 1, 0, 2], instr: "8 2 0 0", after: [0, 1, 0, 2] },

  { before: [1, 1, 3, 3], instr: "12 3 2 0", after: [1, 1, 3, 3] },

  { before: [0, 1, 2, 1], instr: "5 2 2 3", after: [0, 1, 2, 2] },

  { before: [1, 0, 3, 0], instr: "11 2 2 0", after: [1, 0, 3, 0] },

  { before: [3, 3, 2, 1], instr: "5 2 2 0", after: [2, 3, 2, 1] },

  { before: [0, 2, 2, 3], instr: "14 0 0 3", after: [0, 2, 2, 0] },

  { before: [3, 0, 1, 3], instr: "2 2 3 3", after: [3, 0, 1, 0] },

  { before: [2, 3, 3, 2], instr: "4 0 3 3", after: [2, 3, 3, 1] },

  { before: [1, 1, 3, 2], instr: "15 1 0 2", after: [1, 1, 1, 2] },

  { before: [1, 1, 2, 2], instr: "9 0 2 0", after: [0, 1, 2, 2] },

  { before: [2, 1, 2, 2], instr: "10 1 3 0", after: [0, 1, 2, 2] },

  { before: [3, 1, 2, 0], instr: "1 1 2 3", after: [3, 1, 2, 0] },

  { before: [0, 1, 1, 3], instr: "14 0 0 1", after: [0, 0, 1, 3] },

  { before: [1, 1, 2, 3], instr: "13 3 1 0", after: [0, 1, 2, 3] },

  { before: [1, 1, 1, 2], instr: "6 3 3 1", after: [1, 0, 1, 2] },

  { before: [2, 1, 2, 2], instr: "5 2 2 1", after: [2, 2, 2, 2] },

  { before: [0, 2, 2, 0], instr: "14 0 0 0", after: [0, 2, 2, 0] },

  { before: [0, 0, 2, 2], instr: "8 0 2 2", after: [0, 0, 0, 2] },

  { before: [0, 1, 2, 0], instr: "14 0 0 3", after: [0, 1, 2, 0] },

  { before: [1, 3, 2, 2], instr: "9 0 2 1", after: [1, 0, 2, 2] },

  { before: [1, 2, 2, 0], instr: "12 2 1 0", after: [1, 2, 2, 0] },

  { before: [2, 1, 3, 2], instr: "4 0 3 0", after: [1, 1, 3, 2] },

  { before: [0, 1, 2, 1], instr: "1 1 2 1", after: [0, 0, 2, 1] },

  { before: [3, 0, 3, 3], instr: "11 0 0 0", after: [1, 0, 3, 3] },

  { before: [0, 3, 2, 1], instr: "7 3 2 0", after: [1, 3, 2, 1] },

  { before: [3, 1, 1, 3], instr: "12 3 0 0", after: [1, 1, 1, 3] },

  { before: [0, 2, 2, 1], instr: "7 3 2 0", after: [1, 2, 2, 1] },

  { before: [1, 1, 3, 2], instr: "10 1 3 3", after: [1, 1, 3, 0] },

  { before: [1, 1, 2, 1], instr: "1 1 2 1", after: [1, 0, 2, 1] },

  { before: [2, 0, 1, 2], instr: "6 3 3 0", after: [0, 0, 1, 2] },

  { before: [2, 0, 2, 0], instr: "0 2 0 3", after: [2, 0, 2, 2] },

  { before: [0, 2, 3, 3], instr: "13 3 3 0", after: [1, 2, 3, 3] },

  { before: [1, 1, 0, 3], instr: "15 1 0 3", after: [1, 1, 0, 1] },

  { before: [2, 0, 1, 1], instr: "11 0 0 2", after: [2, 0, 1, 1] },

  { before: [2, 3, 0, 2], instr: "6 3 3 2", after: [2, 3, 0, 2] },

  { before: [3, 1, 1, 2], instr: "10 1 3 0", after: [0, 1, 1, 2] },

  { before: [2, 3, 0, 1], instr: "6 3 3 1", after: [2, 0, 0, 1] },

  { before: [3, 1, 2, 1], instr: "1 1 2 0", after: [0, 1, 2, 1] },

  { before: [1, 1, 0, 2], instr: "10 1 3 0", after: [0, 1, 0, 2] },

  { before: [2, 1, 2, 1], instr: "1 1 2 2", after: [2, 1, 0, 1] },

  { before: [2, 1, 0, 2], instr: "10 1 3 2", after: [2, 1, 0, 2] },

  { before: [1, 1, 2, 2], instr: "15 1 0 2", after: [1, 1, 1, 2] },

  { before: [2, 3, 0, 2], instr: "4 0 3 0", after: [1, 3, 0, 2] },

  { before: [1, 1, 2, 1], instr: "1 1 2 0", after: [0, 1, 2, 1] },

  { before: [3, 1, 2, 3], instr: "13 3 3 0", after: [1, 1, 2, 3] },

  { before: [3, 0, 2, 3], instr: "0 3 0 1", after: [3, 3, 2, 3] },

  { before: [0, 1, 2, 1], instr: "1 1 2 0", after: [0, 1, 2, 1] },

  { before: [2, 2, 1, 2], instr: "4 0 3 3", after: [2, 2, 1, 1] },

  { before: [3, 3, 0, 3], instr: "11 0 0 0", after: [1, 3, 0, 3] },

  { before: [3, 3, 2, 2], instr: "3 2 3 1", after: [3, 2, 2, 2] },

  { before: [1, 3, 2, 3], instr: "2 2 3 0", after: [0, 3, 2, 3] },

  { before: [1, 2, 2, 3], instr: "9 0 2 0", after: [0, 2, 2, 3] },

  { before: [2, 1, 2, 0], instr: "1 1 2 2", after: [2, 1, 0, 0] },

  { before: [3, 1, 2, 1], instr: "1 1 2 2", after: [3, 1, 0, 1] },

  { before: [3, 1, 0, 2], instr: "10 1 3 1", after: [3, 0, 0, 2] },

  { before: [3, 0, 3, 1], instr: "12 2 3 2", after: [3, 0, 0, 1] },

  { before: [1, 0, 2, 2], instr: "9 0 2 3", after: [1, 0, 2, 0] },

  { before: [0, 2, 2, 3], instr: "5 3 3 1", after: [0, 3, 2, 3] },

  { before: [2, 0, 2, 1], instr: "12 2 0 2", after: [2, 0, 1, 1] },

  { before: [2, 3, 1, 2], instr: "11 0 0 3", after: [2, 3, 1, 1] },

  { before: [0, 2, 2, 2], instr: "14 0 0 0", after: [0, 2, 2, 2] },

  { before: [1, 0, 3, 0], instr: "11 2 2 2", after: [1, 0, 1, 0] },

  { before: [0, 1, 2, 3], instr: "14 0 0 0", after: [0, 1, 2, 3] },

  { before: [2, 2, 3, 1], instr: "6 3 3 3", after: [2, 2, 3, 0] },

  { before: [1, 1, 2, 2], instr: "10 1 3 0", after: [0, 1, 2, 2] },

  { before: [3, 1, 2, 2], instr: "6 3 3 1", after: [3, 0, 2, 2] },

  { before: [1, 2, 3, 3], instr: "13 3 1 2", after: [1, 2, 0, 3] },

  { before: [1, 2, 1, 3], instr: "2 2 3 2", after: [1, 2, 0, 3] },

  { before: [3, 1, 0, 2], instr: "10 1 3 3", after: [3, 1, 0, 0] },

  { before: [3, 1, 3, 3], instr: "11 2 2 3", after: [3, 1, 3, 1] },

  { before: [2, 2, 1, 2], instr: "11 0 0 2", after: [2, 2, 1, 2] },

  { before: [3, 1, 3, 2], instr: "10 1 3 0", after: [0, 1, 3, 2] },

  { before: [3, 0, 2, 2], instr: "3 2 3 2", after: [3, 0, 2, 2] },

  { before: [1, 1, 0, 3], instr: "2 1 3 0", after: [0, 1, 0, 3] },

  { before: [2, 1, 2, 2], instr: "1 1 2 3", after: [2, 1, 2, 0] },

  { before: [2, 2, 2, 3], instr: "2 2 3 2", after: [2, 2, 0, 3] },

  { before: [3, 0, 2, 1], instr: "7 3 2 1", after: [3, 1, 2, 1] },

  { before: [1, 1, 2, 3], instr: "9 0 2 0", after: [0, 1, 2, 3] },

  { before: [3, 2, 2, 3], instr: "2 1 3 2", after: [3, 2, 0, 3] },

  { before: [2, 1, 2, 2], instr: "4 0 3 1", after: [2, 1, 2, 2] },

  { before: [2, 0, 2, 2], instr: "4 0 3 0", after: [1, 0, 2, 2] },

  { before: [2, 3, 1, 2], instr: "4 0 3 2", after: [2, 3, 1, 2] },

  { before: [0, 2, 1, 0], instr: "8 0 2 3", after: [0, 2, 1, 0] },

  { before: [3, 0, 1, 1], instr: "6 2 3 3", after: [3, 0, 1, 0] },

  { before: [1, 2, 2, 0], instr: "12 2 1 2", after: [1, 2, 1, 0] },

  { before: [1, 3, 2, 1], instr: "9 0 2 2", after: [1, 3, 0, 1] },

  { before: [1, 1, 1, 3], instr: "15 1 0 1", after: [1, 1, 1, 3] },

  { before: [0, 0, 0, 3], instr: "8 0 3 2", after: [0, 0, 0, 3] },

  { before: [3, 1, 2, 0], instr: "1 1 2 2", after: [3, 1, 0, 0] },

  { before: [2, 1, 2, 2], instr: "10 1 3 2", after: [2, 1, 0, 2] },

  { before: [1, 1, 0, 1], instr: "15 1 0 1", after: [1, 1, 0, 1] },

  { before: [1, 1, 3, 0], instr: "13 2 1 0", after: [0, 1, 3, 0] },

  { before: [0, 0, 2, 1], instr: "7 3 2 1", after: [0, 1, 2, 1] },

  { before: [2, 1, 3, 0], instr: "11 0 0 3", after: [2, 1, 3, 1] },

  { before: [3, 1, 3, 0], instr: "0 1 0 3", after: [3, 1, 3, 1] },

  { before: [1, 1, 3, 3], instr: "13 2 1 1", after: [1, 0, 3, 3] },

  { before: [1, 3, 2, 3], instr: "9 0 2 3", after: [1, 3, 2, 0] },

  { before: [0, 3, 1, 3], instr: "8 0 3 1", after: [0, 0, 1, 3] },

  { before: [2, 1, 0, 2], instr: "4 0 3 3", after: [2, 1, 0, 1] },

  { before: [2, 0, 2, 2], instr: "3 2 3 3", after: [2, 0, 2, 2] },

  { before: [2, 3, 1, 0], instr: "11 0 0 0", after: [1, 3, 1, 0] },

  { before: [3, 2, 3, 2], instr: "11 0 0 2", after: [3, 2, 1, 2] },

  { before: [2, 1, 2, 2], instr: "4 0 3 3", after: [2, 1, 2, 1] },

  { before: [3, 0, 3, 3], instr: "5 3 3 1", after: [3, 3, 3, 3] },

  { before: [2, 2, 2, 1], instr: "7 3 2 1", after: [2, 1, 2, 1] },

  { before: [2, 1, 2, 2], instr: "3 2 3 2", after: [2, 1, 2, 2] },

  { before: [1, 1, 2, 1], instr: "7 3 2 2", after: [1, 1, 1, 1] },

  { before: [2, 0, 2, 2], instr: "5 2 2 0", after: [2, 0, 2, 2] },

  { before: [2, 1, 3, 2], instr: "4 0 3 1", after: [2, 1, 3, 2] },

  { before: [0, 2, 2, 2], instr: "3 2 3 3", after: [0, 2, 2, 2] },

  { before: [0, 3, 2, 2], instr: "14 0 0 0", after: [0, 3, 2, 2] },

  { before: [2, 1, 3, 2], instr: "10 1 3 0", after: [0, 1, 3, 2] },

  { before: [3, 1, 2, 1], instr: "7 3 2 0", after: [1, 1, 2, 1] },

  { before: [2, 2, 1, 2], instr: "4 0 3 2", after: [2, 2, 1, 2] },

  { before: [3, 2, 1, 1], instr: "11 0 0 2", after: [3, 2, 1, 1] },

  { before: [0, 3, 3, 1], instr: "13 0 0 1", after: [0, 1, 3, 1] },

  { before: [3, 0, 2, 3], instr: "13 3 2 2", after: [3, 0, 0, 3] },

  { before: [0, 0, 0, 1], instr: "6 3 3 2", after: [0, 0, 0, 1] },

  { before: [2, 3, 1, 2], instr: "4 0 3 1", after: [2, 1, 1, 2] },

  { before: [2, 3, 2, 3], instr: "0 2 0 3", after: [2, 3, 2, 2] },

  { before: [1, 3, 2, 0], instr: "9 0 2 0", after: [0, 3, 2, 0] },

  { before: [0, 1, 0, 2], instr: "6 3 3 0", after: [0, 1, 0, 2] },

  { before: [0, 1, 2, 1], instr: "1 1 2 2", after: [0, 1, 0, 1] },

  { before: [1, 3, 2, 1], instr: "7 3 2 0", after: [1, 3, 2, 1] },

  { before: [0, 3, 2, 1], instr: "8 0 2 1", after: [0, 0, 2, 1] },

  { before: [2, 2, 0, 3], instr: "5 3 3 1", after: [2, 3, 0, 3] },

  { before: [1, 1, 2, 2], instr: "3 2 3 3", after: [1, 1, 2, 2] },

  { before: [0, 0, 3, 2], instr: "11 2 2 1", after: [0, 1, 3, 2] },

  { before: [0, 3, 1, 3], instr: "2 2 3 3", after: [0, 3, 1, 0] },

  { before: [3, 3, 3, 3], instr: "11 2 0 0", after: [1, 3, 3, 3] },

  { before: [2, 0, 0, 2], instr: "4 0 3 0", after: [1, 0, 0, 2] },

  { before: [0, 1, 2, 3], instr: "2 2 3 1", after: [0, 0, 2, 3] },

  { before: [2, 3, 2, 1], instr: "7 3 2 2", after: [2, 3, 1, 1] },

  { before: [3, 1, 2, 2], instr: "10 1 3 0", after: [0, 1, 2, 2] },

  { before: [0, 2, 3, 3], instr: "14 0 0 3", after: [0, 2, 3, 0] },

  { before: [3, 2, 2, 3], instr: "13 3 1 1", after: [3, 0, 2, 3] },

  { before: [1, 1, 2, 2], instr: "9 0 2 3", after: [1, 1, 2, 0] },

  { before: [0, 2, 1, 3], instr: "14 0 0 2", after: [0, 2, 0, 3] },

  { before: [1, 0, 2, 1], instr: "7 3 2 3", after: [1, 0, 2, 1] },

  { before: [0, 3, 2, 1], instr: "7 3 2 3", after: [0, 3, 2, 1] },

  { before: [0, 1, 3, 2], instr: "11 2 2 0", after: [1, 1, 3, 2] },

  { before: [0, 0, 2, 0], instr: "13 0 0 2", after: [0, 0, 1, 0] },

  { before: [3, 1, 1, 3], instr: "11 0 0 2", after: [3, 1, 1, 3] },

  { before: [3, 2, 1, 3], instr: "0 3 0 3", after: [3, 2, 1, 3] },

  { before: [1, 2, 2, 0], instr: "9 0 2 0", after: [0, 2, 2, 0] },

  { before: [3, 0, 0, 3], instr: "0 3 0 0", after: [3, 0, 0, 3] },

  { before: [1, 0, 1, 3], instr: "2 2 3 0", after: [0, 0, 1, 3] },

  { before: [0, 0, 2, 1], instr: "7 3 2 3", after: [0, 0, 2, 1] },

  { before: [1, 1, 2, 2], instr: "15 1 0 3", after: [1, 1, 2, 1] },

  { before: [2, 1, 1, 3], instr: "2 1 3 0", after: [0, 1, 1, 3] },

  { before: [0, 2, 0, 2], instr: "8 0 3 0", after: [0, 2, 0, 2] },

  { before: [3, 1, 0, 3], instr: "0 3 0 0", after: [3, 1, 0, 3] },

  { before: [2, 3, 2, 3], instr: "2 2 3 1", after: [2, 0, 2, 3] },

  { before: [2, 1, 2, 3], instr: "0 2 0 0", after: [2, 1, 2, 3] },

  { before: [2, 0, 2, 3], instr: "8 1 0 3", after: [2, 0, 2, 0] },

  { before: [1, 1, 2, 3], instr: "2 2 3 1", after: [1, 0, 2, 3] },

  { before: [0, 0, 2, 2], instr: "8 0 3 1", after: [0, 0, 2, 2] },

  { before: [1, 0, 2, 1], instr: "7 3 2 0", after: [1, 0, 2, 1] },

  { before: [1, 3, 2, 3], instr: "9 0 2 2", after: [1, 3, 0, 3] },

  { before: [1, 1, 3, 3], instr: "11 2 2 1", after: [1, 1, 3, 3] },

  { before: [1, 1, 0, 3], instr: "15 1 0 1", after: [1, 1, 0, 3] },

  { before: [2, 3, 3, 2], instr: "4 0 3 1", after: [2, 1, 3, 2] },

  { before: [2, 1, 0, 1], instr: "6 3 3 0", after: [0, 1, 0, 1] },

  { before: [1, 1, 2, 2], instr: "10 1 3 2", after: [1, 1, 0, 2] },

  { before: [2, 0, 2, 1], instr: "7 3 2 3", after: [2, 0, 2, 1] },

  { before: [2, 3, 2, 2], instr: "13 2 2 3", after: [2, 3, 2, 1] },

  { before: [0, 1, 1, 0], instr: "14 0 0 0", after: [0, 1, 1, 0] },

  { before: [0, 1, 3, 2], instr: "14 0 0 1", after: [0, 0, 3, 2] },

  { before: [0, 3, 2, 3], instr: "8 0 1 2", after: [0, 3, 0, 3] },

  { before: [2, 3, 1, 3], instr: "2 2 3 0", after: [0, 3, 1, 3] },

  { before: [0, 0, 1, 1], instr: "8 0 2 0", after: [0, 0, 1, 1] },

  { before: [0, 1, 0, 2], instr: "10 1 3 0", after: [0, 1, 0, 2] },

  { before: [2, 3, 3, 3], instr: "5 3 3 3", after: [2, 3, 3, 3] },

  { before: [0, 3, 2, 1], instr: "7 3 2 2", after: [0, 3, 1, 1] },

  { before: [1, 0, 2, 3], instr: "2 2 3 1", after: [1, 0, 2, 3] },

  { before: [2, 1, 2, 1], instr: "7 3 2 3", after: [2, 1, 2, 1] },

  { before: [3, 1, 1, 1], instr: "0 1 0 0", after: [1, 1, 1, 1] },

  { before: [2, 3, 0, 3], instr: "5 3 3 3", after: [2, 3, 0, 3] },

  { before: [2, 0, 2, 0], instr: "13 2 2 0", after: [1, 0, 2, 0] },

  { before: [3, 2, 2, 3], instr: "13 3 2 2", after: [3, 2, 0, 3] },

  { before: [2, 0, 2, 1], instr: "0 2 0 2", after: [2, 0, 2, 1] },

  { before: [3, 1, 2, 0], instr: "1 1 2 0", after: [0, 1, 2, 0] },

  { before: [1, 2, 2, 1], instr: "9 0 2 3", after: [1, 2, 2, 0] },

  { before: [3, 0, 1, 1], instr: "0 3 0 0", after: [1, 0, 1, 1] },

  { before: [3, 1, 3, 3], instr: "0 1 0 2", after: [3, 1, 1, 3] },

  { before: [0, 1, 1, 3], instr: "2 1 3 1", after: [0, 0, 1, 3] },

  { before: [0, 3, 3, 3], instr: "5 3 3 1", after: [0, 3, 3, 3] },

  { before: [3, 3, 2, 2], instr: "13 2 2 3", after: [3, 3, 2, 1] },

  { before: [1, 1, 2, 1], instr: "1 1 2 3", after: [1, 1, 2, 0] },

  { before: [1, 1, 3, 2], instr: "15 1 0 0", after: [1, 1, 3, 2] },

  { before: [1, 0, 2, 2], instr: "5 2 2 1", after: [1, 2, 2, 2] },

  { before: [2, 2, 1, 1], instr: "11 0 1 1", after: [2, 1, 1, 1] },

  { before: [0, 0, 3, 1], instr: "14 0 0 1", after: [0, 0, 3, 1] },

  { before: [2, 1, 2, 2], instr: "10 1 3 1", after: [2, 0, 2, 2] },

  { before: [0, 1, 0, 2], instr: "10 1 3 3", after: [0, 1, 0, 0] },

  { before: [3, 1, 2, 2], instr: "1 1 2 3", after: [3, 1, 2, 0] },

  { before: [1, 0, 2, 1], instr: "9 0 2 3", after: [1, 0, 2, 0] },

  { before: [2, 1, 2, 2], instr: "1 1 2 1", after: [2, 0, 2, 2] },

  { before: [2, 3, 1, 2], instr: "4 0 3 0", after: [1, 3, 1, 2] },

  { before: [2, 1, 3, 3], instr: "5 3 3 3", after: [2, 1, 3, 3] },

  { before: [2, 2, 3, 3], instr: "2 1 3 0", after: [0, 2, 3, 3] },

  { before: [1, 1, 3, 2], instr: "15 1 0 1", after: [1, 1, 3, 2] },

  { before: [2, 3, 2, 1], instr: "7 3 2 1", after: [2, 1, 2, 1] },

  { before: [1, 0, 2, 0], instr: "9 0 2 2", after: [1, 0, 0, 0] },

  { before: [3, 3, 2, 3], instr: "5 2 2 1", after: [3, 2, 2, 3] },

  { before: [3, 1, 2, 2], instr: "1 1 2 1", after: [3, 0, 2, 2] },

  { before: [0, 0, 2, 3], instr: "2 2 3 3", after: [0, 0, 2, 0] },

  { before: [3, 3, 1, 3], instr: "2 2 3 0", after: [0, 3, 1, 3] },

  { before: [2, 2, 2, 3], instr: "0 2 0 1", after: [2, 2, 2, 3] },

  { before: [3, 1, 2, 1], instr: "0 1 0 2", after: [3, 1, 1, 1] },

  { before: [3, 3, 2, 1], instr: "7 3 2 0", after: [1, 3, 2, 1] },

  { before: [0, 1, 2, 0], instr: "1 1 2 2", after: [0, 1, 0, 0] },

  { before: [0, 0, 1, 0], instr: "14 0 0 0", after: [0, 0, 1, 0] },

  { before: [0, 2, 2, 1], instr: "12 2 1 3", after: [0, 2, 2, 1] },

  { before: [3, 2, 3, 1], instr: "6 3 3 3", after: [3, 2, 3, 0] },

  { before: [1, 1, 2, 1], instr: "1 1 2 2", after: [1, 1, 0, 1] },

  { before: [2, 3, 1, 2], instr: "4 0 3 3", after: [2, 3, 1, 1] },

  { before: [2, 2, 1, 2], instr: "4 0 3 1", after: [2, 1, 1, 2] },

  { before: [2, 1, 1, 2], instr: "4 0 3 0", after: [1, 1, 1, 2] }
];

const program = [
  '9 2 0 1',
'9 0 1 0',
'9 3 0 3',
'10 3 1 1',
'8 1 1 1',
'14 1 2 2',
'7 2 2 1',
'9 1 3 3',
'9 1 2 0',
'9 3 0 2',
'8 3 2 3',
'8 3 1 3',
'14 3 1 1',
'7 1 3 2',
'9 1 2 3',
'8 0 0 0',
'0 0 2 0',
'8 1 0 1',
'0 1 3 1',
'15 3 0 0',
'8 0 3 0',
'8 0 2 0',
'14 2 0 2',
'7 2 1 1',
'9 1 2 2',
'8 0 0 0',
'0 0 3 0',
'9 0 3 3',
'1 0 2 2',
'8 2 1 2',
'14 2 1 1',
'7 1 0 2',
'8 2 0 3',
'0 3 2 3',
'9 2 1 0',
'9 3 3 1',
'4 0 3 0',
'8 0 3 0',
'14 0 2 2',
'9 1 1 3',
'9 1 2 1',
'9 1 0 0',
'14 1 3 0',
'8 0 1 0',
'14 0 2 2',
'9 2 1 1',
'9 2 2 0',
'6 0 3 1',
'8 1 2 1',
'8 1 2 1',
'14 1 2 2',
'7 2 2 1',
'9 1 0 0',
'8 1 0 3',
'0 3 0 3',
'9 3 0 2',
'12 3 2 0',
'8 0 3 0',
'8 0 1 0',
'14 0 1 1',
'9 1 2 0',
'8 3 0 3',
'0 3 1 3',
'9 0 0 2',
'8 0 2 2',
'8 2 2 2',
'14 1 2 1',
'9 2 0 0',
'8 0 0 2',
'0 2 2 2',
'6 0 3 0',
'8 0 1 0',
'8 0 3 0',
'14 0 1 1',
'7 1 0 3',
'9 2 3 0',
'9 3 3 2',
'9 3 0 1',
'1 1 2 2',
'8 2 2 2',
'14 3 2 3',
'7 3 3 0',
'9 0 1 2',
'9 0 1 1',
'9 3 1 3',
'1 3 2 2',
'8 2 3 2',
'14 0 2 0',
'7 0 0 3',
'9 2 2 0',
'9 1 1 1',
'9 3 2 2',
'13 0 2 1',
'8 1 2 1',
'8 1 2 1',
'14 3 1 3',
'7 3 0 1',
'9 2 2 3',
'9 0 1 2',
'12 2 3 2',
'8 2 1 2',
'14 1 2 1',
'8 1 0 2',
'0 2 2 2',
'9 1 2 3',
'8 2 0 0',
'0 0 1 0',
'7 0 2 0',
'8 0 3 0',
'8 0 2 0',
'14 1 0 1',
'7 1 0 0',
'8 3 0 2',
'0 2 1 2',
'9 1 3 1',
'14 1 3 3',
'8 3 1 3',
'8 3 3 3',
'14 0 3 0',
'9 2 1 1',
'9 0 1 3',
'9 2 3 3',
'8 3 2 3',
'8 3 3 3',
'14 0 3 0',
'7 0 2 1',
'9 1 2 3',
'9 2 1 0',
'6 0 3 2',
'8 2 3 2',
'14 1 2 1',
'7 1 2 3',
'9 1 1 0',
'9 2 1 2',
'9 3 1 1',
'0 0 1 2',
'8 2 2 2',
'14 2 3 3',
'7 3 1 0',
'9 2 1 3',
'8 0 0 2',
'0 2 3 2',
'9 0 0 1',
'9 2 1 2',
'8 2 3 2',
'8 2 3 2',
'14 0 2 0',
'7 0 1 2',
'9 1 2 3',
'9 2 3 1',
'9 3 2 0',
'10 0 1 0',
'8 0 2 0',
'14 2 0 2',
'7 2 0 3',
'8 2 0 2',
'0 2 3 2',
'9 2 1 0',
'8 1 0 1',
'0 1 3 1',
'10 1 0 1',
'8 1 2 1',
'8 1 3 1',
'14 1 3 3',
'7 3 2 0',
'9 1 0 1',
'9 1 3 3',
'9 2 3 1',
'8 1 2 1',
'14 1 0 0',
'7 0 3 2',
'9 2 3 0',
'9 3 0 3',
'9 2 1 1',
'10 3 0 1',
'8 1 3 1',
'14 2 1 2',
'7 2 0 0',
'9 3 0 2',
'9 3 0 1',
'9 2 1 3',
'10 1 3 3',
'8 3 2 3',
'14 3 0 0',
'7 0 0 2',
'9 1 3 3',
'9 2 0 0',
'9 1 1 1',
'6 0 3 0',
'8 0 1 0',
'14 0 2 2',
'7 2 0 3',
'8 2 0 0',
'0 0 1 0',
'9 2 0 2',
'9 2 3 1',
'7 0 2 0',
'8 0 2 0',
'14 0 3 3',
'9 3 2 1',
'9 1 0 2',
'9 1 0 0',
'0 0 1 0',
'8 0 2 0',
'14 3 0 3',
'7 3 3 1',
'9 2 2 3',
'9 2 0 2',
'9 1 3 0',
'7 0 2 3',
'8 3 3 3',
'8 3 2 3',
'14 1 3 1',
'9 0 3 2',
'9 3 3 3',
'8 0 2 3',
'8 3 2 3',
'8 3 2 3',
'14 3 1 1',
'8 1 0 0',
'0 0 0 0',
'9 1 3 3',
'9 3 0 2',
'8 3 2 2',
'8 2 2 2',
'14 1 2 1',
'7 1 0 2',
'9 2 0 0',
'9 0 2 1',
'9 2 1 3',
'5 0 3 3',
'8 3 1 3',
'8 3 3 3',
'14 2 3 2',
'9 1 2 3',
'9 1 0 1',
'15 3 0 0',
'8 0 2 0',
'14 0 2 2',
'7 2 0 0',
'9 1 2 2',
'9 2 0 3',
'15 1 3 2',
'8 2 1 2',
'14 2 0 0',
'9 0 0 3',
'8 3 0 2',
'0 2 2 2',
'9 0 1 1',
'5 2 3 1',
'8 1 1 1',
'8 1 3 1',
'14 0 1 0',
'9 3 2 2',
'9 3 0 1',
'9 2 2 3',
'1 1 2 2',
'8 2 3 2',
'14 2 0 0',
'7 0 1 3',
'9 2 3 2',
'9 2 2 0',
'11 0 1 2',
'8 2 1 2',
'14 3 2 3',
'7 3 0 1',
'9 2 3 2',
'9 1 1 0',
'9 3 3 3',
'7 0 2 3',
'8 3 1 3',
'14 1 3 1',
'9 3 3 2',
'8 1 0 3',
'0 3 3 3',
'8 3 0 0',
'0 0 2 0',
'13 0 2 2',
'8 2 2 2',
'8 2 2 2',
'14 1 2 1',
'9 2 2 2',
'9 1 3 3',
'6 0 3 2',
'8 2 3 2',
'14 1 2 1',
'7 1 0 2',
'9 3 3 1',
'9 1 0 0',
'0 3 1 1',
'8 1 3 1',
'14 2 1 2',
'7 2 1 1',
'9 2 1 0',
'8 3 0 3',
'0 3 3 3',
'9 3 3 2',
'3 0 2 2',
'8 2 1 2',
'8 2 1 2',
'14 2 1 1',
'7 1 2 2',
'8 2 0 3',
'0 3 1 3',
'9 0 1 1',
'6 0 3 1',
'8 1 1 1',
'14 2 1 2',
'9 0 3 1',
'9 3 2 0',
'9 2 3 3',
'10 0 3 1',
'8 1 2 1',
'8 1 2 1',
'14 2 1 2',
'7 2 3 3',
'9 0 1 2',
'9 1 0 0',
'9 3 3 1',
'8 0 2 1',
'8 1 1 1',
'14 3 1 3',
'7 3 1 2',
'9 2 0 1',
'9 0 2 3',
'9 2 3 0',
'5 1 3 1',
'8 1 3 1',
'8 1 1 1',
'14 1 2 2',
'7 2 0 1',
'9 3 2 0',
'8 0 0 2',
'0 2 0 2',
'9 3 2 3',
'13 2 0 0',
'8 0 3 0',
'14 1 0 1',
'8 3 0 2',
'0 2 2 2',
'8 1 0 0',
'0 0 1 0',
'7 0 2 2',
'8 2 3 2',
'8 2 1 2',
'14 1 2 1',
'7 1 2 2',
'9 0 0 3',
'8 2 0 1',
'0 1 1 1',
'14 0 0 0',
'8 0 2 0',
'14 2 0 2',
'7 2 3 3',
'8 2 0 0',
'0 0 3 0',
'8 0 0 1',
'0 1 3 1',
'9 0 0 2',
'1 0 2 0',
'8 0 1 0',
'14 0 3 3',
'7 3 2 1',
'9 1 2 3',
'9 2 1 0',
'6 0 3 0',
'8 0 2 0',
'8 0 3 0',
'14 0 1 1',
'7 1 0 3',
'9 2 0 2',
'9 1 1 0',
'8 2 0 1',
'0 1 2 1',
'7 0 2 1',
'8 1 2 1',
'8 1 3 1',
'14 3 1 3',
'9 1 1 1',
'7 0 2 1',
'8 1 1 1',
'14 1 3 3',
'7 3 3 2',
'9 2 0 3',
'9 3 1 1',
'0 0 1 0',
'8 0 1 0',
'14 2 0 2',
'7 2 0 3',
'8 0 0 2',
'0 2 1 2',
'9 2 0 0',
'1 1 2 1',
'8 1 1 1',
'14 1 3 3',
'7 3 1 2',
'9 1 2 1',
'9 2 0 3',
'15 1 3 0',
'8 0 2 0',
'14 0 2 2',
'9 3 2 3',
'9 2 0 0',
'9 3 2 1',
'11 0 1 0',
'8 0 3 0',
'14 0 2 2',
'7 2 3 3',
'9 3 1 0',
'9 3 3 2',
'9 1 2 1',
'8 1 2 1',
'8 1 1 1',
'8 1 3 1',
'14 3 1 3',
'7 3 0 0',
'9 2 2 2',
'8 1 0 3',
'0 3 0 3',
'9 0 2 1',
'2 3 2 1',
'8 1 1 1',
'14 1 0 0',
'7 0 0 1',
'9 2 1 0',
'9 3 2 2',
'12 3 2 2',
'8 2 3 2',
'14 2 1 1',
'7 1 0 2',
'8 0 0 1',
'0 1 3 1',
'9 2 3 3',
'10 1 3 1',
'8 1 2 1',
'14 1 2 2',
'7 2 2 1',
'9 1 0 2',
'5 0 3 0',
'8 0 1 0',
'14 0 1 1',
'7 1 3 3',
'9 3 3 2',
'9 2 0 0',
'9 3 1 1',
'13 0 2 2',
'8 2 3 2',
'8 2 1 2',
'14 3 2 3',
'9 3 3 2',
'8 2 0 1',
'0 1 0 1',
'3 0 2 1',
'8 1 3 1',
'8 1 3 1',
'14 1 3 3',
'7 3 2 1',
'9 1 3 3',
'13 0 2 2',
'8 2 2 2',
'14 2 1 1',
'7 1 2 0',
'9 2 1 3',
'9 1 0 1',
'9 2 0 2',
'5 2 3 3',
'8 3 1 3',
'14 0 3 0',
'8 1 0 3',
'0 3 2 3',
'9 3 1 1',
'10 1 3 1',
'8 1 3 1',
'8 1 1 1',
'14 0 1 0',
'9 3 3 1',
'9 3 2 3',
'11 2 1 1',
'8 1 2 1',
'8 1 1 1',
'14 1 0 0',
'7 0 0 1',
'9 0 2 2',
'8 2 0 0',
'0 0 3 0',
'8 1 0 3',
'0 3 2 3',
'13 2 0 3',
'8 3 3 3',
'14 3 1 1',
'9 1 1 2',
'8 1 0 3',
'0 3 1 3',
'14 3 3 3',
'8 3 3 3',
'14 3 1 1',
'7 1 3 3',
'9 3 0 2',
'9 1 0 1',
'9 2 1 0',
'8 0 1 0',
'8 0 2 0',
'14 0 3 3',
'7 3 3 2',
'8 3 0 0',
'0 0 2 0',
'8 3 0 1',
'0 1 3 1',
'9 1 1 3',
'6 0 3 0',
'8 0 2 0',
'14 2 0 2',
'9 1 0 1',
'9 2 1 3',
'9 0 2 0',
'15 1 3 1',
'8 1 3 1',
'14 2 1 2',
'7 2 3 1',
'9 1 3 0',
'9 3 1 2',
'9 0 0 3',
'12 3 2 3',
'8 3 1 3',
'14 3 1 1',
'7 1 1 2',
'9 1 1 3',
'9 2 3 0',
'9 0 1 1',
'15 3 0 0',
'8 0 2 0',
'14 0 2 2',
'7 2 3 0',
'8 1 0 1',
'0 1 2 1',
'9 0 2 3',
'9 2 2 2',
'2 3 2 3',
'8 3 3 3',
'14 0 3 0',
'7 0 0 2',
'9 3 3 0',
'9 2 2 3',
'3 1 0 1',
'8 1 1 1',
'14 1 2 2',
'9 0 1 1',
'10 0 3 0',
'8 0 1 0',
'8 0 2 0',
'14 0 2 2',
'8 3 0 0',
'0 0 2 0',
'4 0 3 3',
'8 3 3 3',
'14 3 2 2',
'7 2 3 0',
'8 0 0 3',
'0 3 1 3',
'9 3 2 1',
'9 2 0 2',
'14 3 3 1',
'8 1 3 1',
'14 1 0 0',
'7 0 1 2',
'9 1 0 0',
'9 2 0 3',
'9 3 0 1',
'10 1 3 3',
'8 3 2 3',
'14 2 3 2',
'7 2 2 1',
'8 3 0 3',
'0 3 0 3',
'9 2 1 2',
'8 3 0 0',
'0 0 3 0',
'11 2 0 3',
'8 3 1 3',
'8 3 1 3',
'14 1 3 1',
'9 1 0 3',
'9 3 2 2',
'9 2 0 0',
'13 0 2 3',
'8 3 2 3',
'14 3 1 1',
'8 3 0 3',
'0 3 3 3',
'8 0 0 0',
'0 0 1 0',
'8 0 2 0',
'8 0 3 0',
'14 1 0 1',
'7 1 1 3',
'9 1 3 1',
'9 2 1 0',
'13 0 2 0',
'8 0 2 0',
'8 0 2 0',
'14 3 0 3',
'7 3 3 0',
'8 0 0 3',
'0 3 3 3',
'9 0 2 1',
'1 3 2 2',
'8 2 2 2',
'14 2 0 0',
'9 3 2 2',
'9 3 1 1',
'1 3 2 1',
'8 1 3 1',
'8 1 1 1',
'14 1 0 0',
'7 0 2 2',
'9 3 3 1',
'9 1 2 0',
'9 1 0 3',
'0 0 1 1',
'8 1 3 1',
'14 2 1 2',
'7 2 3 1',
'8 3 0 2',
'0 2 3 2',
'8 3 0 0',
'0 0 2 0',
'9 2 1 3',
'4 0 3 0',
'8 0 1 0',
'14 0 1 1',
'9 3 1 3',
'9 2 3 2',
'9 2 0 0',
'10 3 0 0',
'8 0 3 0',
'14 1 0 1',
'8 0 0 3',
'0 3 0 3',
'9 1 0 0',
'7 0 2 2',
'8 2 1 2',
'14 1 2 1',
'9 3 0 0',
'8 2 0 2',
'0 2 0 2',
'13 2 0 2',
'8 2 3 2',
'14 1 2 1',
'9 3 0 2',
'9 2 2 3',
'9 2 2 0',
'3 0 2 3',
'8 3 2 3',
'14 3 1 1',
'7 1 2 2',
'9 2 0 3',
'8 1 0 1',
'0 1 1 1',
'4 0 3 3',
'8 3 3 3',
'8 3 1 3',
'14 3 2 2',
'7 2 2 1',
'9 3 0 0',
'8 0 0 2',
'0 2 0 2',
'9 2 1 3',
'13 2 0 2',
'8 2 3 2',
'14 1 2 1',
'7 1 1 2',
'9 0 1 1',
'9 1 0 0',
'8 3 0 3',
'0 3 3 3',
'0 0 1 1',
'8 1 1 1',
'14 1 2 2',
'7 2 3 1',
'9 2 3 0',
'9 2 1 3',
'9 2 0 2',
'4 0 3 3',
'8 3 3 3',
'14 1 3 1',
'9 1 1 3',
'8 1 0 2',
'0 2 0 2',
'6 0 3 3',
'8 3 3 3',
'14 3 1 1',
'7 1 1 3',
'9 1 2 0',
'9 3 0 1',
'9 3 1 2',
'0 0 1 0',
'8 0 1 0',
'14 0 3 3',
'7 3 3 1',
'8 1 0 0',
'0 0 1 0',
'9 2 2 3',
'9 2 0 2',
'7 0 2 0',
'8 0 2 0',
'14 0 1 1',
'7 1 0 2',
'9 1 0 3',
'9 2 1 1',
'9 1 1 0',
'14 0 0 1',
'8 1 1 1',
'8 1 2 1',
'14 1 2 2',
'7 2 1 3',
'9 2 3 0',
'9 3 1 2',
'9 2 3 1',
'13 0 2 0',
'8 0 3 0',
'14 3 0 3',
'7 3 0 2',
'9 3 1 1',
'9 1 0 3',
'9 2 2 0',
'11 0 1 3',
'8 3 1 3',
'14 2 3 2',
'7 2 2 1',
'8 2 0 0',
'0 0 1 0',
'9 2 1 2',
'9 1 3 3',
'7 0 2 3',
'8 3 3 3',
'14 3 1 1',
'7 1 2 0',
'9 0 1 3',
'9 1 1 1',
'2 3 2 2',
'8 2 1 2',
'14 2 0 0',
'7 0 3 3',
'9 3 0 1',
'9 1 3 0',
'8 3 0 2',
'0 2 2 2',
'0 0 1 1',
'8 1 2 1',
'14 1 3 3',
'7 3 1 2',
'9 2 1 1',
'9 1 2 3',
'9 2 1 0',
'6 0 3 0',
'8 0 1 0',
'8 0 3 0',
'14 0 2 2',
'9 2 1 3',
'9 1 3 1',
'9 2 1 0',
'4 0 3 1',
'8 1 3 1',
'8 1 1 1',
'14 1 2 2',
'7 2 3 1',
'9 1 3 2',
'9 3 3 0',
'9 0 2 3',
'9 2 0 2',
'8 2 1 2',
'14 2 1 1',
'9 3 2 3',
'8 1 0 2',
'0 2 0 2',
'9 2 2 0',
'10 3 0 3',
'8 3 2 3',
'14 1 3 1',
'9 0 1 3',
'9 2 1 2',
'2 3 2 0',
'8 0 2 0',
'14 1 0 1',
'7 1 0 3',
'9 3 0 0',
'9 0 3 1',
'11 2 0 0',
'8 0 2 0',
'14 3 0 3',
'9 3 3 2',
'9 3 2 0',
'9 2 1 1',
'1 0 2 0',
'8 0 3 0',
'14 3 0 3',
'7 3 0 2',
'8 1 0 0',
'0 0 2 0',
'9 1 0 3',
'8 0 0 1',
'0 1 0 1',
'6 0 3 3',
'8 3 2 3',
'8 3 1 3',
'14 3 2 2',
'7 2 0 3',
'9 3 2 2',
'13 0 2 2',
'8 2 1 2',
'14 3 2 3',
'7 3 3 1',
'8 0 0 3',
'0 3 1 3',
'9 3 1 0',
'9 2 0 2',
'11 2 0 3',
'8 3 1 3',
'14 3 1 1',
'9 0 1 3',
'9 0 1 0',
'2 3 2 2',
'8 2 2 2',
'8 2 2 2',
'14 2 1 1',
'7 1 3 3',
'9 0 2 2',
'9 3 1 1',
'1 1 2 2',
'8 2 3 2',
'14 2 3 3',
'7 3 3 0',
];

module.exports = { samples , program};
