#### Icon
```js
const { default: icons } = require('assets/icons')

function onClick () {
  console.log('Custom Icon clicked')
}
<Icon
  src={icons.logout}
  alignSelf='center'
  alt='signOut'
  size={[50, 50]}
  onClick={onClick}
/>
```