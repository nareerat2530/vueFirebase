<template>
  <div>
    <button
      class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 
      hover:shadow-2xl hover:shadow-black focus:ring-blue-300 font-medium
       rounded-lg text-sm 
      md:px-5 px-3 py-2 text-center sm:p-12 dark:bg-blue-600 dark:hover:bg-blue-700
       dark:focus:ring-blue-800"
      type="button"
      @click="buttonCLick()"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: String,
  },
  methods: {
    buttonCLick() {
      this.$emit('clicked')
    },
  },
}
</script>

<style></style>
