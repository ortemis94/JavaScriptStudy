
// 태어난 년도를 입력받아서 현재 나이를 돌려주는 함수 

function func_currentAge(birthYear) {
	var now = new Date(); // 자바스크립트에서 현재날짜시각을 알려주는 것이다.
	var currentYear = now.getFullYear();	// 현재년도
	
	return currentYear - birthYear + 1; 
}
