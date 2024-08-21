// import React from "react";
// import Base from "../components/Base";
// import { Button } from "reactstrap";

// const About = () => {

//   const handleLogin = () => {
//     window.location.href = "/login"; // Redirect to "/login" route
//   };

//   const handleSignup = () => {
//     window.location.href = "/signup"; // Redirect to "/signup" route
//   };
//   return (
//     <Base>
//       <style>
//         {`
//           .para {
//             font-family: 'Arial Rounded MT Bold', sans-serif;
//           }
//         `}
//       </style>
//       <div
//         id="carouselExampleCaptions"
//         className="carousel slide"
//         data-bs-ride="carousel"
//         style={{ display: "flex", zIndex: 2 }}
//       >
//         {/* Overlay */}
//         <div
//           className="position-absolute top-0 start-0 w-100 h-100"
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.4)",
//             zIndex: 3 // Adjust the opacity as needed
//           }}
//         ></div>
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             style={{ zIndex: 4 }}
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             style={{ zIndex: 4 }}
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             style={{ zIndex: 4 }}
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src="https://i.ibb.co/LCWz7G5/book-1945459-1280-1.jpg"
//               className="d-block"
//               alt="First slide"
//               style={{ width: "100%", height: "620px" }}
//             />
//             <div className="carousel-caption d-none d-md-block" style={{ zIndex: 4 }} >
//               <h5 style={{ marginTop: "-25rem", fontSize: '2.25rem' }}>Welcome To Story Stream</h5>
//               <p style={{ fontSize: '20px', marginTop: '20px' }}>Welcome to a world where stories flow freely, enriching our lives and shaping our shared experiences.</p>
//               <Button color="primary" className="ms-2" onClick={handleLogin}>
//                 Login
//               </Button>
//               <Button color="warning" className="ms-2" onClick={handleSignup}>
//                 Register
//               </Button>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block"
//               alt="Second slide"
//               src="https://i.ibb.co/DGST4Mh/desk-3076954-1280-1.jpg"
//               style={{ width: "100%", height: "620px" }}
//             />
//             <div className="carousel-caption d-none d-md-block" style={{ zIndex: 4 }}>
//               <h5 style={{ marginTop: "-25rem", fontSize: '2.25rem' }}>Welcome To Story Stream</h5>
//               <p style={{ fontSize: '20px', marginTop: '20px' }}>Welcome to a world where stories flow freely, enriching our lives and shaping our shared experiences.</p>
//               <Button color="primary" className="ms-2" onClick={handleLogin}>
//                 Login
//               </Button>
//               <Button color="warning" className="ms-2" onClick={handleSignup}>
//                 Register
//               </Button>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               src="https://e0.pxfuel.com/wallpapers/386/199/desktop-wallpaper-book-aesthetic-books-aesthetic.jpg"
//               className="d-block"
//               alt="Third slide"
//               style={{ width: "100%", height: "620px" }}
//             />
//             <div className="carousel-caption d-none d-md-block" style={{ zIndex: 4 }}>
//               <h5 style={{ marginTop: "-25rem", fontSize: '2.25rem' }}>

//                 Welcome To Stroy Stream</h5>
//               <p style={{ fontSize: '20px', marginTop: '20px' }}>Welcome to a world where stories flow freely, enriching our lives and shaping our shared experiences.</p>
//               <Button color="primary" className="ms-2" onClick={handleLogin}>
//                 Login
//               </Button>
//               <Button color="warning" className="ms-2" onClick={handleSignup}>
//                 Register
//               </Button>
//             </div>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       {/* <div className="border border-black mx-5 my-5">
//         <div className="row">
//           <div className="col-4 border text-center border-black">
//             <img src="https://www.studystream.live/blog/content/images/size/w2000/2023/03/books-1835753.jpg" alt="Third slide" style={{ width: '100%', margin: '5px' }} />
//           </div>
//           <div className="col-1 border border-black">col-4</div>
//           <div className="col-7 border border-black">
//             <h3 className='mt-4'>About Our Story Stream</h3>
//             <p className="para mt-4">Our blog offers a diverse range of content, catering to readers interested in technology trends, AI advancements, productivity tips, and insightful reflections on current events. We delve into emerging technologies like artificial intelligence, blockchain, and virtual reality, discussing their applications and impact. Additionally, we provide practical advice for improving productivity through time management strategies and workflow optimization tips.</p>
//             <p className='para mt-4'>Our analysis of current events offers readers a nuanced understanding of the world around them, while our how-to guides and guest contributions aim to empower readers with actionable knowledge and diverse perspectives. Whether you're looking to stay informed about the latest tech trends or seeking practical tips for personal and professional growth, our blog has something for everyone.</p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-7 mt-4 border-black">
//           <h3 className='mt-4'>About Our Story Stream</h3>
//             <p className="para mt-4">Our blog offers a diverse range of content, catering to readers interested in technology trends, AI advancements, productivity tips, and insightful reflections on current events. We delve into emerging technologies like artificial intelligence, blockchain, and virtual reality, discussing their applications and impact. Additionally, we provide practical advice for improving productivity through time management strategies and workflow optimization tips.</p>
//             <p className='para mt-4'>Our analysis of current events offers readers a nuanced understanding of the world around them, while our how-to guides and guest contributions aim to empower readers with actionable knowledge and diverse perspectives. Whether you're looking to stay informed about the latest tech trends or seeking practical tips for personal and professional growth, our blog has something for everyone.</p>
//           </div>
//           <div className="col-1 border border-black">col-4</div>
//           <div className="col-4 border border-black">
//           <img src="https://www.studystream.live/blog/content/images/size/w1000/2023/02/woman-792162_1920--1-.jpg" alt="Third slide" style={{ width: '100%', margin: '5px' }} />
           
