import { render, screen, within } from '@testing-library/react'
import React from 'react'
import { expect, test } from 'vitest'

import App from '../src/App'

test('Should have heading', () => {
  render(<App />)
  const main = within(screen.getByRole('main'))
  expect(
    main.getByRole('heading', {
      level: 1,
      name: /My Application/i
    })
  ).toBeDefined()
})
