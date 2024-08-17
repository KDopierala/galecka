<template>
  <div class="w-full md:w-1/2 flex justify-center items-center">
    <div class="text-right max-w-xl w-full px-6">
      <div class="grid grid-cols-2 gap-4 h-full p-4">
        <div
          v-for="(contact, index) in contacts"
          :key="contact.id"
          class="relative w-full pt-full group cursor-pointer transition duration-300 ease-in-out transform hover:bg-gray-700"
          @click.prevent="handleClick(contact)"
          @mouseover="contact.showNumber = false"
          @mouseleave="contact.showNumber = true"
        >
          <div class="absolute inset-0 flex flex-col justify-center items-center p-4 border-2 rounded-lg">
            <div class="flex items-center justify-center w-full relative">
              <a
                href="#"
                class="2xl:text-2xl font-bold text-white text-center absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                :class="
                  contact.icon === 'mail' || contact.icon === 'phone'
                    ? 'hover:underline cursor-pointer lg:text-2xl xl:text'
                    : 'lg:text-3xl'
                "
                aria-label="Website and Phone"
              >
                {{ contact.showNumber && contact.icon === 'phone' ? contact.name : contact.name }}
              </a>
              <i
                :data-feather="contact.icon"
                class="text-white w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] absolute transition-opacity duration-300 group-hover:opacity-0"
              ></i>
              <i 
                v-if="contact.icon === 'phone' || contact.icon === 'mail'"
                data-feather="copy" 
                class="block sm:hidden w-[25px] h-[25px] absolute top-[-60px] right-0"
              ></i>
              <i 
                v-if="contact.icon === 'phone' || contact.icon === 'mail'"
                data-feather="copy" 
                class="hidden sm:block w-[40px] h-[40px] absolute top-[-100px] right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contacts"],
  methods: {
    handleClick(contact) {
      if (contact.url) {
        window.location.href = contact.url; // Przekierowanie do profilu
      } else {
        this.copyToClipboard(contact.name); // Kopiowanie numeru lub maila
      }
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert(`Skopiowano ${text} do schowka!`);
      }).catch(err => {
        console.error("Failed to copy: ", err);
      });
    }
  }
};
</script>

<style scoped>
.pt-full {
  padding-top: 100%;
}
</style>
