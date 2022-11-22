/*
문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.
*/

/* leo */
function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }

  return result.reduce((acc, cur) => acc + cur);
}

/* eun */
function solution(a, b) {
  var answer = 0;

  const [max, min] = [Math.max(a, b), Math.min(a, b)];

  answer = Array.from({ length: max - min + 1 }, (_, i) => min + i).reduce(
    (acc, cur) => acc + cur,
    0
  );

  return answer;
}
