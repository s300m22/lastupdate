import React, {useState,useEffect} from 'react'
import Link from 'next/link';
import Modal from 'react-modal'
import {useRouter} from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const getStaticProps = async () => {
  const res = await fetch('https://ffapps.itvip.live/api/auth/me')
  const data = await res.json();
  return {
    // props:{data}
    props: {posts:data}
    
  }
}




// useEffect(() => {
//   // DELETE request using fetch with async/await
//   async function deletePost() {
//       await fetch('https://ffapps.itvip.live/api/auth/delete/5', { method: 'DELETE' });
//       setStatus('Delete successful');
//   }

//   deletePost();
// }, []);


//getServerSideProps
export default function alluser({posts}) {
  const router = useRouter()


 //useEffect(()=>{
  async function Delete(id){
  if(window.confirm('are you sure ?')){
    await fetch('https://ffapps.itvip.live/api/auth/delete/'+ id);
 
   }
  await router.push('/components/alluser')
  }

   function Edit(id){
   console.log(id);
   <Modal isOpen={true}>
     <div>
       hi
     </div>
   </Modal>
    
    }
 // forceUpdate(id)
 //},[])
 
  //console.log('https://ffapps.itvip.live/api/auth/delete/'+id);

  //const handleRemove = useForceUpdate();
const result = posts.map(post => {
  return(
          <tr key={post.id}>

             <td>{post.username}</td>
             <td>{post.firstname +' '+ post.lastname}</td>
             <td>{post.email}</td>
             <td>{post.role}</td>
             <td>{post.status == 0 ? 'Waiting approval' : 'No'}</td>
                                  
              <td>
                  <div class="status-toggle">
                    <input type="checkbox" id={"status_" +`${post.id}`} class="check" />
                    <label for={"status_" +`${post.id}`} class="checktoggle">checkbox</label>
                  </div>
              </td>
                                   
              <td>
                
              <button type="button" class="btn btn-labeled btn-danger" onClick={() => Delete(post.id)}>
                <span class="btn-label"></span>Trash</button>
                <span style={{marginRight:'5px'}}></span>

                <Link href={"/components/"+`${post.id}`}>
                  <a class="btn btn-labeled btn-success"> <span class="btn-label"></span>Edit</a>
               
                </Link>
               
               
                  
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
                          <th>Active</th>
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
