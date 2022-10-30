<template>
  <div>
    <li  @click="clickMe" 
      :class="{'border border-black sm:text-right text-center hover:shadow-sm h-16 sm:h-20  hover:shadow-black  m-2 sm:rounded-2xl ': !day.isCurrentMonth,
    'bg-gray-400': isToday}"
    >
      <span  class="sm:m-4 mt-10">{{ label }} </span>
      <h5 class="text-center font-bold text-gray-700 hidden sm:block " v-if="day.event" >
        {{ findEvent.description }}
      </h5>
      <h5 class=" h-3 w-3 rounded-full mt-2 mx-3 sm:hidden bg-black border-2 border-gray-500" v-if="day.event" >
        
      </h5>
    </li>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import EditModelEvent from './EditModalEvent.vue'

export default {
  name: 'CalendarMonthDayItem',

  components: {
    EditModelEvent,
  },
  data() {
    return {
      showModalEvent: false,
      modalEvent: {},
    }
  },

  props: {
    day: {
      type: Object,
      required: true,
    },

    isCurrentMonth: {
      type: Boolean,
      dafault: false,
    },

    isToday: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    label() {
      return dayjs(this.day.date).format('D')
    },
    findEvent() {
      if (this.day.event.description) {
        return this.day.event
      }
    },
  },
  methods: {
    newModelEvent(event) {
      if(this.day.event){
        this.$store.commit('setCurrentAppointment', this.findEvent)
      this.$store.commit('setShowEditEventModal', true)
      this.showModalEvent = true
      this.modalEvent = event
      }
      else{
        console.log("jag är banan")
      }
   
    },
    clickMe(){
      if(this.day.event){
        this.$store.commit('setCurrentAppointment', this.findEvent)
      this.$store.commit('setShowEditEventModal', true)
      this.showModalEvent = true
      this.modalEvent = this.findEvent
      }
      else{
        this.$store.commit('setShowAddEventModal', true)
      }
    }
  },
}
</script>

<style scoped>

/* .calendar-day > h5 {
 font-size: 16px;
 padding-top: 60px;
  text-align: right;
  cursor: pointer;
} */
.events {
  font-size: 16px;
  text-align: right;
  cursor: pointer;
  padding: 3px;
  background-color: #58bae4;
  color: white;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  right: 1rem;
}
.calendar-day--not-current {
  background-color: var(--grey-100);
  color: var(--grey-800);
}
.calendar-day--today {
  padding-top: 4px;
}
.calendar-day--today > span {
  color: #fff;
  border-radius: 9999px;
  background-color: var(--grey-800);
}
</style>
