import React from "react";
import Base from "../components/Base";
import userContext from "../context/userContext";
import { Button } from "reactstrap";

const Services = () => {
  const handleLogin = () => {
    window.location.href = "/login"; 
  };

  const handleSignup = () => {
    window.location.href = "/signup"; 
  };

  return (
    <userContext.Consumer>
      {(user) => (
        <React.Fragment>
          <style>
            {`
                            .back {
                                position: relative;
                                width: 100%;
                                height: 100vh;
                                overflow: hidden; /* Prevent video overflow */
                            }

                            .video-background {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                z-index: -1;
                            }

                            .overlay {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background-color: rgba(0, 0, 0, 0.4);
                                z-index: 1;
                            }

                            .content {
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                text-align: center;
                                color: #dbdbdb;
                                z-index: 2;
                            }

                            .content h1 {
                                font-size: 3rem;
                                margin-bottom: 1rem;
                            }

                            .content p {
                                font-size: 1.5rem;
                                margin-top: 1rem;
                            }

                            .extra-content {
                                /* Styles for additional content after the video */
                                margin-top: 3rem;
                                
                            }
                            .c1{
                                margin:3rem 4rem 3rem 4rem;
                            }
                        `}
          </style>
          <Base>
            <div className="back">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="video-background"
              >
                <source src="bg video.mp4" type="video/mp4" />
              </video>
              <div className="overlay"></div>
              <div className="content">
                <h1>Welcome you to our Services</h1>
                <p>"Every word we write shapes our journey together."</p>
                <Button color="primary" className="ms-2" onClick={handleLogin}>
                  Login
                </Button>
                <Button color="warning" className="ms-2" onClick={handleSignup}>
                  Register
                </Button>
              </div>
            </div>
            
            <div className="extra-content" > 
              <div class=" text-center c1" style={{ backgroundColor: 'rgb(255 255 255 / 44%)', backdropFilter: 'blur(10px)' }}>
              <div class="row row-cols-1  mb-1 ">
                  <div class="col mt-5"><h2><b>Our Services</b></h2></div>
                 
                </div>
                <div class="row row-cols-1 mt-4  mb-4">
                  <div class="col ">Crafting compelling narratives and fostering community engagement through our dynamic blog platform.</div>
                 
                </div>
                <div class="row row-cols-3 ">
                  <div class="col  p-5">
                  <img
                            alt="logo"
                            src="https://cdn-icons-png.flaticon.com/512/5856/5856221.png"
                            style={{
                                height: 150,
                                width: 150
                            }}
                        />
                    <h5 className="mt-4"><b>User-Friendly Interface</b></h5>
                    <p class="mt-4">Intuitive design and navigation to ensure a seamless user experience for both content creators and readers.</p>
                  </div>
                  <div class="col  p-5">
                  <img
                            alt="logo"
                            src="https://cdn-icons-png.flaticon.com/512/4659/4659006.png"
                            style={{
                                height: 150,
                                width: 150
                            
                            }}
                        />
                  <h5 className="mt-4"><b>Easy Content Management</b></h5>
                    <p class="mt-4">Simplified content creation, editing, and publishing tools for authors, with WYSIWYG (What You See Is What You Get) editors and drag-and-drop functionality.</p>
                  
                  </div>
                  <div class="col p-5">
                  <img
                            alt="logo"
                            src="https://cdn-icons-png.flaticon.com/512/1066/1066631.png"
                            style={{
                                height: 150,
                                width: 150
                            }}
                        />
                  <h5 className="mt-4"><b>Customization Options</b></h5>
                    <p class="mt-4 ">Flexible themes, templates, and styling options to personalize the look and feel of the blog according to individual preferences.</p>

                  </div>
                </div>

                <div class="row row-cols-3 ">
                  <div class="col p-5">
                    <img
                            alt="logo"
                            src="https://cdn-icons-png.flaticon.com/512/2275/2275483.png"
                            style={{
                                height: 150,
                                width: 150
                            }}
                        />
                    <h5 className="mt-4"><b>Commenting System</b></h5>
                    <p class="mt-4">Built-in comment section with moderation tools to facilitate interaction and engagement between authors and readers.</p>
                  </div>
                  <div class="col p-5">
                  <img
                            alt="logo"
                            src="https://cdn-icons-png.flaticon.com/512/1055/1055660.png"
                            style={{
                                height: 150,
                                width: 150
                            }}
                        />
                  <h5 className="mt-4"><b>Security Measures</b></h5>
                    <p class="mt-4">Implementations of security best practices, including SSL encryption.</p>
                  
                  </div>
                  <div class="col  p-5">
                  <img
                            alt="logo"
                            src="https://www.pngkey.com/png/full/249-2492118_web-development-website-maintenance-icon-png.png"
                            style={{
                                height: 150,
                                width: 150
                            }}
                        />
                  <h5 className="mt-4"><b>Easy Maintenance</b></h5>
                    <p class="mt-4 ">Flexible themes, templates, and styling options to personalize the look and feel of the blog according to individual preferences.</p>
                  
                  </div>
                </div>
              </div>
            </div>
          </Base>
        </React.Fragment>
      )}
    </userContext.Consumer>
  );
};

export default Services;
