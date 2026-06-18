import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NoteForm from '../src/components/NoteForm.vue'

describe('NoteForm', () => {
  it('emite o evento "add" com título e conteúdo ao submeter', async () => {
    const wrapper = mount(NoteForm)

    await wrapper.find('.note-form__input').setValue('Minha nota')
    await wrapper.find('.note-form__textarea').setValue('Conteúdo da nota')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('add')).toBeTruthy()
    expect(wrapper.emitted('add')[0][0]).toEqual({
      title: 'Minha nota',
      content: 'Conteúdo da nota',
    })
  })

  it('não emite "add" e mostra erro quando o título está vazio', async () => {
    const wrapper = mount(NoteForm)

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('add')).toBeFalsy()
    expect(wrapper.text()).toContain('Digite um título')
  })
})
