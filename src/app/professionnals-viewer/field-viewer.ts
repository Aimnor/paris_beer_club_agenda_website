import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-viewer',
  standalone: false,
  styleUrl: './field-viewer.css',
  template: `
    @if (hasContent){
      <div class="section">
      <div class="type">{{type}}</div>
      @if (isString){<div class="content">
        @if(type === "Email"){
          <a href="maito:{{content}}">{{content}}</a>
        }
        @else if(type === "Adresse"){
          <a href="https://www.google.com/maps/search/?api=1&query={{name}}, {{content}}">{{content}}</a>
        }
        @else{ {{content}} }
        </div>
      }
      @else {
        <div class="content">
          @for (line of content; track $index) {
          <div>
            - 
            @if(type === "Sites"){
              <a href="http://{{line}}">{{line}}</a>
            }
            @else{ {{line}} }
          </div>
          }
        </div>
      }
    </div>
    }
  `,

})

export class FieldViewer {
  @Input() type: string = "";
  @Input() content?: string | Array<string>;
  @Input() name?: string = "";

  hasContent: boolean = false;
  isString: boolean = true;

  ngOnInit() {
    if (typeof this.content === "string") {
      if (this.content != "") { this.hasContent = true; }
    }
    else if (Array.isArray(this.content)) {
      this.isString = false;
      if (this.content.length != 0) { this.hasContent = true; }
    }
  }
}
