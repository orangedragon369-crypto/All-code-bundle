const { th } = require("date-fns/locale");

class MathUtils {
	add(a,b){
		return a+b;
	}

	subtract(a,b){
		let result;
		if (this.isNumeric(a) && this.isNumeric(b)){
			result = a-b;
		}else{
			throw new Error(`Either ${a} or ${b} is not a number`);
		}
		return result;
	}

	average(...numbers){}

	isNumeric(n) {
		return typeof n === 'number';
	}

}