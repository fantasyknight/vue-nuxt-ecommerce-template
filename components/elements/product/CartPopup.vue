<template lang="html">
	<notifications
		group="addCartSuccess"
		:duration="2000"
		:width="300"
		:max="3"
		animation-name="fade-right"
		position="bottom left"
	>
		<template slot="body" slot-scope="props">
            <div class="minipopup-box show">
                <p class="minipopup-title">Successfully added.</p>

                <div class="product product-purchased  product-cart mb-0">
                    <figure class="product-media pure-media">
						<nuxt-link :to="`/product/default/${props.item.data.slug}`">
							<img 
								:src="`${baseUrl}${props.item.data.pictures[0].url}`" 
								alt="product"
								:width="props.item.data.pictures[0].width"
								:height="props.item.data.pictures[0].height"
							>
						</nuxt-link>
                    </figure>
                    <div class="product-detail">
                        <nuxt-link :to="`/product/default/${props.item.data.slug}`" class="product-name">{{ props.item.data.name }}</nuxt-link>
                        <span class="price-box">
                            <span class="product-quantity">{{ props.item.data.qty }}</span>
                            <span class="product-price">${{ props.item.data.price | priceFormat }}</span>
                        </span>
                    </div>
                </div>

                <div class="action-group d-flex">
                    <nuxt-link to="/pages/cart" class="btn btn-sm btn-outline btn-primary btn-rounded">View Cart</nuxt-link>
                    <nuxt-link to="/pages/checkout" class="btn btn-sm btn-primary btn-rounded">Check Out</nuxt-link>
                </div>
            </div>
		</template>
	</notifications>
</template>

<script>
import { baseUrl } from '~/api/index';

export default {
	name: 'Notify',
	props: {
		data: Object
	},
	data: function() {
		return {
			baseUrl: baseUrl
		};
	}
};
</script>

<style lang="scss">
.vue-notification-wrapper {
	overflow: unset !important;
}

.fade-right-enter-active,
.fade-right-leave-active,
.fade-right-move {
	transition: all 0.5s;
}

.fade-right-enter,
.fade-right-leave-to {
	opacity: 0;
	transform: translateX(-100%);
}
</style>
