const keyList = [
  { name: 'A0', value: 'A0', type: '1' },
  { name: '#A0', value: '#A0', type: '0' },
  { name: 'B0', value: 'B0', type: '1' },
  { name: 'C1', value: 'C1', type: '1' },
  { name: '#C1', value: '#C1', type: '0' },
  { name: 'D1', value: 'D1', type: '1' },
  { name: '#D1', value: '#D1', type: '0' },
  { name: 'E1', value: 'E1', type: '1' },
  { name: 'F1', value: 'F1', type: '1' },
  { name: '#F1', value: '#F1', type: '0' },
  { name: 'G1', value: 'G1', type: '1' },
  { name: '#G1', value: '#G1', type: '0' },
  { name: 'A1', value: 'A1', type: '1' },
  { name: '#A1', value: '#A1', type: '0' },
  { name: 'B1', value: 'B1', type: '1' },
  { name: 'C2', value: 'C2', type: '1' },
  { name: '#C2', value: '#C2', type: '0' },
  { name: 'D2', value: 'D2', type: '1' },
  { name: '#D2', value: '#D2', type: '0' },
  { name: 'E2', value: 'E2', type: '1' },
  { name: 'F2', value: 'F2', type: '1' },
  { name: '#F2', value: '#F2', type: '0' },
  { name: 'G2', value: 'G2', type: '1' },
  { name: 'G2', value: '#G2', type: '0' },
  { name: 'A2', value: 'A2', type: '1' },
  { name: '#A2', value: '#A2', type: '0' },
  { name: 'B2', value: 'B2', type: '1' },
  { name: 'C3', value: 'C3', type: '1' },
  { name: '#C3', value: '#C3', type: '0' },
  { name: 'D3', value: 'D3', type: '1' },
  { name: '#D3', value: '#D3', type: '0' },
  { name: 'E3', value: 'E3', type: '1' },
  { name: 'F3', value: 'F3', type: '1' },
  { name: '#F3', value: '#F3', type: '0' },
  { name: 'G3', value: 'G3', type: '1' },
  { name: '#G3', value: '#G3', type: '0' },
  { name: 'A3', value: 'A3', type: '1' },
  { name: '#A3', value: '#A3', type: '0' },
  { name: 'B3', value: 'B3', type: '1' },
  { name: 'C4', value: 'C4', type: '1' },
  { name: '#C4', value: '#C4', type: '0' },
  { name: 'D4', value: 'D4', type: '1' },
  { name: '#D4', value: '#D4', type: '0' },
  { name: 'E4', value: 'E4', type: '1' },
  { name: 'F4', value: 'F4', type: '1' },
  { name: '#F4', value: '#F4', type: '0' },
  { name: 'G4', value: 'G4', type: '1' },
  { name: 'G4', value: '#G4', type: '0' },
  { name: 'A4', value: 'A4', type: '1' },
  { name: '#A4', value: '#A4', type: '0' },
  { name: 'B4', value: 'B4', type: '1' },
  { name: 'C5', value: 'C5', type: '1' },
  { name: '#C5', value: '#C5', type: '0' },
  { name: 'D5', value: 'D5', type: '1' },
  { name: '#D5', value: '#D5', type: '0' },
  { name: 'E5', value: 'E5', type: '1' },
  { name: 'F5', value: 'F5', type: '1' },
  { name: '#F5', value: '#F5', type: '0' },
  { name: 'G5', value: 'G5', type: '1' },
  { name: 'G5', value: '#G5', type: '0' },
  { name: 'A5', value: 'A5', type: '1' },
  { name: '#A5', value: '#A5', type: '0' },
  { name: 'B5', value: 'B5', type: '1' },
  { name: 'C6', value: 'C6', type: '1' },
  { name: 'C6', value: '#C6', type: '0' },
  { name: 'D6', value: 'D6', type: '1' },
  { name: '#D6', value: '#D6', type: '0' },
  { name: 'E6', value: 'E6', type: '1' },
  { name: 'F6', value: 'F6', type: '1' },
  { name: '#F6', value: '#F6', type: '0' },
  { name: 'G6', value: 'G6', type: '1' },
  { name: 'G6', value: '#G6', type: '0' },
  { name: 'A6', value: 'A6', type: '1' },
  { name: '#A6', value: '#A6', type: '0' },
  { name: 'B6', value: 'B6', type: '1' },
  { name: 'C7', value: 'C7', type: '1' },
  { name: '#C7', value: '#C7', type: '0' },
  { name: 'D7', value: 'D7', type: '1' },
  { name: '#D7', value: '#D7', type: '0' },
  { name: 'E7', value: 'E7', type: '1' },
  { name: 'F7', value: 'F7', type: '1' },
  { name: '#F7', value: '#F7', type: '0' },
  { name: 'G7', value: 'G7', type: '1' },
  { name: '#G7', value: '#G7', type: '0' },
  { name: 'A7', value: 'A7', type: '1' },
  { name: '#A7', value: '#A7', type: '0' },
  { name: 'B7', value: 'B7', type: '1' },
  { name: 'C8', value: 'C8', type: '1' },
];

var keyMap = {};
var valueMap = {};

for(var i = 0; i < keyList.length; i++) {
  var k = keyList[i].value;
  var v = i + 1;
  keyMap[k] = v;
  valueMap[v] = k;
}