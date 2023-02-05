<template>
  <div>
    <BannerTitle 
      :is-picture="titleBar.isPicture"
      :src="titleBar.src" 
      :title="titleBar.title"
      :title-color="titleBar.titleColor"
      :description="titleBar.description"
    />
    <!-- Form contact -->
    <div class="flex flex-col md:flex-row items-center mt-16 p-4">
      <!-- Infos contact -->
      <div class="w-full xxs:w-3/4 md:w-2/5 md:pl-4 mymd:pl-10 lg:pl-16">
        <h2 class="text-2xl font-semibold">
          Informations de contact
        </h2>
        <div class="h-2 border-b-2 border-primary my-4 w-28"></div>
        <div class="flex items-center space-x-4">
          <outline-phone-icon class="w-10 h-10 text-primary" />
          <div>
            <p class="text-lg font-medium">
              Téléphone :
            </p>
            <p class="font-extralight">
              Tél : 06 33 77 78 77
            </p>
          </div>
        </div>
        <div class="h-2 border-b-2 border-primary my-4 w-28"></div>
        <div class="flex items-center space-x-4">
          <outline-map-icon class="w-10 h-10 text-primary" />
          <div>
            <p class="text-lg font-medium">
              Addresse :
            </p>
            <p class="font-extralight">
              7 avenue Bouvard<br />
              74000 ANNECY
            </p>
          </div>
        </div>
        <div class="h-2 border-b-2 border-primary my-4 w-28"></div>
        <div class="flex items-center space-x-4">
          <outline-mail-icon class="w-10 h-10 text-primary" />
          <div>
            <p class="text-lg font-medium">
              Email :
            </p>
            <p class="font-extralight">
              <a href="mailto:fam74000@hotmail.com">
                fam74000@hotmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <!-- Form Contact -->
      <div class="w-full md:w-3/5 p-4 bg-white rounded-md mt-8 md:mt-0">
        <form action="#">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <InputText 
              id="firstName"
              label-text="Prénom"
              type-input="text"
              placeholder-text="Jean"
              :is-required="true"
              :is-disabled="false"
              @event-change-value="onChangeValue"
            />
            <InputText 
              id="lastName"
              label-text="Nom"
              type-input="text"
              placeholder-text="Dupond"
              :is-required="true"
              :is-disabled="false"
              @event-change-value="onChangeValue"
            />
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <SelectSingle 
              id="project"
              label-text="Votre projet"
              label-choice="Choisir le type de projet"
              :options="projectOptions"
              :is-required="true"
              :is-disabled="false"
              @event-change-value="onChangeValue"
            />
            <InputText 
              id="address"
              label-text="Adresse"
              type-input="text"
              placeholder-text="avenue de France"
              :is-required="true"
              :is-disabled="false"
              @event-change-value="onChangeValue"
            />
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <InputText 
              id="postal"
              label-text="Code Postal"
              type-input="text"
              placeholder-text="74000"
              :is-required="true"
              :is-disabled="false"
              @event-change-value="onChangeValue"
            />
            <InputText 
              id="city"
              label-text="Ville"
              type-input="text"
              placeholder-text="ANNECY"
              :is-required="true"
              :is-disabled="false"
              @event-change-value="onChangeValue"
            />
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <InputText 
              id="mobile"
              label-text="Téléphone"
              type-input="tel"
              placeholder-text="0610203040"
              :is-required="false"
              :is-disabled="false"
              @event-change-value="onChangeValue"
            />
            <InputText 
              id="email"
              label-text="email"
              type-input="email"
              placeholder-text="Jean.dupond@gmail.com"
              :is-required="true"
              :is-disabled="false"
              @event-change-value="onChangeValue"
            />
          </div>
          <div class="mb-6">
            <InputTextarea 
              id="message"
              label-text="Votre message"
              :is-required="false"
              :is-disabled="false"
              @event-change-value="onChangeValue"
            />
          </div>
          <div class="flex justify-end space-x-12 my-4">
            <button class="btn btn-default" type="reset" click="resetForm">Effacer</button>
            <button class="btn" :class="[validatefields ? 'btn-primary' : 'btn-disabled']" type="submit" @click.prevent="sendEmail">Envoyer</button>
          </div>
        </form>
        <div id="alert-form" class="text-lg text-center py-2 my-4 transition duration-700">
          {{ alertForm }}
        </div>
      </div>
    </div>
    <!-- MAPS -->
    <div class="mb-4">
      <GMap
        ref="gMap"
        language="fr"
        :cluster="{options: {styles: clusterStyle}}"
        :center="{lat: locations[0].lat, lng: locations[0].lng}"
        :options="{fullscreenControl: false, styles: mapStyle}"
        :zoom="12"
      >
        <GMapMarker
          v-for="location in locations"
          :key="location.id"
          :position="{lat: location.lat, lng: location.lng}"
          :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
          @click="currentLocation = location"
        >
          <GMapInfoWindow :options="{maxWidth: 200}">
            <code>
              lat: {{ location.lat }},
              lng: {{ location.lng }}
            </code>
          </GMapInfoWindow>
        </GMapMarker>
        <GMapCircle :options="circleOptions"/>
      </GMap>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/form/input/InputText.vue';
