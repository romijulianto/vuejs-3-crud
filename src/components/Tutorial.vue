<template>
  <div></div>
</template>

<script>
import TutorialDataServices from '@/services/TutorialDataServices';

export default {
  name: "tutorial-data",
  data() {
    return {
      currentTutorial: null,
      message: ''
    };
  },
  methods: {
    getTutorial() {

    },

    updatePublished() {

    },

    updateTutorial() {

    },

    deleteTutorial() {
      
    }

  },

  mounted() {
    this.message = '';
  }
}
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
