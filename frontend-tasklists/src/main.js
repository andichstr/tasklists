import App from './App.vue';
import Vue from 'vue';
import Vuex, { mapGetters, mapState, mapMutations } from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    tasklists: [],
    tasks: [],
    editing_task: false,
    active_task: {},
    active_tasklist: {},
    editing_tasklist: false,
    inTasklist: false,
  },
  mutations: {
    setTasklists (state, tasklists) {
      state.tasklists = tasklists;
    },
    addTasklist (state, tasklist) {
      state.tasklists.push(tasklist);
    },
    setTasks (state, tasks) {
      state.tasks = tasks;
    },
    addTask (state, task) {
      state.tasks.push(task)
    },
    setEditingTask (state) {
      state.editing_task = !state.editing_task;
    },
    setEditingTasklist (state) {
      state.editing_tasklist = !state.editing_tasklist;
    },
    setActiveTask (state, task) {
      state.active_task = task;
    },
    setActiveTasklist (state, tasklist) {
      state.active_tasklist = tasklist;
    },
    setInTasklist (state) {
      state.inTasklist = !state.inTasklist;
    }
  },
  getters: {
    getTasklists () {
      return store.tasklists;
    },
    getTasks () {
      return store.tasks;
    },
    getEditingTask () {
      return store.editing_task;
    },
    getActiveTask () {
      return store.active_task;
    },
    getActiveTasklist () {
      return store.active_tasklist;
    },
    getEditingTasklist () {
      return store.editing_tasklist;
    },
    getInTasklist () {
      return store.inTasklist;
    }
  },
  computed: {
    ...mapState([
      'tasklists',
      'tasks',
      'editing_task',
      'active_task',
      'active_tasklist',
      'editing_tasklist',
      'inTasklist',
    ]),
    ...mapGetters([
      'getTasklists',
      'getTasks',
      'getEditingTask',
      'getActiveTask',
      'getActiveTasklist',
      'getEditingTasklist',
      'getIInTasklist',
    ])
  },
  methods: mapMutations([
    'setTasklists',
    'addTasklist',
    'setTasks',
    'addTask',
    'setEditingTask',
    'setEditingTasklist',
    'setActiveTask',
    'setActiveTasklist',
    'setInTasklist',
  ]),
});


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

