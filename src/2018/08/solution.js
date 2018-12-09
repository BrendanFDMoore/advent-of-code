const { add2 } = require('../../common/utils');
const { input } = require('./input');

// console.log(input);

let sequence = input.split(' ').map(i => parseInt(i));
let metaSum = 0;
// console.log(sequence);

const sumArrayNum = (nums) => nums.reduce(add2)

const getHeader = () => {
  const [children, metadata] = sequence.splice(0,2);
  return { children, metadata };
};

const getChild = () => {
  const header = getHeader();
  const children = getChildren(header.children);
  const metadata = getMetadata(header.metadata);
  const tempSum = sumArrayNum(metadata);
  const value = getValue(children, metadata);
  metaSum += tempSum;
  return { header, children, metadata, value };
};

const getMetadata = (numMetadata) => sequence.splice(0, numMetadata);

const getChildren = (numChildren) => {
  let children = [];
  if (numChildren > 0) {
    for (let i = 0; i < numChildren; i+=1) {
      children.push(getChild());
    }
  }
  return children;
};

const getValue = (children, metadata) => {
  if (children.length === 0) return sumArrayNum(metadata);
  return metadata.reduce(
   (acc, cur) => acc + ((children[cur-1] && children[cur-1].value) || 0),
   0
  );
};

const tree = getChild();

console.log('Result:', tree);
console.log('metaSum:', metaSum);
