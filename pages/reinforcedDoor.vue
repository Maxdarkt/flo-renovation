<template>
  <div>
    <BannerTitle 
      :is-picture="titleBar.isPicture"
      :src="titleBar.src" 
      :title="titleBar.title" 
      :description="titleBar.description"
    />
    <div id="diamant-10"></div>
    <div class="lg:max-w-screen-lg mx-auto mt-16">

      <!-- DIAMANT 10 -->
      <div>
        <h2 class="text-2xl text-center font-bold mb-8">
          Diamant 10
        </h2>

        <!-- CONTAINER PICTURE & ICONS -->
        <div class="flex flex-col md:flex-row items-center md:items-start p-4">
          <!-- PICTURE -->
          <div class="w-full md:h-[350px] lg:h-[480px] xl:h-[550px]">
            <img src="@/assets/images/reinforcedDoor/reinforced_door_diamant_10.jpg" alt="Porte blindée Diamant 10" class="w-full h-full object-cover rounded-t-md md:rounded-none md:rounded-l-md">
          </div>

          <!-- ICONS -->
          <div class="w-full md:h-[350px] lg:h-[480px] xl:h-[550px] flex flex-col justify-around bg-white p-4 rounded-b-md md:rounded-none md:rounded-r-md">

            <!-- ICON KEY VIGIE -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_key_vigie.svg" alt="icone clé vigie" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                clé vigie mobile
              </p>
            </div><!-- END ICON KEY VIGIE -->

            <!-- ICON KEY VTX -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_key_vtx.svg" alt="icone clé VTX" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                clé vtx
              </p>
            </div><!-- END ICON KEY VTX -->

            <!-- ICON CUT FIRE -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_cut_fire.svg" alt="icone coupe feu" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                coupe feu
              </p>
            </div><!-- END ICON CUT FIRE -->

            <!-- ICON FOUR OR FIVE POINTS -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_four_five_points.svg" alt="icone quatre ou cinq points" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                quatre ou cinq points de fermeture
              </p>
            </div><!-- END ICON FOUR OR FIVE POINTS -->

            <!-- ICON KEY VAKMOBIL -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_key_vakmobil.svg" alt="icone clé vakmobil" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                clé vakmobil
              </p>
            </div><!-- END ICON KEY VAKMOBIL -->

            <!-- ICON GUARANTEE 10 YEARS -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_guarantee_10.svg" alt="icone garantie 10 ans" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                garantie 10 ans
              </p>
            </div><!-- END ICON GUARANTEE 10 YEARS -->

            <!-- ICON CUSTOM -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_custom.svg" alt="icone personnalisé" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                fabrication sur-mesure
              </p>
            </div><!-- END ICON CUSTOM -->

          </div><!-- END ICONS -->
        </div><!-- END CONTAINER PICTURE & ICONS -->
        
        <!-- DESCRIPTION PRODUCT -->
        <div>
          <h3 class="uppercase text-2xl text-center font-bold my-8">
            Présentation et avantages produits
          </h3>

          <!-- DESCRIPTION -->
          <div class="text-justify p-4">
            <!-- IMAGE FLOAT -->
            <div class="md:float-right md:pl-4 mb-4">
              <img src="@/assets/images/reinforcedDoor/detail_diamant_10.jpg" alt="Détail porte blindée Diamant 10" class="w-full md:w-[350px] h-auto rounded-md">
            </div>
            
            <!-- TEXTE -->
            <p>
              <strong>Diamant 10</strong> affiche une épaisseur de 82 mm, garantie anti effraction par le CNPP.
              Elle est 2 fois plus épaisse qu'une porte classique !
            </p>
            <p class="mt-2">
              Diamant 10 bénéficie d'un verrouillage de l'ensemble de ses points de fermeture en 1 seul tour de clé.
              Sa serrure est certifiée A2P*. Elle offre un bon niveau de sécurité.
            </p>
            <p class="mt-2">
              Les clés qui équipent la Diamant 10 sont brevetées et livrées avec une carte de propriété numérotée.
              Cela vous assure une reproduction sécurisée.
            </p>
            <p class="mt-2">
              En formant un puissant écran aux nuisances sonores, Diamant 10 permet un affaiblissement acoustique de 42dB avec l'option coupe-feu (40dB sans cette option), ainsi qu'une isolation thermique Ud de 1,3 W/(m².K) (1,6 W/(m².K) en version coupe-feu), grâce à un double recouvrement et l'utilisation, entre autres, de laine de roche.
              Diamant 10 peut intégrer une option coupe-feu certifiée EI2 30.
            </p>
            <ul class="mt-2 list-disc pl-12">
              <li>Structure en acier de 1,5 mm d'épaisseur</li>
              <li>Pions anti-dégondage</li>
              <li>Pênes rotatifs anti-sciage de diamètre 22mm</li>
              <li>3 paumelles montées sur roulement à billes</li>
              <li>Verrouillage en un seul tour de clé</li>
              <li>Bicoloration des profils (en option)</li>
              <li>Entrebailleur décondamnable à la clé depuis l'extérieur (en option) hors cylindre européen.</li>
              <li>Assemblée avec précision suivant un process de qualité (norme ISO 9001)</li>
            </ul>
          </div><!-- END DESCRIPTION -->

        </div><!-- END DESCRIPTION PRODUCT -->
      </div><!-- END DIAMANT 10 -->

      <div id="diamant-20"></div>
      <div class="border-t border-gray-300 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 my-8">
        <!-- ///// ----- ///// ----- ///// ----- ///// ----- ///// ----- ///// ----- ///// ----- ///// ----- ///// -->
      </div>

      <!-- DIAMANT 20 -->
      <div>
        <h2 class="text-2xl text-center font-bold mb-8">
          Diamant 20
        </h2>

        <!-- CONTAINER PICTURE & ICONS -->
        <div class="flex flex-col md:flex-row items-center md:items-start p-4">
          <!-- PICTURE -->
          <div class="w-full md:h-[350px] lg:h-[480px] xl:h-[550px]">
            <img src="@/assets/images/reinforcedDoor/reinforced_door_diamant_20.jpg" alt="Porte blindée Diamant 20" class="w-full h-full object-cover rounded-t-md md:rounded-none md:rounded-l-md">
          </div>

          <!-- ICONS -->
          <div class="w-full md:h-[350px] lg:h-[480px] xl:h-[550px] flex flex-col justify-around bg-white p-4 rounded-b-md md:rounded-none md:rounded-r-md">

            <!-- ICON IGNIFUGE -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_ignifuge.svg" alt="icone ignifuge" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                certification ignifuge
              </p>
            </div><!-- END ICON IGNIFUGE -->  

            <!-- ICON SEVEN POINTS -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_seven_points.svg" alt="icone sept points" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                sept points de fermeture
              </p>
            </div><!-- END ICON SEVEN POINTS -->

            <!-- ICON KEY VIGIE -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_key_vigie.svg" alt="icone clé vigie" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                clé vigie mobile
              </p>
            </div><!-- END ICON KEY VIGIE -->

            <!-- ICON CUT FIRE -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_cut_fire.svg" alt="icone coupe feu" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                coupe feu
              </p>
            </div><!-- END ICON CUT FIRE -->

            <!-- ICON KEY VAKMOBIL -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_key_vakmobil.svg" alt="icone clé vakmobil" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                clé vakmobil
              </p>
            </div><!-- END ICON KEY VAKMOBIL -->

            <!-- ICON GUARANTEE 10 YEARS -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_guarantee_10.svg" alt="icone garantie 10 ans" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                garantie 10 ans
              </p>
            </div><!-- END ICON GUARANTEE 10 YEARS -->

            <!-- ICON CUSTOM -->
            <div class="flex items-center gap-2 border-b border-gray-300 py-2">
              <p class="w-10 text-center">
                <img src="@/assets/images/icons/icon_custom.svg" alt="icone personnalisé" class="w-6 md:w-7 lg:w-8 xl:w-10 h-6 md:h-7 lg:h-8 xl:h-10">
              </p>
              <p class="flex-1 uppercase">
                fabrication sur-mesure
              </p>
            </div><!-- END ICON CUSTOM -->

          </div><!-- END ICONS -->
        </div><!-- END CONTAINER PICTURE & ICONS -->
        
        <!-- DESCRIPTION PRODUCT -->
        <div>
          <h3 class="uppercase text-2xl text-center font-bold my-8">
            Présentation et avantages produits
          </h3>

          <!-- DESCRIPTION -->
          <div class="text-justify p-4">
            <!-- IMAGE FLOAT -->
            <div class="md:float-right md:pl-4 mb-4">
              <img src="@/assets/images/reinforcedDoor/detail_diamant_20.jpg" alt="Détail porte blindée Diamant 20" class="w-full md:w-[350px] h-auto rounded-md">
            </div>
            
            <!-- TEXTE -->
            <p>
              <strong>Diamant 20</strong> affiche une épaisseur de 82 mm, garantie anti effraction.
              Elle est 2 fois plus épaisse qu'une porte classique !
            </p>
            <p class="mt-2">
              Diamant 20 bénéficie d'un verrouillage de l'ensemble de ses points de fermeture en 1 seul tour de clé.
              Sa serrure est certifiée et offre une sécurité optimale.
            </p>
            <p class="mt-2">
              Les clés qui équipent Diamant 20 sont brevetées et livrées avec une carte de propriété numérotée.
              Cela vous assure une reproduction sécurisée.
            </p>
            <p class="mt-2">
              En formant un puissant écran aux nuisances sonores, Diamant 20 permet un affaiblissement acoustique de 42dB (44dB en version coupe-feu),
              ainsi qu'une isolation thermique Ud de 1,2 W/(m².K) (1,6 W/(m².K) en version coupe-feu), grâce à un double recouvrement et l'utilisation, entre autres, de laine de roche.
              Diamant 20 peut intégrer une option coupe-feu certifiée EI2 30.
            </p>
            <ul class="mt-2 list-disc pl-12">
              <li>Structure en acier de 2 mm d'épaisseur</li>
              <li>3 pions anti-dégondage</li>
              <li>Pênes rotatifs anti-sciage de diamètre 22mm</li>
              <li>4 paumelles montées sur roulement à billes</li>
              <li>Bicoloration des profils (en option)</li>
              <li>Entrebailleur décondamnable à la clé depuis l'extérieur (en option)</li>
              <li>Assemblée avec précision suivant un process de qualité (norme ISO 9001)</li>
            </ul>
          </div><!-- END DESCRIPTION -->

        </div><!-- END DESCRIPTION PRODUCT -->
      </div><!-- END DIAMANT 10 -->

    </div>
    <BannerQuality class="mt-32"/>
  </div>
</template>

<script>
export default {
  name: 'FrontDoorPage',
  data() {
    return {
      titleBar: {
        isPicture: false,
        src: require('@/assets/images/background/renovation.jpg'),
        title: 'PORTE BLINDEE D\'APPARTEMMENT',
        description: 'RENFORCER LA SECURITE DE VOTRE LOGEMENT.'
      }
    }
  },
  head: {
    title: 'Portes blindées d\'appartement',
  }
}
</script>