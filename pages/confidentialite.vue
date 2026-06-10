<template>
  <div>
    <BannerTitle
      :is-picture="titleBar.isPicture"
      :bg-color="titleBar.bgColor"
      :title="titleBar.title"
      :description="titleBar.description"
    />
    <div class="lg:max-w-screen-lg mx-auto">
      <div
        class="w-full text-gray-600 font-extralight mt-8 pl-4 pr-2 leading-8 text-justify mb-8"
      >
        <p class="text-xs">Dernière mise à jour : juin 2026</p>
        <p>
          La présente politique de confidentialité décrit la manière dont
          <strong>Flo Rénovation</strong> traite les données personnelles
          collectées sur le site flo-renovation.fr, conformément au Règlement
          Général sur la Protection des Données (RGPD).
        </p>

        <h2 class="text-lg font-medium my-4">1 – Responsable du traitement</h2>
        <p>Les données collectées sur ce site sont traitées par :</p>
        <ul>
          <li>
            <span class="text-primary font-medium">Flo Rénovation</span> (SARL)
          </li>
          <li>5 avenue du pont de Tasset, 74960 Annecy</li>
          <li>Téléphone : 04 50 46 51 55 / 06 33 77 78 77</li>
          <li>
            Email :
            <span class="text-primary font-medium"
              >contact@flo-renovation.fr</span
            >
          </li>
        </ul>

        <h2 class="text-lg font-medium my-4">2 – Données collectées</h2>
        <p>
          Le site collecte des données personnelles uniquement lorsque vous
          remplissez le formulaire de contact afin de demander un devis ou de
          nous joindre, à savoir :
        </p>
        <ul class="list-disc pl-6">
          <li>Vos nom et prénom</li>
          <li>Votre adresse e-mail</li>
          <li>Votre numéro de téléphone (facultatif)</li>
          <li>L'adresse du chantier (adresse, code postal, ville)</li>
          <li>Le type de projet</li>
          <li>
            Toute information que vous choisissez d'indiquer dans votre message
          </li>
        </ul>
        <p>
          Aucune donnée n'est collectée à votre insu et le site ne crée aucun
          compte utilisateur.
        </p>

        <h2 class="text-lg font-medium my-4">
          3 – Finalités et utilisation des données
        </h2>
        <p>
          Les informations recueillies sont utilisées uniquement dans le cadre
          de :
        </p>
        <ul class="list-disc pl-6">
          <li>la prise de contact avec les clients ;</li>
          <li>l'établissement de devis ;</li>
          <li>la gestion des demandes commerciales ;</li>
          <li>le suivi des projets et prestations.</li>
        </ul>
        <p>
          Les données ne sont ni vendues, ni cédées, ni louées à des tiers à des
          fins commerciales.
        </p>

        <h2 class="text-lg font-medium my-4">
          4 – Destinataires et hébergement des données
        </h2>
        <p>
          Les informations transmises via le formulaire ne sont pas enregistrées
          dans une base de données : elles sont envoyées directement par e-mail
          à
          <strong>Flo Rénovation</strong>. L'acheminement de cet e-mail est
          assuré par notre prestataire technique d'envoi,
          <strong>Resend</strong>, qui agit en tant que sous-traitant et
          n'utilise pas ces données à d'autres fins.
        </p>
        <p>
          Le message reçu est conservé dans la messagerie de Flo Rénovation le
          temps nécessaire au traitement de votre demande.
        </p>

        <h2 class="text-lg font-medium my-4">5 – Durée de conservation</h2>
        <p>
          Les données personnelles sont conservées uniquement pendant la durée
          nécessaire au traitement de votre demande, puis conformément aux
          obligations légales et comptables applicables.
        </p>

        <h2 class="text-lg font-medium my-4">
          6 – Cookies et mesure d'audience
        </h2>
        <p>
          Le site utilise des cookies et traceurs soumis à votre consentement :
        </p>
        <ul class="list-disc pl-6">
          <li>
            <strong>Google Ads</strong> : mesure des conversions publicitaires
            (afin de savoir si votre demande de contact provient d'une annonce).
          </li>
          <li>
            <strong>Google Maps</strong> : affichage de la carte de localisation
            sur la page contact.
          </li>
        </ul>
        <p>
          Ces traceurs ne sont déposés qu'après votre accord, recueilli via le
          bandeau affiché lors de votre première visite. Aucun cookie
          publicitaire ou de mesure d'audience n'est activé tant que vous ne
          l'avez pas accepté. Vous pouvez modifier votre choix à tout moment :
        </p>
        <button class="btn btn-primary my-2" @click="openCookieSettings">
          Gérer mes préférences cookies
        </button>

        <h2 class="text-lg font-medium my-4">7 – Sécurité des données</h2>
        <p>
          <strong>Flo Rénovation</strong> met en œuvre les mesures techniques et
          organisationnelles nécessaires afin d'assurer la sécurité et la
          confidentialité des données personnelles collectées.
        </p>

        <h2 class="text-lg font-medium my-4">8 – Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez des droits suivants sur vos
          données :
        </p>
        <ul class="list-disc pl-6">
          <li>droit d'accès ;</li>
          <li>droit de rectification ;</li>
          <li>droit à l'effacement ;</li>
          <li>droit d'opposition ;</li>
          <li>droit à la limitation du traitement.</li>
        </ul>
        <p>
          Vous pouvez exercer ces droits à tout moment en nous contactant à
          l'adresse
          <span class="text-primary font-medium">contact@flo-renovation.fr</span
          >. Vous disposez également du droit d'introduire une réclamation
          auprès de la CNIL (www.cnil.fr).
        </p>

        <h2 class="text-lg font-medium my-4">9 – Contact</h2>
        <p>
          Pour toute question relative à la protection de vos données
          personnelles :
        </p>
        <ul>
          <li>
            <span class="text-primary font-medium">Flo Rénovation</span> —
            Annecy, Haute-Savoie
          </li>
          <li>Téléphone : 04 50 46 51 55</li>
          <li>
            Email :
            <span class="text-primary font-medium"
              >contact@flo-renovation.fr</span
            >
          </li>
          <li>Site internet : https://www.flo-renovation.fr</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PolitiqueConfidentialitePage',
  data() {
    return {
      titleBar: {
        isPicture: false,
        bgColor: 'bg-secondary',
        title: 'Politique de confidentialité',
        description:
          'Comment Flo Rénovation collecte, utilise et protège vos données personnelles, conformément au RGPD.',
      },
    }
  },
  head: {
    title: 'Politique de confidentialité',
  },
  methods: {
    openCookieSettings() {
      if (this.$cookieConsent) {
        this.$cookieConsent.reopen()
      }
    },
  },
}
</script>
