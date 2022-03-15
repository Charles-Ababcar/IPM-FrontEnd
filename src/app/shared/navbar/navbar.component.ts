import { Component, OnInit, Renderer2, ViewChild, ElementRef, Directive } from '@angular/core';
import { ROUTES } from '../.././sidebar/sidebar.component';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { EmployeService } from 'src/app/Services/employe.service';
import { Employe } from 'src/app/Models/Employe';
import { KeycloakService } from 'keycloak-angular';
import jwt_decode from 'jwt-decode';
const misc: any = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};

declare var $: any;
@Component({
    selector: 'app-navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    mobile_menu_visible: any = 0;
    private nativeElement: Node;
    private toggleButton: any;
    private sidebarVisible: boolean;
    private _router: Subscription;
   
    /////////--------------------///////////////////////////
    // employe: Employe = new Employe(0,"","","","",null,"","",null,"","",0,"","","","",null,null);
    // matricule:string;
    // reference:string;
    // message:Employe;
        /////////////////notification/////////////////////////
        // public findByMatricule(){
    
        //     this.emp_service.getEmployeByMatricules(this.matricule).subscribe(
        //       data=>{this.message = data;
        //        console.log(this.matricule);
        //       if(this.message){
        //         this.showNotification('top','center',1,'<b>agent existe</b> :')
        //         console.log(this.message);
        //       }
        //     else if(!this.message){
        //         console.log("not existe");
        //         this.showNotification('top','center',3,"<b>agent n'existe pas</b> :")
        //       }
        //     }
        //       );
            
            
            
        //   }
        //   showNotification(from: any, align: any, idtype:any,note ) {
        //     const type = ['', 'success', 'warning', 'danger','info', 'rose', 'primary'];
        
        //     //const color = Math.floor((Math.random() * 6) + 1);
        
        //     $.notify({
        //         icon: 'notifications',
        //         message: note
        //     }, {
        //         type: type[idtype],
        //         timer: 2000,
        //         placement: {
        //             from: from,
        //             align: align
        //         },
        //         template: '<div data-notify="container" class="col-xs-14 col-sm-6 alert alert-{0} alert-with-icon" role="alert">' +
        //           '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        //           '<i class="material-icons" data-notify="icon">notifications</i> ' +
        //           '<span data-notify="title">{1}</span> ' +
        //           '<span data-notify="message">{2}</span>' +
        //           '<div class="progress" data-notify="progressbar">' +
        //             '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        //           '</div>' +
        //           '<a href="{3}" target="{4}" data-notify="url"></a>' +
        //         '</div>'
        //     });
        // }
    @ViewChild('app-navbar-cmp', {static: false}) button: any;
    username;
    email;
    lastname;
    decode;
    connect;
     constructor(private keycloak:KeycloakService, location: Location, private renderer: Renderer2, private element: ElementRef, private router: Router,private emp_service:EmployeService) {
         this.location = location;
         this.nativeElement = element.nativeElement;
         this.sidebarVisible = false;
         this.keycloak.loadUserProfile(true).then(res=>{
             this.username=res.firstName;
             this.lastname=res.lastName;

         });
         this.keycloak.getToken().then(data=>{
             this.connect=data;
             var decode=jwt_decode(this.connect)
             const map=new Map(Object.entries(decode))
         });
    }
    // minimizeSidebar(){
    //   const body = document.getElementsByTagName('body')[0];

    //   if (misc.sidebar_mini_active === true) {
    //       body.classList.remove('sidebar-mini');
    //       misc.sidebar_mini_active = false;

    //   } else {
    //       setTimeout(function() {
    //           body.classList.add('sidebar-mini');

    //           misc.sidebar_mini_active = true;
    //       }, 300);
    //   }

    //   // we simulate the window Resize so the charts will get updated in realtime.
    //   const simulateWindowResize = setInterval(function() {
    //       window.dispatchEvent(new Event('resize'));
    //   }, 180);

    //   // we stop the simulation of Window Resize after the animations are completed
    //   setTimeout(function() {
    //       clearInterval(simulateWindowResize);
    //   }, 1000);
    // }
    // hideSidebar(){
    //   const body = document.getElementsByTagName('body')[0];
    //   const sidebar = document.getElementsByClassName('sidebar')[0];

    //   if (misc.hide_sidebar_active === true) {
    //       setTimeout(function() {
    //           body.classList.remove('hide-sidebar');
    //           misc.hide_sidebar_active = false;
    //       }, 300);
    //       setTimeout(function () {
    //           sidebar.classList.remove('animation');
    //       }, 600);
    //       sidebar.classList.add('animation');

    //   } else {
    //       setTimeout(function() {
    //         body.classList.add('hide-sidebar');
    //           // $('.sidebar').addClass('animation');
    //           misc.hide_sidebar_active = true;
    //       }, 300);
    //   }

    //   // we simulate the window Resize so the charts will get updated in realtime.
    //   const simulateWindowResize = setInterval(function() {
    //       window.dispatchEvent(new Event('resize'));
    //   }, 180);

    //   // we stop the simulation of Window Resize after the animations are completed
    //   setTimeout(function() {
    //       clearInterval(simulateWindowResize);
    //   }, 1000);
    // }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);

        const navbar: HTMLElement = this.element.nativeElement;
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if (body.classList.contains('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
          this.sidebarClose();

          const $layer = document.getElementsByClassName('close-layer')[0];
          if ($layer) {
            $layer.remove();
          }
        });
    }
    onResize(event) {
      if ($(window).width() > 991) {
        return false;
      }
      return true;
    }
    sidebarOpen() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        setTimeout(function() {
            $toggle.classList.add('toggled');
        }, 430);

        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');


        if (body.querySelectorAll('.main-panel')) {
            document.getElementsByClassName('main-panel')[0].appendChild($layer);
        }else if (body.classList.contains('off-canvas-sidebar')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }

        setTimeout(function() {
            $layer.classList.add('visible');
        }, 100);

        $layer.onclick = function() { //asign a function
          body.classList.remove('nav-open');
          this.mobile_menu_visible = 0;
          this.sidebarVisible = false;

          $layer.classList.remove('visible');
          setTimeout(function() {
              $layer.remove();
              $toggle.classList.remove('toggled');
          }, 400);
        }.bind(this);

        body.classList.add('nav-open');
        this.mobile_menu_visible = 1;
        this.sidebarVisible = true;
    };
    sidebarClose() {
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');

        this.sidebarVisible = false;
        body.classList.remove('nav-open');
        // $('html').removeClass('nav-open');
        body.classList.remove('nav-open');
        if ($layer) {
            $layer.remove();
        }

        setTimeout(function() {
            $toggle.classList.remove('toggled');
        }, 400);

        this.mobile_menu_visible = 0;
    };
     sidebarToggle() {
         if (this.sidebarVisible === false) {
             this.sidebarOpen();
         } else {
             this.sidebarClose();
         }
     }

    // getTitle() {
    //   var titlee = this.location.prepareExternalUrl(this.location.path());
    //   if(titlee.charAt(0) === '#'){
    //       titlee = titlee.slice( 1 );
    //   }
    //     for (let i = 0; i < this.listTitles.length; i++) {
    //         if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
    //             return this.listTitles[i].title;
    //         } else if (this.listTitles[i].type === "sub") {
    //             for (let j = 0; j < this.listTitles[i].children.length; j++) {
    //                 let subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
    //                 // console.log(subtitle)
    //                 // console.log(titlee)
    //                 if (subtitle === titlee) {
    //                     return this.listTitles[i].children[j].title;
    //                 }
    //             }
    //         }
    //     }
    //     return 'Dashboard';
    // }
    // getPath() {
    //     return this.location.prepareExternalUrl(this.location.path());
    // }
    deconnexion(){
        this.router.navigateByUrl("/dashboard");
        return this.keycloak.logout();
    }
    isCameraApp(){
        return this.keycloak.getUserRoles
    }
}
