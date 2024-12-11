<script lang="ts">
	import Embed from "$lib/Components/Embed.svelte";
	import Footer from "$lib/Footer.svelte";

    let members: Member[] = [
        {
            Name: "Kicks",
            Image: "/Profiles/Kicks.jpeg",
            Role: "Programmer",
            Link: "https://nolankicks.github.io"
        },
        {
            Name: "domestik8r",
            Image: "/Profiles/Kate.jpeg",
            Role: "Programmer",
            Link: "https://scoutwozniak.github.io/"
        },
    ]
</script>

<div class="flex relative w-full h-screen items-start pt-24 justify-center">
    <div class="flex flex-col w-full items-center h-full justify-center gap-4 pb-6 px-6">
        <h1 class="text-4xl flex flex-shrink-0">Team</h1>
        <p class="text-lg flex flex-shrink-0">We are a team of developers who are passionate about creating games in s&box.</p>
        <div class="h-1 w-full rounded-md bg-white flex flex-shrink-0"></div>

        <div class="flex flex-shrink h-full w-full">
            <div class="w-full sm:grid grid-cols-2 flex flex-col gap-4">
                {#each members as member}
                    <div class="w-full flex h-32 items-center justify-between p-3">
                        <img src={member.Image} alt={member.Name} class="h-full aspect-square flex-shrink-0 rounded-full flex" />
                        <div class="w-full h-full flex-shrink flex items-center justify-around text-2xl flex-col">
                            <p class="text-3xl">
                                {#if member.Link}
                                    <a href={member.Link} class="hover:text-alt transition-all">{member.Name}</a>
                                {:else}
                                    {member.Name}
                                {/if}
                            </p>
                            <p class="text-lg">{member.Role}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<Embed title="Kicks Collective" description="Team" />

<Footer />