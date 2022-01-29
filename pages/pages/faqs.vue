<template>
	<main class="main faq">
		<nav class="breadcrumb-nav">
			<div class="container">
				<ul class="breadcrumb">
					<li>
						<nuxt-link
							to="/"
							title="link to home"
						><i class="d-icon-home"></i></nuxt-link>
					</li>
					<li>FAQs</li>
				</ul>
			</div>
		</nav>

		<div
			class="page-header"
			style="background-image: url(./images/page-header/faq.jpg); background-color: #1e3b59"
		>
			<h3 class="page-subtitle lh-1">Frequently</h3>
			<h1 class="page-title font-weight-bold text-capitalize lh-1">Asked Questions</h1>
		</div>

		<div class="page-content mb-10 pb-8">
			<section
				class="appear-animate"
				v-animate
			>
				<div class="container">
					<div class="row">
						<div class="col-md-6 mt-10">
							<h2 class="title pl-2 pr-2 ls-m text-left">Customer Management</h2>

							<element-accordion class="accordion-border accordion-boxed accordion-plus">
								<element-card
									class="card"
									:is-opened="true"
								>
									<template v-slot:header>
										<a href="javascript:;">How can add vendor role to the customer?</a>
									</template>

									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">What benefits a customer can take?</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">How to change customer's address?</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
							</element-accordion>
						</div>

						<div class="col-md-6 mt-10">
							<h2 class="title pl-2 pr-2 ls-m">Product Type</h2>

							<element-accordion class="accordion-border accordion-boxed accordion-plus">
								<element-card
									class="card"
									:is-opened="true"
								>
									<template v-slot:header>
										<a href="javascript:;">What is difference between simple & variable product?</a>
									</template>

									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">How to buy several products at once?</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">How to add downloadable product?</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
							</element-accordion>
						</div>
					</div>
				</div>
			</section>

			<section
				class="appear-animate"
				v-animate
			>
				<div class="container">
					<div class="row">
						<div class="col-md-6 mt-10">
							<h2 class="title pl-2 pr-2 ls-m">Ordering Products</h2>

							<element-accordion class="accordion-border accordion-boxed accordion-plus">
								<element-card
									class="card"
									:is-opened="true"
								>
									<template v-slot:header>
										<a href="javascript:;">How can a guest order the product?</a>
									</template>

									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">What kind of payment methods are available?</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">What is benefit of paypal payment?</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">How to register as a customer?</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">What is the preferable way to buy product?</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
							</element-accordion>
						</div>

						<div class="col-md-6 mt-10">
							<h2 class="title pl-2 pr-2 ls-m">The Others</h2>

							<element-accordion class="accordion-border accordion-boxed accordion-plus">
								<element-card
									class="card"
									:is-opened="true"
								>
									<template v-slot:header>
										<a href="javascript:;">How can I return an purchased item online?</a>
									</template>

									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">How to add coupon code?</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">How can I find theme style?</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">What are the delivery types you can use?</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget felis facilisis fermentum.</p>
									</div>
								</element-card>
							</element-accordion>
						</div>
					</div>
				</div>
			</section>
		</div>
	</main>
</template>

<script>
import ElementAccordion from '~/components/elements/ElementAccordion';
import ElementCard from '~/components/elements/ElementCard';

export default {
	components: {
		ElementAccordion,
		ElementCard
	}
};
</script>