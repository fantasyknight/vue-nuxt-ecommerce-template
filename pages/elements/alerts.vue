<template>
	<main class="main">
		<page-header
			subTitle="Elements"
			title="Element Alert & Notification"
			parentUrl="/elements"
		></page-header>

		<div class="page-content">
			<div class="container">
				<section class="mt-10 pt-4">
					<h2 class="title title-center mb-5">Simple</h2>
					<div class="row">
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-primary alert-simple alert-inline">
								<h4 class="alert-title">News :</h4>
								You have done 5 actions.

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-success alert-simple alert-inline">
								<h4 class="alert-title">Success :</h4>
								The page has been added.

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-warning alert-simple alert-inline">
								<h4 class="alert-title">Warning :</h4>
								You have 190 messages.
								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-danger alert-simple alert-inline">
								<h4 class="alert-title">Danger :</h4>
								The daily report has failed.

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
					</div>
				</section>
				<section class="mt-10 pt-2">
					<h2 class="title title-center mb-5">Dark</h2>
					<div class="row">
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-primary alert-dark alert-round alert-inline">
								<h4 class="alert-title">News :</h4>
								You have done 5 actions.
								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-success alert-dark alert-round alert-inline">
								<h4 class="alert-title">Success :</h4>
								The page has been added.
								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-warning alert-dark alert-round alert-inline">
								<h4 class="alert-title">Warning :</h4>
								You have 190 messages.
								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-danger alert-dark alert-round alert-inline">
								<h4 class="alert-title">Danger :</h4>
								The daily report has failed.

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
					</div>
				</section>
				<section class="mt-10 pt-2">
					<div class="row">
						<div class="col-md-6 mb-4">
							<h2 class="title title-sm title-center mb-5">With Icon</h2>
							<element-alert class="alert alert-simple alert-primary alert-icon mb-4">
								<i class="fas fa-check"></i>
								You have done 5 actions.

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
							<element-alert class="alert alert-light alert-primary alert-icon mb-4">
								<i class="fas fa-exclamation-circle"></i>
								The page has been added.

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
							<element-alert class="alert alert-light alert-danger alert-icon alert-inline mb-4">
								<i class="fas fa-exclamation-triangle"></i>
								<h4 class="alert-title">Oh snap!</h4>
								Change a few things up and try submitting again.

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
						<div class="col-md-6 mb-4">
							<h2 class="title title-sm title-center">With Title</h2>
							<element-alert class="alert alert-message alert-light alert-primary alert-link mb-4">
								<h4 class="alert-title">Some Message Link</h4>
								<p>Lorem ipsum Minim ad pariatur eiusmod ea ut <a href="javascript:;">nulla aliqua est quis</a>
									id pariat
									minim vot nulla aliqualuptate.</p>

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
							<element-alert class="alert alert-message alert-light alert-warning alert-inline mb-4">
								<h4 class="alert-title">Some Message</h4>
								<p>Lorem ipsum Minim ad pariatur eiusmod ea ut nulla quis id dolore minim vot nulla
									aliqualuptate.</p>

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
					</div>
				</section>
				<section class="mt-10">
					<h2 class="title title-center mb-5">With Button</h2>
					<div class="row">
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-primary alert-simple alert-btn">
								<a
									href="javascript:;"
									class="btn btn-primary btn-md btn-rounded"
								>NEWS</a>
								You have done 5 actions.

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-success alert-simple alert-btn">
								<a
									href="javascript:;"
									class="btn btn-success btn-md btn-rounded"
								>SUCCESS</a>
								The page has been added.

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-message alert-warning alert-dark alert-btn">
								<h4 class="alert-title">Some Message</h4>
								<p>Lorem ipsum Minim ad pariatur eiusmod ea ut <a
										href="javascript:;"
										class="text-primary"
									>nulla aliqua est quis</a>
									id pariat
									minim vot nulla aliqualuptate.</p>
								<a
									href="javascript:;"
									class="btn btn-secondary btn-md btn-rounded mr-1"
								>Do This</a><a
									href="javascript:;"
									class="btn btn-secondary btn-md btn-rounded"
								>Or This</a>

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-message alert-warning alert-light alert-btn">
								<h4 class="alert-title">Some Message</h4>
								<p>Lorem ipsum Minim ad pariatur eiusmod ea ut <a href="javascript:;">nulla aliqua est quis</a>
									id pariat
									minim vot nulla aliqualuptate.</p>
								<a
									href="javascript:;"
									class="btn btn-secondary btn-md btn-rounded mr-1"
								>Do This</a><a
									href="javascript:;"
									class="btn btn-secondary btn-md btn-rounded"
								>Or This</a>

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
					</div>
				</section>
				<section class="mt-10 pt-2">
					<h2 class="title title-center mb-5">Summary</h2>
					<div class="row">
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-danger alert-summary alert-light alert-message alert-inline">
								<i class="fas fa-exclamation-triangle"></i>
								<h4 class="alert-title">Oh snap!</h4>Change a few things up and try submitting
								again.
								<ul>
									<li>Inform your username</li>
									<li>Inform your password</li>
								</ul>

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
						<div class="col-md-6 mb-4">
							<element-alert class="alert alert-summary alert-dark alert-black alert-message alert-inline">
								<i class="fas fa-exclamation-triangle"></i>
								<h4 class="alert-title">Oh snap!</h4>Change a few things up and try submitting
								again.
								<ul>
									<li>Inform your username</li>
									<li>Inform your password</li>
								</ul>

								<template v-slot:header>
									<button
										type="button"
										class="btn btn-link btn-close"
									>
										<i class="d-icon-times"></i>
									</button>
								</template>
							</element-alert>
						</div>
					</div>
				</section>
			</div>

			<element-list class="mt-10"></element-list>
		</div>
	</main>
</template>

<script>
import PageHeader from '~/components/elements/PageHeader';
import ElementAlert from '~/components/elements/ElementAlert';
import ElementList from '~/components/partials/elements/ElementList';

export default {
	components: {
		ElementList,
		ElementAlert,
		PageHeader
	}
}
</script>