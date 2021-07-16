import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  public scrolledTop=true;
  public menuTitles:string[] = ["rólam","elérhetőség","galéria"]
  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    let element = document.querySelector('nav') as HTMLElement;
    if(window.pageYOffset >= window.innerHeight){
      this.scrolledTop = false;
      this.checkScrollState();
    }else{
      this.scrolledTop= true;

    }
  }

  checkScrollState(){
    if(window.pageYOffset >window.innerHeight*3){
      this.setMenuTitles("rólam","elérhetőség","galéria");
    }else if(window.pageYOffset >window.innerHeight*2){
      this.setMenuTitles("galéria","elérhetőség","rólam");
    }else if(window.pageYOffset >window.innerHeight){
      this.setMenuTitles("elérhetőség","rólam","galéria");
    }
  }

  setMenuTitles(actualTitle: string, leftTitle: string, rightTitle: string){
    this.menuTitles= [actualTitle,leftTitle,rightTitle];
  }

}
