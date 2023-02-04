<template>
  <div>
    <BannerTitle 
      :is-picture="titleBar.isPicture"
      :bg-color="titleBar.bgColor" 
      :title="titleBar.title" 
      :description="titleBar.description"
    />
    <div class="lg:max-w-screen-lg mx-auto">
      <div class="w-full text-gray-600 font-extralight mt-8 pl-4 pr-2 leading-8 text-justify mb-8">
        <p class="text-xs">
          Le présent site est la propriété de Flo-renovation.fr établissement situé à Annecy
        </p>
        <h2 class="text-lg font-medium my-4"> 
          1 – Conditions d’utilisation du site
        </h2>
        <p>
          <strong>Flo Rénovation</strong> fournit ses services sous réserve que vous vous engagiez à respecter les présentes conditions d’utilisation que <strong>Flo Rénovation</strong> sera libre de modifier à tout moment.
        </p>
        <p class="text-lg font-medium my-4">
          Informations éditeur
        </p>
        <p class="text-lg text-primary font-medium">
          Flo Rénovation
        </p>
        <ul>
          <li>
            7 avenue Bouvard
          </li>
          <li>
            74000 ANNECY
          </li>
          <li>
            Tél : +33 (0)6 33 77 78 77
          </li>
          <li>
            Web : https://flo-renovation.fr
          </li>
          <li>
            Raison sociale : <span class="text-primary font-medium">Flo Rénovation</span>
          </li>
          <li>
            Forme Juridique : EURL
          </li>
          <li>
            Email : <span class="text-primary font-medium">contact@flo-renovation.fr</span>
          </li>
          <li>
            RCS : Annecy, N° Siren 824 882 310 00017
          </li>
          <li>
            Capital social : 10000 euros
          </li>
          <li>
            N° TVA : FR14824882310
          </li>
          <li>
            Nom du responsable de la publication : <span class="text-primary font-medium">Floran SHAQIRI</span>
          </li>
        </ul>
        <h2 class="text-lg font-medium my-4"> 
          2 – Propriété intellectuelle
        </h2>
        <p>
          En accord avec les lois régissant la propriété intellectuelle, la reproduction ou l’utilisation des éléments se trouvant dans ce site Internet, en totalité ou en partie est strictement interdite. Seules sont maintenues les exceptions légales dont notamment la représentation dans le cadre du cercle de famille, la copie privée ou le droit de courte citation.
        </p>
        <p>
          Ainsi, tous les textes, photos, logos, marques et autres éléments reproduits sur ce site sont réservés et protégés par le droit de la propriété intellectuelle. (Droit auteur, droit voisin, droit des marques…).
        </p>
        <p>
          Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet est interdite et constituerait une contrefaçon sanctionnée par les articles L 335-2 et suivants du Code de la propriété intellectuelle.
        </p>
        <p>
          Il en est de même des éventuelles bases de données figurant sur le site Internet qui sont protégées par les dispositions de la loi du 11 juillet 1998 portant transposition dans le Code de la propriété intellectuelle (CPI) de la directive européenne du 11 mars 1996 relative à la protection juridique des bases de données.
        </p>
        <h2 class="text-lg font-medium my-4"> 
          3 – Données personnelles
        </h2>
        <p>
          <strong>Flo Rénovation</strong> s’engage à maintenir confidentielles les données personnelles fournies par l’utilisateur du site et à ne pas les transférer à d’autres sociétés ou organismes. 
        </p>
        <p>
          <strong>Flo Rénovation</strong> s’engage à assurer à toute personne qui en fera la demande un droit d’accès, de rectification et de suppression des données la concernant.
        </p>
        <h2 class="text-lg font-medium my-4"> 
          4 – Responsabilité
        </h2>
        <p>
          <strong>Flo Rénovation</strong> décline toute responsabilité pour les difficultés rencontrées lors de l’accès à son site ou pour toute défaillance de communication.
        </p>
        <p>
          <strong>Flo Rénovation</strong> se réserve la possibilité de modifier, d’interrompre temporairement ou de façon permanente, toute ou une partie du site, sans <strong>Flo Rénovation</strong> ne pourra en aucun cas être tenu pour responsable à votre encontre ou à l’encontre d’un tiers de toute modification, interruption ou suspension du site.
        </p>        
        <h2 class="text-lg font-medium my-4"> 
          5 – Liens hypertextes
        </h2>
        <p>
          Vous êtes libres d’établir des liens vers ce site dans la mesure où ils ne portent pas atteinte à l’image de son éditeur. Vous êtes autorisés à établir des liens vers les pages du site au format : html, php, xml.
        </p>
        <p>
          La pratique du framing est interdite de même que toute autre pratique ou technique susceptible d’engendrer une confusion dans l’esprit du public.
        </p>
        <p>
          Sont prohibés les liens profonds vers les documents aux formats pdf, Doc, ou rtf. En effet, ce type de document ne permet pas de prendre connaissance des présentes conditions d’utilisation.
        </p>
        <p>
          Flo Rénovation n’est en aucun cas responsable du contenu des sites Internet accessibles à travers son site web.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MentionsLegalesPage',
  data() {
    return {
      titleBar: {
        isPicture: false,
        bgColor: 'bg-secondary',
        src: 'https://placeimg.com/1400/400/arch',
        title: 'Mentions Légales',
        description: 'En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, les conditions d’utilisation de son site internet.'
      }
    }
  },
  head: {
    title: 'Mentions Légales',
  }
}
</script>