import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const getStaticProps = async () => {
  const res = await fetch('https://ffapps.itvip.live/api/auth/me')
  const data = await res.json();
  return {
    // props:{data}
    props: {posts:data}
    
  }
}
//getServerSideProps
export default function alluser({posts}) {
const result = posts.map(post => {
  return(
          <tr key={post.id}>

             <td>{post.username}</td>
             <td>{post.firstname +' '+ post.lastname}</td>
             <td>{post.email}</td>
             <td>{post.role == 0 ? 'Waiting approval' : 'No'}</td>
                                  
              <td>
                  <div class="status-toggle">
                    <input type="checkbox" id={"status_" +`${post.id}`} class="check" />
                    <label for={"status_" +`${post.id}`} class="checktoggle">checkbox</label>
                  </div>
              </td>
                                   
              <td>
                
              <button type="button" class="btn btn-labeled btn-danger">
                <span class="btn-label"><FontAwesomeIcon icon={["fal", "coffee"]} /></span>Trash</button>
                  
              </td>
          </tr>
  )
})
  return (
          <div>
              <div class="page-wrapper">
                <div class="content container-fluid">
				
					
                  <div class="page-header">
                    <div class="row">
                      <div class="col-sm-12">
                        <h3 class="page-title">Users</h3>
                        <ul class="breadcrumb">
                          <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                          <li class="breadcrumb-item active">Users</li>
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
													<th>Full Name</th>
													<th>Email</th>
													<th>Role</th>
                          <th>Pending Approval</th>
                          <th>Action</th>
												
													
												</tr>
											</thead>
											<tbody>
												{result}
											
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
