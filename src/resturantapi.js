import React, { useState } from "react";
import axios from "axios";
import './resturantapi.css';
import Containers from './containers';
import 'bootstrap/dist/css/bootstrap.css';

export default function Resturantapi(){
    let [info, setInfo] = useState("");
    let [load, setLoad] = useState(false);

    function displayResturant(response){
        setInfo(response.data)
        setLoad(true)
    }


    if(load){

        return(
            <div>
                <Containers/>

                <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">{info[3].name}</h2>
                            <p class="lead">
                                {info[3].address.address1} 
                                {info[3].address.city}, 
                                {info[3].address.state}
                            </p>
                            <div class="bg-body shadow-sm mx-auto">
                                <img src={info[3].profile_photo.url} alt="profile_photo"></img>
                            </div>
                        </div>
                    </div>

                    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">{info[1].name}</h2>
                            <p class="lead">
                                {info[1].address.address1} 
                                {info[1].address.city}, 
                                {info[1].address.state}                            
                            </p>
                            <div class="bg-dark shadow-sm mx-auto">
                                <img src={info[1].profile_photo.url} alt="profile_photo"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">{info[0].name}</h2>
                            <p class="lead">
                                {info[0].address.address1} 
                                {info[0].address.city}, 
                                {info[0].address.state}                            
                            </p>
                            <div class="bg-dark shadow-sm mx-auto">
                                <img src={info[0].profile_photo.url} alt="profile_photo"></img>
                            </div>
                        </div>
                    </div>

                    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">{info[2].name}</h2>
                            <p class="lead">
                                {info[2].address.address1} 
                                {info[2].address.city}, 
                                {info[2].address.state}
                            </p>
                            <div class="bg-body shadow-sm mx-auto">
                                <img src={info[2].profile_photo.url} alt="profile_photo"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">{info[4].name}</h2>
                            <p class="lead">
                                {info[4].address.address1} 
                                {info[4].address.city}, 
                                {info[4].address.state}  
                            </p>
                            <div class="bg-light shadow-sm mx-auto">
                                <img src={info[4].profile_photo.url} alt="profile_photo"></img>
                            </div>
                        </div>
                    </div>

                    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">{info[5].name}</h2>
                            <p class="lead">
                                {info[5].address.address1} 
                                {info[5].address.city}, 
                                {info[5].address.state}  
                            </p>
                            <div class="bg-body shadow-sm mx-auto">
                                <img src={info[5].profile_photo.url} alt="profile_photo"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">{info[6].name}</h2>
                            <p class="lead">
                                {info[6].address.address1} 
                                {info[6].address.city}, 
                                {info[6].address.state}                            
                            </p>
                            <div class="bg-body shadow-sm mx-auto">
                                <img src={info[6].profile_photo.url} alt="profile_photo"></img>
                            </div>
                        </div>
                    </div>

                    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">{info[7].name}</h2>
                            <p class="lead">
                                {info[7].address.address1} 
                                {info[7].address.city}, 
                                {info[7].address.state}
                                
                            </p>
                            <div class="bg-body shadow-sm mx-auto">
                                <img src={info[7].profile_photo.url} alt="profile_photo"></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>            
        );
    }
    else{
        let apiurl = 'https://rest.zsf.io/api/v1/restaurants'
        let headers = {'api-key': "c0ec17cc-7776-4fa4-8596-65e8426de810"}

        axios.get(apiurl, {headers: headers}).then(displayResturant);
        return(<div>Loading...</div>);
    }
}
