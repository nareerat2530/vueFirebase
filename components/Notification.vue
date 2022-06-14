<template>
  <div class="notification is-danger">
    {{ Message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['Message'],
}
</script>
