<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="header">
    <div class="logo">PLAN GO TRIP</div>
    <div class="menu">
      <RouterLink to="/rAF">rAF</RouterLink>
      <RouterLink to="/3000-oxford-words">3000 Oxford Words</RouterLink>
      <RouterLink to="/scss">Plan</RouterLink>
    </div>
  </div>
  <RouterView />
</template>

<style scoped lang="scss">
@import '../src/assets/css/variables';
.header {
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  & .logo {
    font-size: 26px;
    font-weight: bold;
    font-family: fantasy;
    cursor: pointer;
    background: -webkit-linear-gradient(
      90deg,
      rgba(42, 123, 155, 1) 0%,
      rgba(87, 199, 133, 1) 50%,
      rgba(237, 221, 83, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & .menu {
    display: flex;
    align-items: center;
    gap: 10px;
    & > a {
      color: black;
      text-decoration: none;
      padding: 6px 8px;
      border-radius: 4px;
      &:hover {
        background-color: $hover-background-color;
        color: $hover-color;
      }
    }
    & > a.router-link-active {
      color: $hover-color;
      font-weight: bold;
    }
  }
}
</style>
