```js
import { useState } from 'react'
import { Space } from '@ivoryio/kogaio'

const CheckboxExamples = () => {
  const [checked, setChecked] = useState(true)
  const toggleCheckbox = ({ target }) => setChecked(target.checked)
  return (
    <>
      <Space mt={2}>
        <Checkbox id='check1' label='Checkbox1' />
        <Checkbox
          checked={checked}
          id='check2'
          label='Checkbox2'
          onChange={toggleCheckbox}
        />
        <Checkbox id='check3' label='Checkbox3' disabled />
      </Space>
    </>
  )
}
;<CheckboxExamples />
```
