<template>
	<main class="main skeleton-body shop-right-sidebar">
		<shop-banner></shop-banner>

		<div class="page-content mb-10 pb-3">
			<div class="container">
				<div class="row main-content-wrap gutter-lg">
					<sidebar-filter-one sidebarClass="right-sidebar"></sidebar-filter-one>

					<div class="col-lg-9 main-content">
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
}
</script>