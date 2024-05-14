<script lang="ts">
	import '@/styles/app.css';
	import { Toaster } from '@/components/ui/sonner';
</script>

<main class="min-h-screen">
	<slot />
</main>
<Toaster />
