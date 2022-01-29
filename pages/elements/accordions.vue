<template>
	<main class="main">
		<page-header
			subTitle="Elements"
			title="Element Accordions"
			parentUrl="/elements"
		></page-header>

		<div class="page-content">
			<section class="mt-6 pt-10 pb-10 mb-7">
				<div class="container">
					<h2 class="title title-center mb-5">Simple</h2>
					<div class="row">
						<div class="col-md-6 mb-6">
							<element-accordion class="accordion accordion-simple">
								<element-card
									class="card border-no"
									:is-opened="true"
								>
									<template v-slot:header>
										<a href="javascript:;">First Header</a>
									</template>

									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget
											felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">Second Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget
											felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">Third Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget
											felis facilisis fermentum.</p>
									</div>
								</element-card>
							</element-accordion>
						</div>
						<div class="col-md-6 mb-6">
							<element-accordion class="accordion accordion-border accordion-boxed accordion-plus">
								<element-card
									class="card"
									:is-opened="true"
								>
									<template v-slot:header>
										<a href="javascript:;">First Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget
											felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">Second Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget
											felis facilisis fermentum.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">Third Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing
											elit. Donec odio.
											Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
											Suspendisse
											urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
											justo eget
											felis facilisis fermentum.</p>
									</div>
								</element-card>
							</element-accordion>
						</div>
					</div>
				</div>
			</section>

			<section class="pt-10 pb-8 grey-section">
				<div class="container mt-4">
					<div class="row">
						<div class="col-md-6 mb-6">
							<h2 class="title title-sm title-center mb-5">On Background</h2>
							<element-accordion class="accordion accordion-boxed accordion-plus accordion-gutter-md">
								<element-card
									class="card"
									:is-opened="true"
								>
									<template v-slot:header>
										<a href="javascript:;">First Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">De moveat laudatur vestra parum doloribus labitur
											sentire partes, eripuit praesenti congressus ostendit alienae,
											voluptati ornateque accusamus clamat reperietur convicia albucius,
											veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
											Aeternum animadversionis.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">Second Header</a>
									</template>

									<div class="card-body">
										<p class="mb-0">De moveat laudatur vestra parum doloribus labitur
											sentire partes, eripuit praesenti congressus ostendit alienae,
											voluptati ornateque accusamus clamat reperietur convicia albucius,
											veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
											Aeternum animadversionis.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">Third Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">De moveat laudatur vestra parum doloribus labitur
											sentire partes, eripuit praesenti congressus ostendit alienae,
											voluptati ornateque accusamus clamat reperietur convicia albucius,
											veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
											Aeternum animadversionis.</p>
									</div>
								</element-card>
							</element-accordion>
						</div>
						<div class="col-md-6 mb-6">
							<h2 class="title title-sm title-center mb-5">Drop Shadow</h2>
							<element-accordion class="accordion accordion-dropshadow accordion-boxed accordion-plus accordion-gutter-sm">
								<element-card
									class="card"
									:is-opened="true"
								>
									<template v-slot:header>
										<a href="javascript:;">First Header</a>
									</template>

									<div class="card-body">
										<p class="mb-0">De moveat laudatur vestra parum doloribus labitur
											sentire partes, eripuit praesenti congressus ostendit alienae,
											voluptati ornateque accusamus clamat reperietur convicia albucius,
											veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
											Aeternum animadversionis.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">Second Header</a>
									</template>

									<div class="card-body">
										<p class="mb-0">De moveat laudatur vestra parum doloribus labitur
											sentire partes, eripuit praesenti congressus ostendit alienae,
											voluptati ornateque accusamus clamat reperietur convicia albucius,
											veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
											Aeternum animadversionis.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">Third Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">De moveat laudatur vestra parum doloribus labitur
											sentire partes, eripuit praesenti congressus ostendit alienae,
											voluptati ornateque accusamus clamat reperietur convicia albucius,
											veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
											Aeternum animadversionis.</p>
									</div>
								</element-card>
							</element-accordion>
						</div>
					</div>
				</div>
			</section>

			<section class="mt-4 pt-10 pb-8">
				<div class="container">
					<h2 class="title title-center">Color</h2>
					<div class="row">
						<div class="col-md-6 mb-6">
							<element-accordion class="accordion accordion-card-bg accordion-boxed accordion-plus accordion-gutter-md">
								<element-card
									class="card"
									:is-opened="true"
								>
									<template v-slot:header>
										<a href="javascript:;">First Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">De moveat laudatur vestra parum doloribus labitur
											sentire partes, eripuit praesenti congressus ostendit alienae,
											voluptati ornateque accusamus clamat reperietur convicia albucius,
											veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
											Aeternum animadversionis.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">Second Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">De moveat laudatur vestra parum doloribus labitur
											sentire partes, eripuit praesenti congressus ostendit alienae,
											voluptati ornateque accusamus clamat reperietur convicia albucius,
											veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
											Aeternum animadversionis.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">Third Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">De moveat laudatur vestra parum doloribus labitur
											sentire partes, eripuit praesenti congressus ostendit alienae,
											voluptati ornateque accusamus clamat reperietur convicia albucius,
											veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
											Aeternum animadversionis.</p>
									</div>
								</element-card>
							</element-accordion>
						</div>
						<div class="col-md-6 mb-6">
							<element-accordion class="accordion accordion-card-bg accordion-primary accordion-boxed accordion-plus accordion-gutter-md">
								<element-card
									class="card"
									:is-opened="true"
								>
									<template v-slot:header>
										<a href="javascript:;">First Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">De moveat laudatur vestra parum doloribus labitur
											sentire partes, eripuit praesenti congressus ostendit alienae,
											voluptati ornateque accusamus clamat reperietur convicia albucius,
											veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
											Aeternum animadversionis.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">Second Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">De moveat laudatur vestra parum doloribus labitur
											sentire partes, eripuit praesenti congressus ostendit alienae,
											voluptati ornateque accusamus clamat reperietur convicia albucius,
											veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
											Aeternum animadversionis.</p>
									</div>
								</element-card>
								<element-card class="card">
									<template v-slot:header>
										<a href="javascript:;">Third Header</a>
									</template>
									<div class="card-body">
										<p class="mb-0">De moveat laudatur vestra parum doloribus labitur
											sentire partes, eripuit praesenti congressus ostendit alienae,
											voluptati ornateque accusamus clamat reperietur convicia albucius,
											veniat quocirca vivendi aristotele errorem epicurus. Suppetet.
											Aeternum animadversionis.</p>
									</div>
								</element-card>
							</element-accordion>
						</div>
					</div>
				</div>
			</section>

			<section class="grey-section pt-10 pb-10">
				<div class="container pt-4 pb-4">
					<h2 class="title title-center">With icon</h2>
					<element-accordion class="accordion accordion-background accordion-icon accordion-boxed accordion-card-border accordion-plus accordion-gutter-sm">
						<element-card
							class="card"
							:is-opened="true"
						>
							<template v-slot:header>
								<a href="javascript:;"><i class="far fa-heart"></i>First Header</a>
							</template>
							<div class="card-body">
								<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
									ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
									elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
									enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
									aliquip ex ea commodo consequat.</p>
							</div>
						</element-card>
						<element-card class="card">
							<template v-slot:header>
								<a href="javascript:;"><i class="far fa-star"></i>Second Header</a>
							</template>
							<div class="card-body">
								<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
									ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
									elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
									enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
									aliquip ex ea commodo consequat.</p>
							</div>
						</element-card>
						<element-card class="card">
							<template v-slot:header>
								<a href="javascript:;"><i
										class="d-icon-info mr-2"
										style="font-size: 2.4rem"
									></i>Third Header</a>
							</template>
							<div class="card-body">
								<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
									ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
									elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
									enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
									aliquip ex ea commodo consequat.</p>
							</div>
						</element-card>
					</element-accordion>
				</div>
			</section>

			<element-list class="bg-white"></element-list>
		</div>
	</main>
</template>

<script>
import PageHeader from '~/components/elements/PageHeader';
import ElementList from '~/components/partials/elements/ElementList';
import ElementAccordion from '~/components/elements/ElementAccordion';
import ElementCard from '~/components/elements/ElementCard';

export default {
	components: {
		ElementList,
		PageHeader,
		ElementAccordion,
		ElementCard
	}
}
</script>