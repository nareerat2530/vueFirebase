<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('closeModal')">
     
      <div class="modal-window" @click.stop>
        <h2>{{ modalEvent}}</h2>
       
        <button type="button" class="btn-cancel" @click="removeEvent" >
          Remove
        </button>
        <button >Edit</button>
        <button @click="$emit('closeModal')">Cancel</button>

     
      </div>
    </div>
  </transition>
</template>
<script>


  import axios  from "axios"
  import { doc, getDoc, deleteDoc } from "firebase/firestore";
  import {db} from "../firebaseInit"
 
export default {

  props:{
    modalEvent:{
        type: String,
        required: false,
    },
  },
  data(){
    return{
      eventId: ""
    }
    
  },

  methods:{
   
   async removeEvent(id){

   
const documentId = doc(db, "calEvent", id)
 const resp = await axios.delete(`https://localhost:7101/api/Events?id=${documentId}`)
     console.log(id)


 

    },

   
},
 
}
</script>

<style scoped>
.modal-window {
 
  height: 200px;
 
 
}
</style>
