import React from 'react'

export default function Alert({alert}) {
  return (
    alert &&(
    <div class={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
  <strong>{alert.type.charAt(0).toUpperCase()+alert.type.slice(1)}: </strong>{alert.message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    )
  )
}
