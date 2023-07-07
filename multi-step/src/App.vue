<script setup>

import { ref } from 'vue'
import { FormWizard, TabContent, WizardStep } from "vue3-form-wizard"

const checkbox = ref(null)
const radio = ref(null)

</script>

<template>
  <FormWizard 
    step-size="xs" 
    :start-index="1"
    back-button-text="Go back!"
    next-button-text="Go next!"
    finish-button-text="We're there"
  >
    <template v-slot:step="props">
      <WizardStep
        :tab="props.tab"
        :transition="props.transition"
        :index="props.index"
        @click="props.navigateToTab(props.index)"
      >
        <small style="color: blue; font-size: 12px; margin: auto 2px">
          Tab{{ props.index + 1 }}
        </small>
      </WizardStep>
    </template>
    <tab-content title="Personal details">
      <FormKit
        type="select"
        label="Which country is the smallest?"
        name="small_country"
        placeholder="Select a country"
        :options="[
          'Monaco',
          'Vatican City',
          'Maldives',
          'Tuvalu',
        ]"
        validation="required"
        :validation-messages="{
          required: 'This field is required.'
        }"
      />
    </tab-content>
    <tab-content title="Additional Info">
      <FormKit
        type="text"
        validation="required"
        :validation-messages="{
          required: 'This field is required.'
        }"
      />
    </tab-content>
    <tab-content title="Last step">
      <FormKit
        v-model="radio"
        type="radio"
        label="Preferred transportation"
        :options="['E-Bike', 'E-Scooter', 'Electric car', 'Walking', 'Space tube']"
        help="How do you like to get around?"
      />
      <FormKit
        v-model="checkbox"
        type="checkbox"
        label="Trim extras"
        :options="{
          650: 'Leather seats ($650)',
          1200: 'Sweet rims ($1,200)',
          13250: 'Gold leaf ($13,250)',
          500: 'Massaging seats ($500)'
        }"
        help="Configure your car’s trim options"
      />
    </tab-content>
  </FormWizard>
</template>

<style scoped>
</style>
