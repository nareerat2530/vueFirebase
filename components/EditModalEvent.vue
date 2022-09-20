<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('closeModal')">
     
      <div class="modal-window" @click.stop>
        <h2>{{ modalEvent}}</h2>
       
        <button type="button" class="btn-cancel" @click="removeEvent" >
          Remove
        </button>
        <button>Edit</button>

     
      </div>
    </div>
  </transition>
</template>
<script>
  // import {doc, getDoc} from "firebase/firestore"
  import axios  from "axios"
export default {

  props:{
    modalEvent:{
        type: String,
        required: false,
    },
  },

  methods:{
   
   async removeEvent(){
   const documentId = '4fsCGYfCAbK012ZLTXBN';
       
      const resp = await axios.delete(`https://localhost:7101/api/Events?id=${documentId}`)
      console.log(resp)
    }
    

    
  },
  mounted(){
   
  }
}
</script>

<style></style>
