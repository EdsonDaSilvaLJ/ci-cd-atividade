import { describe, it, expect, beforeEach } from 'vitest'
import { useNotes } from '../src/composables/useNotes'

describe('useNotes', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('inicia sem notas quando o localStorage está vazio', () => {
    const { notes } = useNotes()
    expect(notes.value).toEqual([])
  })

  it('adiciona uma nova nota com título e conteúdo', () => {
    const { notes, addNote } = useNotes()
    addNote('Compras', 'Leite, pão, café')

    expect(notes.value).toHaveLength(1)
    expect(notes.value[0].title).toBe('Compras')
    expect(notes.value[0].content).toBe('Leite, pão, café')
  })

  it('não permite adicionar nota com título vazio', () => {
    const { addNote } = useNotes()
    expect(() => addNote('   ', 'conteúdo')).toThrow()
  })

  it('remove uma nota pelo id', () => {
    const { notes, addNote, removeNote } = useNotes()
    const note = addNote('Tarefa', 'Estudar CI/CD')

    removeNote(note.id)

    expect(notes.value).toHaveLength(0)
  })

  it('atualiza o conteúdo de uma nota existente', () => {
    const { notes, addNote, updateNote } = useNotes()
    const note = addNote('Ideia', 'rascunho')

    updateNote(note.id, { content: 'versão final' })

    expect(notes.value[0].content).toBe('versão final')
  })

  it('persiste as notas no localStorage', () => {
    const { addNote } = useNotes()
    addNote('Persistência', 'deve salvar')

    const saved = JSON.parse(localStorage.getItem('bloco-de-notas:notes'))
    expect(saved).toHaveLength(1)
    expect(saved[0].title).toBe('Persistência')
  })
})
