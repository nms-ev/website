<script lang="ts">
  import { Text } from 'svelte-email'
  import Skeleton from './skeleton.svelte'
  import { paragraph } from './styles'

  export let name: string
</script>

<Skeleton {name} preview="Your NMS membership has been approved">
  <Text style={paragraph}>Hurra! You have been approved for becoming a member of NMS ❤️</Text>
</Skeleton>
