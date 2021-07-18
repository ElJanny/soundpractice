import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private gallery: Gallery) { }

  ngOnInit(): void {
  }

  public kepId = 0;
  

}
