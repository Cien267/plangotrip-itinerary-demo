<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { faker } from '@faker-js/faker'

interface Item {
  id: number
  name: string
  sex: string
  email: string
  phone: string
  avatar: string
  address: string
}
const items = ref<Item[]>(
  Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: faker.person.fullName(),
    sex: faker.person.sexType(),
    email: faker.internet.email(),
    phone: faker.phone.number({ style: 'international' }),
    avatar: faker.image.avatar(),
    address: faker.location.country(),
  })),
)

const searchKeyword = ref('')

const filteredItems = computed(() => {
  if (!searchKeyword.value) return items.value
  return items.value.filter((item) => {
    return item.name.trim().toLowerCase().includes(searchKeyword.value.trim().toLowerCase())
  })
})

const displayedItems = ref<Item[]>([])
let rafId: number | null = null
const updateDisplayedItems = () => {
  if (rafId) cancelAnimationFrame(rafId)

  rafId = requestAnimationFrame(() => {
    displayedItems.value = [...filteredItems.value]
  })
}

const handleFilter = () => {
  updateDisplayedItems()
}
onMounted(() => {
  displayedItems.value = [...items.value]
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div class="w-full flex justify-center items-center p-10 gap-8">
    <span class="font-bold text-xl">Search by name:</span>
    <input
      class="px-4 py-3 outline-none w-2xl rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
      name="search"
      placeholder="Enter name"
      type="text"
      v-model="searchKeyword"
      @input="handleFilter"
    />
  </div>
  <div class="w-full p-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    <template v-for="item in displayedItems" :key="item.id">
      <div
        class="border border-slate-300 rounded-lg p-4 shadow-md hover:shadow-lg hover:bg-slate-100 transition-shadow cursor-pointer"
      >
        <div class="flex items-center gap-3 mb-4">
          <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
            ><img class="aspect-square h-full w-full" :src="item.avatar"
          /></span>
          <div>
            <h2 class="font-semibold text-lg">{{ item.name }}</h2>
            <div class="flex items-center text-sm text-muted-foreground">
              <font-awesome-icon :icon="['fas', 'user']" class="mr-2" /><span
                class="text-amber-600"
                >{{ item.sex }}</span
              >
            </div>
          </div>
        </div>
        <div class="space-y-2 text-sm">
          <div class="flex items-start gap-2">
            <font-awesome-icon :icon="['fas', 'location-dot']" class="text-sky-600" /><span>{{
              item.address
            }}</span>
          </div>
          <div class="flex items-center gap-2">
            <font-awesome-icon :icon="['fas', 'envelope']" class="text-emerald-600" /><span>{{
              item.email
            }}</span>
          </div>
          <div class="flex items-center gap-2">
            <font-awesome-icon :icon="['fas', 'phone']" class="text-blue-700" /><span>{{
              item.phone
            }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
