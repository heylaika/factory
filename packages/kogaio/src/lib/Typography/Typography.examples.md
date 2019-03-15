#### H1
```js
  const message = 'Sphinx of black quartz, judge my vow';
  const TextExamples = () => (
    <>
      <Typography
        fontWeight='bold'
        message={message}
        textStyle='h1'
      />
      <Typography
        textStyle='h1'>
        {message}
      </Typography>
    </>
);
  <TextExamples />
```

#### H2
```js
  const message = 'How razorback-jumping frogs can level six piqued gymnasts!';
  const TextExamples = () => (
    <>
      <Typography fontWeight='bold' message={message} textStyle='h2' />
      <Typography textStyle='h2'>{message}</Typography>
    </>
  );
  <TextExamples />
```

#### H3
```js
  const message = 'The quick brown fox jumps over the lazy dog.';
  const TextExamples = () => {
    return (
    <>
      <Typography
        message={message}
        textStyle='h3'
        fontWeight='bold'
        letterSpacing={2}
      />
      <Typography
        colors='info'
        letterSpacing={2}
        textStyle='h3'>
        {message}
      </Typography>
    </>
    )
  }

  <TextExamples />
```

#### Paragraph
```js
  <>
    <Typography textStyle='paragraph' fontWeight='bold'>
      Pack my box with five dozen liquor jugs.
    </Typography>
    <Typography textStyle='paragraph'>
      The quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography textStyle='paragraph' color='#979ca6'>
      Sphinx of black quartz, judge my vow.
    </Typography>
  </>
  
```