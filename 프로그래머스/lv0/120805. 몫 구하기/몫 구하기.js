function solution(num1, num2) {
    // 소수점을 제거하기 위해서 Math.floor 사용
    const answer = Math.floor(num1 / num2);
    return answer;
}