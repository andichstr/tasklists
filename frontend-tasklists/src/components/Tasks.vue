<template>
	<ul>
		<li id="task.id" v-for="task in tasks" :key="task.id">
			<input type="checkbox" v-model="task.checked" @change="updateChecked(task)" /> {{ task.name }} 
			<input class="btn btn-secondary" type="button" id="editTask" value="Edit" @click="editTask(task)" /> 
			<input class="btn btn-danger" type="button" id="deleteTask" value="Delete" @click="deleteTask(task)"/> 
		</li>
	</ul>
</template>

<script>


import { getAllTasks, updateChecked, deleteTask } from '../services/TaskService.js'

export default {
	name: 'Tasks',
	methods: {
		getAllTasks: function() {
			getAllTasks().then(response => {
				console.log(response);
				console.log(response[0]);
				this.$parent.updateTasks(response);
			})
		},
		updateChecked: function(task) {
			updateChecked(task).then(response => {
				this.getAllTasks();
				return response;
			})
		},
		deleteTask: function(task) {
			deleteTask(task).then(response => {
				this.getAllTasks();
				return response;
			})
		},
		editTask: function(task) {
			this.$parent.editTask(task);
		},
	},
	mounted () {
		this.getAllTasks();
	},
	update() {
		this.getAllTasks();
	}
}
</script>

<style scoped>
  ul{
    list-style-type: none;
  }
</style>