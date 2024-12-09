<script lang="ts">
    let { project }: { project: GameProject } = $props();
</script>

<div class="flex flex-row items-start bg-primary rounded-md p-3 h-52 gap-2 w-full justify-evenly">
    
    <div class="h-full flex w-full flex-col justify-evenly">

        {#if project.link}
            <a href={project.link} class="text-2xl hover:text-alt transition-all">{project.title}</a>
        {:else}
            <p class="text-2xl transition-all">{project.title}</p>
        {/if}
        
        {#if project.description}
            <p class="text-base">{project.description}</p>
        {/if}

        {#if project.status}
            <p class="text-base">{project.status}</p>
        {/if}
    </div>

    {#if project.image}
        <img src={project.image} alt={project.title} class="h-full aspect-square rounded-md flex" />
    {/if}
</div>