//           </div>
//         </div>
//       </div> */}
//       {/* Cambria */}

//       <div style={{ backgroundColor: 'rgb(255 255 255 / 44%)', backdropFilter: 'blur(15px)', fontSize: '18px' }}>

//         <div class="d-flex position-relative mt-5 p-5">
//           <img
//             src="https://www.studystream.live/blog/content/images/size/w2000/2023/01/desk-g1eecb56d6_1920.jpg"
//             class="flex-shrink-0 me-3"
//             alt="Logo"
//             style={{ width: "25%", height: "250px", margin: "10px" }}
//           />
//           <div>
//             <h3 class="mt-0 ms-3"><b>About Our Story Stream</b></h3>
//             <p class="ms-3">
//               Our blog offers a diverse range of content, catering to readers
//               interested in technology trends, AI advancements, productivity tips,
//               and insightful reflections on current events. We delve into emerging
//               technologies like artificial intelligence, blockchain, and virtual
//               reality, discussing their applications and impact. Additionally, we
//               provide practical advice for improving productivity through time
//               management strategies and workflow optimization tips.
//             </p>
//             <p class="ms-3">
//               {" "}
//               Our analysis of current events offers readers a nuanced
//               understanding of the world around them, while our how-to guides and
//               guest contributions aim to empower readers with actionable knowledge
//               and diverse perspectives. Whether you're looking to stay informed
//               about the latest tech trends or seeking practical tips for personal
//               and professional growth, our blog has something for everyone.
//             </p>
//           </div>
//         </div>

//         <div class="d-flex position-relative mt-0 pt-0 p-5">
//           <div>
//             <h3 class="mt-0 me-3"><b>Our Mission</b></h3>
//             <p class="me-3">
//               At Story, our mission is to provide a platform where individuals
//               can explore, engage, and connect through the power of
//               storytelling. We believe that everyone has a story to tell and
//               that sharing these stories can foster empathy, understanding, and
//               community. Through our diverse range of content, we aim to inform,
//               inspire, and entertain our readers.
//             </p>
//             <p class="me-3">
//               Whether it's delving into emerging trends, discussing
//               thought-provoking topics, or offering practical advice, we strive
//               to create a space where individuals can discover new ideas, gain
//               insights, and find moments of connection. Our mission is to
//               empower our readers to embrace curiosity, embrace diverse
//               perspectives, and engage in meaningful conversations that enrich
//               their lives and the lives of others.
//             </p>
//           </div>
//           <img
//             src="https://www.studystream.live/blog/content/images/size/w1000/2023/01/lonely-g776120d1e_1920.jpg"
//             class="flex-shrink-0 me-3"
//             alt="Logo"
//             style={{ width: "25%", height: "250px", margin: "10px" }}
//           />
//         </div>

//         <div
//           class="d-flex position-relative mt-0 pt-0 p-5"

//         >
//           <img
//             class="flex-shrink-0 me-3"
//             alt="Logo"
//             src="https://www.studystream.live/blog/content/images/size/w1000/2023/01/drink-g93ce475cc_1920.jpg"
//             style={{ width: "25%", height: "250px", margin: "10px" }}
//           />
//           <div>
//             <h3 class="mt-0 ms-3"><b>What We Offer</b></h3>
//             <p class="me-3">
//               Our blog offers a diverse range of content, catering to readers
//               interested in technology trends, AI advancements, productivity
//               tips, and insightful reflections on current events. We delve into
//               emerging technologies like artificial intelligence, blockchain,
//               and virtual reality, discussing their applications and impact.
//               Additionally, we provide practical advice for improving
//               productivity through time management strategies and workflow
//               optimization tips. Our analysis of current events offers readers a
//               nuanced understanding of the world around them, while our how-to
//               guides and guest contributions aim to empower readers with
//               actionable knowledge and diverse perspectives. Whether you're
//               looking to stay informed about the latest tech trends or seeking
//               practical tips for personal and professional growth, our blog has
//               something for everyone.
//             </p>
//           </div>
//         </div>

