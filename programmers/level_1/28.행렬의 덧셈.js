/*
문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
*/

/* leo */
const solution = (arr1, arr2) => {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr[i] = [];
    for (let ia = 0; ia < arr1[i].length; ia++) {
      arr[i][ia] = arr1[i][ia] + arr2[i][ia];
    }
  }
  return arr;
}
/*
A.map((a,i) => a.map((b, j) => b + B[i][j])); 이렇게 간단하게 처리하는 방법도 있음
*/
