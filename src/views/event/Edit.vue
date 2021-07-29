<template>
  <p>Edit the event here</p>
  <button @click="edit">Edit Me</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'], //<---- Inject the glebal Store
  methods: {
    edit() {
      // Assuming successful API call to register them
      // Set a flash massage to appear in the next page loaded which says
      // 'You are successfully registered for ' + this.event.title

      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      }),
        (this.GStore.flashMessage =
          'You are successfully updated for ' + this.event.title)
      setTimeout(() => {
        // After 3 seconds remove it
        this.GStore.flashMessage = ''
      }, 3000)
    }
  }
}
</script>
