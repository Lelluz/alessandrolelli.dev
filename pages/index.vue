<!-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff"> -->

<template>
  <div class="relative w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 items-start gap-5 mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
    <header class="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:py-24">
      <h1 class="text-4xl font-bold tracking-tight text-rose-200 sm:text-5xl">
        <a href="/">{{ name }}</a>
      </h1>
      <h2 class="mt-3 text-lg font-medium tracking-tight text-rose-200 sm:text-xl">
        {{ jobTitle }}
      </h2>
      <p class="mt-4 max-w-xs leading-normal">{{ intro }}</p>
      <nav class="nav mt-16 w-max hidden lg:block" aria-label="In-page jump links">
        <ul>
          <li>
            <a href="#about" class="group flex items-center py-3">
              <span
                class="nav-indicator mr-4 h-px w-8 bg-rose-600 transition-all group-hover:w-16 group-hover:bg-rose-200 group-focus-visible:w-16 group-focus-visible:bg-rose-200 motion-reduce:transition-none"
              ></span>
              <span class="nav-text text-xs font-bold uppercase tracking-widest text-rose-400 group-hover:text-rose-200 group-focus-visible:text-rose-200"
                >About</span
              >
            </a>
          </li>
          <li>
            <a href="#experiences" class="group flex items-center py-3">
              <span
                class="nav-indicator mr-4 h-px w-8 bg-rose-600 transition-all group-hover:w-16 group-hover:bg-rose-200 group-focus-visible:w-16 group-focus-visible:bg-rose-200 motion-reduce:transition-none"
              ></span>
              <span class="nav-text text-xs font-bold uppercase tracking-widest text-rose-400 group-hover:text-rose-200 group-focus-visible:text-rose-200"
                >Experience</span
              >
            </a>
          </li>
          <li>
            <a href="#projects" class="group flex items-center py-3">
              <span
                class="nav-indicator mr-4 h-px w-8 bg-rose-600 transition-all group-hover:w-16 group-hover:bg-rose-200 group-focus-visible:w-16 group-focus-visible:bg-rose-200 motion-reduce:transition-none"
              ></span>
              <span class="nav-text text-xs font-bold uppercase tracking-widest text-rose-400 group-hover:text-rose-200 group-focus-visible:text-rose-200"
                >Projects</span
              >
            </a>
          </li>
        </ul>
      </nav>
      <ul class="mt-8 lg:mt-auto flex" aria-label="Social media">
        <li class="mr-5 text-xs">
          <a class="block hover:text-rose-200" href="https://github.com/Lelluz" target="_blank" rel="noreferrer"
            ><span class="sr-only">GitHub</span
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path></svg
          ></a>
        </li>
        <li class="mr-5 text-xs">
          <a class="block hover:text-rose-200" href="https://instagram.com/lelluz_ph" target="_blank" rel="noreferrer"
            ><span class="sr-only">Instagram</span
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" class="h-6 w-6" aria-hidden="true">
              <path
                d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"
              ></path></svg
          ></a>
        </li>
        <li class="mr-5 text-xs">
          <a class="block hover:text-rose-200" href="https://twitter.com/_Lelluz" target="_blank" rel="noreferrer"
            ><span class="sr-only">Twitter</span
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor" class="h-6 w-6" aria-hidden="true">
              <path
                id="white_background"
                d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
              ></path></svg
          ></a>
        </li>
        <li class="mr-5 text-xs">
          <a class="block hover:text-rose-200" href="https://www.linkedin.com/in/alessandro-lelli-dev/" target="_blank" rel="noreferrer"
            ><span class="sr-only">LinkedIn</span
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true">
              <path
                d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
              ></path></svg
          ></a>
        </li>
      </ul>
    </header>

    <main class="lg:py-24">
      <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div
          class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        >
          <h2 class="text-sm font-bold uppercase tracking-widest text-rose-200 lg:sr-only">About</h2>
        </div>
        <p>
          {{ bio }}
          <br /><br />
          {{ bio2 }}
        </p>
      </section>

      <section id="experiences" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div
          class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        >
          <h2 class="text-sm font-bold uppercase tracking-widest text-rose-200 lg:sr-only">Experience</h2>
        </div>
        <ul v-for="experience in experiences" :key="experience.id" class="grouplist">
          <li class="mb-12">
            <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div
                class="absolute -inset-x-4 -inset-y-4 z-0 hidden transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-rose-800/5 lg:group-hover:rounded-lg lg:group-hover:drop-shadow-lg lg:group-hover:backdrop-blur-md"
              ></div>

              <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-rose-400 sm:col-span-2" aria-label="July to December 2017">
                {{ experience.date }}
              </header>
              <div class="z-10 sm:col-span-6">
                <h3 class="font-medium leading-snug text-rose-200">
                  <div>
                    <a
                      class="inline-flex items-baseline font-medium leading-tight text-rose-200 hover:text-rose-300 focus-visible:text-rose-300 group/link text-base"
                      :href="experience.url"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="UI Engineer Co-op at Apple"
                    >
                      <span class="absolute -inset-x-4 -inset-y-2.5 hidden md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {{ experience.jobTitle }} -
                        <span class="inline-block"
                          >{{ experience.company }}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-tranrose-y-1 group-hover/link:tranrose-x-1 group-focus-visible/link:-tranrose-y-1 group-focus-visible/link:tranrose-x-1 motion-reduce:transition-none ml-1 tranrose-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p class="mt-2 text-sm leading-normal">
                  {{ experience.description }}
                </p>
                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                  <li v-for="technology in experience.technologies" :key="technology.id" class="mr-1.5 mt-2">
                    <div class="flex items-center bg-rose-400/10 px-3 py-1 text-xs font-medium leading-5 text-rose-300">
                      {{ technology.name }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div class="mt-12 flex justify-between">
          <a
            class="inline-flex items-center font-medium leading-tight text-rose-200 font-semibold text-rose-200 group"
            aria-label="View Full Résumé"
            href="/resume_it.pdf"
            target="_blank"
          >
            <span>
              <span class="border-b border-transparent pb-px transition group-hover:border-rose-300 motion-reduce:transition-none">View Full </span>
              <span class="whitespace-nowrap">
                <span class="border-b border-transparent pb-px transition group-hover:border-rose-300 motion-reduce:transition-none">Résumé (IT)</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="ml-1 inline-block h-4 w-4 shrink-0 -tranrose-y-px transition-transform group-hover:tranrose-x-2 group-focus-visible:tranrose-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
          <a
            class="inline-flex items-center font-medium leading-tight text-rose-200 font-semibold text-rose-200 group"
            aria-label="View Full Résumé"
            href="/resume_en.pdf"
            target="_blank"
          >
            <span>
              <span class="border-b border-transparent pb-px transition group-hover:border-rose-300 motion-reduce:transition-none">View Full </span>
              <span class="whitespace-nowrap">
                <span class="border-b border-transparent pb-px transition group-hover:border-rose-300 motion-reduce:transition-none">Résumé (EN)</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="ml-1 inline-block h-4 w-4 shrink-0 -tranrose-y-px transition-transform group-hover:tranrose-x-2 group-focus-visible:tranrose-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </section>

      <section id="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div
          class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
        >
          <h2 class="text-sm font-bold uppercase tracking-widest text-rose-200 lg:sr-only">Projects</h2>
        </div>
        <ul v-for="project in projects" :key="project.id" class="grouplist">
          <li class="mb-12">
            <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div
                class="absolute -inset-x-4 -inset-y-4 z-0 hidden transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-rose-800/5 lg:group-hover:rounded-lg lg:group-hover:drop-shadow-lg lg:group-hover:backdrop-blur-md"
              ></div>
              <div class="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    class="inline-flex items-baseline font-medium leading-tight text-rose-200 hover:text-rose-300 focus-visible:text-rose-300 group/link text-base"
                    :href="project.url"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Build a Spotify Connected App"
                  >
                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span class="inline-block"
                      >{{ project.title }}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-tranrose-y-1 group-hover/link:tranrose-x-1 group-focus-visible/link:-tranrose-y-1 group-focus-visible/link:tranrose-x-1 motion-reduce:transition-none ml-1 tranrose-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </h3>
                <p class="mt-2 text-sm leading-normal">
                  {{ project.description }}
                </p>
              </div>
              <img
                alt=""
                loading="lazy"
                width="200"
                height="48"
                decoding="async"
                data-nimg="1"
                class="rounded-md border-2 border-rose-200/10 transition group-hover:border-rose-200/30 sm:order-1 sm:col-span-2 sm:tranrose-y-1 aspect-[98/61] object-cover z-10"
                :src="`images/${project.imageName}`"
                style="color: transparent"
              />
            </div>
          </li>
        </ul>
      </section>

      <footer>
        <p class="max-w-md pb-16 text-sm text-rose-400 sm:pb-0">
          Design Inspired by
          <a
            href="https://brittanychiang.com/"
            class="font-medium text-rose-400 hover:text-rose-300 focus-visible:text-rose-300"
            target="_blank"
            rel="noreferrer"
            >Brittany Chiang</a
          >
          website, but built with
          <a href="https://nuxt.com/" class="font-medium text-rose-400 hover:text-rose-300 focus-visible:text-rose-300" target="_blank" rel="noreferrer"
            >Nuxt</a
          >
          from scratch using
          <a href="https://tailwindcss.com/" class="font-medium text-rose-400 hover:text-rose-300 focus-visible:text-rose-300" target="_blank" rel="noreferrer"
            >Tailwind CSS</a
          >
          and deployed with
          <a href="https://www.netlify.com/" class="font-medium text-rose-400 hover:text-rose-300 focus-visible:text-rose-300" target="_blank" rel="noreferrer"
            >Netlify</a
          >. All text is set in the
          <a href="https://rsms.me/inter/" class="font-medium text-rose-400 hover:text-rose-300 focus-visible:text-rose-300" target="_blank" rel="noreferrer"
            >Inter</a
          >
          typeface.
        </p>
      </footer>
    </main>
  </div>
</template>

<script>
import data from 'assets/data.json';

export default {
  data() {
    return {
      ...data,
    };
  },
  mounted() {
    /* const elements = this.$el.querySelectorAll('.grouplist');
    elements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.opacity = '0.5';
      })
    }); */

    const links = this.$el.querySelectorAll('.nav a');
    const sections = this.$el.querySelectorAll('main > section');
    const options = { threshold: 0.6 };

    links.forEach((link) => {
      link.addEventListener('click', () => {
        links.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.getAttribute('id');
          const targetLink = this.$el.querySelector('nav a[href="#' + targetId + '"]');
          links.forEach((link) => link.classList.remove('active'));
          targetLink.classList.add('active');
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
  },
};
</script>
