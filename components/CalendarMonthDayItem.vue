<template>
  <div>
    <li
      class="calendar-day"
      :class="{
        'calendar-day--not-current': !day.isCurrentMonth,
        'calendar-day--today': isToday,
      }"
    >
      <span>{{ label }} </span>
      <h5 class="events" v-if="day.event" @click="newModelEvent(findEvent)">
        {{ findEvent.description }}
      </h5>
    </li>

    <!-- <EditModalEvent
      v-if="showModalEvent"
      @closeModal="showModalEvent = false"
      :modalEvent="modalEvent"
      :showModalEvent="showModalEvent"
    /> -->
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
      this.$store.commit('setCurrentEventEdit', this.findEvent)
      this.$store.commit('setShowEditEventModal', true)
      this.showModalEvent = true
      this.modalEvent = event
      console.log(event)
    },
  },
}
</script>

<style scoped>
.calendar-day {
  position: relative;
  min-height: 100px;
  font-size: 16px;
  background-color: #fff;
  color: var(--grey-800);
  padding: 5px;
}

.calendar-day > span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2px;
  width: var(--day-label-size);
  height: var(--day-label-size);
}
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
