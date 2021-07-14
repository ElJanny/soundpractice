import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit,AfterViewInit {
  @ViewChild('musicplayer') audio: ElementRef;
  private index: number = 0;
  private stop: boolean = true;

  //Ezek a sliderhez kellenek
  public value =0;
  public max= 100;


  constructor() { }

  ngAfterViewInit(): void {
    this.audio.nativeElement.src = path+playList[this.index];
  }

  ngOnInit(): void {
    this.index=0;
    this.stop = true;
  }

  setAudio(nextMusicNumber: number): void{
    this.index += nextMusicNumber;
    if(this.index<0){this.index=playList.length-1};
    if(this.index>playList.length-1){this.index=0};
    this.audio.nativeElement.src = path+playList[this.index];
    this.value=0;
    this.audio.nativeElement.play();
  }

  setStop(){
    this.value= this.audio.nativeElement.currentTime
    this.stop = !this.stop;
    if(this.stop){this.audio.nativeElement.pause()}
    else{this.audio.nativeElement.play()}
  }

}

const path:string = "./../../../../assets/music/";
const playList: string[] =[
"JPB - LONG NIGHT (feat. Marvin Divine) [NCS Release].mp3",
"NEFFEX - Careless _ [Copyright Free].mp3",
"NEFFEX - Best of Me _ [Copyright Free].mp3"
]
