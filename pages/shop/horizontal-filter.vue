<template>
	<main class="main skeleton-body">
		<shop-banner></shop-banner>

		<div class="page-content mb-10 pb-3">
			<div class="container">
				<product-list-one
					:itemsPerRow="4"
					type="horizontal"
				></product-list-one>
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