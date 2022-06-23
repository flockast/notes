<script setup lang="ts">
defineProps<{
  title: string;
}>()
</script>

<template>
  <div class="inter-box">
    <div class="inter-box__title">
      {{ title }}
    </div>
    <div class="inter-box__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
  @import "inter-box";
</style>
