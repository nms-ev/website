<script lang="ts">
  import { Button, Text } from 'svelte-email'
  import Skeleton from './skeleton.svelte'
  import { button, paragraph } from './styles'

  export let name: string
  export let href: string
</script>

<Skeleton {name} preview="Verify your NMS registration">
  <Text style={paragraph}>We need to confirm your mail first 🤗</Text>
  <Button style={button} {href}>Verify</Button>
  <Text style={paragraph}>The link will only be valid for 2 hours.</Text>
</Skeleton>
