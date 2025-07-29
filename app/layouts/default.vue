<template>
  <div class="min-h-screen flex flex-col dark">
      <nav class="w-full grid grid-cols-3 items-center px-8 py-4 fixed top-0 left-0 z-50 bg-transparent">
        <NuxtLink to="/"><div class="text-2xl font-bold text-white">Tally</div></NuxtLink>
        <ul class="flex justify-center gap-6 text-white">
          <li>
            <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/trackerpage" class="hover:underline">Tracker</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
          </li>
        </ul>
        <div class="flex justify-end">
          <!-- Platzhalter für späteren Button oder Profil -->
        </div>
      </nav>
      <!-- 🌟 CONTENT LIEGT HINTER DER NAVBAR -->
      <main class="flex-1">
        <slot/>
      </main>

  </div>

</template>

<script setup lang="ts">
// Später kannst du hier Login-Status oder Dropdown-Logik einbauen
</script>
