<template>
	<main class="main account">
		<nav class="breadcrumb-nav">
			<div class="container">
				<ul class="breadcrumb">
					<li>
						<nuxt-link
							to="/"
							title="link to home"
						><i class="d-icon-home"></i></nuxt-link>
					</li>
					<li>Account</li>
				</ul>
			</div>
		</nav>

		<div class="page-content mt-4 mb-10 pb-6">
			<div
				class="container appear-animate"
				v-animate
			>
				<h2 class="title title-center mb-10">My Account</h2>

				<div class="tab tab-vertical gutter-lg">
					<element-tabs class="row p-0 m-0 gutter-lg w-100">
						<ul class="nav nav-tabs mb-4 col-lg-3 col-md-4">
							<li class="nav-item">
								<a
									class="nav-link active"
									href="#dashboard"
								>Dashboard</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="#orders"
								>Orders</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="#downloads"
								>Downloads</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="#address"
								>Address</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="#account"
								>Account details</a>
							</li>
							<li class="nav-item">
								<nuxt-link to="/">Logout</nuxt-link>
							</li>
						</ul>

						<div class="tab-content col-lg-9 col-md-8">
							<div
								class="tab-pane active"
								id="dashboard"
							>
								<p class="mb-0">
									Hello <span>User</span> (not <span>User</span>? <a
										href="javascript:;"
										class="text-primary"
									>Log out</a>)
								</p>
								<p class="mb-8">
									From your account dashboard you can view your <a
										href="#orders"
										class="link-to-tab text-primary"
									>recent orders</a>, manage your shipping and billing
									addresses,<br />and edit <a
										href="#address"
										class="link-to-tab text-primary"
									>your password and account details</a>.
								</p>
								<nuxt-link
									to="/shop"
									class="btn btn-dark btn-rounded"
								>Go To Shop<i class="d-icon-arrow-right"></i></nuxt-link>
							</div>
							<div
								class="tab-pane"
								id="orders"
							>
								<table class="order-table">
									<thead>
										<tr>
											<th class="pl-2">Order</th>
											<th>Date</th>
											<th>Status</th>
											<th>Total</th>
											<th class="pr-2">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="order-number"><a href="javascript:;">#3596</a></td>
											<td class="order-date"><time>February 24, 2021</time></td>
											<td class="order-status"><span>On hold</span></td>
											<td class="order-total"><span>$900.00 for 5 items</span></td>
											<td class="order-action"><a
													href="javascript:;"
													class="btn btn-primary btn-link btn-underline"
												>View</a></td>
										</tr>
										<tr>
											<td class="order-number"><a href="javascript:;">#3593</a></td>
											<td class="order-date"><time>February 21, 2021</time></td>
											<td class="order-status"><span>On hold</span></td>
											<td class="order-total"><span>$290.00 for 2 items</span></td>
											<td class="order-action"><a
													href="javascript:;"
													class="btn btn-primary btn-link btn-underline"
												>View</a></td>
										</tr>
										<tr>
											<td class="order-number"><a href="javascript:;">#2547</a></td>
											<td class="order-date"><time>January 4, 2021</time></td>
											<td class="order-status"><span>On hold</span></td>
											<td class="order-total"><span>$480.00 for 8 items</span></td>
											<td class="order-action"><a
													href="javascript:;"
													class="btn btn-primary btn-link btn-underline"
												>View</a></td>
										</tr>
										<tr>
											<td class="order-number"><a href="javascript:;">#2549</a></td>
											<td class="order-date"><time>January 19, 2021</time></td>
											<td class="order-status"><span>On hold</span></td>
											<td class="order-total"><span>$680.00 for 5 items</span></td>
											<td class="order-action"><a
													href="javascript:;"
													class="btn btn-primary btn-link btn-underline"
												>View</a></td>
										</tr>
										<tr>
											<td class="order-number"><a href="javascript:;">#4523</a></td>
											<td class="order-date"><time>Jun 6, 2021</time></td>
											<td class="order-status"><span>On hold</span></td>
											<td class="order-total"><span>$564.00 for 3 items</span></td>
											<td class="order-action"><a
													href="javascript:;"
													class="btn btn-primary btn-link btn-underline"
												>View</a></td>
										</tr>
										<tr>
											<td class="order-number"><a href="javascript:;">#4526</a></td>
											<td class="order-date"><time>Jun 19, 2021</time></td>
											<td class="order-status"><span>On hold</span></td>
											<td class="order-total"><span>$123.00 for 8 items</span></td>
											<td class="order-action"><a
													href="javascript:;"
													class="btn btn-primary btn-link btn-underline"
												>View</a></td>
										</tr>
									</tbody>
								</table>
							</div>
							<div
								class="tab-pane"
								id="downloads"
							>
								<p class="mb-4 text-body">No downloads available yet.</p>
								<nuxt-link
									to="/shop"
									class="btn btn-primary btn-link btn-underline"
								>Browser Products<i class="d-icon-arrow-right"></i></nuxt-link>
							</div>
							<div
								class="tab-pane"
								id="address"
							>
								<p class="mb-2">The following addresses will be used on the checkout page by default.
								</p>
								<div class="row">
									<div class="col-sm-6 mb-4">
										<div class="card card-address">
											<div class="card-body">
												<h5 class="card-title text-uppercase">Billing Address</h5>
												<p>John Doe<br />
													Riode Company<br />
													Steven street<br />
													El Carjon, CA 92020
												</p>
												<a
													href="javascript:;"
													class="btn btn-link btn-secondary btn-underline"
												>Edit <i
														class="far fa-edit"
														style="margin-bottom: 2px"
													></i>
												</a>
											</div>
										</div>
									</div>
									<div class="col-sm-6 mb-4">
										<div class="card card-address">
											<div class="card-body">
												<h5 class="card-title text-uppercase">Shipping Address</h5>
												<p>You have not set up this type of address yet.</p>
												<a
													href="javascript:;"
													class="btn btn-link btn-secondary btn-underline"
												>Edit <i
														class="far fa-edit"
														style="margin-bottom: 2px"
													></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								class="tab-pane"
								id="account"
							>
								<form
									action="#"
									class="form"
								>
									<div class="row">
										<div class="col-sm-6">
											<label>First Name *</label>
											<input
												type="text"
												class="form-control"
												name="first_name"
												required=""
											>
										</div>
										<div class="col-sm-6">
											<label>Last Name *</label>
											<input
												type="text"
												class="form-control"
												name="last_name"
												required=""
											>
										</div>
									</div>

									<label>Display Name *</label>
									<input
										type="text"
										class="form-control mb-0"
										name="display_name"
										required=""
									>
									<small class="d-block form-text mb-7">This will be how your name will be displayed
										in the account section and in reviews</small>

									<label>Email Address *</label>
									<input
										type="email"
										class="form-control"
										name="email"
										required=""
									>
									<fieldset>
										<legend>Password Change</legend>
										<label>Current password (leave blank to leave unchanged)</label>
										<input
											type="password"
											class="form-control"
											name="current_password"
										>

										<label>New password (leave blank to leave unchanged)</label>
										<input
											type="password"
											class="form-control"
											name="new_password"
										>

										<label>Confirm new password</label>
										<input
											type="password"
											class="form-control"
											name="confirm_password"
										>
									</fieldset>

									<button
										type="submit"
										class="btn btn-primary"
									>SAVE CHANGES</button>
								</form>
							</div>
						</div>
					</element-tabs>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ElementTabs from '~/components/elements/ElementTabs';

export default {
	components: {
		ElementTabs
	}
};
</script>