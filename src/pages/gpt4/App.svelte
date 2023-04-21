<script lang="ts">
import CrudIndex from "./CrudIndex";
let count: number = 0;
let items = [];
const startProc= async function() {
	items = await CrudIndex.getList();
	console.log(items);
}
startProc();

</script>

<div class="">
	<h1>Gpt4-Svelte</h1>
	<a href={`/gpt4/create`} class="btn btn-primary">Create</a>
	<hr class="my-1" />	
	{#each items as item}
	<div>
		<h3>{item.title}</h3>
		<p>ID : {item.id}</p>
		<a href={`/gpt4/show/${item.id}`} class="btn btn-outline-primary">Show
		</a>
		<hr />
	</div>
	{/each}		
</div>

<style>
</style>

<!--
<a href={`/crud/edit/${item.id}`} class="btn">[ Edit ]
</a>					
-->