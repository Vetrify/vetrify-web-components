export default {
    title: 'Templates/Table',
  };

  export const BasicDynamic = () =>`
  <v-
  `;
  
  export const Basic = () => `

  <div class="card card-custom card-stretch gutter-b">
  <!--begin::Header-->
  <div class="card-header border-0 pt-5">
	  <h3 class="card-title align-items-start flex-column">
		  <span class="card-label font-weight-bolder text-dark">Trending Items</span>
		  <span class="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new members</span>
	  </h3>
	  <div class="card-toolbar">
		  <ul class="nav nav-pills nav-pills-sm nav-dark-75">
			  <li class="nav-item">
				  <a class="nav-link py-2 px-4" data-toggle="tab" href="#kt_tab_pane_1_1">Month</a>
			  </li>
			  <li class="nav-item">
				  <a class="nav-link py-2 px-4" data-toggle="tab" href="#kt_tab_pane_1_2">Week</a>
			  </li>
			  <li class="nav-item">
				  <a class="nav-link py-2 px-4 active" data-toggle="tab" href="#kt_tab_pane_1_3">Day</a>
			  </li>
		  </ul>
	  </div>
  </div>
  <!--end::Header-->
  <!--begin::Body-->
  <div class="card-body pt-2 pb-0 mt-n3">
	  <div class="tab-content mt-5" id="myTabTables1">
		  <!--begin::Tap pane-->
		  <div class="tab-pane fade" id="kt_tab_pane_1_1" role="tabpanel" aria-labelledby="kt_tab_pane_1_1">
			  <!--begin::Table-->
			  <div class="table-responsive">
				  <table class="table table-borderless table-vertical-center">
					  <thead>
						  <tr>
							  <th class="p-0 w-50px"></th>
							  <th class="p-0 min-w-200px"></th>
							  <th class="p-0 min-w-100px"></th>
							  <th class="p-0 min-w-40px"></th>
						  </tr>
					  </thead>
					  <tbody>
						  <tr>
							  <th class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/005-bebo.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </th>
							  <td class="py-6 pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Active Customers</a>
								  <span class="text-muted font-weight-bold d-block">Best Customers</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">71%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-danger" role="progressbar" style="width: 71%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
						  <tr>
							  <th class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/014-kickstarter.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </th>
							  <td class="pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Bestseller Theme</a>
								  <span class="text-muted font-weight-bold d-block">Amazing Templates</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">50%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-info" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
						  <tr>
							  <td class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/006-plurk.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </td>
							  <td class="pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Top Authors</a>
								  <span class="text-muted font-weight-bold d-block">Successful Fellas</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">65%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-danger" role="progressbar" style="width: 65%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
						  <tr>
							  <th class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/015-telegram.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </th>
							  <td class="pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Popular Authors</a>
								  <span class="text-muted font-weight-bold d-block">Most Successful</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">83%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-success" role="progressbar" style="width: 83%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
						  <tr>
							  <th class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/003-puzzle.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </th>
							  <td class="pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">New Users</a>
								  <span class="text-muted font-weight-bold d-block">Awesome Users</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">47%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-primary" role="progressbar" style="width: 47%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
					  </tbody>
				  </table>
			  </div>
			  <!--end::Table-->
		  </div>
		  <!--end::Tap pane-->
		  <!--begin::Tap pane-->
		  <div class="tab-pane fade" id="kt_tab_pane_1_2" role="tabpanel" aria-labelledby="kt_tab_pane_1_2">
			  <!--begin::Table-->
			  <div class="table-responsive">
				  <table class="table table-borderless table-vertical-center">
					  <thead>
						  <tr>
							  <th class="p-0 w-50px"></th>
							  <th class="p-0 min-w-200px"></th>
							  <th class="p-0 min-w-100px"></th>
							  <th class="p-0 min-w-40px"></th>
						  </tr>
					  </thead>
					  <tbody>
						  <tr>
							  <th class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/015-telegram.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </th>
							  <td class="pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Popular Authors</a>
								  <span class="text-muted font-weight-bold d-block">Most Successful</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">83%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-success" role="progressbar" style="width: 83%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
						  <tr>
							  <th class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/003-puzzle.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </th>
							  <td class="pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">New Users</a>
								  <span class="text-muted font-weight-bold d-block">Awesome Users</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">47%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-primary" role="progressbar" style="width: 47%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
						  <tr>
							  <th class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/005-bebo.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </th>
							  <td class="py-6 pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Active Customers</a>
								  <span class="text-muted font-weight-bold d-block">Best Customers</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">71%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-danger" role="progressbar" style="width: 71%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
						  <tr>
							  <td class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/006-plurk.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </td>
							  <td class="pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Top Authors</a>
								  <span class="text-muted font-weight-bold d-block">Successful Fellas</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">65%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-danger" role="progressbar" style="width: 65%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
						  <tr>
							  <th class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/014-kickstarter.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </th>
							  <td class="pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Bestseller Theme</a>
								  <span class="text-muted font-weight-bold d-block">Amazing Templates</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">50%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-info" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
					  </tbody>
				  </table>
			  </div>
			  <!--end::Table-->
		  </div>
		  <!--end::Tap pane-->
		  <!--begin::Tap pane-->
		  <div class="tab-pane fade show active" id="kt_tab_pane_1_3" role="tabpanel" aria-labelledby="kt_tab_pane_1_3">
			  <!--begin::Table-->
			  <div class="table-responsive">
				  <table class="table table-borderless table-vertical-center">
					  <thead>
						  <tr>
							  <th class="p-0 w-50px"></th>
							  <th class="p-0 min-w-200px"></th>
							  <th class="p-0 min-w-100px"></th>
							  <th class="p-0 min-w-40px"></th>
						  </tr>
					  </thead>
					  <tbody>
						  <tr>
							  <td class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/006-plurk.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </td>
							  <td class="pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Top Authors</a>
								  <span class="text-muted font-weight-bold d-block">Successful Fellas</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">65%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-danger" role="progressbar" style="width: 65%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
						  <tr>
							  <th class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/015-telegram.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </th>
							  <td class="pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Popular Authors</a>
								  <span class="text-muted font-weight-bold d-block">Most Successful</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">83%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-success" role="progressbar" style="width: 83%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
						  <tr>
							  <th class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/003-puzzle.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </th>
							  <td class="pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">New Users</a>
								  <span class="text-muted font-weight-bold d-block">Awesome Users</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">47%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-primary" role="progressbar" style="width: 47%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
						  <tr>
							  <th class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/005-bebo.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </th>
							  <td class="py-6 pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Active Customers</a>
								  <span class="text-muted font-weight-bold d-block">Best Customers</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">71%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-danger" role="progressbar" style="width: 71%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
						  <tr>
							  <th class="pl-0 py-5">
								  <div class="symbol symbol-50 symbol-light mr-2">
									  <span class="symbol-label">
										  <img src="/metronic/theme/html/demo13/dist/assets/media/svg/misc/014-kickstarter.svg" class="h-50 align-self-center" alt="">
									  </span>
								  </div>
							  </th>
							  <td class="pl-0">
								  <a href="#" class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Bestseller Theme</a>
								  <span class="text-muted font-weight-bold d-block">Amazing Templates</span>
							  </td>
							  <td>
								  <div class="d-flex flex-column w-100 mr-2">
									  <div class="d-flex align-items-center justify-content-between mb-2">
										  <span class="text-muted mr-2 font-size-sm font-weight-bold">50%</span>
										  <span class="text-muted font-size-sm font-weight-bold">Progress</span>
									  </div>
									  <div class="progress progress-xs w-100">
										  <div class="progress-bar bg-info" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
								  </div>
							  </td>
							  <td class="text-right pr-0">
								  <a href="#" class="btn btn-icon btn-light btn-sm">
									  <span class="svg-icon svg-icon-md svg-icon-success">
										  <!--begin::Svg Icon | path:/metronic/theme/html/demo13/dist/assets/media/svg/icons/Navigation/Arrow-right.svg-->
										  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
											  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												  <polygon points="0 0 24 0 24 24 0 24"></polygon>
												  <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)" x="11" y="5" width="2" height="14" rx="1"></rect>
												  <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"></path>
											  </g>
										  </svg>
										  <!--end::Svg Icon-->
									  </span>
								  </a>
							  </td>
						  </tr>
					  </tbody>
				  </table>
			  </div>
			  <!--end::Table-->
		  </div>
		  <!--end::Tap pane-->
	  </div>
  </div>
</div>`;