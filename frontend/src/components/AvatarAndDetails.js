import React from "react";

export default function AvatarSec(){
    return (
        <>
        
    <div class="card-body text-center m-4 ps-4">
            {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" style={{"width": "150px"}}/> */}
            <div className="d-flex justify-content-center">
            <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            alt="Avatar"
            style={{ height: '100px', width: '100px' }}
            className="rounded-circle mt-4 "
            />
            </div>
            
            <h5 class="my-3">John Smith</h5>
            <p class="text-muted mb-1">Full Stack Developer</p>
            <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div class="d-flex justify-content-center mb-2">
            </div>
    </div>
    </>
    )
}