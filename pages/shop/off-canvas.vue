<template>
	<main class="main skeleton-body">
		<shop-banner></shop-banner>

		<div class="page-content mb-10 pb-3">
			<div class="container">
				<div class="row main-content-wrap gutter-lg">
					<sidebar-filter-two></sidebar-filter-two>

					<div class="main-content">
						<product-list-one :itemsPerRow="4"></product-list-one>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ShopBanner from '~/components/partials/shop/ShopBanner';
import ProductListOne from '~/components/partials/shop/product-list/ProductListOne';
import SidebarFilterTwo from '~/components/partials/shop/sidebar/SidebarFilterTwo';

export default {
	components: {
		ShopBanner,
		SidebarFilterTwo,
		ProductListOne
	}
}
</script>