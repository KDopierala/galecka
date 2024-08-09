<script>
export default {
  props: {
    select: {
      type: String,
      default: "projects",
    },
    emit: {
      type: String,
      default: "dropChange",
    },
    selectOptions: {
      type: Array,
      default: () => [
        "wszystkie",
        "kuchnia",
        "gabinet",
        "dom",
        "łazienka",
        "korytarz",
      ],
    },
  },
  data() {
    return {
      showOptions: false,
      selectedOption: "wszystkie",
    };
  },
  computed: {
    filteredOptions() {
      return this.selectOptions.filter(option => option !== this.selectedOption);
    },
  },
  methods: {
    toggleOptions() {
      this.showOptions = !this.showOptions;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.showOptions = false;
      this.$emit('dropChange', option === "wszystkie" ? "" : option);
    },
  },
};
</script>


<template>
  <div class="filter-container">
    <button @click="toggleOptions" class="filter-option main-option bg-gradient">
      {{ selectedOption }}
    </button>
    <div v-if="showOptions" class="options-container">
      <button
        v-for="option in filteredOptions"
        :key="option"
        @click="selectOption(option)"
        class="filter-option bg-gradient"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.filter-container {
  display: flex;
  align-items: center;
  position: relative;
}

.filter-option {
  font-family: 'General Medium', sans-serif;
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid #27272A;
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  margin-right: 1rem; /* Dodatkowy odstęp między opcjami */
}

.filter-option:hover {
  border: 2px solid white;
}

.main-option {
  z-index: 1; /* Zapewnij, że główny przycisk jest na wierzchu */
}

.options-container {
  display: flex;
  position: absolute;
  left: 100%;
  top: 0;
  opacity: 0;
  transform: translateX(-10px);
  animation: slideIn 0.3s forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

