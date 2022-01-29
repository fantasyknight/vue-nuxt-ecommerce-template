<template>
	<div class="category-banner-container bg-gray">
		<div
			class="category-banner banner text-uppercase"
			v-lazy:background-image="'./images/banners/banner-top.jpg'"
			style="background: #7adcf8"
		>
			<div class="container position-relative">
				<div class="row">
					<div class="pl-lg-5 pb-5 pb-md-0 col-sm-5 col-xl-4 col-lg-4 offset-1">
						<h3>
							Electronic
							<br />Deals
						</h3>
						<a
							href="javascript:;"
							class="btn btn-dark"
						>Get Yours!</a>
					</div>
					<div class="pl-lg-3 col-sm-4 offset-sm-1 offset-1 pt-3">
						<div class="coupon-sale-content">
							<h4 class="m-b-1 coupon-sale-text bg-white text-transform-none">Exclusive COUPON</h4>
							<h5 class="mb-2 coupon-sale-text d-block ls-10 p-0">
								<i class="ls-0">UP TO</i>
								<b class="text-dark">$100</b> OFF
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>