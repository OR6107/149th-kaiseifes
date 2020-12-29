<template>
  <div>
    <div v-show="isClosed">
      <img src="i.svg" />
    </div>
    <div v-show="!isClosed">
      <img src="x.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoButton',
  props: {
    isClosed: Boolean,
  },
}
</script>

<style scoped></style>
