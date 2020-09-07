import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() element: {type:string, name: string, content:string};
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { 
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit() { 
    console.log("ngOnInit called");
    console.log("Text content is: " + this.header.nativeElement.textContent);
    console.log("Text content of paragraph is: " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("ndDoCheck called");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
    console.log("Text content of paragraph is: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
    console.log("Text content is: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}
