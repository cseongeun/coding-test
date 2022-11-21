/*
문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

제한 조건
n은 1이상 8000000000 이하인 자연수입니다.
*/

/* leo */
function solution(n) {
  const arr = [...String(n)].sort((a, b) => b - a);
  return Number(arr.join(""));
}

/*
n + "".split("") : 정수를 문자열 배열로 만들기
+s : string -> number
*/

/* eun */
function solution(n) {
  var answer = 0;
  
  answer = parseInt(
    n
      .toString()
      .split("")
      .sort()
      .reverse()
      .map((_) => parseInt(_))
      .join("")
  );
  return answer;
}
