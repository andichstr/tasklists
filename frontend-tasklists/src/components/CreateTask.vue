<template>
	<div id="addTaskDiv">
		<input id='newTask' type='text' placeholder='New Task'/> <input class="btn btn-success" type='button' value='Add' @click='createTask()' /> <input class="btn btn-secondary" type='button' value='Go back' @click='goBack()' />
	</div>
</template>

<script>

import { getAllTasks, createTask } from '../services/TaskService'

export default {
	name: 'CreateTask',
	methods: {
		createTask() {
			
			createTask().then(response => {
				if(response != false){
				getAllTasks().then(response => {
					this.$parent.updateTasks(response);
				})
				document.getElementById('newTask').value = "";
				return response;
				}else{
					console.log("No empty strings allowed");
				}
			})
		},
		goBack() {
			this.$parent.switchInTasklist();
		},
	},
}

</script>

