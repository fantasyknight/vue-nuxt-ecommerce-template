<template>
	<main class="main">
		<page-header
			subTitle="Elements"
			title="Element Call To Action"
			parentUrl="/elements"
		></page-header>

		<div class="page-content">
			<section class="mt-10 pt-4">
				<div class="container">
					<h2 class="title title-center mb-5">Simple</h2>
					<div class="banner cta-simple">
						<div class="banner-content bg-white d-lg-flex align-items-center">
							<div class="banner-header pr-lg-7 pb-lg-0 pb-4 mb-lg-0 mb-6">
								<h3 class="banner-title font-weight-bold ls-s text-uppercase">Trade-in</h3>
								<h4 class="banner-subtitle font-weight-normal ls-s text-body">Upgrade and save</h4>
							</div>
							<div class="banner-text mb-lg-0 mb-4 mr-lg-4 pl-lg-6 pr-lg-0 pl-2 pr-2">
								<h4 class="font-weight-normal ls-normal text-uppercase mb-0">Get a Riode gift
									card+25% off</h4>
								<p class="ls-m mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod.</p>
							</div>
							<nuxt-link
								to="/shop"
								class="btn btn-primary btn-ellipse btn-md btn-rounded"
							>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
						</div>
					</div>
				</div>
			</section>

			<section class="mt-10 pt-4">
				<div class="container">
					<h2 class="title title-center mb-5">2 Columns</h2>
					<div class="row">
						<div class="col-md-6 mb-4">
							<div class="banner banner-1 banner-fixed content-center content-middle">
								<figure>
									<img
										v-lazy="'./images/cta/1.jpg'"
										alt="banner"
										width="580"
										height="330"
									/>
								</figure>
								<div class="banner-content">
									<h3 class="banner-title text-uppercase font-weight-bold ls-m text-primary">20%
										off</h3>
									<h4 class="banner-subtitle font-weight-bold ls-m text-white">Riode Birthday
										Sale</h4>
									<p class="ls-s text-light">Get all the latest information on <br />Events, Sales
										and Offers.</p>
									<nuxt-link
										to="/shop"
										class="btn btn-outline btn-white btn-md btn-rounded"
									>Discover now</nuxt-link>
								</div>
							</div>
						</div>
						<div class="col-md-6 mb-4">
							<div class="banner banner-2 banner-fixed content-center content-middle">
								<figure>
									<img
										v-lazy="'./images/cta/2.jpg'"
										alt="banner"
										width="580"
										height="330"
									/>
								</figure>
								<div class="banner-content">
									<h3 class="banner-title text-uppercase font-weight-normal ls-m text-white mb-3">
										Subscribe to our<br /><strong>Newsletter</strong></h3>
									<p class="ls-normal text-white">Start Shopping Right Now</p>
									<form
										action="#"
										method="get"
										class="input-wrapper"
									>
										<input
											type="email"
											class="form-control w100 text-white text-center mb-4"
											name="email"
											id="email-element"
											aria-label="element input"
											placeholder="Enter Your E-mail Address..."
											required=""
										>
										<button
											class="btn btn-white btn-md btn-ellipse btn-rounded"
											type="submit"
										>Subscribe<i class="d-icon-arrow-right"></i></button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="mt-9 pt-1">
				<div class="container">
					<h2 class="title title-center">3 Columns</h2>

					<div class="banner-group row justify-content-center">
						<div class="col-lg-4 col-sm-6 mb-4">
							<div class="banner banner-3 banner-fixed banner-radius content-middle">
								<figure>
									<img
										v-lazy="'./images/banners/banner1.jpg'"
										alt="banner"
										width="380"
										height="220"
									/>
								</figure>
								<div class="banner-content">
									<h3 class="banner-title text-white mb-1">For Men’s</h3>
									<h4 class="banner-subtitle text-uppercase font-weight-normal text-white">
										Starting at $29
									</h4>
									<nuxt-link
										to="/shop"
										class="btn btn-white btn-link btn-underline"
									>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-sm-6 mb-4 order-lg-auto order-sm-last">
							<div class="banner banner-4 banner-fixed banner-radius content-middle content-center">
								<figure>
									<img
										v-lazy="'./images/banners/banner2.jpg'"
										alt="banner"
										width="350"
										height="177"
									/>
								</figure>
								<div class="banner-content d-flex align-items-center w-100 text-left">
									<div class="mr-auto mb-4 mb-md-0">
										<h4 class="banner-subtitle text-white mb-0">
											Up to 20% Off<br><span class="ls-l">Black Friday</span>
										</h4>
										<h3 class="banner-title text-primary font-weight-bold lh-1 mb-0">Sale</h3>
									</div>
									<nuxt-link
										to="/shop"
										class="btn btn-primary btn-outline font-weight-bold text-white btn-rounded"
									>Shop
										Now<i class="d-icon-arrow-right"></i></nuxt-link>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-sm-6 mb-4">
							<div class="banner banner-5 banner-fixed banner-radius content-middle">
								<figure>
									<img
										v-lazy="'./images/banners/banner3.jpg'"
										alt="banner"
										width="380"
										height="220"
									/>
								</figure>
								<div class="banner-content">
									<h3 class="banner-title text-white mb-1">Fashions</h3>
									<h4 class="banner-subtitle text-uppercase font-weight-normal text-white">30% Off
									</h4>
									<nuxt-link
										to="/shop"
										class="btn btn-white btn-link btn-underline"
									>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="mt-10">
				<div class="container">
					<h2 class="title title-center">Expanded Newsletter</h2>
					<div
						class="banner banner-newsletter"
						style="background-color: #fff;"
					>
						<div class="banner-content row gutter-no align-items-center pl-lg-6 pr-lg-6 pl-3 pr-3">
							<div class="col-xl-5 col-lg-6">
								<div class="icon-box icon-box-side mb-4 mb-lg-0">
									<div class="icon-box-icon text-primary">
										<i class="far fa-envelope"></i>
									</div>
									<div class="icon-box-content">
										<h4 class="icon-box-title">Get Special Offers and Savings</h4>
										<p class="text-dark">Get all the latest information on Events, Sales and
											Offers.</p>
									</div>
								</div>
							</div>
							<div class="col-xl-7 col-lg-6 d-lg-block d-flex justify-content-center">
								<form
									action="#"
									method="get"
									class="input-wrapper input-wrapper-round input-wrapper-inline ml-lg-auto"
								>
									<input
										type="email"
										class="form-control font-primary font-italic form-solid"
										name="email"
										id="email-element-2"
										aria-label="element input"
										placeholder="Enter Your E-mail Address..."
										required=""
									>
									<button
										class="btn btn-dark"
										type="submit"
									>Sign up</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="mt-10 pt-4">
				<div class="container">
					<h2 class="title title-center mb-5">Expanded on background</h2>
				</div>
				<div
					class="banner banner-background parallax text-center"
					style="background-image: url(images/parallax.jpg)"
					v-parallax
				>
					<div class="container">
						<div class="banner-content">
							<h4 class="banner-subtitle text-white font-weight-bold ls-l">
								Extra<span class="d-inline-block label-star bg-dark text-primary ml-4 mr-2">30%
									Off</span>Online
							</h4>
							<h3 class="banner-title font-weight-bold text-white">Summer Season Sale</h3>
							<p class="text-white ls-s">Free shipping on orders over $99</p>
							<nuxt-link
								to="/shop"
								class="btn btn-primary btn-rounded"
							>Shop Now<i class="d-icon-arrow-right"></i></nuxt-link>
						</div>
					</div>
				</div>
			</section>

			<element-list subClass="pt-4 mt-8"></element-list>
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
};
</script>