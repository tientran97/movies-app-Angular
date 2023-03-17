import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'video-embed',
    templateUrl: './video-embed.component.html',
    styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {

  @Input() key: string | null = null;
  
  videoURL: SafeResourceUrl = '';
  
  constructor(private sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
      this.videoURL = this.getSafeURL('https://www.youtube.com/embed/' + this.key);
    }

    getSafeURL(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
