<script lang="ts">
	//import data from '@/data/company_data.json';
	export let data;
	import Icon from '@iconify/svelte';
	import { toast } from 'svelte-sonner';
	import * as Table from '@/components/ui/table';
	import { Button } from '@/components/ui/button';
	const linkBase = 'https://documents.bvl.com.pe/';
	let yearval = 2018;
	let perPage = 21;
	let initPage = 0;
	const take = 21;
	const handleCopy = (tex: string) => {
		navigator.clipboard.writeText(tex);
		toast.success('Copiado!!', {
			description: tex
		});
	};
	$: bussines = data.values.filter((company) =>
		company.memory.some((memory) => memory.year >= yearval)
	);
	$: companies = bussines.slice(initPage, perPage);
</script>

<header class="flex items-center py-2 sticky top-0 backdrop-blur-lg z-10">
	<section class="w-11/12 mx-auto flex gap-2 justify-between items-center mb-3">
		<aside class="flex items-center gap-1 rounded-lg py-1 px-2">
			<span>{yearval}</span>
			<div class="flex gap-1">
				<Button
					size="sm"
					variant="outline"
					on:click={() => (yearval < 2024 ? (yearval = yearval + 1) : yearval)}
				>
					<Icon icon="solar:alt-arrow-up-line-duotone" />
				</Button>
				<Button
					size="sm"
					variant="outline"
					on:click={() => (yearval > 2000 ? (yearval = yearval - 1) : yearval)}
				>
					<Icon icon="solar:alt-arrow-down-line-duotone" />
				</Button>
			</div>
		</aside>
		<aside>page: {perPage / take}/{Math.round(bussines.length / take)}</aside>
		<aside class="flex gap-1">
			<Button
				size="sm"
				variant="outline"
				on:click={() => {
					if (initPage > 0) {
						perPage = perPage - take;
						initPage = initPage - take;
					}
				}}
			>
				<Icon icon="solar:arrow-left-broken" />
			</Button>
			<Button
				size="sm"
				variant="outline"
				on:click={() => {
					if (perPage < bussines.length) {
						perPage = perPage + take;
						initPage = initPage + take;
					}
				}}
			>
				<Icon icon="solar:arrow-right-broken" />
			</Button>
		</aside>
	</section>
</header>
<div class="w-11/12 mx-auto pb-14">
	<Table.Root>
		<Table.Caption></Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="">Item</Table.Head>
				<Table.Head class="">Name</Table.Head>
				<Table.Head class="">Sector</Table.Head>
				<Table.Head class="">Memoria Anual</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each companies as { companyName, sectorDescription, memory }, id}
				<Table.Row class="">
					<Table.Cell class="">{id + initPage}</Table.Cell>
					<Table.Cell class="">
						{companyName}
						<Button size="sm" variant="outline" on:click={() => handleCopy(companyName)}>
							<Icon icon="solar:copy-line-duotone" />
						</Button></Table.Cell
					>
					<Table.Cell class="r">
						{sectorDescription}
						<Button size="sm" variant="outline" on:click={() => handleCopy(sectorDescription)}>
							<Icon icon="solar:copy-line-duotone" />
						</Button></Table.Cell
					>
					<Table.Cell>
						<div class="">
							{#each memory as { year, path }}
								{#if year >= yearval}
									<Button href={linkBase + path} variant="link" target="_blank">{year}</Button>
								{/if}
							{/each}
						</div>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
