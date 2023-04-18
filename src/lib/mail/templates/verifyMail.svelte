<script lang="ts">
  import { Button, Container, Head, Html, Img, Preview, Section, Text } from 'svelte-email'
  import { container, main, paragraph, button } from './styles'

  export let name: string
  export let href: string
</script>

<Html lang="en">
  <Head />
  <Preview preview="Verify your NMS registration" />
  <Section style={main}>
    <Container style={container}>
      <Img src="https://dev.cupcakearmy.xyz/round_black.png" alt="NMS logo" width="200" height="200" />
      <Text style={paragraph}>Hi {name}, welcome to NMS!</Text>
      <Text style={paragraph}>We need to confirm your mail first 🤗</Text>
      <Button style={button} {href}>Verify</Button>
      <Text style={paragraph}>The link will only be valid for 2 hours.</Text>
    </Container>
  </Section>
</Html>
