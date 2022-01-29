<template>
	<main class="main">
		<page-header
			subTitle="Elements"
			title="Element Titles"
			parentUrl="/elements"
		></page-header>

		<div class="page-content">
			<div class="container">
				<section class="mt-10 pt-3">
					<h2 class="title title-center">Default Style</h2>
					<p class="text-center text-grey">Sed egestas, ante et vulputate volutpat, eros pede semper est,
						vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis,
						gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.
						Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
						sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
				</section>
				<section class="mt-10 pt-2">
					<h2 class="title title-simple">Simple</h2>
					<p class="text-grey">Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien.
						Praesent id enim sit amet odio vulputate eleifend in in tortor. ellus massa, tristique sit
						amet condim vel, facilisuisacilisis quis sapien. Praesent id enim sit amet odio vulputate
						eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis
						sapien. Praesent id enim ent id enism sita.sis quis sapi.</p>
				</section>
				<section class="mt-10 pt-2">
					<h2 class="title title-line">With Line</h2>
					<p class="text-grey">Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien.
						Praesent id enim sit amet odio vulputate eleifend in in tortor. ellus massa, tristique sit
						amet condim vel, facilisuisacilisis quis sapien. Praesent id enim sit amet odio vulputate
						eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis
						sapien. Praesent id enim ent id enism sita.sis quis sapi.</p>
				</section>
				<section class="mt-10 pt-2">
					<h2 class="title title-line title-underline"><span>Underline</span></h2>
					<p class="text-grey">Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien.
						Praesent id enim sit amet odio vulputate eleifend in in tortor. ellus massa, tristique sit
						amet condim vel, facilisuisacilisis quis sapien. Praesent id enim sit amet odio vulputate
						eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis
						sapien. Praesent id enim ent id enism sita.sis quis sapi.</p>
				</section>
				<section class="mt-10 pt-2">
					<h2 class="title title-icon title-center mb-3"><span>Title With Icon</span><i class="fa fa-arrow-down"></i></h2>
					<p class="text-center text-grey">Sed egestas, ante et vulputate volutpat, eros pede semper est,
						vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis,
						gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.
						Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
						sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
				</section>
			</div>

			<element-list class="mt-9"></element-list>
		</div>
	</main>
</template>

<script>
import PageHeader from '~/components/elements/PageHeader';
import ElementList from '~/components/partials/elements/ElementList';

export default {
	components: {
		ElementList,
		PageHeader
	}
}
</script>