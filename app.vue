<template>
  <MouseLight />
  <div>
    <header>
      <h1 class="text-4xl font-bold">{{ name }}</h1>
      <p>{{ jobTitle }}</p>
      <ul>
        <li><a href="#about">Chi sono</a></li>
        <li><a href="#skills">Competenze</a></li>
        <li><a href="#projects">Progetti</a></li>
        <li><a href="#contact">Contattami</a></li>
      </ul>
    </header>

    <main>
      <section id="about">
        <h2>Chi sono</h2>
        <p>{{ bio }}</p>
      </section>

      <section id="skills">
        <h2>Competenze</h2>
        <ul>
          <li>{{ skill1 }}</li>
          <li>{{ skill2 }}</li>
          <li>{{ skill3 }}</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Progetti</h2>
        <div v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.url" target="_blank">Visita il progetto</a>
        </div>
      </section>

      <section id="contact">
        <h2>Contattami</h2>
        <p>Email: {{ email }}</p>
        <p>Telefono: {{ phone }}</p>
      </section>
    </main>

    <footer>
      <p>© 2023 {{ name }}</p>
    </footer>
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
