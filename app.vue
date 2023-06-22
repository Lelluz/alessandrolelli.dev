<template>
  <MouseLight />
  
  <div class="relative w-full h-screen max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 items-start gap-5 mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
    <header class="lg:sticky lg:top-0 lg:max-h-screen lg:py-24">
      <h1 class="text-4xl font-bold">{{ name }}</h1>
      <p>{{ jobTitle }}</p>
      <ul>
        <li><a href="#about">Chi sono</a></li>
        <li><a href="#skills">Competenze</a></li>
        <li><a href="#projects">Progetti</a></li>
        <li><a href="#contact">Contattami</a></li>
      </ul>
    </header>

    <main class="lg:py-24">
      <section id="about">
        <h2>Chi sono</h2>
        <p>{{ bio }}</p>
      </section>

      <br><br><br><br>

      <section id="skills">
        <h2>Competenze</h2>
        <ul>
          <li>{{ skill1 }}</li>
          <li>{{ skill2 }}</li>
          <li>{{ skill3 }}</li>
        </ul>
      </section>

      <br><br><br><br>

      <section id="projects">
        <h2>Progetti</h2>
        <div v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.url" target="_blank">Visita il progetto</a>
        </div>
      </section>

      <br><br><br><br>

      <section id="contact">
        <h2>Contattami</h2>
        <p>Email: {{ email }}</p>
        <p>Telefono: {{ phone }}</p>
      </section>

      <br><br><br><br>

      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum ullam at sit? Quaerat, impedit perferendis odit quibusdam nam ex dolore optio esse laudantium? Aperiam quod consectetur eos itaque qui ipsam!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique nam facilis explicabo, commodi veniam ullam nihil ex recusandae tenetur quam ab. Eligendi aliquam at quo, quia vel quae blanditiis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga eligendi inventore cum, fugit odit eveniet provident, dolor vel, asperiores quisquam nostrum dolore assumenda. Dicta itaque aliquid nobis impedit praesentium.

      <footer>
        <p>© 2023 {{ name }}</p>
      </footer>
    </main>

  </div>
</template>

<script>
import MouseLight from '~/components/MouseLight';

export default {
    data() {
        return {
            name: "Alessandro Lelli",
            jobTitle: "Frontend developer",
            bio: "Una breve descrizione su di te e la tua esperienza professionale.",
            skill1: "Competenza 1",
            skill2: "Competenza 2",
            skill3: "Competenza 3",
            projects: [
                {
                    id: 1,
                    title: "Progetto 1",
                    description: "Descrizione del Progetto 1",
                    url: "https://www.example.com/progetto1"
                },
                {
                    id: 2,
                    title: "Progetto 2",
                    description: "Descrizione del Progetto 2",
                    url: "https://www.example.com/progetto2"
                }
            ],
            email: "alelelli.98@gmail.com",
            phone: "+39 3406900747"
        };
    }
};
</script>

<style lang="scss">
  @use "~/assets/scss/main.scss";
</style>
