<script></script>

<div class="m-10">
	<div class="text-3xl font-bold underline mb-5">AI Book Generation</div>

	<div class="text-amber-600">
		Making an AI book generator, inspired by <a href="https://nanogenmo.github.io/" target="_blank"
			>NaNoGenMo</a
		>. Here, we will generate the first page of a novel and see if you like it. Then you can share
		your novel with other people and rank which ones should be made into a full text.
	</div>
	<div class="mt-5">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-5 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Prompt">

		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			Generate Novel
		</button>
    <div class="mt-5">Loading...</div>
	</div>
	<div class="text-3xl font-bold underline mt-5">Browse Creations</div>
	<div class="text-amber-600 mt-5">
		Here you can check out stories that other users have generated.
	</div>
	{#each { length: 3 } as story}
		<div>
			<div class="mt-5">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
            <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-3">
                Upvote
              </button>
              <button class="bg-orange-300 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-3">
                Downvote
              </button>
		</div>
	{/each}
</div>
