<template>
	<main class="main skeleton-body">
		<shop-banner></shop-banner>

		<div class="page-content mb-5">
			<div class="container">
				<div class="row main-content-wrap gutter-lg pb-8">
					<sidebar-filter-one></sidebar-filter-one>

					<div class="col-lg-9 main-content">
						<product-list-two></product-list-two>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ShopBanner from '~/components/partials/shop/ShopBanner';
import ProductListTwo from '~/components/partials/shop/product-list/ProductListTwo';
import SidebarFilterOne from '~/components/partials/shop/sidebar/SidebarFilterOne';

export default {
	components: {
		ShopBanner,
		SidebarFilterOne,
		ProductListTwo
	}
}
</script>