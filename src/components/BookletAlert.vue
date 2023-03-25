<template>
  <div class="alert alert-primary alert-booklet" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style>
.alert-booklet {
  position: fixed;
  margin-top: 30px;
  z-index: 999;
  width: 25%;
  cursor: pointer;
}
</style>
