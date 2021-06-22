<template>
  <div class="blog-wrapper">
    <article>
      <div class="uk-container">
        <div class="uk-section">
          <header>
            <h1 class="c-heading c-heading--prim">{{ article.title }}</h1>
            <div class="prescription">
              <b>Time to read: {{ article.readingTime }}</b>
              <b>Published on: {{ formatDate(article.createdAt) }}</b>
            </div>
          </header>
          <img
            v-if="article.image"
            :src="
              require('~/content/' +
                article.path.split('/')[1] +
                '/images/' +
                article.image)
            "
            :alt="article.title"
            id="header-image"
          />
          <nuxt-content :document="article" />
        </div>
      </div>

      <section class="uk-section">
        <div class="uk-container">
          <h2 class="uk-text-bold">More stories</h2>
          <div data-uk-slider="velocity: 5">
            <div class="uk-position-relative">
              <div class="uk-slider-container">
                <ul
                  class="
                    uk-slider-items
                    uk-child-width-1-2@s
                    uk-child-width-1-3@m
                    uk-grid
                    uk-grid-medium
                  "
                >
                  <li v-for="story in moreStories" :key="story.title">
                    <!-- card -->
                    <div
                      class="uk-card uk-card-default uk-card-small"
                      style="box-shadow: none"
                    >
                      <div>
                        <nuxt-link :to="'/blog/' + story.path.split('/')[1]">
                        {{ story.title }}
                          </nuxt-link>
                      </div>
                    </div>
                    <!-- /card -->
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>

    <blog-navigation :toc="toc"/>
  </div>
</template>

<script>
import Prism from "~/plugins/prism";
import TableOfContent from "~/components/TableOfContent.vue";
import BlogNavigation from "~/components/BlogNavigation.vue";

export default {
  components: {
    TableOfContent,
    BlogNavigation,
  },
  data() {
    return {
      toc: []
    }
  },
  async asyncData({ $content, params, error }) {
    try {
      const [article] = await $content({ deep: true })
        .where({ dir: `/${params.slug}` })
        .fetch();

      const moreStories = await $content({ deep: true })
        .only(["title", "image", "path"])
        .where({ title: { $ne: article.title } })
        .sortBy("createdAt", "desc")
        .limit(3)
        .fetch();
      console.log(article)

      return { article, moreStories };
    } catch (err) {
      console.log(err);
      error({
        statusCode: 200,
        message: err,
      });
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    getToc() {
      document.querySelectorAll('section > h2[id],h1[id]').forEach((elem) => this.toc.push({text: elem.outerText, id: elem.id, depth: elem.localName === 'h2' ? 2 : 1}))
      console.log(this.toc)
    }
  },
  mounted() {
    Prism.highlightAll();
    this.getToc()
  }
};
</script>


<style lang="scss" scoped>
$dev_md_min: 35.625rem;
@import url("https://fonts.googleapis.com/css?family=Noticia+Text|Lalezar");

article {
	--color_ink: #282724; // Black
  --padding: 21px;
  --bg-color: #f5f8eb;
  --text-color: #0a643a;
  --accent-color: #a0bb2e;
  --font-family: "Noticia Text";
  --font-display: "Lalezar";
  --border: 2px;
	--color_headline: #aa8740; // Gold
}

header {
  .prescription {
    display: flex;
    justify-content: space-between;
  }
  .c-heading {
    font-family: 'Frank Ruhl Libre', serif;	
    font-weight: normal;
    margin: 0;
    
    &--prim {
      border-bottom: var(--border) solid var(--color_ink);
      color: var(--color_headline);
      font-size: 2.5rem;
      line-height: 0.9;
      margin-bottom: 0.7rem;
      padding-bottom: 1.5rem;
      
      @media screen and (min-width: $dev_md_min) {
        font-size: 3rem;
      }
    }
    
    &--sec {
      font-size: 1.15rem;
    }
  }
}

article {
  margin: 0;
  padding: 0;
}

article {
  scroll-behavior: smooth;
  max-width: 75%;
  margin: 0 auto;
  padding: var(--padding);
  color: var(--text-color);
  background: var(--bg-color);
  font-family: var(--font-family);
  line-height: 2;
  font-size: 21px;
}

h2 {
  font-size: 180%;
  transform: translateX(-5px);
  font-family: var(--font-display);
  margin-bottom: 0;
}

a {
  color: var(--text-color);
}

p {
  margin-bottom: 2em;
}

strong {
  display: inline-block;
  transform: translateX(-5px);
  font-size: 130%;
  line-height: 1;
  font-family: var(--font-display);
}

strong:before {
  content: "🎙️";
  margin-right: 5px;
  margin-top: 34px;
  display: inline-block;
}

h2:after {
  content: "";
  display: block;
  height: 8px;
  background: var(--accent-color);
  max-width: 55px;
  transform: skewX(-21deg) translateY(-13px);
  border-radius: 3px;
}

</style>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/source-code-pro@2.38.0/source-code-pro.css");

img {
  
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  border-radius: 10px;
}

pre > code > * {
  font-family: "Source Code Pro";
}

.nuxt-content {
  h2 {
    font-size: 180%;
    transform: translateX(-5px);
    font-family: var(--font-display);
    margin-bottom: 0;
  }

  a {
    color: var(--text-color);
  }

  p {
    margin-bottom: 2em;
  }

  strong {
    display: inline-block;
    transform: translateX(-5px);
    font-size: 130%;
    line-height: 1;
    font-family: var(--font-display);
  }

  strong:before {
    content: "🎙️";
    margin-right: 5px;
    margin-top: 34px;
    display: inline-block;
  }

  h2:after {
    content: "";
    display: block;
    height: 8px;
    background: var(--accent-color);
    max-width: 55px;
    transform: skewX(-21deg) translateY(-13px);
    border-radius: 3px;
  }
}


/** page layout **/
.blog-wrapper {
	display: grid;
	grid-template-columns: 1fr 15em;
	max-width: 100em;
	width: 90%;
	margin: 0 auto;
}

</style>