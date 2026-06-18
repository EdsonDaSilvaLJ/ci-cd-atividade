<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])

const title = ref('')
const content = ref('')
const error = ref('')

function handleSubmit() {
  if (!title.value.trim()) {
    error.value = 'Digite um título para a nota.'
    return
  }
  error.value = ''
  emit('add', { title: title.value, content: content.value })
  title.value = ''
  content.value = ''
}
</script>

<template>
  <form class="note-form" @submit.prevent="handleSubmit">
    <input
      v-model="title"
      type="text"
      placeholder="Título da nota"
      class="note-form__input"
    />
    <textarea
      v-model="content"
      placeholder="Escreva algo..."
      class="note-form__textarea"
      rows="3"
    ></textarea>
    <p v-if="error" class="note-form__error">{{ error }}</p>
    <button type="submit" class="note-form__button">Adicionar nota</button>
  </form>
</template>

<style scoped>
.note-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.note-form__input,
.note-form__textarea {
  font: inherit;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.note-form__error {
  color: #c0392b;
  margin: 0;
  font-size: 0.875rem;
}

.note-form__button {
  align-self: flex-start;
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font: inherit;
}

.note-form__button:hover {
  background: #1d4ed8;
}
</style>
