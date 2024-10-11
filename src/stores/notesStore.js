import { createNote, deleteNote, fetchAllNotes } from '@/services/notes.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  const notesCount = computed(() => notes.value.length || 0)

  //   leer todas las notas
  async function getNotes() {
    const notesData = await fetchAllNotes()
    if (notesData) {
      notes.value = notesData
    }
  }
  // agregar nota
  async function addNote(note) {
    const newNoteData = await createNote(note)
    if (newNoteData) {
      notes.value.unshift(newNoteData)
    }
    return newNoteData
  }

  //   eliminar nota
  async function removeNote(id) {
    const isDeleted = await deleteNote(id)

    if (isDeleted) {
      notes.value = notes.value.filter(note => note._uuid !== id)
    }
  }

  return { notes, notesCount, addNote, getNotes, removeNote }
})
