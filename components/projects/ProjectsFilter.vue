<script>
import feather from "feather-icons";
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
      selectedOption: null, // Zmienione na null
    };
  },
  computed: {
    filteredOptions() {
      return this.selectOptions.filter(option => option !== this.selectedOption);
    },
    displayText() {
      return this.selectedOption || "Wybierz kategorię";
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
  mounted() {
    // Inicjalizacja ikon po zamontowaniu komponentu
    feather.replace();
  },
  updated() {
    // Aktualizacja ikon po każdej zmianie, gdy DOM się zmienia
    feather.replace();
  },
};
</script>

<template>
  <div class="filter-container">
    <div class="options-container">
      <button @click="toggleOptions" class="filter-option main-option bg-gradient">
        <i class="inline mr-2 w-[25px]" data-feather="search"></i>
        {{ displayText }} 
      </button>
      <div v-if="showOptions" class="dropdown-options">
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
  display: inline-block; /* Dodano, aby opcje były obok siebie */
}

.filter-option:hover {
  border: 2px solid white;
}

.main-option {
  z-index: 1; /* Zapewnij, że główny przycisk jest na wierzchu */
}

.options-container {
  display: flex;
  white-space: nowrap; /* Zapobiega łamaniu linii */
}

.dropdown-options {
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

@media (max-width: 768px) {
  .filter-container {
    overflow-x: auto; /* Dodano przewijanie w poziomie */
    white-space: nowrap; /* Zapobiega łamaniu linii */
  }

  .options-container {
    overflow-x: auto; /* Dodano przewijanie w poziomie dla opcji */
  }

  .dropdown-options {
    position: static;
    opacity: 1;
    transform: none;
    animation: none;
  }

  .filter-option {
    margin-bottom: 10px; /* Dodano odstęp poniżej opcji w mobilnym */
    margin-right: 10px; /* Dodano odstęp między opcjami w mobilnym */
  }

  .main-option {
    margin-bottom: 10px; /* Dodano odstęp poniżej głównej opcji w mobilnym */
  }
}
</style>
