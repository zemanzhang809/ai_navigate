<script setup lang="ts">
import type { NuxtError } from '#app'

defineOptions({ name: 'ErrorPage' })

const props = defineProps<{ error: NuxtError }>()
const isNotFound = computed(() => props.error?.statusCode === 404)
const errorTitle = computed(() => isNotFound.value ? '页面走丢了' : '页面暂时不可用')
const errorMessage = computed(() => isNotFound.value ? '你要寻找的页面可能已经移动，或者暂时没有加入导航。' : '页面遇到了一点小问题，请返回首页继续探索。')

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="error-page">
    <div class="error-glow error-glow-one" aria-hidden="true"></div>
    <div class="error-glow error-glow-two" aria-hidden="true"></div>
    <header class="error-brand-wrap">
      <NuxtLink to="/" class="brand error-brand" aria-label="返回灵感 AI 导航首页">
        <span class="brand-mark">✦</span>
        <span>灵感 AI 导航</span>
      </NuxtLink>
    </header>
    <main class="error-main" aria-labelledby="error-title">
      <section class="error-card">
        <div class="error-illustration" aria-hidden="true">
          <span class="error-orbit error-orbit-one"></span>
          <span class="error-orbit error-orbit-two"></span>
          <span class="error-star">✦</span>
          <strong>{{ error?.statusCode || 404 }}</strong>
        </div>
        <span class="eyebrow">AI TOOL DISCOVERY</span>
        <h1 id="error-title">{{ errorTitle }}</h1>
        <p>{{ errorMessage }}</p>
        <div class="error-actions">
          <button type="button" class="primary-button" @click="goHome">返回首页</button>
          <button type="button" class="secondary-button" @click="goHome">继续探索工具 ↗</button>
        </div>
      </section>
    </main>
    <footer class="error-footer"><span>© 2026 灵感 AI 导航</span><span>发现工具，保持灵感</span></footer>
  </div>
</template>
