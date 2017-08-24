var prob5array = ["Novemberist", "is", "the", "coolest", "month", "of", "the", "Year"];
var prob6array = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""];

function problem1(e) {
	var fibo_serie;
	for(var i=0;i<100;i++){
		if(i==0){
			fibo_serie = fibonacci(i);
		}else{
			fibo_serie = fibo_serie + "\n" + fibonacci(i);
		} 
	}
	console.log(fibo_serie);
}

function problem2(e) {
	var result = 4*serie(1);
	console.log("El resultado es: "+result);
}

function problem3(e) {
	var matrix = [ [1,2,3], [0,5,6], [2,5,6] ];
	var x = evaluatezero(matrix);
	console.log(x);
}

function problem4(e) {
	var x = compress("ab");
	console.log(x);
}

function problem5(e) {
	var result = "";
	//Get the lengths of the elements in array
	var lengths = prob5array.map(function(word) {
		return word.length;
	});
	//Get the max length
	var max = Math.max.apply(null, lengths);
	for(var i=-1;i<=prob5array.length;i++){
		//Write the first and last line
		if(i==-1 || i==prob5array.length){
			for(var j=-1;j<=max;j++){
				result = result + "*";
			}	 
		}else{
			for(var j=-1;j<=(max-prob5array[i].length)+1;j++){
				//Add the first and last * of each line
				if(j==-1 || j==(max-prob5array[i].length)+1){
					result = result + "*";
				}else if(j==0){//Write the word
					result = result + prob5array[i];
				}else{//Add spaces if needed
					result = result + " ";
				}
				
			}
		}
		//Add breakline
		result = result + "\n";
	}
	console.log(result);
}

function problem6(e) {
	var x = getPosition("ball");
	console.log("Position: "+x);
}

function problem7(e) {
	var matrix = [ [1,2,3], [4,5,6] ];
	var x = transpose(matrix);
	console.log(x);
}


function fibonacci(n) {
	if (n>1){
       return fibonacci(n-1) + fibonacci(n-2);  //recursive function
    }else if(n==1){
    	return 1; //initial case
    }else if(n==0){
    	return 0; //initial case
    }
}

function serie(n) {
	if (n<1000000){
		var r = -1;
		var e = n+1;
		var x = Math.pow(r,e);
		var y = (2*n)-1;
       	return (x/y) + serie(n+1);  //recursive function
    }else{
    	var r = -1;
		var e = n+1;
		var x = Math.pow(r,e);
		var y =(2*n)-1;
       	return (x/y); //initial case
    }
}

function evaluatezero(array){
	widthArray = array.length; //Get the length of the row
    heightArray = array[0].length; //Get the length of the column

	//Evaluate if the array is empty
  	if(heightArray === 0 || widthArray === 0) { 
  		return array; 
  	}else{
  		//If array is not empty check if there is some value equals to 0
  		var i;
		var j;
		var newArray = [];
	  	for(i=0; i<widthArray; i++) {
	  		//Create array to copy values
	  		var rowArray = [];
	    	for(j=0; j<heightArray; j++) {
	    		//If element is not 0 then copy to the row in the new array
	    		if(array[i][j]!=0){
	    			rowArray.push(array[i][j]);
	    		}else{
	    			//If the value is equals to 0 then clean the row and add 0 as much as the length of the row
	    			rowArray = [];
	    			for(k=0; k<widthArray; k++) {
	    				rowArray.push(0);
	    			}
	    			//break the cycle
	    			break;
	    		}
	    	}
	    	//Add the row to the new array
	    	newArray[i] = rowArray;
	  	}
	  	return newArray;
  	}
}

function compress(string){
	var temp = "";
	var counter = 1;
	var newstring = "";
	//The basic case is the length of 2, greater than that it can be compressed or not
	if(string.length>2){
		//Check each char in string
		for (var i = 0; i < string.length; i++) {
			//Check if the char is repeated and increase the counter
			if(temp === string.charAt(i)){
				counter++;
				//If it's the last position of string then add to new string
				if(i==string.length-1){
					newstring = newstring + temp + counter;
				}
			//If the char is not repeated add the char and counter to new string
			}else if(temp != ""){
				if(i==string.length-1){
					newstring = newstring + temp + counter + string.charAt(i) + 1;
				}else{
					newstring = newstring + temp + counter;
					temp = string.charAt(i);
					counter = 1;
				}
			}else{
				temp = string.charAt(i);
			}
		}
		//Evaluate is the length of new string is less than the length of the first string to choose which send back
		if(newstring.length < string.length){
			return newstring;
		}else{
			return string;
		}
	}else{
		return string;
	}
}

function getPosition(word) {
	//Check all the array
	for(var i=0;i<prob6array.length;i++){
		//Check that data are strongly equal
		if(prob6array[i]===word){
			return i;
		}
	}
}

function transpose(array){
	widthArray = array.length; //Get the length of the row
    heightArray = array[0].length; //Get the length of the column

	//Evaluate if the array is empty
  	if(heightArray === 0 || widthArray === 0) { 
  		return array; 
  	}else{
  		//If array is not empty then create a new one and copy elements
  		var i;
		var j;
		var newArray = [];
	  	for(i=0; i<heightArray; i++) {
	  		//Add a new blank row
	    	newArray[i] = [];
	    	for(j=0; j<widthArray; j++) {
	    		//copy transposed values
	      		newArray[i][j] = array[j][i];
	    	}
	  	}
	  	return newArray;
  	}
}

$.index.open();
