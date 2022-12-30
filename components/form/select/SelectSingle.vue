<template>
  <div>
    <label :for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ labelText }} :<span v-if="isRequired" class="text-red-600">*</span></label>
    <select :id="id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @change="changeValue(id, $event.target.value)">
      <option selected disabled>{{ labelChoice  }}</option>
      <option v-for="(option, i) in options" :key="i" :value="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectSingle',
  props: {
    labelText: {
      type: String,
      default: 'labelText'
    },
    labelChoice: {
      type: String,
      default: 'labelText'
    },
    id: {
      type: String,
      default: 'labelId'
    },
    options: {
      type: Array,
      default: null
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeValue(id, value) {
      const payload = {
        id,
        value
      }
      this.$emit('event-change-value', payload);
    }
  }
}
</script>