<template>
  <ol class="grid grid-cols-7  text-center mb-10 sm:mb-0">
    <li v-for="weekday in weekdays" :key="weekday">{{ weekday }}</li>
  </ol>
</template>

<script>
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
export default {
  name: 'CalenderWeekdays',

  computed: {
    weekdays() {
      return WEEKDAYS
    },
  },
}
</script>


