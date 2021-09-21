const testList1 = [1, 2, 3];
const testList2 = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const resultLength = 2 * list1.length;
  let i = 0;
  let j = 0;
  const result = [];
  while (i < resultLength) {
    result[i] = list1[j];
    result[i + 1] = list2[j];
    j++;
    i += 2;
  }
  return result;
}
console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  const zipped = _.zip(list1, list2);
  return _.flatten(zipped);
}
console.log(zipListTheSimpleWay(testList1, testList2));
