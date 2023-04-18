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
      <Img src="https://nms-ev.org/round_black.png" alt="NMS logo" width="200" height="200" />
      <Text style={paragraph}>Hi {name},</Text>
      <Text style={paragraph}>To login, click the button below.</Text>
      <Button style={button} {href}>Login</Button>
      <Text style={paragraph}>The link will only be valid for 2 hours.</Text>
    </Container>
  </Section>
</Html>
