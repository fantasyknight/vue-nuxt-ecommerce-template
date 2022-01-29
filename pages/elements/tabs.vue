<template>
	<main class="main">
		<page-header
			subTitle="Elements"
			title="Element Tabs"
			parentUrl="/elements"
		></page-header>

		<div class="page-content">
			<section class="mt-10 pt-8">
				<div class="container">
					<h2 class="title title-center mb-5">Simple</h2>
					<div class="row">
						<div class="col-lg-6 mb-4">
							<div class="tab tab-nav-simple">
								<element-tabs>
									<ul class="nav nav-tabs">
										<li class="nav-item">
											<a
												class="nav-link active"
												href="#tab1-1"
											>First header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab1-2"
											>Second header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab1-3"
											>Third header</a>
										</li>
									</ul>
								</element-tabs>

								<div class="tab-content">
									<div
										class="tab-pane active"
										id="tab1-1"
									>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
											turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
											pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor
											mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
									</div>
									<div
										class="tab-pane"
										id="tab1-2"
									>
										<p class="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
											nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
									</div>
									<div
										class="tab-pane"
										id="tab1-3"
									>
										<p class="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
											lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
											euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
											dapibus eu, fermentum et, dapibus sed, urna.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6 mb-4">
							<div class="tab tab-nav-simple tab-nav-center tab-nav-boxed">
								<element-tabs>
									<ul class="nav nav-tabs">
										<li class="nav-item">
											<a
												class="nav-link active"
												href="#tab2-1"
											>First header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab2-2"
											>Second header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab2-3"
											>Third header</a>
										</li>
									</ul>
								</element-tabs>
								<div class="tab-content">
									<div
										class="tab-pane active"
										id="tab2-1"
									>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
											turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
											pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor
											mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
									</div>
									<div
										class="tab-pane"
										id="tab2-2"
									>
										<p class="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
											nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
									</div>
									<div
										class="tab-pane"
										id="tab2-3"
									>
										<p class="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
											lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
											euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
											dapibus eu, fermentum et, dapibus sed, urna.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="mt-5">
				<div class="container">
					<h2 class="title title-center">With Color</h2>
					<div class="row">
						<div class="col-lg-6 mb-4">
							<div class="tab tab-nav-boxed tab-nav-solid">
								<element-tabs>
									<ul class="nav nav-tabs">
										<li class="nav-item">
											<a
												class="nav-link active"
												href="#tab3-1"
											>First header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab3-2"
											>Second header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab3-3"
											>Third header</a>
										</li>
									</ul>
								</element-tabs>
								<div class="tab-content">
									<div
										class="tab-pane active"
										id="tab3-1"
									>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
											turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
											pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor
											mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
									</div>
									<div
										class="tab-pane"
										id="tab3-2"
									>
										<p class="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
											nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
									</div>
									<div
										class="tab-pane"
										id="tab3-3"
									>
										<p class="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
											lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
											euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
											dapibus eu, fermentum et, dapibus sed, urna.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6 mb-4">
							<div class="tab tab-nav-center tab-nav-boxed tab-nav-solid tab-nav-round">
								<element-tabs>
									<ul class="nav nav-tabs">
										<li class="nav-item">
											<a
												class="nav-link active"
												href="#tab4-1"
											>First header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab4-2"
											>Second header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab4-3"
											>Third header</a>
										</li>
									</ul>
								</element-tabs>
								<div class="tab-content">
									<div
										class="tab-pane active"
										id="tab4-1"
									>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
											turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
											pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor
											mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
									</div>
									<div
										class="tab-pane"
										id="tab4-2"
									>
										<p class="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
											nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
									</div>
									<div
										class="tab-pane"
										id="tab4-3"
									>
										<p class="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
											lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
											euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
											dapibus eu, fermentum et, dapibus sed, urna.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="mt-5">
				<div class="container">
					<h2 class="title title-center">Boxed Style</h2>
					<div class="row">
						<div class="col-lg-6 mb-4">
							<div class="tab tab-boxed tab-nav-boxed tab-outline">
								<element-tabs>
									<ul class="nav nav-tabs">
										<li class="nav-item">
											<a
												class="nav-link active"
												href="#tab5-1"
											>First header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab5-2"
											>Second header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab5-3"
											>Third header</a>
										</li>
									</ul>
								</element-tabs>
								<div class="tab-content">
									<div
										class="tab-pane active"
										id="tab5-1"
									>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
											turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
											pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor
											mauris sit amet orci.</p>
									</div>
									<div
										class="tab-pane"
										id="tab5-2"
									>
										<p class="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
											nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
									</div>
									<div
										class="tab-pane"
										id="tab5-3"
									>
										<p class="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
											lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
											euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
											dapibus eu, fermentum et, dapibus sed, urna.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6 mb-4">
							<div class="tab tab-nav-center tab-nav-boxed tab-boxed tab-outline2">
								<element-tabs>
									<ul class="nav nav-tabs">
										<li class="nav-item">
											<a
												class="nav-link active"
												href="#tab6-1"
											>First header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab6-2"
											>Second header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab6-3"
											>Third header</a>
										</li>
									</ul>
								</element-tabs>
								<div class="tab-content">
									<div
										class="tab-pane active"
										id="tab6-1"
									>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
											turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
											pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor
											mauris sit amet orci.</p>
									</div>
									<div
										class="tab-pane"
										id="tab6-2"
									>
										<p class="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
											nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
									</div>
									<div
										class="tab-pane"
										id="tab6-3"
									>
										<p class="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
											lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
											euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
											dapibus eu, fermentum et, dapibus sed, urna.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="mt-9 mb-10">
				<div class="container">
					<h2 class="title title-center">Vertical Style</h2>
					<div class="row">
						<div class="col-lg-6 mb-4">
							<div class="tab tab-vertical tab-nav-solid">
								<element-tabs class="nav nav-tabs">
									<ul>
										<li class="nav-item">
											<a
												class="nav-link active"
												href="#tab7-1"
											>First header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab7-2"
											>Second header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab7-3"
											>Third header</a>
										</li>
									</ul>
								</element-tabs>
								<div class="tab-content">
									<div
										class="tab-pane active"
										id="tab7-1"
									>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
											turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
											pede. Donec nec justo eget felis facilisis fermentum. </p>
									</div>
									<div
										class="tab-pane"
										id="tab7-2"
									>
										<p class="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
											nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
									</div>
									<div
										class="tab-pane"
										id="tab7-3"
									>
										<p class="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
											lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
											euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
											dapibus eu, fermentum et, dapibus sed, urna.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6 mb-4">
							<div class="tab tab-vertical tab-simple">
								<element-tabs class="nav nav-tabs">
									<ul>
										<li class="nav-item">
											<a
												class="nav-link active"
												href="#tab8-1"
											>First header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab8-2"
											>Second header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab8-3"
											>Third header</a>
										</li>
									</ul>
								</element-tabs>
								<div class="tab-content">
									<div
										class="tab-pane active"
										id="tab8-1"
									>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
											turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
											pede. Donec nec justo eget felis facilisis fermentum. </p>
									</div>
									<div
										class="tab-pane"
										id="tab8-2"
									>
										<p class="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
											nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
									</div>
									<div
										class="tab-pane"
										id="tab8-3"
									>
										<p class="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
											lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
											euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
											dapibus eu, fermentum et, dapibus sed, urna.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="pt-10 grey-section">
				<div class="container mt-3">
					<h2 class="title title-center">Inverse Style</h2>
					<div class="row">
						<div class="col-lg-6 mb-10 pb-4">
							<div class="tab tab-boxed tab-nav-boxed tab-simple tab-inverse">
								<element-tabs>
									<ul class="nav nav-tabs">
										<li class="nav-item">
											<a
												class="nav-link active"
												href="#tab9-1"
											>First header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab9-2"
											>Second header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab9-3"
											>Third header</a>
										</li>
									</ul>
								</element-tabs>
								<div class="tab-content">
									<div
										class="tab-pane active"
										id="tab9-1"
									>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
											turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
											pede. Donec nec justo eget felis facilisis fermentum.</p>
									</div>
									<div
										class="tab-pane"
										id="tab9-2"
									>
										<p class="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
											nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
									</div>
									<div
										class="tab-pane"
										id="tab9-3"
									>
										<p class="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
											lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
											euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
											dapibus eu, fermentum et, dapibus sed, urna.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6 mb-10 pb-4">
							<div class="tab tab-vertical tab-boxed tab-inverse h-100">
								<element-tabs class="nav nav-tabs">
									<ul>
										<li class="nav-item">
											<a
												class="nav-link active"
												href="#tab10-1"
											>First header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab10-2"
											>Second header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab10-3"
											>Third header</a>
										</li>
									</ul>
								</element-tabs>
								<div class="tab-content">
									<div
										class="tab-pane active"
										id="tab10-1"
									>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
											turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
											pede. Donec nec justo eget felis facilisis fermentum.</p>
									</div>
									<div
										class="tab-pane"
										id="tab10-2"
									>
										<p class="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
											nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
									</div>
									<div
										class="tab-pane"
										id="tab10-3"
									>
										<p class="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
											lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
											euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
											dapibus eu, fermentum et, dapibus sed, urna.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6 mb-10 pb-4">
							<div class="tab tab-boxed tab-nav-boxed tab-nav-solid tab-inverse">
								<element-tabs>
									<ul class="nav nav-tabs">
										<li class="nav-item">
											<a
												class="nav-link active"
												href="#tab11-1"
											>First header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab11-2"
											>Second header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab11-3"
											>Third header</a>
										</li>
									</ul>
								</element-tabs>
								<div class="tab-content">
									<div
										class="tab-pane active"
										id="tab11-1"
									>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
											turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
											pede. Donec nec justo eget felis facilisis fermentum.</p>
									</div>
									<div
										class="tab-pane"
										id="tab11-2"
									>
										<p class="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
											nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
									</div>
									<div
										class="tab-pane"
										id="tab11-3"
									>
										<p class="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
											lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
											euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
											dapibus eu, fermentum et, dapibus sed, urna.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6 mb-10 pb-4">
							<div class="tab tab-vertical tab-nav-solid tab-boxed tab-inverse h-100">
								<element-tabs class="nav nav-tabs">
									<ul>
										<li class="nav-item">
											<a
												class="nav-link active"
												href="#tab12-1"
											>First header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab12-2"
											>Second header</a>
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="#tab12-3"
											>Third header</a>
										</li>
									</ul>
								</element-tabs>
								<div class="tab-content">
									<div
										class="tab-pane active"
										id="tab12-1"
									>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
											turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
											pede. Donec nec justo eget felis facilisis fermentum.</p>
									</div>
									<div
										class="tab-pane"
										id="tab12-2"
									>
										<p class="mb-0">Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
											nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam mollis. Ut justo.</p>
									</div>
									<div
										class="tab-pane"
										id="tab12-3"
									>
										<p class="mb-0">Sed lectus. Praesent elementum hendrerit tortor. Sed semper
											lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
											euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
											dapibus eu, fermentum et, dapibus sed, urna.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<element-list class="bg-white mt-10"></element-list>
		</div>
	</main>
</template>

<script>
import PageHeader from '~/components/elements/PageHeader';
import ElementTabs from '~/components/elements/ElementTabs';
import ElementList from '~/components/partials/elements/ElementList';

export default {
	components: {
		ElementList,
		ElementTabs,
		PageHeader
	}
};
</script>