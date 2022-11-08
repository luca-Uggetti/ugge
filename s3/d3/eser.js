
var taskInput=document.getElementById("new-task");//Add a new task.
var addButton=document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


var createNewTaskElement=function(taskString){
	var listItem=document.createElement("li");
	//input (checkbox)
	var checkBox=document.createElement("input");//checkbx
	//label
	var label=document.createElement("label");//label
	//input (text)
	var editInput=document.createElement("input");//text
	//button.edit
	var editButton=document.createElement("button");//edit button

	//button.delete
	var deleteButton=document.createElement("button");//delete button

	label.innerText=taskString;
	//Each elements, needs appending
	checkBox.type="checkbox";
	editInput.type="text";

	editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";
//creo nuovi elementi nella mia lista e li metto come "figli" del mio parent
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
    console.log("listItem", listItem)
	return listItem;
}



var addTask=function(){
	var listItem=createNewTaskElement(taskInput.value);
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
	taskInput.value="";
}

var editTask=function(){
var listItem=this.parentNode;// importante MI RICHIAMA IL PARENT NELLA FUNZIONE

var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");//vado a controllare se quello che ho scritto è già presente o meno
		if(containsClass){
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		listItem.classList.toggle("editMode");
}




//Delete task.
var deleteTask=function(){
		console.log("Delete Task...");

		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		ul.removeChild(listItem);

}


var taskCompleted=function(){
		console.log("TasK completato...");
	
	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
		console.log("Task incompletati...");
		var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}






addButton.onclick=addTask;



var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");


			editButton.onclick=editTask;
			deleteButton.onclick=deleteTask;
			checkBox.onchange=checkBoxEventHandler;
}


	for (var i=0; i<incompleteTaskHolder.children.length;i++){

		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}




	for (var i=0; i<completedTasksHolder.children.length;i++){
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}