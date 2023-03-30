<template>
  <div>
    <article class="mt-16">
      <figure class="mx-auto">
        <figcaption class="mt-8 text-center text-gray-500">
          #00后&nbsp;&nbsp;#前端工程师&nbsp;&nbsp;#花名伪唐
        </figcaption>
      </figure>
      <p>2019.9 ~ 2023.6 西南石油大学本科软件工程 在这里认识了一群很不错的同学。</p>
      <p>2022.1 ~ 2022.4 <span class="text-orange-500">北京小米集团前端</span>开发实习生，学习到了一些前沿的新技术，第一次明白了职场的运转。</p>
      <p>2022.5 ~ 2022.11 <span class="text-sky-500">上海哔哩哔哩公司</span>前端开发实习生，nice的同事，开阔的视野，接触到low code平台。</p>
      <p>2023.6 ~ ? <span class="text-orange-600">北京快手集团</span>前端开发工程师，将在这里开启丰富精彩的未来几年职场生涯。</p>
      <p>我的目标是认真工作，学习大佬们的经验，做一个值得大家相信的前端开发工程师；同时攒钱出国读书。</p>
      <p>这个网站将会发一些个人平时写的文章，望大佬们指出不足，鞭策自己work hard.</p>
      <img src="../assets/bilibili.png" alt="bilibili时期">
      <img src="../assets/快手offer.jpg" alt="快手生涯开始">
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About",
  components: {},
});
</script>

<style lang="postcss">
figure {
  max-width: fit-content;
}
img {
  @apply my-4;
}
p {
  @apply my-4;
}
</style>

