<script setup>
import { ref } from 'vue'

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
})

defineEmits(['remove', 'update'])

const isEditing = ref(false)
const editTitle = ref(props.note.title)
const editContent = ref(props.note.content)

function startEdit() {
  editTitle.value = props.note.title
  editContent.value = props.note.content
  isEditing.value = true
}
</script>

<template>
  <article class="note-item">
    <template v-if="isEditing">
      <input v-model="editTitle" class="note-item__edit-input" />
      <textarea v-model="editContent" class="note-item__edit-textarea" rows="3"></textarea>
      <div class="note-item__actions">
        <button
          @click="
            $emit('update', { title: editTitle, content: editContent });
            isEditing = false
          "
        >
          Salvar
        </button>
        <button @click="isEditing = false">Cancelar</button>
      </div>
    </template>
    <template v-else>
      <h3 class="note-item__title">{{ note.title }}</h3>
      <p class="note-item__content">{{ note.content }}</p>
      <div class="note-item__actions">
        <button @click="startEdit">Editar</button>
        <button @click="$emit('remove')">Excluir</button>
      </div>
    </template>
  </article>
</template>

<style scoped>
.note-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.note-item__title {
  margin: 0 0 0.5rem;
}

.note-item__content {
  margin: 0 0 0.75rem;
  white-space: pre-wrap;
  color: #444;
}

.note-item__actions {
  display: flex;
  gap: 0.5rem;
}

.note-item__actions button {
  border: 1px solid #ddd;
  background: #f8f9fa;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font: inherit;
}

.note-item__edit-input,
.note-item__edit-textarea {
  width: 100%;
  font: inherit;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
}
</style>
