import React, { useReducer } from 'react'

const CHANGE_INPUT = 'CHANGE_INPUT'
const RESET_FORM = 'RESET_FORM'


// 👇 create your initial state object here
const initialState = {
  authorName: "",   // author
  quoteText: "",
}

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      const { name, value } = action.payload
      return { ...state, [name]: value }
    }
    case RESET_FORM: {
      return { authorName: '', quoteText: '' }
    }
    default:
      return state
  }
}

export default function TodoForm({ createQuote }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = e => {
    const { name, value } = e.target
    dispatch({ type: CHANGE_INPUT, payload: { name, value } })
  }
  const resetForm = () => {
    dispatch({ type: RESET_FORM })
  }
  const onNewQuote = (e) => {
    e.preventDefault()
    const { authorName, quoteText } = state
    createQuote({ authorName, quoteText })
    resetForm()
  }
  return (
    <form id="quoteForm" onSubmit={onNewQuote}>
      <h3>New Quote Form</h3>
      <label><span>Author:</span>
        <input
          value={state.authorName}
          type='text'
          name='authorName'
          placeholder='type author name'
          onChange={onChange}
        />
      </label>
      <label><span>Quote text:</span>
        <textarea
          value={state.quoteText}
          type='text'
          name='quoteText'
          placeholder='type quote'
          onChange={onChange}
        />
      </label>
      <label><span>Create quote:</span>
        <button
          role='submit'
        >DO IT!</button>
      </label>
    </form>
  )
}
