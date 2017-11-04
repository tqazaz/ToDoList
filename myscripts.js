


var increment = 0 ;
var arrayOFLIs = [] ;
/*After clicking Add button .... */

	document.getElementById("addButton").addEventListener("click", () => {

	var newTask =  document.getElementById("tadd").value ;
	if (newTask.replace(/\s/g, '').length) {
			document.getElementById('tadd').style['background-color'] = '#ccffcc' ;
			document.getElementById("tadd").placeholder = "Enter New Task ... ";
			var ul = document.getElementById("newLineOfTask");

			/*create Labels */
			var label = document.createElement("label");
			label.innerHTML = document.getElementById('tadd').value ;
			label.setAttribute('class' , 'sameClass'+increment) ;
			/*create CheckBoxes */
			var cb = document.createElement('input');
			cb.setAttribute('type', 'checkbox');
			cb.setAttribute('class' , 'sameClass'+increment) ;
			cb.style['position'] = 'absolute' ;
			cb.style['left'] = '265px' ;
			cb.addEventListener("change" , (event) => {

				var labelClassName = event.target.className ;
				if(document.getElementsByClassName(labelClassName)[1].checked == true) {

				var myLabel = document.getElementsByClassName(labelClassName) ;
					myLabel[0].style['text-decoration'] = 'line-through' ;

				}
				else {
					var myLabel = document.getElementsByClassName(labelClassName) ;
					 myLabel[0].style['text-decoration'] = 'none' ;
				}
			}) ;
			/*create Button to delete the TASK */
			var deleteButton = document.createElement('input');
			deleteButton.type = "button";
			deleteButton.style['backgroundImage'] = "url('./img/garbage.png')";
			deleteButton.style['height'] = "17px";
			deleteButton.style['width'] = "17px";
			deleteButton.style['background-size'] = "cover";
			deleteButton.style['border-radius'] = "50%";
			deleteButton.style['position'] = 'absolute' ;
			deleteButton.style['right'] = '290px' ;
			deleteButton.setAttribute('class' , 'sameClass'+increment) ;
			deleteButton.addEventListener("click" , (event) => {
			event.target.parentNode.remove();
			}) ;
			/*create Button to EDIT the TASK */
			var editButton = document.createElement('input');
			editButton.type = "button";
			editButton.style['backgroundImage'] = "url('./img/edit.png')";
			editButton.style['height'] = "17px";
			editButton.style['width'] = "17px";
			editButton.style['background-size'] = "cover";
			editButton.style['border-radius'] = "50%";
			editButton.style['position'] = 'absolute' ;
			editButton.style['right'] = '260px' ;
			editButton.setAttribute('class' , 'sameClass'+increment) ;
			editButton.addEventListener("click" , (event) => {

			document.getElementById("tadd").focus();
			document.getElementById("tadd").select();
			var labelClassNameForEdit = event.target.className ;
			var myLabel = document.getElementsByClassName(labelClassNameForEdit) ;
			var myEditedTet = document.getElementById('tadd').value ;
			myLabel[2].innerHTML = myEditedTet ;
			}) ;

			var li = document.createElement("li") ;
			li.style['list-style-type'] = 'none' ;
			li.style['text-align'] = 'center' ;
			li.style['padding-top'] = '15px' ;
			li.setAttribute('class' , 'sameClass'+increment , 'DEbuttons') ;
			li.appendChild(cb) ; li.appendChild(label) ;
			li.appendChild(deleteButton) ; li.appendChild(editButton) ;

			ul.appendChild(li);
			increment++ ;

			document.getElementById("tadd").value = "";

		   /*Storing the item in local Starage */
			 //console.log(ul) ;

			 arrayOFLIs.push(li) ;
			//  for(i=0 ; i<=arrayOFUls.length - 1 ; i++) {
				 console.log(arrayOFLIs) ;
			//  }

		  var testObject = { 'arrayOFLIs': arrayOFLIs };
			// // Put the object into storage
			localStorage.setItem('arrayOFLIs', testObject );
			// // Retrieve the object from storage
			// var retrievedObject = localStorage.getItem('testObject');
			// console.log('retrievedObject: ', JSON.parse(retrievedObject));

 	}
	else if (/^\s*$/.test(newTask))
	{
		document.getElementById("tadd").focus();
		document.getElementById("tadd").select();
		document.getElementById('tadd').style['background-color'] = '#ffcce6'  ;
		document.getElementById("tadd").placeholder = "THIS FIELD IS REQUIRED";
	}
});
