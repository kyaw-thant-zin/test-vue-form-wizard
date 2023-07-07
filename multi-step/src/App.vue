<script setup>

import { ref } from 'vue'

</script>

<template>
  <form-wizard step-size="xs" :start-index="1">
    <tab-content title="Personal details">
      My first tab content
    </tab-content>
    <tab-content title="Additional Info">
      My second tab content
    </tab-content>
    <tab-content title="Last step">
      Yuhuuu! This seems pretty damn simple
    </tab-content>
  </form-wizard>
</template>

<style scoped>
</style>
