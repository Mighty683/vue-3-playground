<template>
  <select
      @change="onChange"
  >
    <option
        v-for="option in options"
        :key="option"
        :selected="option === selected"
    >
      {{option}}
    </option>
  </select>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'app-select',
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: false
    }
  },

  methods: {
    onChange(event) {
      this.$emit('onChange', event.target.value);
    }
  }
})
</script>

<style scoped>

</style>