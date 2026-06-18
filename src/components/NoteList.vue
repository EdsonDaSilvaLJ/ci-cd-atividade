<script setup>
import NoteItem from './NoteItem.vue'

defineProps({
  notes: {
    type: Array,
    required: true,
  },
})

defineEmits(['remove', 'update'])
</script>

<template>
  <section class="note-list">
    <p v-if="notes.length === 0" class="note-list__empty">
      Nenhuma nota ainda. Adicione a primeira acima!
    </p>
    <NoteItem
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @remove="$emit('remove', note.id)"
      @update="(payload) => $emit('update', note.id, payload)"
    />
  </section>
</template>

<style scoped>
.note-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.note-list__empty {
  text-align: center;
  color: #888;
}
</style>
