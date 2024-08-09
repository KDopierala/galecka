<script>
import Button from "../reusable/Button.vue";
export default {
  components: { Button },
  data: () => {
    return {
      // @todo
    };
  },
};
</script>

<template>
  <!-- Contact form -->
  <div class="w-full md:w-1/2">
    <div
      class="
        leading-loose
        max-w-xl
        m-4
        p-7
        bg-none
        rounded-xl
        shadow-xl
        text-left
        border-2
      "
    >
      <form
        @submit="
          (e) => {
            e.preventDefault();
          }
        "
        class="font-general-regular space-y-7"
      >

        <div class="">
          <label
            class="block text-lg text-white mb-2"
            for="email"
            >Email</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-secondary-light
              dark:bg-secondary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="email"
            name="email"
            type="text"
            required=""
            placeholder="Twój Email"
            aria-label="Email"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-white mb-2"
            for="subject"
            >Temat</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-secondary-light
              dark:bg-secondary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="subject"
            name="subject"
            type="text"
            required=""
            placeholder="Temat"
            aria-label="Subject"
          />
        </div>

        <div class="mt-6">
          <label
            class="block text-lg text-white mb-2"
            for="message"
            >Wiadomość</label
          >
          <textarea
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-secondary-light
              dark:bg-secondary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Message"
          ></textarea>
        </div>

        <div class="mt-6">
          <Button
            title="Wyślij Wiadomość"
            class="
              px-4
              py-2.5
              text-white
              tracking-wider
              bg-indigo-500
              hover:bg-indigo-600
              focus:ring-1 focus:ring-indigo-900
              rounded-lg
              duration-500
            "
            type="submit"
            aria-label="Wyślij Wiadomość"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
