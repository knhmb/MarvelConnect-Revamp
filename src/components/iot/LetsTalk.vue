<template>
  <section class="blog">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="8">
          <ul>
            <li>Device’s connection</li>
            <li>Network Interconnection</li>
            <li>Central Control Hardware</li>
            <li>Data Analysis</li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="16">
          <p>
            The term "Internet of Things" refers to the various methods by which
            tangible or intangible objects are connected in order to provide new
            services that the individual items could not provide. As the term
            itself implies, the Internet of Things refers to an internet in
            which objects are connected together or an internet composed of
            objects.
          </p>
          <p>
            Unlike the pre-existing internet, through which computers or
            cellphones were connected, the Internet of Things means an internet
            in which everything in the world– desks, vehicles, bags, trees,
            pets, and everything else–is connected.
          </p>
        </el-col>
        <el-col>
          <base-button :mode="'bold'">LET’S TALK</base-button>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.iot .blog {
  padding: 5rem 0;
  background: #e6e6e6;
}

.iot .blog ul {
  list-style: none;
}

.iot .blog li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  color: #111111;
  margin-bottom: 2rem;
}

.iot .blog li::before {
  content: "+";
  color: #0de9f6;
  margin-right: 1rem;
}

.iot .blog p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 210%;
  color: #6f6f6f;
  margin-bottom: 2rem;
}

.iot .blog p:first-of-type {
  margin-top: 7rem;
}

.iot .blog .el-col:last-of-type {
  display: flex;
  justify-content: center;
  margin: 6rem 0;
}

@media screen and (max-width: 991px) {
  .iot .blog p:first-of-type {
    margin-top: 0;
  }
}
</style>