<template>
	<main class="main skeleton-body">
		<nav class="breadcrumb-nav">
			<div class="container">
				<ul class="breadcrumb">
					<li>
						<nuxt-link to="/"><i class="d-icon-home"></i></nuxt-link>
					</li>
					<li>Shop</li>
				</ul>
			</div>
		</nav>

		<div class="page-content pb-10 mb-3">
			<div class="container">
				<div class="row main-content-wrap gutter-lg">
					<sidebar-filter-one :show-filter-button="false"></sidebar-filter-one>

					<div class="col-lg-9 main-content">
						<div
							class="shop-banner-default banner mb-1"
							style="background-image: url(images/shop/banner.jpg); background-color: #4e6582;"
						>
							<div class="banner-content">
								<h4 class="banner-subtitle font-weight-bold ls-normal text-uppercase text-white">
									Riode Shop</h4>
								<h1 class="banner-title font-weight-bold text-white">Banner with Sidebar</h1>
								<a
									href="javascript:;"
									class="btn btn-white btn-outline btn-icon-right btn-rounded text-normal"
								>Discover now<i class="d-icon-arrow-right"></i></a>
							</div>
						</div>

						<product-list-one></product-list-one>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ShopBanner from '~/components/partials/shop/ShopBanner';
import ProductListOne from '~/components/partials/shop/product-list/ProductListOne';
import SidebarFilterOne from '~/components/partials/shop/sidebar/SidebarFilterOne';

export default {
	components: {
		ShopBanner,
		SidebarFilterOne,
		ProductListOne
	}
};
</script>