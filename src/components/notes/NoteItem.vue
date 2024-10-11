<script setup>
const { note } = defineProps({
  note: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card h-100">
    <div class="card-header">{{ note.title }}</div>
    <div class="card-body">
      <p class="card-text">
        {{ note.content }}
      </p>
    </div>
  </div>
</template>