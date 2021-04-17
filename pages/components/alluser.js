import React from 'react'

const alluser = () => {
    return (
        <div>
              <div class="page-wrapper">
                <div class="content container-fluid">
				
					
					<div class="page-header">
						<div class="row">
							<div class="col-sm-12">
								<h3 class="page-title">Appointments</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li class="breadcrumb-item active">Appointments</li>
								</ul>
							</div>
						</div>
					</div>
				
					<div class="row">
						<div class="col-md-12">
						
						
							<div class="card">
								<div class="card-body">
									<div class="table-responsive">
										<table class="datatable table table-hover table-center mb-0">
											<thead>
												<tr>
													<th>Username</th>
													<th>Name</th>
													<th>Patient Name</th>
													<th>Email</th>
                                                    <th>Role</th>
													<th>Status</th>
													
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2">
                                                                <img class="avatar-img rounded-circle" src="/img/doctors/doctor-thumb-01.jpg" alt="User Image"/></a>
															<a href="profile.html">Dr. Ruby Perrin</a>
														</h2>
													</td>
													<td>Dental</td>
													<td>
														<h2 class="table-avatar">
															<a href="profile.html" class="avatar avatar-sm mr-2">
                                                                <img class="avatar-img rounded-circle" src="/img/patients/patient1.jpg" alt="User Image"/></a>
															<a href="profile.html">Charlene Reed </a>
														</h2>
													</td>
													<td>s300m22@gmail.com</td>
													<td>
														Admin
													</td>
                                                    <td>
														<div class="status-toggle">
															<input type="checkbox" id="status_1" class="check" />
															<label for="status_1" class="checktoggle">checkbox</label>
														</div>
													</td>
													
												</tr>
											
										
												
												
											
											</tbody>
										</table>
									</div>
								</div>
							</div>
						
							
						</div>
					</div>
				</div>			
			</div>
        </div>
    )
}

export default alluser
