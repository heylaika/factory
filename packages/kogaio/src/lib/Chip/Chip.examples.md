```js
import Icon from '@ivoryio/kogaio/Icon'
import Image from '@ivoryio/kogaio/Image'
import { Box, Flex, Space } from '@ivoryio/kogaio/Responsive'
;<>
  <Flex justifyContent='center' width={1}>
    <Space mx={2}>
      <Chip bg='info' label='Basic chip' />
      <Chip
        bg='alert'
        label='Clickable chip'
        onClick={() => alert('You pushed the chip!')}
        color='white'
      />
      <Chip
        bg='error'
        label='Dismissable chip'
        onDismiss={() => alert('You pressed dismiss!')}
        color='white'
      />
    </Space>
  </Flex>
  <Flex justifyContent='center' width={1}>
    <Space mt={2} mx={2}>
      <Chip
        Avatar={<Image src='https://www.w3schools.com/howto/img_avatar2.png' />}
        label='Dismissable chip'
        onDismiss={() => alert('You pressed dismiss!')}
        color='white'
      />
      <Chip
        label='Custom dismissable icon'
        onDismiss={() => alert('You pressed dismiss!')}
        DismissIcon={<Icon name='done' />}
        color='white'
      />
      <Chip
        Avatar={<Image src='https://www.w3schools.com/howto/img_avatar2.png' />}
        label='Rounded chip'
        onClick={() => alert('You pushed the chip!')}
        onDismiss={() => alert('You pressed dismiss!')}
        color='white'
        isRounded
      />
    </Space>
  </Flex>
</>
```
