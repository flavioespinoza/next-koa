import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li>
      <Link href='/a' as='/a'>
        <a>A</a>
      </Link>
    </li>
    <li>
      <Link href='/b' as='/b'>
        <a>B</a>
      </Link>
    </li>
  </ul>
)
