/*
문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.

s	return
"Zbcdefg"	"gfedcbZ"
*/

/* leo */
const solution = (s) => s.split("").sort().reverse().join("");
/*
중간에 sort()를 빼먹었더니 테스트는 통과했지만 채점을 통과하지 못했다.
reverse()는 그저 배열을 뒤집는 메서드이고,
sort()가 유니코드 순으로 정렬을 해주므로 .sort().reverse()를 해줘야 함

.sort() : 배열의 요소를 정렬하고 동일한 배열에 대한 참조를 반환 (기본 정렬 순서 = 오름차순, 요소를 문자열로 변환한 뒤 UFT-15 코드 단위 값의 시퀀스를 비교)
.reverse() : 배열을 뒤집고 동일한 배열에 대한 참조를 반환
*/

/* eun */
function solution(s) {
  var answer = "";

  answer = s.split("").sort().reverse().join("");

  return answer;
}
