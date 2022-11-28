/*
문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
각 단어의 짝수번째 알파벳은 대문자로,
홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

입출력 예
s	return
"try hello world"	"TrY HeLlO WoRlD"
입출력 예 설명
"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.
*/

/* leo */
const solution = (s) => {
  // const result = s.split(' ').map((v) => v.replace(v, (b,i) => i % 2 === 0 ? b.toUpperCase() : b.toLowerCase()));
  const result = s.split(' ').map((v, i) => v.replace(v, (b) => {
    console.log(i);
    return b.toUpperCase();
  }));
  console.log(result);

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     // result += j % 2 === 0 ? arr[i][j].toUpperCase() : arr[i][j].toLowerCase()
  //     result += arr[i][j]j % 2 === 0 ? .toUpperCase() : arr[i][j].toLowerCase()
  //   }
  // }

  return true;
  // const arr = s.split(' ');
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i])
  // }

  // console.log(arr);
  // const arr = s.split(' ').map((v,i) => s).map((b,j) => s[i][j]);
  // console.log(arr);
  // console.log(s.split(' ').map((v) => v));
  // s.split(' ').map((v, i) => v[i]).map((arv, ari) => {
  //   console.log(arv[ari]);
  // });
  // arr1.map((v, i) => v).map((arv, ari) => arv + arr2[i][ari]);


  // const result = s.split(' ').map((a) => a.map((b,i) => i % 2 === 0 ? b.toUpperCase() : b.toLowerCase()));
  // console.log(result);
  // return s.split.map((v) => v.map((val, index) => index % 2 === 0 ? val.toUpperCase() : val.toLowerCase())).join('');
};
// A.map((a,i) => a.map((b, j) => b + B[i][j]));

console.log(solution('try hello world')); //TrY HeLlO WoRlD
