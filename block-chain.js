//const hashCode = str =>  (    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0  ).toString(36)

function blockChain(data, prev = { index: 0, hash: '0'   
 }) {
  const index = prev.index + 1;
  const hash = hashCode(`${index}${prev.hash}${JSON.stringify(data)}`);
  return {
    index,
    hash,
    data,
    prev,
    chain: newData => blockChain(newData, this),
  };
}