import React, {} from "react";
import './containers.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Containers(){
    return(
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center text-dark bg-image">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
                <h1 class="display-4 fw-normal">OpenAvenue Resutrants</h1>
                <p class="lead fw-normal">DESCRIPTION</p>
                <p class="lead fw-normal"> </p>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>     
    );
}