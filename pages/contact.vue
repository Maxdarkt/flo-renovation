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
    <div class="flex mt-16 p-4">
      <!-- Infos contact -->
      <div class="w-2/5 lg:pl-32">
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
      <div class="w-3/5 p-4 bg-white rounded-md">
        <form action="#">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <InputText 
              id="firstName"
              label-text="Prénom"
              type-input="text"
              placeholder-text="Jean"
              :is-required="true"
              :is-disabled="false"
              @event-change-value="validateField"
            />
            <InputText 
              id="lastName"
              label-text="Nom"
              type-input="text"
              placeholder-text="Dupond"
              :is-required="true"
              :is-disabled="false"
              @event-change-value="validateField"
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
              @event-change-value="validateField"
            />
            <InputText 
              id="adress"
              label-text="Adresse"
              type-input="text"
              placeholder-text="avenue de France"
              :is-required="true"
              :is-disabled="false"
              @event-change-value="validateField"
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
              @event-change-value="validateField"
            />
            <InputText 
              id="city"
              label-text="Ville"
              type-input="text"
              placeholder-text="ANNECY"
              :is-required="true"
              :is-disabled="false"
              @event-change-value="validateField"
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
              @event-change-value="validateField"
            />
            <InputText 
              id="E-mail"
              label-text="email"
              type-input="email"
              placeholder-text="Jean.dupond@gmail.com"
              :is-required="true"
              :is-disabled="false"
              @event-change-value="validateField"
            />
          </div>
          <div class="mb-6">
            <InputTextarea 
              id="message"
              label-text="Votre message"
              :is-required="false"
              :is-disabled="false"
              @event-change-value="validateField"
            />
          </div>
          <div class="flex justify-end space-x-12 my-4">
            <button class="btn btn-default" type="reset">Effacer</button>
            <button class="btn btn-primary" type="submit">Envoyer</button>
          </div>
        </form>
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

export default {
  name: 'ContactPage',
  components: {
    InputText,
    InputTextarea,
    SelectSingle
  },
  data() {
    return {
      titleBar: {
        isPicture: true,
        src: require('@/assets/images/background/fond_batiment_2.jpg'),
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
        lat: 45.90324,
        lng: 6.12129
      },
      circleOptions: {},
      locations: [
        {
          lat: 45.90324,
          lng: 6.12129
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
  methods: {
    validateField(payload) {
      console.log(payload);
    }
  }
}
</script>