<script setup>
import NoteList from '@/components/notes/NoteList.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>Mis notas</h1>

    <RouterLink class="btn btn-success" :to="{ name: 'nueva-nota' }"
      >Agregar nueva nota</RouterLink
    >

    <NoteList />
  </div>
</template>