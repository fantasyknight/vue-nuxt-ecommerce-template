<template>
	<div class="tab tab-nav-simple product-tabs">
		<element-tabs>
			<ul class="nav nav-tabs justify-content-center">
				<li class="nav-item">
					<a
						class="nav-link active"
						href="#product-tab-description"
					>Description</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="#product-tab-additional"
					>Additional information</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="#product-tab-size-guide"
					>Size Guide</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="#product-tab-reviews"
					>Reviews ({{product.reviews}})</a>
				</li>
			</ul>
		</element-tabs>

		<div class="tab-content">
			<div
				class="tab-pane active in"
				id="product-tab-description"
			>
				<div class="row mt-6">
					<div class="col-md-6">
						<h5 class="description-title mb-4 font-weight-semi-bold ls-m">Features</h5>
						<p class="mb-2">
							Praesent id enim sit amet.Tdio vulputate eleifend in in tortor.
							ellus massa. siti iMassa ristique sit amet condim vel, facilisis
							quimequistiqutiqu amet condim Dilisis Facilisis quis sapien. Praesent id
							enim sit amet.
						</p>
						<ul class="mb-8">
							<li>Praesent id enim sit amet.Tdio vulputate</li>
							<li>Eleifend in in tortor. ellus massa.Dristique sitii</li>
							<li>Massa ristique sit amet condim vel</li>
							<li>Dilisis Facilisis quis sapien. Praesent id enim sit amet</li>
						</ul>
						<h5 class="description-title mb-3 font-weight-semi-bold ls-m">Specifications
						</h5>
						<table class="table">
							<tbody>
								<tr>
									<th class="font-weight-semi-bold text-dark pl-0">Material</th>
									<td class="pl-4">Praesent id enim sit amet.Tdio</td>
								</tr>
								<tr>
									<th class="font-weight-semi-bold text-dark pl-0">Claimed Size</th>
									<td class="pl-4">Praesent id enim sit</td>
								</tr>
								<tr>
									<th class="font-weight-semi-bold text-dark pl-0">Recommended Use
									</th>
									<td class="pl-4">Praesent id enim sit amet.Tdio vulputate eleifend
										in in tortor. ellus massa. siti</td>
								</tr>
								<tr>
									<th class="font-weight-semi-bold text-dark border-no pl-0">
										Manufacturer</th>
									<td class="border-no pl-4">Praesent id enim</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="col-md-6 pl-md-6 pt-4 pt-md-0">
						<h5 class="description-title font-weight-semi-bold mb-5 ls-m">Video Description
						</h5>
						<figure class="p-relative d-inline-block mb-2">
							<img
								v-lazy="'./images/product-video.jpg'"
								width="559"
								height="370"
								alt="Product"
							/>
							<a
								class="btn-play btn-iframe"
								title="video play button"
								href="/uploads/video_55464b5474.mp4"
								@click="openVideoModal($event)"
							>
								<i class="d-icon-play-solid"></i>
							</a>
						</figure>
						<div class="icon-box-wrap d-flex flex-wrap">
							<div class="icon-box-wrap d-flex flex-wrap">
								<div class="icon-box icon-box-side icon-border pt-2 pb-2 mb-4 mr-10">
									<div class="icon-box-icon">
										<i class="d-icon-lock"></i>
									</div>
									<div class="icon-box-content">
										<h4 class="icon-box-title lh-1 pt-1 ls-s text-normal">2 year
											warranty</h4>
										<p>Guarantee with no doubt</p>
									</div>
								</div>
								<div class="divider d-xl-show mr-10"></div>
								<div class="icon-box icon-box-side icon-border pt-2 pb-2 mb-4">
									<div class="icon-box-icon">
										<i class="d-icon-truck"></i>
									</div>
									<div class="icon-box-content">
										<h4 class="icon-box-title lh-1 pt-1 ls-s text-normal">Free shipping
										</h4>
										<p>On orders over $50.00</p>
									</div>
								</div>
							</div>
							<div
								class="divider d-xl-show mr-10"
								v-if="isDivider"
							></div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="tab-pane"
				id="product-tab-additional"
			>
				<ul class="list-none">
					<li>
						<label>Categories:</label>
						<p
							v-for="(item,index) in product.product_categories"
							:key="'cat-' + item.name"
						>
							{{ item.name }}<template v-if="index < product.product_categories.length - 1">,&nbsp;</template>
						</p>
					</li>

					<li v-if="product.brands.length > 0">
						<label>Brands:</label>
						<p
							v-for="(item,index) in product.brands"
							:key="'brand-' + item.name"
						>
							{{ item.name }}<template v-if="index < product.brands.length - 1">,&nbsp;</template>
						</p>
					</li>

					<li v-if="vColors.length > 0">
						<label>Color:</label>
						<p
							v-for="(item,index) in vColors"
							:key="'desc-color-' + item"
						>
							{{ item }}<template v-if="index < vColors.length - 1">,&nbsp;</template>
						</p>
					</li>

					<li v-if="vSizes.length > 0">
						<label>Size:</label>
						<p
							v-for="(item,index) in vSizes"
							:key="'desc-size-' + index"
						>
							{{ item }}<template v-if="index < vSizes.length - 1">,&nbsp;</template>
						</p>
					</li>
				</ul>
			</div>
			<div
				class="tab-pane "
				id="product-tab-size-guide"
			>
				<figure class="size-image mt-4 mb-4">
					<img
						src="images/product-size.png"
						alt="Size Guide Image"
						width="217"
						height="398"
					>
				</figure>
				<figure class="size-table mt-4 mb-4">
					<table>
						<thead>
							<tr>
								<th>SIZE</th>
								<th>CHEST(IN.)</th>
								<th>WEIST(IN.)</th>
								<th>HIPS(IN.)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>XS</th>
								<td>34-36</td>
								<td>27-29</td>
								<td>34.5-36.5</td>
							</tr>
							<tr>
								<th>S</th>
								<td>36-38</td>
								<td>29-31</td>
								<td>36.5-38.5</td>
							</tr>
							<tr>
								<th>M</th>
								<td>38-40</td>
								<td>31-33</td>
								<td>38.5-40.5</td>
							</tr>
							<tr>
								<th>L</th>
								<td>40-42</td>
								<td>33-36</td>
								<td>40.5-43.5</td>
							</tr>
							<tr>
								<th>XL</th>
								<td>42-45</td>
								<td>36-40</td>
								<td>43.5-47.5</td>
							</tr>
							<tr>
								<th>XXL</th>
								<td>45-48</td>
								<td>40-44</td>
								<td>47.5-51.5</td>
							</tr>
						</tbody>
					</table>
				</figure>
			</div>
			<div
				class="tab-pane "
				id="product-tab-reviews"
			>
				<div
					class="comments mb-8 pt-2 pb-2 border-no"
					v-if="product.reviews > 0"
				>
					<ul>
						<li
							v-for="item in [1,2,3,4].slice(0, product.reviews)"
							:key="`comment-${item}`"
						>
							<div class="comment">
								<figure class="comment-media">
									<a href="javascript:;">
										<img
											v-lazy="`./images/blog/comments/${item}.jpg`"
											alt="avatar"
										>
									</a>
								</figure>
								<div class="comment-body">
									<div class="comment-rating ratings-container mb-0">
										<div class="ratings-full">
											<span
												class="ratings"
												:style="{width: product.ratings * 20 + '%'}"
											></span>
											<span class="tooltiptext tooltip-top">{{ product.ratings | priceFormat }}</span>
										</div>
									</div>
									<div class="comment-user">
										<span class="comment-date text-body">September 22, 2020 at 9:42
											pm</span>
										<h4><a href="javascript:;">John Doe</a></h4>
									</div>

									<div class="comment-content">
										<p>Sed pretium, ligula sollicitudin laoreet viverra, tortor
											libero sodales leo,
											eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
											Suspendisse potenti.
											Sed egestas, ante et vulputate volutpat, eros pede semper
											est, vitae luctus metus libero eu augue.</p>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>

				<p v-else>
					There are no reviews yet.
				</p>

				<div class="reply">
					<div class="title-wrapper text-left">
						<h3 class="title title-simple text-left text-normal">Add a Review</h3>
						<p>Your email address will not be published. Required fields are marked *</p>
					</div>
					<div class="rating-form">
						<label
							for="rating"
							class="text-dark"
						>Your rating * </label>
						<span class="rating-stars selected">
							<a
								v-for="number in [1,2,3,4,5]"
								:key="'rating' + number"
								href="javascript:;"
								:class="'star-'+number"
								@click="setRating($event)"
							>
								{{ number }}
							</a>
						</span>

						<select
							name="rating"
							id="rating"
							required=""
							style="display: none;"
						>
							<option value="">Rate…</option>
							<option value="5">Perfect</option>
							<option value="4">Good</option>
							<option value="3">Average</option>
							<option value="2">Not that bad</option>
							<option value="1">Very poor</option>
						</select>
					</div>
					<form action="#">
						<textarea
							id="reply-message"
							cols="30"
							rows="6"
							class="form-control mb-4"
							placeholder="Comment *"
							required
						></textarea>
						<div class="row">
							<div class="col-md-6 mb-5">
								<input
									type="text"
									class="form-control"
									id="reply-name"
									name="reply-name"
									placeholder="Name *"
									required
								/>
							</div>
							<div class="col-md-6 mb-5">
								<input
									type="email"
									class="form-control"
									id="reply-email"
									name="reply-email"
									placeholder="Email *"
									required
								/>
							</div>
						</div>
						<div class="form-checkbox mb-4">
							<input
								type="checkbox"
								class="custom-checkbox"
								id="signin-remember"
								name="signin-remember"
							/>
							<label
								class="form-control-label"
								for="signin-remember"
							>
								Save my name, email, and website in this browser for the next time I
								comment.
							</label>
						</div>
						<button
							type="submit"
							class="btn btn-primary btn-rounded"
						>Submit<i class="d-icon-arrow-right"></i></button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ElementTabs from '~/components/elements/ElementTabs';

