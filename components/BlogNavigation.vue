<template>
  <nav class="section-nav">
    <ol>
      <li
        v-for="link of toc"
        :key="link.id"
        :class="{ toc2: link.depth === 1, toc3: link.depth === 2 }"
      >
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
      
    </ol>
  </nav>
</template>


<script>
export default {
  props: ["toc"],
  data() {
    return {
        currentLoc: ""
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        const id = entry.target.children.item(0).getAttribute("id");
        const fullHref = `${window.location.pathname}#${id}`

        if (entry.intersectionRatio > 0) {
          document
            .querySelector(`nav li a[href="${fullHref}"]`)
            .parentElement.classList.add("active");
        } else {
          document
            .querySelector(`nav li a[href="${fullHref}"]`)
            .parentElement.classList.remove("active");
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll("h2[id],h1[id]").forEach((section) => {
      observer.observe(section.parentElement);
    });
  },
};
</script>

<style lang="scss">
/* 2. Make nav sticky */
nav {
  position: sticky;
  top: 2rem;
  align-self: start;
}

/* 3. ScrollSpy active styles (see JS tab for activation) */
.section-nav li.active > a {
  color: #458588;
  font-weight: 500;
}

/* Sidebar Navigation */
.section-nav {
  padding-left: 0;
  border-left: 1px solid #efefef;
}

.section-nav a {
  text-decoration: none;
  display: block;
  padding: 0.125rem 0;
  color: #ccc;
  transition: all 50ms ease-in-out; /* 💡 This small transition makes setting of the active state smooth */
}

.section-nav a:hover,
.section-nav a:focus {
  color: #db9921;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-left: 1rem;

  &.toc2 {
    margin-left: 2rem;
  }
}

h1 {
  font-weight: 300;
}
</style>