//         <div class="d-flex position-relative mt-0 pt-0 p-5">
//           <div>
//             <h3 class="mt-0 me-3"><b>Our Community</b></h3>
//             <p class="me-3">
//               Our Community Content" section in a blog application serves as a platform for community members to share their thoughts, experiences, and expertise. This section fosters engagement and collaboration among users, enriching the overall blogging experience. Community-generated content often includes a diverse range of topics, reflecting the interests and passions of the users.
//             </p>
//             <p class="me-3">Within this section, users can find a variety of articles, blog posts, and discussions contributed by fellow community members. These contributions may cover a wide array of subjects, including personal anecdotes, professional insights, tutorials, reviews, and more. Each piece of content offers unique perspectives and valuable insights, contributing to the collective knowledge base of the community.</p>
//             <p class="me-3">Moreover, the community content section encourages interaction and participation through comments, likes, shares, and discussions. Users can engage with the content by leaving comments, asking questions, sharing their opinions, and providing feedback </p>
//           </div>
//           <img
//             src="https://www.studystream.live/blog/content/images/size/w1000/2022/12/people-g946894ce1_1920.jpg"
//             class="flex-shrink-0 me-3"
//             alt="Logo"
//             style={{ width: "25%", height: "250px", margin: "10px" }}
//           />
//         </div>
//       </div>
//     </Base>
//   );
// };

// export default About;


import React from "react";
import Base from "../components/Base";
import { Button } from "reactstrap";

