<template>
	<main class="main skeleton-body">
		<nav class="breadcrumb-nav">
			<div class="container">
				<ul class="breadcrumb">
					<li>
						<nuxt-link
							to="/"
							title="link to home"
						><i class="d-icon-home"></i></nuxt-link>
					</li>
					<li>
						<nuxt-link
							to="/blog/classic"
							class="active"
						>Blog</nuxt-link>
					</li>
					<li>Single Post</li>
				</ul>
			</div>

			<div class="page-content with-sidebar">
				<div class="container">
					<div class="row gutter-lg">
						<div class="col-lg-9">
							<div v-images-loaded.on="handleSkeleton">
								<template>
									<div
										class="skel-post"
										:class="loaded ? 'd-none': ''"
									></div>
								</template>

								<template>
									<div
										class="post post-single"
										v-if="post"
									>
										<figure
											class="post-media"
											:class="{ 'd-none': !loaded, 'post-video': post.type }"
										>
											<nuxt-link
												:to="`/blog/single/${post.slug}`"
												v-if="post.type !== 'gallery'"
											>
												<img
													:src="`${baseUrl}${post.large_pictures[0].url}`"
													:width="post.large_pictures[0].width"
													:height="post.large_pictures[0].height"
													alt="post"
												/>
											</nuxt-link>

											<swiper-carousel
												class="swiper-theme swiper-dot-inner swiper-dot-white"
												:options="baseSlider11"
												v-if="post.type === 'gallery'"
											>
												<div
													class="swiper-slide"
													v-for="item in post.large_pictures"
													:key="`post-one-` + item.url"
												>
													<img
														:src="`${baseUrl}${item.url}`"
														:width="item.width"
														:height="item.height"
														alt="post"
													/>
												</div>
											</swiper-carousel>

											<template v-if="post.type === 'video'">
												<span
													class="video-play"
													@click="playVideoHandler($event)"
												></span>
												<video width="380">
													<source :src="`${baseUrl}${post.video.url}`" />
												</video>
											</template>
										</figure>

										<div class="post-details">
											<div class="post-meta">
												by <a
													href="javascript:;"
													class="post-author"
												>{{ post.author }}</a> on <a
													href="javascript:;"
													class="post-date"
												>{{ new Date( post.date ).toLocaleDateString( 'en-US', { year: 'numeric', month: 'short', day: "2-digit", timeZone: "UTC" } ) }}</a> | <a
													href="javascript:;"
													class="post-comment"
												><span>{{ post.comments }}</span> Comments</a>
											</div>
											<h4 class="post-title">
												<a href="javascript:;">{{ post.title }}</a>
											</h4>
											<div class="post-body mb-7">
												<p class="mb-5">{{ post.content }}</p>

												<p class="mb-6">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a <a href="javascript:;">ultrices sagittis</a>, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>

												<div class="with-img row align-items-center">
													<div class="col-md-6 mb-6">
														<figure>
															<img
																src="images/blog/1.jpg"
																width="336"
																height="415"
																alt="post"
																style="background-color: #DEE6E8"
															/>
															<figcaption class="text-left mt-1">
																Designe by <a href="javascript:;">Casper Dalin</a>
															</figcaption>
														</figure>
													</div>
													<div class="col-md-6 mb-6">
														<h4 class="font-weight-semi-bold ls-s">Quisque volutpat mattiseros.</h4>
														<p class="mb-8 col-lg-11">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. </p>
														<h4 class="font-weight-semi-bold ls-s">More Details</h4>
														<ul class="list list-type-check mb-6">
															<li>Praesent id enim sit amet.</li>
															<li>Tdio vulputate eleifend in in tortor. ellus massa.</li>
															<li>Massa ristique sit amet condim vel</li>
															<li>Dilisis Facilisis quis sapien. Praesent id enim sit amet</li>
															<li>Praesent id enim sit amet.</li>
															<li>Tdio vulputate eleifend in in tortor. ellus massa.</li>
														</ul>
													</div>
												</div>

												<blockquote class="mt-1 mb-6 p-relative">
													<p class="font-weight-semi-bold ls-m">“ Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. ”</p>
												</blockquote>

												<p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
													lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.
													Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
													pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum
													et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus
													lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
													facilisis libero dolor a purus. </p>
											</div>

											<div class="post-author-detail">
												<figure class="author-media">
													<a href="javascript:;">
														<img
															src="images/blog/comments/1.jpg"
															alt="avatar"
															width="60"
															height="60"
														/>
													</a>
												</figure>
												<div class="author-body">
													<div class="author-header d-flex justify-content-between align-items-center">
														<div>
															<span class="author-title">AUTHOR</span>
															<h4 class="author-name font-weight-bold mb-0">John Doe</h4>
														</div>
														<div>
															<a
																href="javascript:;"
																class="author-link font-weight-semi-bold"
															>View all posts
																by John Doe <i class="d-icon-arrow-right"></i></a>
														</div>
													</div>
													<div class="author-content">
														<p class="mb-0">Praesent dapibus, neque id cursus faucibus, tortor neque
															egestas auguae, eu vulputate magna eros euerat. Aliquam erat
															volutpat.</p>
													</div>
												</div>
											</div>

											<div class="post-footer mt-7 mb-3">
												<div class="post-tags">
													<a
														href="javascript:;"
														class="tag"
													>classic</a>
													<a
														href="javascript:;"
														class="tag"
													>converse</a>
												</div>
												<div class="social-icons">
													<a
														href="javascript:;"
														class="social-icon social-facebook"
														title="Facebook"
													><i class="fab fa-facebook-f"></i></a>
													<a
														href="javascript:;"
														class="social-icon social-twitter"
														title="Twitter"
													><i class="fab fa-twitter"></i></a>
													<a
														href="javascript:;"
														class="social-icon social-pinterest"
														title="Pinterest"
													><i class="fab fa-pinterest-p"></i></a>
												</div>
											</div>
										</div>
									</div>
								</template>
							</div>

							<nav
								class="page-nav"
								v-if="prev && next"
							>
								<template>
									<nuxt-link
										class="pager-link pager-link-prev"
										:to="`/blog/single/${ prev.slug }`"
										v-if="prev.slug !== post.slug"
									>
										Previous Post
										<span class="pager-link-title">{{ prev.title }}</span>
									</nuxt-link>
									<a
										href="javascript:;"
										class="pager-link pager-link-prev"
										v-else
									>
										<span class="pager-link-title mt-0">This is the first Post</span>
									</a>
								</template>

								<template>
									<nuxt-link
										class="pager-link pager-link-next"
										:to="`/blog/single/${ next.slug }`"
										v-if="next.slug !== post.slug"
									>
										Go To Post
										<span class="pager-link-title">{{ next.title }}</span>
									</nuxt-link>
									<a
										href="javascript:;"
										class="pager-link pager-link-next"
										v-else
									>
										<span class="pager-link-title mt-0">This is the last Post</span>
									</a>
								</template>
							</nav>

							<related-posts
								:related="related"
								v-if="related && related.length > 0"
								:loaded="related ? true : false"
							></related-posts>

							<div
								class="comments"
								v-if="post"
							>
								<h3 class="title title-simple text-left text-normal font-weight-bold">{{ post.comments }} Comments</h3>

								<h3
									class="title title-simple text-left text-normal font-weight-normal"
									style="font-size: 1.8rem"
									v-if="post.comments === 0"
								>
									{{ "Be The First To Review “" + post.title + "”" }}
								</h3>

								<ul>
									<li v-if="post.comments > 0">
										<div class="comment">
											<figure class="comment-media">
												<a href="javascript:;">
													<img
														src="images/blog/comments/1.jpg"
														alt="avatar"
														width="60"
														height="60"
													/>
												</a>
											</figure>

											<div class="comment-body">
												<div class="comment-user">
													<span class="comment-date">November 9, 2018 at 2:19 pm</span>
													<h4><a href="javascript:;">Jimmy Pearson</a></h4>
												</div>

												<div class="comment-content mb-2">
													<p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. </p>
												</div>
												<a
													href="javascript:;"
													class="btn btn-link btn-reveal-right"
												>REPLY<i class="d-icon-arrow-right"></i></a>
											</div>
										</div>

										<ul v-if="post.comments > 1">
											<li>
												<div class="comment">
													<figure class="comment-media">
														<a href="javascript:;">
															<img
																src="images/blog/comments/2.jpg"
																alt="avatar"
																width="60"
																height="60"
															/>
														</a>
													</figure>

													<div class="comment-body">
														<div class="comment-user">
															<span class="comment-date">November 9, 2018 at 2:19 pm</span>
															<h4><a href="javascript:;">Lena Knight</a></h4>
														</div>

														<div class="comment-content mb-2">
															<p>Morbi interdum mollis sapien. Sed ac risus.</p>
														</div>
														<a
															href="javascript:;"
															class="btn btn-link btn-reveal-right"
														>REPLY<i class="d-icon-arrow-right"></i></a>
													</div>
												</div>
											</li>
										</ul>
									</li>

									<li v-if="post.comments > 2">
										<div class="comment">
											<figure class="comment-media">
												<a href="javascript:;">
													<img
														src="images/blog/comments/1.jpg"
														alt="avatar"
														width="60"
														height="60"
													/>
												</a>
											</figure>

											<div class="comment-body">
												<div class="comment-user">
													<span class="comment-date">November 9, 2018 at 2:19 pm</span>
													<h4><a href="javascript:;">Johnathan Castillo</a></h4>
												</div>

												<div class="comment-content mb-2">
													<p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
												</div>
												<a
													href="javascript:;"
													class="btn btn-link btn-reveal-right"
												>REPLY<i class="d-icon-arrow-right"></i></a>
											</div>
										</div>
									</li>
								</ul>
							</div>

							<div class="reply">
								<div class="title-wrapper text-left">
									<h3 class="title title-simple text-left text-normal">Leave A Reply</h3>
									<p>Your email address will not be published. Required fields are marked *</p>
								</div>
								<form action="#">
									<textarea
										id="reply-message"
										cols="30"
										rows="6"
										aria-label="post single text area"
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
												aria-label="post name input"
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
												aria-label="post email input"
												name="reply-email"
												placeholder="Email *"
												required
											/>
										</div>
									</div>
									<button
										type="submit"
										class="btn btn-primary btn-rounded"
									>POST COMMENT<i class="d-icon-arrow-right"></i></button>
								</form>
							</div>
						</div>

						<blog-sidebar></blog-sidebar>
					</div>
				</div>
			</div>
		</nav>
	</main>
