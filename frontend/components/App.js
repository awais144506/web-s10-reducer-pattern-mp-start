import React from 'react' // 👈 you'll need the reducer hook
import Quotes from './Quotes'
import QuoteForm from './QuoteForm'

// 👇 these are the types of actions that can change state

export default function App() {
  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes
      />
      <QuoteForm
      />
    </div>
  )
}
