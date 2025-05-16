<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import wordList from '../../public/3000Words.json'
import errorWords from '../../public/3000WordsError.json'
import wordData from '../../public/3000WordsData.json'
import { ref, computed } from 'vue'
import axios from 'axios'

// const OXFORD_BASE_URL = 'https://od-api-sandbox.oxforddictionaries.com/api/v2/entries/en-us/'
const OXFORD_APP_ID = '936afba3'
const OXFORD_APP_KEYS = 'f3b125f1d14856def1819f3a561b2988'

const result = ref<any>([])
const logs = ref<any>([])
const errorWordList = ref<any>([])
const successLogs = computed(() => {
  return logs.value.filter((log: any) => log.status === 'success')
})

const errorLogs = computed(() => {
  return logs.value.filter((log: any) => log.status === 'error')
})

const handleCrawlDataOxford = async () => {
  const existedWords = wordData.map((item: any) => item.word)
  const difference = wordList.filter(
    (item: any) => !existedWords.includes(item) && !errorWords.includes(item),
  )
  for (let i = 0; i < difference.length; i++) {
    try {
      const response = await axios.get(`/api/oxford/api/v2/entries/en-us/${difference[i]}`, {
        headers: {
          app_id: OXFORD_APP_ID,
          app_key: OXFORD_APP_KEYS,
          Accept: 'application/json',
        },
      })

      const data = response.data.results[0].lexicalEntries[0] ?? null
      if (data) {
        result.value.push({
          word: difference[i],
          lexicalCategory: data.lexicalCategory ?? null,
          entries: data.entries.map((entry: any) => {
            return {
              pronunciation:
                entry.pronunciations?.find(
                  (pro: any) => pro.phoneticNotation === 'IPA' && pro.audioFile,
                )?.phoneticSpelling ?? '',
              senses: entry.senses ?? null,
            }
          }),
        })
        logs.value.push({
          status: 'success',
          message: `Successfully get data of <strong style="color: oklch(74.6% 0.16 232.661); font-size: 24px">${difference[i]}</strong>`,
          error: null,
        })
      }
    } catch (e: any) {
      console.error('error', e)
      logs.value.push({
        status: 'error',
        message: `Unsuccessfully get data of <strong style="color: oklch(74.6% 0.16 232.661); font-size: 24px">${difference[i]}</strong>`,
        error: e.response?.data?.error ?? e,
      })
      if (e.status === 429) break
      else errorWordList.value.push(difference[i])
    }
    window.scrollTo(0, document.body.scrollHeight)
  }
  console.log('======= DATA COLLECTED =======', result.value)
  console.log('======= DATA ERROR =======', errorWordList.value)
}
</script>

<template>
  <div class="w-full flex justify-center items-center p-10">
    <button
      class="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base"
      @click="handleCrawlDataOxford"
    >
      <span
        class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"
      ></span>

      <span
        class="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"
      ></span>

      <div
        class="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"
      >
        <span class="select-none">Crawl data</span>
      </div>
    </button>
  </div>
  <div class="flex p-10 justify-between items-start gap-4 w-full">
    <div class="w-[calc(50%-16px)]">
      <div class="font-bold text-2xl text-emerald-600 mb-8">SUCCESS</div>
      <div class="flex flex-col gap-4">
        <div v-for="(log, index) in successLogs" :key="index" class="flex flex-col gap-4">
          <div
            class="flex flex-col gap-2 justify-start items-start border border-slate-300 rounded-lg shadow-lg p-4 w-full bg-emerald-50"
          >
            <span class="font-normal text-xl text-emerald-600" v-html="log.message"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[calc(50%-16px)]">
      <div class="font-bold text-2xl text-red-600 mb-8">ERROR</div>
      <div class="flex flex-col gap-4">
        <div v-for="(log, index) in errorLogs" :key="index" class="flex flex-col gap-4">
          <div
            class="flex flex-col gap-2 justify-start items-start border border-slate-300 rounded-lg shadow-lg p-4 w-full bg-red-50"
          >
            <span class="font-normal text-xl text-red-600" v-html="log.message"></span>
            <span v-if="log.error" class="font-normal text-md text-red-600"
              >ERROR: {{ log.error }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="logs.length"
    class="fixed left-1/2 -translate-x-1/2 bottom-10 h-14 w-14 rounded-full bg-sky-700 text-white font-bold text-lg flex justify-center items-center animate-bounce"
  >
    {{ logs.length }}
  </div>
</template>
