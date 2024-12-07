<script lang="ts">
	import NavContainer from "./NavContainer.svelte";

    
</script>

<div class="flex absolute top-0 w-full text-white items-center p-6 justify-between">
    <a href="/">
        <NavContainer>
            <img src="/largelogo.png" class="rounded-md h-12" alt="Logo" />
        </NavContainer>
    </a>

    <a href="/team">
        <NavContainer>
            <div class="text-xl">Team</div>
        </NavContainer>
    </a>
</div>