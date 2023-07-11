<script lang="ts">
  import { Button, Text } from 'svelte-email'
  import Skeleton from './skeleton.svelte'
  import { button, paragraph } from './styles'

  export let name: string
  export let href: string
</script>

<Skeleton {name} preview="Login to your NMS account">
  <Text style={paragraph}>To login, click the button below.</Text>
  <Button style={button} {href}>Login</Button>
  <Text style={paragraph}>The link will only be valid for 2 hours.</Text>
</Skeleton>
