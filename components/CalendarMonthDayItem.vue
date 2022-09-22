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
  </div>
</template>

<script>
import dayjs from 'dayjs'

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
.calendar-day > h5 {
  font-size: 14px;

  border-bottom: 10px;
}

.events {
  position: absolute;
}

/* .calendar-day--not-current {
  background-color: var(--grey-100);
  color: var(--grey-300);
} */

.calendar-day--today {
  padding-top: 4px;
}

.calendar-day--today > span {
  color: #fff;
  border-radius: 9999px;
  background-color: var(--grey-800);
}
</style>
