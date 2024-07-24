import { Component, Renderer2 } from "@angular/core";

@Component({
  selector: "style-comp",
  standalone: true,
  template: ``,
})
export class StyleComponent {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    //  установка цвета фона страницы при инициализации компонента
    this.renderer.setStyle(document.body, "background-color", `#06266F`);
  }
}
