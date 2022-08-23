<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal-window" @click.stop>
        <form @submit.prevent="userLogin">
          <div class="form-group">
            <label for="description">Description</label>
            <input
              id="description"
              type="description"
              name="description"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="description">Start Date</label>
            <input
              id="description"
              type="description"
              name="description"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="description">End-date</label>
            <input
              id="description"
              type="description"
              name="description"
              class="form-control"
            />
          </div>
        </form>
        <button>Cancel</button>
        <button>Add</button>

        <div class="close" @click="$emit('close-modal')">
          <img class="close-img" src="~/assets/close-icon.svg" alt="" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* display: flex; */
  /* justify-content: center; */
  background-color: #000000da;
  z-index: 1;
}

.modal-window {
  text-align: center;
  background-color: rgb(244, 238, 238);
  height: 500px;
  width: 500px;
  /* margin-top: 10%; */
  margin: 100px auto;
  padding: 60px 0;
  border-radius: 20px;
  display: block;
  position: relative;
}
.close {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 100px;
}
</style>
