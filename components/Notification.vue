<template>
  <div class="notification">
    {{ Message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['Message'],
}
</script>
<!-- <style scoped>
.notification {
  font-size: 30px;
  color: red;
}
</style> -->
