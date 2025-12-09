<template>
  <div class="p-6 space-y-12">
    <!-- ===================================== -->
    <!--  AVAILABLE COMPONENTS LIST            -->
    <!-- ===================================== -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Available Flowbite Components</h2>

      <ul class="space-y-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <li 
          v-for="comp in availableComponents" 
          :key="comp"
          class="text-sm font-mono"
        >
          {{ comp }}
        </li>
      </ul>
    </section>

    <!-- ===================================== -->
    <!--  DEMOS FOR EACH COMPONENT              -->
    <!-- ===================================== -->

    <!-- Accordion -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Accordion</h2>
      <FwbAccordion>
        <FwbAccordionPanel>
          <FwbAccordionHeader>Accordion Item 1</FwbAccordionHeader>
          <FwbAccordionContent>Content for accordion item 1</FwbAccordionContent>
        </FwbAccordionPanel>

        <FwbAccordionPanel>
          <FwbAccordionHeader>Accordion Item 2</FwbAccordionHeader>
          <FwbAccordionContent>Content for accordion item 2</FwbAccordionContent>
        </FwbAccordionPanel>
      </FwbAccordion>
    </section>

    <!-- Alert -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Alert</h2>
      <FwbAlert type="success">This is a success alert!</FwbAlert>
    </section>

    <!-- Badges -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Badge</h2>
      <FwbBadge>Default Badge</FwbBadge>
    </section>

    <!-- Breadcrumb -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Breadcrumb</h2>
      <FwbBreadcrumb>
        <FwbBreadcrumbItem href="/">Home</FwbBreadcrumbItem>
        <FwbBreadcrumbItem>Flowbite Demo</FwbBreadcrumbItem>
      </FwbBreadcrumb>
    </section>

    <!-- Buttons -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Buttons</h2>
      <FwbButton color="blue" class="mr-2">Click Me</FwbButton>
      <FwbButtonGroup>
        <FwbButton color="green">One</FwbButton>
        <FwbButton color="green">Two</FwbButton>
      </FwbButtonGroup>
    </section>

    <!-- Card -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Card</h2>
      <FwbCard>
        <p>This is a card component.</p>
      </FwbCard>
    </section>

    <!-- Carousel -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Carousel</h2>
      <FwbCarousel :pictures="carouselImages" class="h-48 rounded-lg overflow-hidden" />
    </section>

    <!-- Dropdown -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Dropdown</h2>
      <FwbDropdown text="Open Menu">
        <ul class="py-2">
          <li><a class="block px-4 py-2 hover:bg-gray-100">Item 1</a></li>
          <li><a class="block px-4 py-2 hover:bg-gray-100">Item 2</a></li>
        </ul>
      </FwbDropdown>
    </section>

    <!-- Avatar -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Avatar</h2>
      <FwbAvatar img="/no-image.png" rounded />
    </section>

    <!-- Table -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Table</h2>
      <FwbTable :data="tableRows" :columns="tableCols" />
    </section>

    <!-- Tabs -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Tabs</h2>
      <FwbTabs>
        <FwbTab name="Tab A">Content for Tab A</FwbTab>
        <FwbTab name="Tab B">Content for Tab B</FwbTab>
      </FwbTabs>
    </section>



    <!-- Toast -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Toast</h2>
      <FwbButton color="green" @click="showToast()">Show Toast</FwbButton>
    </section>

    <!-- Tooltip -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Tooltip</h2>
      <FwbTooltip content="Tooltip text">
        <FwbButton>Hover me</FwbButton>
      </FwbTooltip>
    </section>

    <!-- Form Inputs -->
    <section>
      <h2 class="text-xl font-semibold mb-3">Form Controls</h2>

      <div class="space-y-4">

        <FwbInput v-model="form.input" label="Text Input" />

        <FwbTextarea v-model="form.textarea" label="Textarea" />

        <FwbCheckbox v-model="form.checkbox" label="Checkbox" />

        <FwbRadio name="demo" value="A" v-model="form.radio" label="Radio A" />
        <FwbRadio name="demo" value="B" v-model="form.radio" label="Radio B" />

        <FwbToggle v-model="form.toggle" label="Toggle" />

        <FwbFileInput v-model="form.file" label="File Upload" />
      </div>
    </section>

  </div>
</template>

<script>
import * as FlowbiteVue from "flowbite-vue";
import {
  FwbAccordion,
  FwbAccordionPanel,
  FwbAccordionHeader,
  FwbAccordionContent,
  FwbAlert,
  FwbBadge,
  FwbBreadcrumb,
  FwbBreadcrumbItem,
  FwbButton,
  FwbButtonGroup,
  FwbCard,
  FwbCarousel,
  FwbDropdown,
  FwbAvatar,
  FwbTable,
  FwbTabs,
  FwbTab,
  FwbModal,
  FwbTooltip,
  FwbInput,
  FwbTextarea,
  FwbCheckbox,
  FwbRadio,
  FwbToggle,
  FwbFileInput,
  useToast
} from "flowbite-vue";

export default {
  name: "FlowbiteDemoView",

  components: {
    FwbAccordion, FwbAccordionPanel, FwbAccordionHeader, FwbAccordionContent,
    FwbAlert,
    FwbBadge,
    FwbBreadcrumb, FwbBreadcrumbItem,
    FwbButton, FwbButtonGroup,
    FwbCard,
    FwbCarousel,
    FwbDropdown,
    FwbAvatar,
    FwbTable,
    FwbTabs, FwbTab,
    FwbModal,
    FwbTooltip,
    FwbInput, FwbTextarea, FwbCheckbox, FwbRadio, FwbToggle, FwbFileInput,
  },

  setup() {
    const { add: showToast } = useToast();
    return { showToast };
  },

  data() {
    return {
      availableComponents: Object.keys(FlowbiteVue),

      showModal: false,

      carouselImages: [
        "/no-image.png",
        "/no-image.png",
        "/no-image.png"
      ],

      tableCols: ["ID", "Name"],
      tableRows: [
        { ID: 1, Name: "John" },
        { ID: 2, Name: "Mary" }
      ],

      form: {
        input: "",
        textarea: "",
        checkbox: false,
        radio: null,
        toggle: false,
        file: null
      }
    };
  }
};
</script>
