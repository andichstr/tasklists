<template>
	<div id="addTaskDiv">
		<input id='newTask' type='text' placeholder='New Task'/> <input class="btn btn-success" type='button' value='Add' @click='createTask()' />
	</div>
</template>

<script>

import { getAllTasks, createTask } from '../services/TaskService'

export default {
	name: 'CreateTask',
	props: {
		tasks: [],
	},
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
	},
}

</script>

