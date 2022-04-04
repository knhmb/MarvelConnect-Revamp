<template>
  <section class="blog">
    <base-container>
      <el-row>
        <el-col :sm="24" :md="7">
          <ul>
            <li>Blog/Article promotion</li>
            <li>Professional content</li>
            <li>Advertorial Writing</li>
          </ul>
        </el-col>
        <el-col :sm="24" :md="17">
          <p>
            The company owns media brands HKITBLOG, Business Development Manager
            at Marvelconnect says: “We have received supports from many
            well-known brands and our clients are all around the world, mainly
            Forbes 500 companies, including Microsoft, Check Point, HP, HPE,
            IBM, Huawei, Brother, Equinix and etc.”
          </p>
          <p>
            Marvelconnect provides the most professional content, our editors
            are all industry veterans. In 2017, our media platform achieved a
            record 16,000,000 viewership, became the most-viewed platform among
            the same type of media platforms.
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
.media .blog {
  padding: 5rem 0;
  background: #e6e6e6;
}

.media .blog ul {
  list-style: none;
}

.media .blog li {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  color: #111111;
  margin-bottom: 2rem;
}

.media .blog li::before {
  content: "+";
  color: #0de9f6;
  margin-right: 1rem;
}

.media .blog p {
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 210%;
  color: #6f6f6f;
  margin-bottom: 2rem;
}

.media .blog p:first-of-type {
  margin-top: 7rem;
}

.media .blog .el-col:last-of-type {
  display: flex;
  justify-content: center;
  margin: 6rem 0;
}

@media screen and (max-width: 991px) {
  .media .blog p:first-of-type {
    margin-top: 0;
  }
}
</style>