<template>
	<div
		class="page-header"
		:style="{ 'background-image': 'url(./images/page-header-back.jpg)', 'background-color': '#3C63A4'}"
	>
		<h1 class="page-title">Riode Shop</h1>
		<ul class="breadcrumb">
			<li>
				<nuxt-link
					to="/"
					title="link to home"
				><i class="d-icon-home"></i></nuxt-link>
			</li>
			<li class="delimiter">/</li>
			<li>Riode Shop</li>
		</ul>
	</div>
</template>