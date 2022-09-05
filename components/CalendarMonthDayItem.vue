<template>
  <div>
    <li
      @click="getEvents"
      class="calendar-day"
      :class="{
        'calendar-day--not-current': !day.isCurrentMonth,
        'calendar-day--today': isToday,
      }"
    >
      <span>{{ label }} </span>
      <div>
        <span>{{ findEvent }}</span>
      </div>
    </li>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import axios from 'axios'

export default {
  name: 'CalendarMonthDayItem',

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

  methods: {
    async getEvents() {
      const resp = await axios.get('https://localhost:7101/api/Events')

      console.log(resp.data[0].startDate)
    },
  },
  computed: {
    findEvent() {},

    label() {
      return dayjs(this.day.date).format('D')
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
  cursor: pointer;
}

.calendar-day--not-current {
  background-color: var(--grey-100);
  color: var(--grey-300);
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
