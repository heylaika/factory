#### Responsive container
###### Resize window for result
```js
import { Box } from '@ivoryio/kogaio/Responsive';
import Typography from '@ivoryio/kogaio/Typography';
<Flex flexWrap='wrap' mx={-2}>
  <Box
    px={2}
    py={4}
    width={{ xs: 1, sm: 1/2, md: 1/3 }}
    textAlign='left'>
    <Typography
      p={4}
      fontSize={{ xs: 1, md: 2, xlg: 3 }}
      color='white'
      bg='info'
    >
      These boxes
    </Typography>
  </Box>
  <Box
    px={2}
    py={4}
    textAlign='center'
    width={{ xs: 1, sm: 1/2, md: 1/3 }}>
    <Typography
      p={4}
      fontSize={{ xs: 1, sm: 2, xlg: 3 }}
      color='white'
      bg='alert'
    >
      are flexible
    </Typography>
  </Box>
  <Box
    px={2}
    py={4}
    width={{ xs: 1, sm: 1/2, md: 1/3 }}
    textAlign='right'>
      <Typography
        p={4}
        fontSize={{ xs: 1, sm: 2, xlg: 3 }}
        color='white'
        bg='error'
      >
        and responsive
      </Typography>
  </Box>
</Flex>
```