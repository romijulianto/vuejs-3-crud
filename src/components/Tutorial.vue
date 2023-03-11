<template>
  <div></div>
</template>

<script>
import TutorialDataServices from '@/services/TutorialDataServices';

export default {
  name: "tutorial-data",
  data() {
    return {
      cureentTutorial: null,
      message: ''
    };
  },
  methods: {

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
