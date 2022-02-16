<template>
  <div class="container">
    <div class="row" v-if="!editing">
      <h2>To Do List</h2>
      <div>
        <Tasks :tasks="tasks" :editing_task="editing_task" :editing="editing" />
      </div>
      <div>
        <CreateTask :tasks="tasks" />
      </div>
    </div>
    <div class="row" v-if="editing">
      <EditTask :editing_task="editing_task" :editing="editing" />
    </div>
	</div>
</template>

<script>

import CreateTask from '../components/CreateTask.vue'
import Tasks from '../components/Tasks.vue'
import EditTask from '../components/EditTask.vue'

export default {
  name: 'Index',
  components: {
  CreateTask,
  Tasks,
  EditTask,
  },
  data(){
    return {
      tasks: [],
      editing: false,
      editing_task: {},
    }
  },
  methods: {
    switchEditing: function(){
      this.editing = !this.editing;
    },
    setEditingTask: function(task){
      this.editing_task = task;
    },
    editTask: function(task) {
      this.switchEditing();
      this.setEditingTask(task);
    },
    updateTasks: function(tasks){
      this.tasks = tasks;
      console.log(this.tasks);
    }
  },
};
</script>

