<template>
  <div>
    <label :for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ labelText }} :<span v-if="isRequired" class="text-red-600">*</span></label>
    <textarea :id="id" :rows="rows" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="placeholderText" @input="changeValue(id, $event.target.value)"></textarea>
  </div>
</template>

<script>
export default {
  name: 'InputTextarea',
  props: {
    labelText: {
      type: String,
      default: 'labelText'
    },
    id: {
      type: String,
      default: 'labelId'
    },
    rows: {
      type: Number,
      default: 4
    },
    placeholderText: {
      type: String,
      default: 'Ecrivez votre message ici ...'
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