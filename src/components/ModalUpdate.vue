<template>
  <div>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
      <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          :value="name"
          @input="name = $event.target.value"
      >
    </div>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Description</span>
      <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          :value="description"
          @input="description = $event.target.value"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalUpdate"
}
</script>

<style scoped>

</style>