* 문자열(str) 분리 -> 작업 -> 병합
```
str.split('').map((s) => [작업]).join(')
```

* 문자(s) 횟수(n) 반복
```
s.repeat(n)
```

* 올림, 내림, 반올림
```
Math.ceil()
Math.floor()
Math.round()
```

* 1부터 사이즈(n)까지 배열 만들기
```
Array.from({ length: n }, (_, i) => i + 1)
```

* 문자열(str1)에 문자열(str2) 포함 여부
```
str1.indexOf(str2) // 없으면 -1 
```

* 정수(n) 확인
```
Number.isInteger(n)
```

* 거듭제곱 / 제곱근
```
Math.pow(n,e)

Math.sqrt(n)
``` 


* 최솟값, 최댓값
```
Math.min(1,2,3) // 1
Math.max(1,2,3) // 3
    
arr = [1, 2, 3]

Math.min(arr) // NaN
Math.max(arr) // NaN

Math.min.apply(Math, arr) // 1
Math.max.apply(Math, arr) // 3 
```