</template>

<script>
import imagesLoaded from 'vue-images-loaded';

import SwiperCarousel from '~/components/elements/SwiperCarousel';
import BlogSidebar from '~/components/partials/blog/BlogSidebar';
import RelatedPosts from '~/components/partials/blog/RelatedPosts';

import Api, { baseUrl, currentDemo } from '~/api';
import { baseSlider11 } from '~/utils/data/carousel';
import { scrollHandler, playVideo } from '~/utils';

export default {
	components: {
		SwiperCarousel,
		BlogSidebar,
		RelatedPosts
	},
	directives: {
		imagesLoaded
	},
	data: function () {
		return {
			baseUrl: baseUrl,
			baseSlider11: baseSlider11,
			post: null,
			next: null,
			prev: null,
			related: null,
			itemsPerPage: 6,
			loaded: false,
			totalPage: null
		};
	},
	watch: {
		$route: function () {
			this.getBlog();
		}
	},
	created: function () {
		this.getBlog( false );
	},
	methods: {
		getBlog: function ( isScroll = true ) {
			this.loaded = false;

			if ( isScroll ) scrollHandler();

			Api.get(
				`${ baseUrl }/demo-${ currentDemo }/blog/${ this.$route.params.slug }`
			)
				.then( response => {
					this.post = response.data.data;
					this.prev = response.data.prev;
					this.next = response.data.next;
					this.related = response.data.related;
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		},
		handleSkeleton: function () {
			this.loaded = true;
		},
		playVideoHandler: function ( e ) {
			playVideo( e );
		}
	}
};
</script>