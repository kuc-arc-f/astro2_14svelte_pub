<script lang="ts">
import CrudShow from "../CrudShow";
export let id: number = 0;
let count: number = 0;
let item = {};
console.log("show/App.svelte.id=", id);
//
const startProc= async function() {
	item = await CrudShow.get(id);
	console.log(item);
}
startProc();

</script>

<div class="">
	<a class="btn btn-outline-primary" href={`/gpt4`}>Back</a>
	<hr />		
	<h1>Show</h1>
	<hr class="my-1" />	
    <h1>{item.id}</h1>
    ID: {item.id}
    <hr class="my-1" />	
    title: {item.title}
    <p>タスクの内容: {item.content}</p>
    <p>完了状態: {item.completed ? '完了' : '未完了'}</p> 	
</div>

<style>
</style>