export default {
	components: {
		ElementTabs
	},
	props: {
		product: Object,
		isDivider: true
	},
	data: function () {
		return {
			vSizes: [],
			vColors: []
		};
	},
	mounted: function () {
		if ( this.product.variants.length > 0 ) {
			if ( this.product.variants[ 0 ].size )
				this.product.variants.forEach( item => {
					if ( !this.vSizes.find( vsize => vsize === item.size.name ) )
						this.vSizes.push( item.size.name );
				} );

			if ( this.product.variants[ 0 ].color )
				this.product.variants.forEach( item => {
					if (
						!this.vColors.find( vColor => vColor === item.color.name )
					)
						this.vColors.push( item.color.name );
				} );
		}
	},
	methods: {
		setRating: function ( e ) {
			if ( e.currentTarget.parentNode.querySelector( '.active' ) )
				e.currentTarget.parentNode
					.querySelector( '.active' )
					.classList.remove( 'active' );
			e.currentTarget.classList.add( 'active' );
		},
		openVideoModal: function ( e ) {
			e.preventDefault();
			this.$modal.show(
				() => import( '~/components/elements/modal/VideoModal' ),
				{ slug: e.currentTarget.getAttribute( 'href' ) },
				{
					width: '1000',
					height: 'auto',
					adaptive: true,
					class: 'video-modal-container'
				}
			);
		}
	}
};
</script>