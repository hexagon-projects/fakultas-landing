<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import { useSanitize } from '@/composables/useSanitize';
import type { Post } from '@/core/types/post';
import SectionLayout from '@/layouts/SectionLayout.vue';

const { sanitizeHtml } = useSanitize();

defineProps<{
  post: Post
}>()
</script>

<template>
    <SectionLayout>
        <div class="w-full flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-6">
            <div class="w-full md:w-[70%]">
                <TextBody><span v-html="sanitizeHtml(post.content)"></span></TextBody>
            </div>

            <div class="w-full md:w-[30%] h-[50vh] bg-gray-500">

            </div>
        </div>
    </SectionLayout>
</template>
