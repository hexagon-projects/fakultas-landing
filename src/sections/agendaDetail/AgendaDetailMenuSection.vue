<template>
  <SectionLayout>
    <section class="container mx-auto px-2 py-12 bg-netral-bg-unpas">
      <div class="max-w-[1440px] mx-auto">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Left Column (60%) -->
          <div class="lg:w-3/5">
            <div class="py-6">
              <h1 class="text-4xl font-bold font-roboto text-Color-Scheme-1-Text">
                {{ articleData.title }}
              </h1>
            </div>

            <div class="space-y-4">
              <p
                v-for="(paragraph, index) in articleData.content"
                :key="index"
                class="text-base font-roboto text-Color-Scheme-1-Text"
                :class="{ 'text-xl font-bold': paragraph.isHeading }"
              >
                {{ paragraph.text }}
              </p>

              <div class="py-9">
                <div class="flex gap-5">
                  <div class="w-0.5 bg-Color-Scheme-1-Border"></div>
                  <blockquote class="text-xl font-inter text-Color-Scheme-1-Text">
                    "{{ articleData.quote }}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column (40%) -->
          <div class="lg:w-2/5 space-y-8">
            <!-- Agenda Terdekat -->
            <div class="space-y-6">
              <h2 class="text-xl font-bold font-sora text-Color-Scheme-1-Text">
                {{ upcomingEvents.title }}
              </h2>

              <div
                v-for="event in upcomingEvents.events"
                :key="event.id"
                class="p-2 rounded-3xl space-y-4"
              >
                <img
                  class="w-full h-48 rounded-2xl object-cover"
                  :src="event.image"
                  :alt="event.title"
                />

                <div class="flex justify-between items-center">
                  <div>
                    <h3 class="text-base font-inter text-Color-Scheme-1-Text">
                      {{ event.title }}
                    </h3>
                    <div
                      class="flex items-center gap-2 text-sm font-inter text-Color-Scheme-1-Text"
                    >
                      <span>{{ event.date }}</span>
                      <span>•</span>
                      <span>{{ event.location }}</span>
                    </div>
                  </div>

                  <button
                    class="px-5 py-2 border border-Color-Neutral-Darkest text-base font-roboto"
                  >
                    {{ event.buttonText }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Artikel & Berita Terkait -->
            <div class="space-y-6">
              <h2 class="text-xl font-bold font-sora text-Color-Scheme-1-Text">
                {{ relatedArticles.title }}
              </h2>

              <div
                v-for="article in relatedArticles.articles"
                :key="article.id"
                class="p-4 bg-netral-card-unpas rounded-2xl flex gap-4"
              >
                <img
                  class="w-32 h-36 rounded-lg shadow-[0px_0px_60px_0px_rgba(0,0,0,0.06)] object-cover"
                  :src="article.image"
                  :alt="article.title"
                />

                <div class="flex-1 space-y-4">
                  <div class="space-y-4">
                    <div class="px-2 py-1 bg-violet-50 rounded-full inline-flex">
                      <span class="text-[10px] font-inter text-Color-FH">{{
                        article.category
                      }}</span>
                    </div>
                    <h3 class="text-xs font-bold font-inter text-neutral-900">
                      {{ article.title }}
                    </h3>
                  </div>

                  <div class="h-px bg-black/10"></div>

                  <div class="flex items-center gap-3">
                    <span class="text-[10px] font-inter text-neutral-900">{{ article.date }}</span>
                    <span class="w-px h-3.5 bg-black/60"></span>
                    <span class="text-[10px] font-inter text-neutral-900">{{
                      article.readTime
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </SectionLayout>
</template>

<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue'
import { ref } from 'vue'

// Article content data
const articleData = ref({
  title: 'Introduction',
  content: [
    {
      text: 'Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis.',
      isHeading: false,
    },
    {
      text: 'Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor.',
      isHeading: false,
    },
    {
      text: 'Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae.',
      isHeading: true,
    },
    {
      text: 'Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.',
      isHeading: false,
    },
    {
      text: 'Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit.',
      isHeading: false,
    },
  ],
  quote: 'Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.',
})

// Upcoming events data
const upcomingEvents = ref({
  title: 'Agenda Terdekat',
  events: [
    {
      id: 1,
      title: 'Event title heading',
      date: 'Fri 09 Feb 2024',
      location: 'Location',
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      buttonText: 'Save my spot',
    },
  ],
})

// Related articles data
const relatedArticles = ref({
  title: 'Artikel & Berita Terkait',
  articles: [
    {
      id: 1,
      title: 'The Secrets Behind Learning from Industry Experts',
      category: 'Education',
      date: 'January 27, 2025',
      readTime: '4 min read',
      image: 'https://placehold.co/129x140',
    },
    {
      id: 2,
      title: 'The Secrets Behind Learning from Industry Experts',
      category: 'Education',
      date: 'January 27, 2025',
      readTime: '4 min read',
      image: 'https://placehold.co/129x140',
    },
    {
      id: 3,
      title: 'The Secrets Behind Learning from Industry Experts',
      category: 'Education',
      date: 'January 27, 2025',
      readTime: '4 min read',
      image: 'https://placehold.co/129x140',
    },
  ],
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500&family=Sora:wght@600;700&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}
.font-roboto {
  font-family: 'Roboto', sans-serif;
}
.font-sora {
  font-family: 'Sora', sans-serif;
}
</style>
