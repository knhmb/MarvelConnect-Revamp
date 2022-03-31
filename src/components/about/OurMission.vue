<template>
  <section class="our-mission">
    <base-container>
      <el-row>
        <el-col :sm="24" :lg="14">
          <h4>
            Our Mission and <br />
            Vision.
          </h4>
        </el-col>
        <el-col :sm="24" :lg="10">
          <ul>
            <li>
              <h5>Thousands of Customers</h5>
              <p>
                We have always helped thousands of customers develop their
                representative programming design.
              </p>
            </li>
            <li>
              <h5>Local Team with Best Products</h5>
              <p>
                Our development experts provide a tailor-made solution to our
                customers.
              </p>
            </li>
            <li>
              <h5>Solutions from Customer’s View</h5>
              <p>
                Our experts in our development team help our customers solve the
                problem and find the best solution.
              </p>
            </li>
            <li>
              <h5>Five Star Service</h5>
              <p>
                Excellent customer service is the surest way to greater success
                for your organization. We make sure you realize value fast. We
                guarantee that we will be at your service whenever you encounter
                problems
              </p>
            </li>
          </ul>
        </el-col>
      </el-row>

      <div class="circle"></div>
    </base-container>
  </section>
</template>

<style scoped>
.our-mission {
  padding: 7rem 0;
  position: relative;
  background: #f7f7f7;
  background-image: url("../../assets/Ellipse-20-1.png");
  background-repeat: no-repeat;
  /* background-size: ; */
  background-size: 57%;
  background-position: center;
}

.circle {
  position: relative;
  /* padding-bottom: 17rem; */
}
/* .our-mission::after {
  content: "";
  position: absolute;
  background: rgba(0, 0, 0, 0.05);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  border-radius: 100%;
} */

.our-mission h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 90px;
  letter-spacing: -0.005em;
  color: #111111;
}

.our-mission ul {
  list-style-type: none;
  margin-top: 9rem;
}

.our-mission ul li {
  margin-bottom: 2rem;
}

.our-mission ul li h5 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.005em;
  color: #111111;
  margin-bottom: 1rem;
}

.our-mission ul li p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 210%;
  color: #6f6f6f;
}

@media screen and (max-width: 1199px) {
  .our-mission ul {
    margin-top: 3rem;
  }
}

/* .our-mission .el-row .el-col:nth-of-type(2) {
  margin-top: 7rem;
} */
</style>