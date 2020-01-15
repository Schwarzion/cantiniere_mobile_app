import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  private cardHebdos;
  private subscription: Subscription;
  private userInfo: any;
  public load = "http://192.168.40.128:8080/lunchtime/";
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    //this.getMenuTodayList("");
    this.getMenuWeekList();
    this.getUserInfo();
  }

  //get all menu for the week
  public getMenuWeekList() {
    this.subscription = this.menuService.getMenuWeekList().subscribe(resp => {
      this.cardHebdos = resp;
      console.log(this.cardHebdos);
    });
  }


  //set user info in the class
  public getUserInfo() {
    this.userInfo = JSON.parse(localStorage.getItem('userinfo'));
  }

  //getImage menu for slide
  public getImg(image: any) {
    return `${environment.apiUrl}/${image}`;
  }

  // public getMenuTodayList(menu) {
  //   this.menuService.getMenuTodayList(menu).subscribe(resp => {
  //     this.results = resp;
  //     console.log(this.results);
  //   })
  // }


  // slides = [
  //   {
  //     titreMenu: `LeMenuSamer`,
  //     meals: [
  //       {
  //         nomPlat: `bidule`,
  //         imgPlat: 'uneImage',
  //       },
  //       {
  //         nomPlat: `bidule2`,
  //         imgPlat: 'uneAutreImage',
  //       }
  //     ],
  //     prixMenu: '5€50',
  //     img: "https://www.la-viande.fr/sites/default/files/styles/slider_recettes/public/recettes/images/burger-de-hampe-de-boeuf-a-laustralienne.jpg?itok=91Hj2MMY"
  //   },
  //   {
  //     titreMenu: `LeMenuPasOuf`,
  //     prixMenu: '2€50',
  //     meals: [
  //       {
  //         nomPlat: `bidule`,
  //         imgPlat: 'uneImage',
  //       },
  //       {
  //         nomPlat: `bidule2`,
  //         imgPlat: 'uneAutreImage',
  //       }
  //     ],
  //     img: "https://fr.ubergizmo.com/wp-content/uploads/2013/08/double-cheese-mcdonalds-offre-rapport-prix-nutrition-imbattable.jpg"
  //   },
  //   {
  //     titreMenu: `LeMenuDesIbmErs`,
  //     prixMenu: '50€50',
  //     meals: [
  //       {
  //         nomPlat: `bidule`,
  //         imgPlat: 'uneImage',
  //       },
  //       {
  //         nomPlat: `bidule2`,
  //         imgPlat: 'uneAutreImage',
  //       }
  //     ],
  //     img: "https://media-cdn.tripadvisor.com/media/photo-s/11/0f/2a/c2/le-mega-burger.jpg"
  //   }
  // ];

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
