/*
문제 설명
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

제한 사항
n은 1이상, 50000000000000 이하인 양의 정수입니다.
*/

/* leo */
function solution(n) {
  const num = Math.sqrt(n);
  const result = Number.isInteger(num) ? Math.pow(num + 1, 2) : -1;

  return result;
}
/*
Number.isInteger(n) : 주어진 값이 정수인지 boolean 반환
Math.sqrt(n) : 숫자의 제곱근 반환. 음수일 시 NaN 반환
Math.pow(n, e) : 첫번째 매개변수에 e를 제곱한 값 반환
*/

/* eun */
function solution(n) {
  var answer = 0;

  const x = Math.sqrt(n);
  answer = Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;

  return answer;
}
