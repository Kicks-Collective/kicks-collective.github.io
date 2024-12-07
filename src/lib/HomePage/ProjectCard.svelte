<script lang="ts">
    let { project }: { project: GameProject } = $props();

    let style = project.image ? "w-[50%]" : "w-full items-center"
</script>

<div class="flex flex-row items-center bg-primary rounded-md p-3 h-52 w-full justify-evenly">
    
    <div class="h-full style flex flex-col justify-evenly">
        <p class="text-lg">{project.title}</p>
        
        {#if project.description}
            <p class="text-[0.7em] md:text-lg">{project.description}</p>
        {/if}

        {#if project.status}
            <p class="text-[0.5em] md:text-sm">{project.status}</p>
        {/if}
    </div>

    {#if project.image}
        <img src={project.image} alt={project.title} class="h-full style aspect-square rounded-md flex" />
    {/if}
</div>