import InputTextarea from '@/components/form/input/InputTextarea.vue';
import SelectSingle from '@/components/form/select/SelectSingle.vue';
import { validateForm, changeClassForm } from '~/assets/js/validateForm'
import regex from '~/assets/js/regex'

export default {
  name: 'ContactPage',
  components: {
    InputText,
    InputTextarea,
    SelectSingle
  },
  data() {
    return {
      lastname: null,
      firstname: null,
      project: null,
      address: null,
      postal: null,
      city: null,
      mobile: null,
      email: null,
      message: null,
      alertForm: null,
      loaded: false,
      titleBar: {
        isPicture: false,
        src: 'https://placeimg.com/1400/400/arch',
        title: 'Contact',
        titleColor: 'text-primary',
        description: 'Si vous avez la moindre question, si vous souhaitez que l\'on vous rapelle, c\'est ici !'
      },
      projectOptions: [
        {
          label: 'Neuf',
          value: 'new'
        },
        { 
          label: 'Rénovation',
          value: 'renovation'
        },
        { 
          label: 'Extension',
          value: 'extension'
        },
        { 
          label: 'Autre',
          value: 'other'
        }
      ],
      currentLocation: {
        lat: 45.90283,
        lng: 6.12166
      },
      circleOptions: {},
      locations: [
        {
          lat: 45.90283,
          lng: 6.12166
        }
      ],
      pins: {
        selected: null,
        notSelected: null
      },
      mapStyle: [],
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff"
        }
      ]
    }
  },
  computed: {
    validatefields() {
      if(regex.email.test(this.email) && regex.name.test(this.firstName) && regex.name.test(this.lastName) && regex.nameComplex.test(this.address) && regex.message.test(this.message)) {
        return true
      }
      return false
    }
  },  
  methods: {
    changeClassForm,
    validateForm,
    onChangeValue(payload) {
      switch(payload.id) {
        case "lastName":
          this.lastName = payload.value
          break;
        case "firstName":
          this.firstName = payload.value
          break;
        case "project":
          this.project = payload.value
          break;
        case "address":
          this.address = payload.value
          break;
        case "postal":
          this.postal = payload.value
          break;
        case "city":
          this.city = payload.value
          break;
        case "mobile":
          this.mobile = payload.value
          break;
        case "email":
          this.email = payload.value
          break;
        case "message":
          this.message = payload.value
          break;
        default:
          console.log('Error switch onChangeValue')
      }
      // this.validateForm(payload.id)
    },
    sendEmail() {
      if(!this.validatefields) {
        return
      }
      this.$axios.$post('contact/', {
        email: this.email,
        lastName: this.lastName,
        firstName: this.firstName,
        mobile: this.mobile,
        company: this.company,
        message: this.message,
        to: 'fam74000@hotmail.com'
      })
      .then(response => {
        if(response.code === 200) {
          this.alertForm = 'Le mail a bien été envoyé, je vous répondrai dans les plus bref délais.'
          const element = document.getElementById('alert-form')
          element.classList.add('text-green-400')
          element.classList.add('opacity-100')
          const self = this
          setTimeout(() => {
            element.classList.remove('opacity-100')
          }, 4000)
          setTimeout(() => {
            self.alertForm = null
            element.classList.remove('text-green-400')
            self.resetForm()
          }, 5000)
        }
      })
    },
    resetForm() {
      // get all inputs
      // const inputs = document.querySelectorAll('input')
      // get textarea
      // const textarea = document.querySelector('textarea')
      // we reset all class inputs
      // inputs.forEach(item => this.resetInput(item))
      // we reset class textarea
      // this.resetInput(textarea)
      // we reset value
      this.firstName = null
      this.lastName = null
      this.project = null
      this.address = null
      this.postal = null
      this.city = null
      this.mobile = null
      this.email = null
      this.message = null
      this.alertForm = null
    },
    resetInput(element) {
      element.classList.remove('is-invalid')
      element.classList.remove('is-valid')
    }
  }
}
</script>