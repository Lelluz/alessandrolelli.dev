<template>
  <div>
    <header>
      <!-- Intestazione del sito -->
      <h1>{{ nome }}</h1>
      <p>{{ lavoro }}</p>
      <ul>
        <li><a href="#about">Chi sono</a></li>
        <li><a href="#skills">Competenze</a></li>
        <li><a href="#projects">Progetti</a></li>
        <li><a href="#contact">Contattami</a></li>
      </ul>
    </header>

    <main>
      <!-- Sezione "Chi sono" -->
      <section id="about">
        <h2>Chi sono</h2>
        <p>{{ bio }}</p>
      </section>

      <!-- Sezione "Competenze" -->
      <section id="skills">
        <h2>Competenze</h2>
        <ul>
          <li>{{ skill1 }}</li>
          <li>{{ skill2 }}</li>
          <li>{{ skill3 }}</li>
          <!-- Aggiungi altre competenze qui -->
        </ul>
      </section>

      <!-- Sezione "Progetti" -->
      <section id="projects">
        <h2>Progetti</h2>
        <div v-for="progetto in progetti" :key="progetto.id">
          <h3>{{ progetto.titolo }}</h3>
          <p>{{ progetto.descrizione }}</p>
          <a :href="progetto.url" target="_blank">Visita il progetto</a>
        </div>
      </section>

      <!-- Sezione "Contattami" -->
      <section id="contact">
        <h2>Contattami</h2>
        <p>Email: {{ email }}</p>
        <p>Telefono: {{ telefono }}</p>
        <!-- Aggiungi ulteriori dettagli di contatto se necessario -->
      </section>
    </main>

    <footer>
      <!-- Piè di pagina del sito -->
      <p>© 2023 {{ nome }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "Il tuo nome",
      lavoro: "Sviluppatore Frontend",
      bio: "Una breve descrizione su di te e la tua esperienza professionale.",
      skill1: "Competenza 1",
      skill2: "Competenza 2",
      skill3: "Competenza 3",
      progetti: [
        {
          id: 1,
          titolo: "Progetto 1",
          descrizione: "Descrizione del Progetto 1",
          url: "https://www.example.com/progetto1"
        },
        {
          id: 2,
          titolo: "Progetto 2",
          descrizione: "Descrizione del Progetto 2",
          url: "https://www.example.com/progetto2"
        },
        // Aggiungi altri progetti qui
      ],
      email: "tuamail@example.com",
      telefono: "+39 123456789"
    };
  }
};
</script>

<style>
/* Stili per il tuo template */
/* Puoi personalizzare lo stile secondo le tue preferenze */
</style>