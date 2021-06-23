<template>
  <section id="articles" class="container items-center px-5 py-8 mx-auto lg:px-24border rounded-md border-blueGray-200">
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div v-for="post in posts" :key="post.title" class="p-4 md:w-1/3">
            <div class="img-hover-zoom bg-white h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <nuxt-link class="nav-link" :to="'/blog/' + post.path.split('/')[1]">
                <div style="overflow: hidden;">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center" 
                    v-if="post.image"
                    :src="
                      post.image.startsWith('http') ?
                      post.image :
                      require('~/content/' +
                        post.path.split('/')[1] +
                        '/images/' +
                        post.image)
                    "
                    :alt="post.title">
                </div>
              </nuxt-link>
              <div class="p-6">
                <h2 class="tracking-widest text-x title-font font-medium text-gray-400 mb-1">{{ post.title }}</h2>
                <span v-for="tag in post.tags" :key="tag" class="inline-block rounded-full text-gray-600 bg-gray-100 px-2 py-1 text-xs font-bold mr-3">{{ tag }}</span>
                <p class="leading-relaxed mb-3">{{ post.description }}</p>
                <div class="flex items-center flex-wrap ">
                  <nuxt-link :to="'/blog/' + post.path.split('/')[1]" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Read
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  watchQuery: ['s'],
  key: (to) => to.fullPath,
  data: function () {
    return {
      page: 1,
      search: '',
    }
  },
  methods: {
    async getMorePosts() {
      const blogPosts = await this.$content({ deep: true })
        .only(['title', 'description', 'image', 'path', 'date', 'tags'])
        .sortBy('date', 'desc')
        .skip(9 * this.page)
        .limit(9)
        .fetch()
      blogPosts.forEach((post) => {
        this.posts.push(post)
      })
      this.page++
    },
    execSearch() {
      if (this.search == '') return '/articles/'
      return '/articles/?s=' + this.search.toLowerCase()
    },
  },
  async asyncData({ $content, route }) {
    const searchQuery = route.query['s']
    let posts
    if (!searchQuery) {
      posts = await $content({ deep: true })
        .only(['title', 'description', 'image', 'path', 'date', 'tags'])
        .sortBy('date', 'desc')
        .limit(9)
        .fetch()
    } else {
      posts = await $content({ deep: true })
        .only(['title', 'description', 'image', 'path', 'date', 'tags'])
        .sortBy('date', 'desc')
        .search('title', searchQuery)
        .fetch()
    }
    return {
      posts: posts,
      searchQuery: searchQuery,
    }
  },
}
</script>


<style lang="scss">
@media (max-width: 960px) {
  .uk-card {
    min-height: 0px !important;
  }
}
#articles a {
  text-decoration: none;
}

section#articles {
  min-height: 85vh;
  margin-left: 10rem;
  margin-right: 10rem;
  background: #f5f8eb;
}
</style>

<style lang="scss" scoped>

.text-xs {
  font-size: .75rem !important;
}

.img-hover-zoom img {
  transition: transform .5s ease;
  z-index: -1;
}


.img-hover-zoom:hover img {
  transform: scale(1.5);
  z-index: -1;
}
</style>