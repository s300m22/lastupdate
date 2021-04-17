import React from 'react'
import Link from 'next/link'
 
const sidebar = () => {
    return (
        <div>
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
					<div id="sidebar-menu" className="sidebar-menu">
						<ul>
							<li className="menu-title"> 
								<span>Main</span>
							</li>
							<li className="active"> 
                                <Link href='/'>
                                    <a><i className="fe fe-home"></i> <span>Dashboard</span></a>
                               </Link>
                                    
							</li>
							
							<li className="submenu">
								<a href="#"><i className="fe fe-document"></i> <span> Users </span> <span className="menu-arrow"></span></a>
								<ul style={{ display:"none" }}>
									<li>
                                    <Link href='/components/addnew'>
                                        <a> Add New </a>
                                    </Link>
                                    <Link href='/components/alluser'>
                                        <a> All Users </a>
                                    </Link>
                                  
                                    </li>
									
								</ul>
							</li>
							
						
							
						</ul>
					</div>
                </div>
            </div>    
        </div>
    )
}

export default sidebar
