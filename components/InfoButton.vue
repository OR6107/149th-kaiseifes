<template>
  <div>
    <div v-show="isClosed">
      <img src="@/static/i.svg" />
    </div>
    <div v-show="!isClosed">
      <img src="@/static/x.svg" />
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
