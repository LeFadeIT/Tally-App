<template>
  <NuxtLayout>
    <AuroraBackground>
      <Motion
          as="div"
          :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }"
          :while-in-view="{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }"
          :transition="{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }"
          class="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <div class="text-center text-3xl font-bold md:text-7xl dark:text-white flex relative z-10">
          Welcome to Tally!
        </div>

        <div class="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200 relative z-10">
          Start your journey now!
        </div>

        <nuxt-link to="/trackerpage" class="relative z-10">
          <InteractiveHoverButton/>
        </nuxt-link>

        <div class="mockup-scene">
          <div class="mockup-tilt">
            <SafariMockup
                url="Tally.com"
                src="https://www.slideegg.com/image/catalog/478523-dashboard-slide-template.png"
            />
          </div>
        </div>

      </Motion>
    </AuroraBackground>
  </NuxtLayout>
</template>


<script setup lang="ts">
import {Motion} from "motion-v";
</script>

<style scoped>
.mockup-scene {
  position: absolute;
  top: 30%;
  left: 50%;
  perspective: 2500px;
  z-index: 0;
  scale: 75%;
  bottom: 0;
  right: 0;
}

.mockup-tilt {
  transform: translate(-20%, -60%) rotateY(-25deg) rotateX(15deg) scale(0.7);
  transform-style: preserve-3d;
  filter: drop-shadow(0 40px 50px rgba(0, 0, 0, 0.5));
  opacity: 0.9;
  transition: transform 0.5s ease;
  animation: float 8s ease-in-out infinite;
}

.text-outline{
  -webkit-text-stroke: 3px black;
}

@keyframes float {
  0% {
    transform: translate(-20%, -60%) rotateY(-22deg) rotateX(12deg) scale(0.8);
  }
  50% {
    transform: translate(-20%, -63%) rotateY(-22deg) rotateX(12deg) scale(0.82);
  }
  100% {
    transform: translate(-20%, -60%) rotateY(-22deg) rotateX(12deg) scale(0.8);
  }
}
</style>