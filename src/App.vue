<template>
  <app-select
      :options="selectOptions"
      :selected="selectedOption"
      @onChange="onChange"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppSelect from './components/select/app-select.vue'

export default defineComponent({
  name: 'App',
  components: {AppSelect},
  setup() {
    const selectOptions = ref(['Tomek', 'Zdzicho', 'Adam']);
    const selectedOption = ref('Adam');

    return {
      selectedOption,
      selectOptions
    }
  },
  methods: {
    onChange(value: string) {
      this.selectedOption = value
    }
  }
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
