<template>
  <div class="relative h-[575px] w-[304px]">
    <!-- Image with Transition -->
      <img
        v-if="images[count]"
        :key="images[count]"
        class="rounded-3xl h-full w-full animate-fade animate-once animate-duration-[1000ms] animate-ease-in-out"
        :class="prevCount < count ? 'animate-fade animate-once animate-duration-[1000ms] animate-ease-in-out' : 'animate-fade animate-once animate-duration-[1000ms] animate-ease-in-out'"

        :src="images[count]"
      />

    <!-- Top-left button -->
    <button
      @click="count = (count - 1 + images.length) % images.length"
      class="absolute top-0 left-0 p-2 bg-gray-900 rounded-full text-white shadow-md"
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
          fill="#fff"
        ></path>
      </svg>
    </button>

    <!-- Top-right button -->
    <button
      @click="count = (count + 1) % images.length"
      class="absolute top-0 right-0 p-2 bg-gray-900 rounded-full text-white shadow-md"
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
          fill="#fff"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
const { images } = defineProps(['images']);
const count = ref(0);
</script>

<style scoped>
/* Ensure the images fit the container without distortion */
img {
  object-fit: cover;
  object-position: center;
}

/* Make carousel responsive for different screens */
@media (max-width: 768px) {
  .height-70vh {
    height: 60vh; /* Reduce height for smaller devices */
  }
}
</style>
