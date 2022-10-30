<template>
  <div class=" inline-flex my-1 text-4xl items-center"> 
     <font-awesome-icon  @click="selectPrevious" :icon="['fa', 'chevron-left']" /> 
    
     <div class="mx-10">{{ selectedMonth }}</div>
     <font-awesome-icon  @click="selectNext" :icon="['fa', 'chevron-right']" /> 
</div>

</template>

<script>
import dayjs from 'dayjs'
export default {
  props: {
    selectedDate: {
      type: Object,
      required: true,
    },
    currentDate: {
      type: String,
      required: true,
    },

    // selectedDate2: {
    //   type: Object,
    //   required: true,
    // },
  },

  computed: {
    selectedMonth() {
      return this.selectedDate.format('MMMM YYYY')
    },
  },
  
  methods: {
    selectPrevious() {
      let newSelectedDate = dayjs(this.selectedDate).subtract(1, 'month')

      this.$emit('dateSelected', newSelectedDate)
    },

    selectCurrent() {
      let newSelectedDate = dayjs(this.currentDate)
      this.$emit('dateSelected', newSelectedDate)
    },

    selectNext() {
      let newSelectedDate = dayjs(this.selectedDate).add(1, 'month')
      //send up this method to parent component
      this.$emit('dateSelected', newSelectedDate)
    },
  },
}
</script>

<style scoped>

.calendar-date-indicator {
  font-size: 24px;
  font-weight: 600;
  color: var(--grey-00);
}
</style>
