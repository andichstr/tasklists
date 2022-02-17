<template>
  <div class="container">
    <div class="col" v-if="!inTasklist">
      <div class="row" v-if="!editing_tasklist">
        <Tasklists />
      </div>
      <div class="row">
        <CreateTasklist />
      </div>
      <div class="row" v-if="editing_tasklist">
        <EditTasklist />
      </div>
    </div>
    <div class="row" v-if="inTasklist">
      <div class="row" v-if="!editing_task">
        <h2>{{ active_tasklist.name }}</h2>
        <div>
          <Tasks :tasks="tasks" :active_task="active_task" :editing_task="editing_task" />
        </div>
        <div>
          <CreateTask :tasks="tasks" />
        </div>
      </div>
      <div class="row" v-if="editing_task">
        <EditTask :active_task="active_task" :editing_task="editing_task" />
      </div>
    </div>
  </div>
</template>

<script>

import CreateTask from '../components/CreateTask.vue'
import Tasks from '../components/Tasks.vue'
import EditTask from '../components/EditTask.vue'
import CreateTasklist from '../components/CreateTasklist.vue'
import Tasklists from '../components/Tasklists.vue'
import EditTasklist from '../components/EditTasklist.vue'

export default {
  name: 'Index',
  components: {
  CreateTask,
  Tasks,
  EditTask,
  CreateTasklist,
  Tasklists,
  EditTasklist,
  },
  data () {
    return {
    tasklists: [],
    tasks: [],
    editing_task: false,
    active_task: {},
    active_tasklist: {},
    editing_tasklist: false,
    inTasklist: false,
    }
  },
  methods: {
    switchEditingTask: function(){
      this.$store.commit('setEditingTask');
    },
    setActiveTask: function(task){
      this.$store.commit('setEditingTask', task);
    },
    editTask: function(task) {      
      this.switchEditingTask();
      this.setActiveTask(task);
    },
    updateTasks: function(tasks){
      this.$store.commit('setTasks', tasks);
    },
    switchEditingTasklist: function(){
      this.$store.commit('setEditingTasklist');
    },
    switchInTasklist: function(){
      this.$store.commit('setInTasklist');
    },
    setActiveTasklist: function(tasklist){
      this.$store.commit('setActiveTasklist', tasklist);
    },
    editTasklist: function(tasklist) {
      this.switchEditingTasklist();
      this.setActiveTasklist(tasklist);
    },
    updateTasklists: function(tasklists){
      console.log("Estoy aca");
      this.$store.commit('setTasklists', tasklists);
    }
  },
};
</script>

