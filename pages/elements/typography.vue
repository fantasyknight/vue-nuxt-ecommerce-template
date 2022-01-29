<template>
	<main class="main">
		<page-header
			subTitle="Elements"
			title="Element Typography"
			parentUrl="/elements"
		></page-header>

		<div class="page-content">
			<div class="container">
				<section class="mt-10 pt-3">
					<div class="title-wrapper">
						<h2 class="title title-center mb-2">Headers</h2>
						<p class="text-body text-center mb-2">We provide some basic styling to header tags. For
							example,<br /> you can see 6 header tags' different sizes.</p>
					</div>

					<div class="row">
						<div class="col-md-6">
							<h1 class="text-uppercase mb-3">Heading h1</h1>
							<p class="mb-6">Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
								Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
								lacinia arcu eget </p>
							<h2 class="text-uppercase">Heading h2</h2>
							<h3 class="text-uppercase">Heading h3</h3>
							<h4 class="text-uppercase">Heading h4</h4>
							<h5 class="text-uppercase">Heading h5</h5>
							<h6 class="text-uppercase">Heading h6</h6>
						</div>
						<div class="col-md-6">
							<h1 class="font-weight-bold mb-3">Heading h1</h1>
							<p class="mb-6">Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
								Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
								lacinia arcu eget </p>
							<h2 class="font-weight-bold">Heading h2</h2>
							<h3 class="font-weight-bold">Heading h3</h3>
							<h4 class="font-weight-bold">Heading h4</h4>
							<h5 class="font-weight-bold">Heading h5</h5>
							<h6 class="font-weight-bold">Heading h6</h6>
						</div>
					</div>
				</section>
				<section class="mt-8">
					<h2 class="title title-center mb-4">Description With List</h2>
					<div class="font-primary ">
						<p class="mb-3">Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
							mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
							eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
							inceptos himenaeos. Curabitur sodales ligula in libero. Vestibulum lacinia arcu eget
							nulla. Class aptent taciti sociosqu </p>
						<div class="row">
							<div class="col-md-6">
								<ul class="list list-type-check mb-4">
									<li>Praesent id enim sit amet.</li>
									<li>Tdio vulputate eleifend in in tortor. ellus massa.Dristique sitiismonec.
									</li>
									<li>Massa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim.
									</li>
									<li>Dilisis Facilisis quis sapien. Praesent id enim sit amet.</li>
								</ul>
							</div>
							<div class="col-md-6">
								<ul class="list list-type-number mb-4">
									<li>Praesent id enim sit amet.</li>
									<li>Tdio vulputate eleifend in in tortor. ellus massa.Dristique sitiismonec.
									</li>
									<li>Massa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim.
									</li>
									<li>Dilisis Facilisis quis sapien. Praesent id enim sit amet.</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section class="mt-7">
					<h2 class="title title-center mb-4">Blockquotes</h2>
					<div class="row">
						<div class="col-md-6">
							<blockquote class="text-bd-left">
								<p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
									Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
									eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
									per inceptos </p>
							</blockquote>

						</div>
						<div class="col-md-6">
							<blockquote class="text-bd-left">
								<p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
									Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
									eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
								</p>
							</blockquote>
						</div>
					</div>
				</section>
			</div>

			<element-list class="mt-5"></element-list>
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