<template>
  <div>
    <label :for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ labelText }} :<span v-if="isRequired" class="text-red-600">*</span></label>
    <input :id="id" :type="typeInput" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="placeholderText" :required="isRequired" :disabled="isDisabled" @input="changeValue(id, $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    labelText: {
      type: String,
      default: 'labelText'
    },
    id: {
      type: String,
      default: 'labelId'
    },
    typeInput: {
      type: String,
      default: 'typeInput'
    },
    placeholderText: {
      type: String,
      default: 'placeholderText'
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