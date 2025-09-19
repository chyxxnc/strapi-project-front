<template>
  <main>
    <h1>영화 목록</h1>
    <table border="1" cellpadding="7" cellspacing="0">
      <thead v-if="movies.length > 0">
        <tr>
          <th>DOCUMENUID</th>
          <th>TITLE</th>
          <th>MAINCHARACTER</th>
          <th>GENRE</th>
          <th>RATING</th>
          <th>POSTER</th>
          <th>RELEASEDATE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies" :key="movie.documentId">
          <td>{{ movie.documentId }}</td>
          <td>{{ movie.title }}</td>
          <td>{{ movie.mainCharacter }}</td>
          <td>{{ movie.genre }}</td>
          <td>{{ movie.rating }}</td>
          <td>
            <img v-if="movie.poster" :src="`${API_URL}` + movie.poster.formats.thumbnail.url" />
          </td>
          <td>{{ movie.releaseDate }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const API_URL = import.meta.env.VITE_API_URL

const movies = ref<any[]>([])

onMounted(async () => {
  try {
    const response = await fetch(`${API_URL}/api/movies?populate=*`)
    const data = await response.json()
    console.log(data.data)
    movies.value = data.data
  } catch (error) {
    console.log(error)
  }
})
</script>