const About = () => {

  const handleLogin = () => {
    window.location.href = "/login"; // Redirect to "/login" route
  };

  const handleSignup = () => {
    window.location.href = "/signup"; // Redirect to "/signup" route
  };

  return (
    <Base>
      <style>
        {`
          .para {
            font-family: 'Arial Rounded MT Bold', sans-serif;
          }
        `}
      </style>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ display: "flex", zIndex: 2 }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 3 // Adjust the opacity as needed
          }}
        ></div>
        <div className="carousel-indicators">
          <button
            type="button"
            style={{ zIndex: 4 }}
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            style={{ zIndex: 4 }}
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            style={{ zIndex: 4 }}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.ibb.co/LCWz7G5/book-1945459-1280-1.jpg"
              className="d-block"
              alt="First slide"
              style={{ width: "100%", height: "620px" }}
            />
            <div className="carousel-caption d-none d-md-block" style={{ zIndex: 4 }} >
              <h5 style={{ marginTop: "-25rem", fontSize: '2.25rem' }}>Welcome To Story Stream</h5>
              <p style={{ fontSize: '20px', marginTop: '20px' }}>Welcome to a world where stories flow freely, enriching our lives and shaping our shared experiences.</p>
              <Button color="primary" className="ms-2" onClick={handleLogin}>
                Login
              </Button>
              <Button color="warning" className="ms-2" onClick={handleSignup}>
                Register
              </Button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              alt="Second slide"
              src="https://i.ibb.co/DGST4Mh/desk-3076954-1280-1.jpg"
              style={{ width: "100%", height: "620px" }}
            />
            <div className="carousel-caption d-none d-md-block" style={{ zIndex: 4 }}>
              <h5 style={{ marginTop: "-25rem", fontSize: '2.25rem' }}>Welcome To Story Stream</h5>
              <p style={{ fontSize: '20px', marginTop: '20px' }}>Welcome to a world where stories flow freely, enriching our lives and shaping our shared experiences.</p>
              <Button color="primary" className="ms-2" onClick={handleLogin}>
                Login
              </Button>
              <Button color="warning" className="ms-2" onClick={handleSignup}>
                Register
              </Button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://e0.pxfuel.com/wallpapers/386/199/desktop-wallpaper-book-aesthetic-books-aesthetic.jpg"
              className="d-block"
              alt="Third slide"
              style={{ width: "100%", height: "620px" }}
            />
            <div className="carousel-caption d-none d-md-block" style={{ zIndex: 4 }}>
              <h5 style={{ marginTop: "-25rem", fontSize: '2.25rem' }}>Welcome To Story Stream</h5>
              <p style={{ fontSize: '20px', marginTop: '20px' }}>Welcome to a world where stories flow freely, enriching our lives and shaping our shared experiences.</p>
              <Button color="primary" className="ms-2" onClick={handleLogin}>
                Login
              </Button>
              <Button color="warning" className="ms-2" onClick={handleSignup}>
                Register
              </Button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div style={{ backgroundColor: 'rgb(255 255 255 / 44%)', backdropFilter: 'blur(15px)', fontSize: '18px' }}>
        <div className="container">
          <div className="row align-items-center mt-5 p-5">
            <div className="col-12 col-md-4">
              <img
                src="https://www.studystream.live/blog/content/images/size/w2000/2023/01/desk-g1eecb56d6_1920.jpg"
                alt="Desk"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-12 col-md-8">
              <h3><b>About Our Story Stream</b></h3>
              <p>
                Our blog offers a diverse range of content, catering to readers
                interested in technology trends, AI advancements, productivity tips,
                and insightful reflections on current events. We delve into emerging
                technologies like artificial intelligence, blockchain, and virtual
                reality, discussing their applications and impact. Additionally, we
                provide practical advice for improving productivity through time
                management strategies and workflow optimization tips.
              </p>
              <p>
                Our analysis of current events offers readers a nuanced
                understanding of the world around them, while our how-to guides and
                guest contributions aim to empower readers with actionable knowledge
                and diverse perspectives. Whether you're looking to stay informed
                about the latest tech trends or seeking practical tips for personal
                and professional growth, our blog has something for everyone.
              </p>
            </div>
          </div>

          <div className="row align-items-center mt-5 p-5 flex-column-reverse flex-md-row">
            <div className="col-12 col-md-8">
              <h3><b>Our Mission</b></h3>
              <p>
                At Story, our mission is to provide a platform where individuals
                can explore, engage, and connect through the power of
                storytelling. We believe that everyone has a story to tell and
                that sharing these stories can foster empathy, understanding, and
                community. Through our diverse range of content, we aim to inform,
                inspire, and entertain our readers.
              </p>
              <p>
                Whether it's delving into emerging trends, discussing
                thought-provoking topics, or offering practical advice, we strive
                to create a space where individuals can discover new ideas, gain
                insights, and find moments of connection. Our mission is to
                empower our readers to embrace curiosity, embrace diverse
                perspectives, and engage in meaningful conversations that enrich
                their lives and the lives of others.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <img
                src="https://www.studystream.live/blog/content/images/size/w1000/2023/01/lonely-g776120d1e_1920.jpg"
                alt="Lonely"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
          </div>

          <div className="row align-items-center mt-5 p-5">
            <div className="col-12 col-md-4">
              <img
                src="https://www.studystream.live/blog/content/images/size/w1000/2023/01/drink-g93ce475cc_1920.jpg"
                alt="Drink"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
            <div className="col-12 col-md-8">
              <h3><b>What We Offer</b></h3>
              <p>
                Our blog offers a diverse range of content, catering to readers
                interested in technology trends, AI advancements, productivity
                tips, and insightful reflections on current events. We delve into
                emerging technologies like artificial intelligence, blockchain,
                and virtual reality, discussing their applications and impact.
                Additionally, we provide practical advice for improving
                productivity through time management strategies and workflow
                optimization tips. Our analysis of current events offers readers a
                nuanced understanding of the world around them, while our how-to
                guides and guest contributions aim to empower readers with
                actionable knowledge and diverse perspectives. Whether you're
                looking to stay informed about the latest tech trends or seeking
                practical tips for personal and professional growth, our blog has
                something for everyone.
              </p>
            </div>
          </div>

          <div className="row align-items-center mt-5 p-5 flex-column-reverse flex-md-row">
            <div className="col-12 col-md-8">
              <h3><b>Our Community</b></h3>
              <p>
                Our Community Content" section in a blog application serves as a platform for community members to share their thoughts, experiences, and expertise. This section fosters engagement and collaboration among users, enriching the overall blogging experience. Community-generated content often includes a diverse range of topics, reflecting the interests and passions of the users.
              </p>
              <p>Within this section, users can find a variety of articles, blog posts, and discussions contributed by fellow community members. These contributions may cover a wide array of subjects, including personal anecdotes, professional insights, tutorials, reviews, and more. Each piece of content offers unique perspectives and valuable insights, contributing to the collective knowledge base of the community.</p>
              <p>Moreover, the community content section encourages interaction and participation through comments, likes, shares, and discussions. Users can engage with the content by leaving comments, asking questions, sharing their opinions, and providing feedback </p>
            </div>
            <div className="col-12 col-md-4">
              <img
                src="https://www.studystream.live/blog/content/images/size/w1000/2022/12/people-g946894ce1_1920.jpg"
                alt="Community"
                className="img-fluid mb-3 mb-md-0"
              />
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default About;
