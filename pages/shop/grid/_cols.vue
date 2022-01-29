<template>
	<main class="main skeleton-body">
		<shop-banner></shop-banner>

		<div class="page-content mb-10 pb-3">
			<div :class="itemsPerRow < 6 ? 'container' : 'container-fluid'">
				<div class="row main-content-wrap gutter-lg">
					<sidebar-filter-one v-if="itemsPerRow < 5"></sidebar-filter-one>
					<sidebar-filter-two v-else></sidebar-filter-two>

					<div
						class="main-content"
						:class="{'col-lg-9': itemsPerRow < 5}"
					>
						<product-list-one :itemsPerRow="itemsPerRow"></product-list-one>
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
import SidebarFilterTwo from '~/components/partials/shop/sidebar/SidebarFilterTwo';

export default {
	components: {
		ShopBanner,
		SidebarFilterOne,
		SidebarFilterTwo,
		ProductListOne
	},
	data: function () {
		return {
			itemsPerRow: 3
		}
	},
	created: function () {
		this.itemsPerRow = parseInt( this.$route.params.cols );
	}
}
</script>