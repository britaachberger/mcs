const form = document.getElementById("form");
var subscriptionPara = document.getElementById("thxSubscription");
subscriptionPara.style.display="none"

const JoinNewsletter = document.getElementById("btnJoinNewsletter");
var valueJoinNewsletter = JoinNewsletter.value;
console.log(valueJoinNewsletter);



function checkEvent(event){
  event.preventDefault();
  console.log("Нажали");

	var Input1 = document.getElementById("input1");
	var valueInput1 = Input1.value;
	console.log(valueInput1);


	var Input2 = document.getElementById("input2");
	var valueInput2 = Input2.value;
	console.log(valueInput2);

	  if(valueInput1, valueInput2 === ''){
		console.log('No Login!');
		if(valueInput1 === ''){
			Input1.style.border = "2px solid red";
			}
		if(valueInput2 === ''){
			Input2.style.border = "2px solid red";
			}	
		} else {
		form.style.display = 'none';
		
		subscriptionPara.style.display="block";
		JoinNewsletter.style.backgroundColor = "";
	};
}

function backgroundRed(){JoinNewsletter.style.backgroundColor = "red";}
function backgroundGreen(){JoinNewsletter.style.backgroundColor = "#A2CA29";}

  JoinNewsletter.addEventListener('click', checkEvent);
  JoinNewsletter.addEventListener('mousedown',backgroundRed);
  JoinNewsletter.addEventListener('mouseup',backgroundGreen);














