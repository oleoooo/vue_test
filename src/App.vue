<template>
  <div>
    <pre>{{ state }}</pre>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, reactive } from "@vue/composition-api"
import { getUsersAsync } from "@/apis/axios/users"

export default defineComponent({
  components: {},
  props: {},
  setup() {
    const state = reactive({
      users: [],
    })
    const getUsers = async () => {
      const users = await getUsersAsync()
      state.users = users
    }

    onBeforeMount(() => getUsers())

    return { state }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
