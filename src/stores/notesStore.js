import { createNote, fetchAllNotes } from '@/services/notes.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  const notesCount = computed(() => notes.value.length || 0)

  async function getNotes() {
    const notesData = await fetchAllNotes()
    if (notesData) {
      notes.value = notesData
    }
  }

  async function addNote(note) {
    const newNoteData = await createNote(note)
    if (newNoteData) {
      notes.value.unshift(newNoteData)
    }
    return newNoteData
  }

  return { notes, notesCount, addNote, getNotes }
})
