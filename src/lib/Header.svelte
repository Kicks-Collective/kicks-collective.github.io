<script lang="ts">
	import NavContainer from "./NavContainer.svelte";

    
</script>

<div class="flex absolute top-0 w-full text-white items-center p-2 pt-6 sm:p-6 z-50 justify-between">
    <a href="/">
        <NavContainer>
            <img src="/largelogoalt.png" class="rounded-md h-12" alt="Logo" />
        </NavContainer>
    </a>

    <a href="/team">
        <NavContainer>
            <div class="text-xl">Team</div>
        </NavContainer>
    </a>
</div>