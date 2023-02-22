
import React from "react";
import vg from "../assets/images/vg.jpeg";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            sit, eum repellendus velit quo dignissimos quia possimus animi
            itaque aperiam libero quisquam recusandae quod? Cumque pariatur
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolores reiciendis, beatae aut quas voluptas iste culpa nulla. Illum
            exercitationem harum quos autem iusto minima rem dolor eius quae
            porro. Neque beatae dolor cupiditate, velit amet eveniet distinctio?
            Dolorum hic quisquam voluptatum nihil reprehenderit eos, doloremque
            quibusdam suscipit excepturi repellendus magni. Aspernatur atque
            ipsa accusantium harum magni voluptatibus dolore deleniti? Sequi
            nisi explicabo laborum deleniti repellendus nam esse, corporis
            necessitatibus laudantium facere corrupti ipsa suscipit itaque culpa
            repudiandae fugit repellat quis eveniet quaerat nemo eos quam. Saepe
            provident fugiat suscipit. Laboriosam asperiores amet porro rerum
            odio delectus? In, ipsa nihil est deleniti repudiandae at minus,
            dolor voluptatem dolorum laborum quibusdam expedita suscipit natus
            sint alias id porro fugiat ducimus voluptas. Corrupti aliquam,
            aspernatur libero ad totam non aperiam alias saepe unde dolore natus
            sit hic atque dignissimos, aut cum obcaecati qui quo ea. Dolore
            ullam cumque consequuntur nobis deleniti laborum! Quidem,
            reprehenderit adipisci, nostrum ipsa nisi eos animi non labore vitae
            veniam aspernatur quae nam iusto quibusdam rem possimus maxime quo
            repellendus asperiores fuga molestiae recusandae aliquid.
            Consequatur, fugiat esse. Esse assumenda deleniti nisi accusantium,
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
