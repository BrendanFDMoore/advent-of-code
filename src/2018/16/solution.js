const R = require("ramda");
const { samples: rawSamples, program: rawProgram } = require('./input');

const TEST_LIMIT = 5000;
const samples = rawSamples
  .filter((v,i) => i < TEST_LIMIT)
  .map(s => {
    // console.log({raw: s});
    // const splitInstr = s.instr.split(' ');
    // console.log({splitInstr});
    // const mappedInstr = splitInstr.map(i => parseInt(i));
    // console.log({mappedInstr});

    return ({
    ...s,
    inputs: s.instr.split(' ').map(i => parseInt(i)),
  })})

const program = rawProgram
  .map(s => {
    // console.log({raw: s});
    // const splitInstr = s.instr.split(' ');
    // console.log({splitInstr});
    // const mappedInstr = splitInstr.map(i => parseInt(i));
    // console.log({mappedInstr});

    return ({
    inputs: s.split(' ').map(i => parseInt(i)),
  })})

const NUMREGISTERS = 4;
const NUMCODES = 16;

const registers = [];
R.range(0,NUMREGISTERS).map(r => {registers[r] = 0;})

const getReg = r => registers[r];
const setReg = (r,v) => { registers[r] = v };
const setAllReg = (vals) => {
  vals.map((v,i) => setReg(i, v))
};
const compareAllReg = (testVals) => {
  let falseCount = 0;
  testVals.map((v, i) => { getReg(i) === v ? null : falseCount+=1;})
  return falseCount === 0;
};

const ops = {
  addr: (a, b, c) => {setReg(c, (getReg(a) + getReg(b)))},
  addi: (a, b, c) => {setReg(c, (getReg(a) + b))},
  mulr: (a, b, c) => {setReg(c, (getReg(a) * getReg(b)))},
  muli: (a, b, c) => {setReg(c, (getReg(a) * b))},
  banr: (a, b, c) => {setReg(c, (getReg(a) & getReg(b)))},
  bani: (a, b, c) => {setReg(c, (getReg(a) & b))},
  borr: (a, b, c) => {setReg(c, ((getReg(a) | getReg(b))))},
  bori: (a, b, c) => {setReg(c, (getReg(a) | b))},
  setr: (a, b, c) => {setReg(c, (getReg(a)))},
  seti: (a, b, c) => {setReg(c, (a))},
  gtir: (a, b, c) => {setReg(c, (a > getReg(b) ? 1 : 0))},
  gtri: (a, b, c) => {setReg(c, (getReg(a) > b ? 1 : 0))},
  gtrr: (a, b, c) => {setReg(c, (getReg(a) > getReg(b) ? 1 : 0))},
  eqir: (a, b, c) => {setReg(c, (a === getReg(b) ? 1 : 0))},
  eqri: (a, b, c) => {setReg(c, (getReg(a) === b ? 1 : 0))},
  eqrr: (a, b, c) => {setReg(c, (getReg(a) === getReg(b) ? 1 : 0))},
};

const performOp = (opcode, a, b, c) => ops[opcode](a,b,c);

// console.log(samples);
let sampleThatBehaveLikeThreeOrMore = 0;

console.log({samplesCount: samples.length});

let opCodeMap = {
  // [0]: 'addi',
  // [1]: 'bani',
  // [2]: 'gtir',
  // [3]: 'borr',
  // [4]: 'eqrr',
  // [5]: 'bori',
  // [6]: 'gtrr',
  // [7]: 'setr',
  // [8]: 'muli',
  // [9]: 'seti',
  // [10]: 'banr',
  // [11]: 'gtri',
  // [12]: 'eqir',
  // [13]: 'eqri',
  // [14]: 'addr',
  // [15]: 'mulr',
};
let knownOpCodesValues = Object.keys(opCodeMap);
let knownOpCodes = Object.values(opCodeMap);
let opCodesToTest = Object.keys(ops).filter(o => !knownOpCodes.includes(o));
while(knownOpCodesValues.length<16){
  samples
  .filter((s) => !knownOpCodesValues.includes(s.inputs[0].toString()))
  .forEach((s, i) => {
    // console.log({ sampleNum: i })
    // console.log({ sample: s })
    let likeOps = 0;
    let lastLikeOp;
    opCodesToTest.forEach(o => {
      // console.log({opCode: o});
      setAllReg(s.before);
      // console.log({ regBefore: registers })

      performOp(o, s.inputs[1],s.inputs[2],s.inputs[3])
      // console.log({ regAfter: registers })
      if (compareAllReg(s.after)) { 
        likeOps +=1;
        lastLikeOp = o;
      }
    })
    if (likeOps >= 3) { sampleThatBehaveLikeThreeOrMore +=1 }
    if (likeOps === 1 && opCodeMap[s.inputs[0]] === undefined) { 
      opCodeMap[s.inputs[0]] = lastLikeOp;
      console.log('adding ', s.inputs[0], lastLikeOp);
    }
    // if (likeOps === ) { 
    //   opCodeMap[s.inputs[0]] = lastLikeOp;
    //   console.log('adding ', s.inputs[0], lastLikeOp);
    // }
  })
  knownOpCodesValues = Object.keys(opCodeMap);
  knownOpCodes = Object.values(opCodeMap);
  opCodesToTest = Object.keys(ops).filter(o => !knownOpCodes.includes(o));
}
console.log({sampleThatBehaveLikeThreeOrMore});
console.log({opCodeMap});


let errors = 0;
// verify op code map
samples
.filter((s) => knownOpCodesValues.includes(s.inputs[0].toString()))
.forEach((s, i) => {
  // console.log({ sampleNum: i })
  // console.log({ sample: s })
  const code = opCodeMap[s.inputs[0]];
  setAllReg(s.before);
    // console.log({ regBefore: registers })

  performOp(code, s.inputs[1],s.inputs[2],s.inputs[3])
    // console.log({ regAfter: registers })
  if (!compareAllReg(s.after)) { 
    console.log('Problem in sample for ', i, code, {s})
    console.log({registers});
    errors+=1;
  }
})

setAllReg([0,0,0,0]);
console.log({registers});
console.log({programLength: program.length});

program
.filter((p,i) => i < 5000)
.map((p,i) =>{
  // console.log({step: i,})
  const code = opCodeMap[p.inputs[0]];
  // console.log({code});
  performOp(opCodeMap[p.inputs[0]],p.inputs[1], p.inputs[2], p.inputs[3])
  // console.log({registers});
})

console.log({registers});

// WRONG: 524

// pt2 wrong 4788431015095460000
// 9007199254740991
// 4788431015095460000
// 4788431014372127000

