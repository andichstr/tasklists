<template>
	<div>
		<h3>Editing task: "{{ editing_task.name }}"</h3>
		<input type="text" id="editing_task_id" :value="editing_task.name"/><br/>
		<input class="btn btn-success" type="button" value="Save" @click="submitTask(editing_task)"/><input class="btn btn-secondary" type="button" value="Cancel" @click="cancelEditing()" />
	</div>
</template>

<script>

import { submitTask } from '../services/TaskService'

export default {
	name: 'EditTask',
	props:{
		editing_task: {},
		editing: Boolean
	},
	methods: {
		submitTask: function(task){
			if (document.getElementById("editing_task_id").value != ""){
				task.name = document.getElementById("editing_task_id").value;
				console.log(task);
				
				submitTask(task).then(response => {
					console.log(response);
					this.$parent.switchEditing();
				})
			}else{
				console.log("No empty strings allowed")
			}
		},
		cancelEditing: function(){
			this.$parent.switchEditing();
		}
	},
}

</script>

<style scoped>
	input{
		margin:5px;

	}
</style>