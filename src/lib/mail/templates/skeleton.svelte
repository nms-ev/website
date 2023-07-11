<script lang="ts">
  import { Container, Head, Html, Img, Preview, Section, Text } from 'svelte-email'
  import { container, main, paragraph } from './styles'

  export let name: string
  export let preview: string
</script>

<Html lang="en">
  <Head />
  <Preview {preview} />
  <Section style={main}>
    <Container style={container}>
      <Img src="https://nms-ev.org/round_black.png" alt="NMS logo" width="200" height="200" />
      <Text style={paragraph}>Hi {name},</Text>
      <slot />
    </Container>
  </Section>
</Html>
