import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }



  slides = [
    {
      titreMenu: `LeMenuSamer`,
      prixMenu: '5€50',
      img: "https://www.la-viande.fr/sites/default/files/styles/slider_recettes/public/recettes/images/burger-de-hampe-de-boeuf-a-laustralienne.jpg?itok=91Hj2MMY"
    },
    {
      titreMenu: `LeMenuPasOuf`,
      prixMenu: '2€50',
      img: "https://fr.ubergizmo.com/wp-content/uploads/2013/08/double-cheese-mcdonalds-offre-rapport-prix-nutrition-imbattable.jpg"
    },
    {
      titreMenu: `LeMenuDesIbmErs`,
      prixMenu: '50€50',
      img: "https://media-cdn.tripadvisor.com/media/photo-s/11/0f/2a/c2/le-mega-burger.jpg"
    }
  ];

  cardMenus = [
    {
      titreMenu: "test1",
      prixMenu: "5€50",
      img: "https://www.la-viande.fr/sites/default/files/styles/slider_recettes/public/recettes/images/burger-de-hampe-de-boeuf-a-laustralienne.jpg?itok=91Hj2MMY"
    },
    {
      titreMenu: "test2",
      prixMenu: "5€50",
      img: "https://www.la-viande.fr/sites/default/files/styles/slider_recettes/public/recettes/images/burger-de-hampe-de-boeuf-a-laustralienne.jpg?itok=91Hj2MMY"

    },
    {
      titreMenu: "test3",
      prixMenu: "5€50",
      img: "https://www.la-viande.fr/sites/default/files/styles/slider_recettes/public/recettes/images/burger-de-hampe-de-boeuf-a-laustralienne.jpg?itok=91Hj2MMY"
    },
  ];
}
