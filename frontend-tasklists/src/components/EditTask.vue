<template>
	<div>
		<h3>Editing task: "{{ active_task.name }}"</h3>
		<input type="text" id="active_task_id" :value="active_task.name"/><br/>
		<input class="btn btn-success" type="button" value="Save" @click="submitTask(active_task)"/><input class="btn btn-secondary" type="button" value="Cancel" @click="cancelEditing()" />
	</div>
</template>

<script>

import { submitTask } from '../services/TaskService'

export default {
	name: 'EditTask',
	methods: {
		submitTask: function(task){
			if (document.getElementById("active_task_id").value != ""){
				task.name = document.getElementById("active_task_id").value;
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