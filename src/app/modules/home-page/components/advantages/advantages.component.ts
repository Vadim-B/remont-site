import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const elementsForAnimated = document.querySelectorAll('.forAnimated');

    // настройки для observer
    const options = {
      // элемент, относительно которого осуществляется отслеживание
      // т.к. мы следим относительно вьюпорта, его значение - null
      root: null,
      // отступы внешнего элемента
      rootMargin: '0px',
      // порог срабатывания
      threshold: 0.1
    };

    /**
     * позволяет отследить, когда какой-то объект попадает в зону видимости
     * принимает функцию, которая сработает, при отработке условий в options
     */
    const observer = new IntersectionObserver(this.addClassForAnimated, options);

    elementsForAnimated.forEach(element => {
      observer.observe(element);
    });
  }

  /**
   ** Метод, который сработает, когда состояние одного из наблюдаемых элементов поменяется
   * addClassForAnimated - добавляем элементу класс для включения анимации
   * @param elementsState - состояние отслеживаемых элементов
   */
  public addClassForAnimated(elementsState) {
    elementsState.forEach(elementState => {
      // если элемент на экране
      if (elementState.isIntersecting === true) {
        // добавляем ему класс для анимации из дата атрибута
        elementState.target.classList.add(
          elementState.target.getAttribute('data-animated-class')
        );
      // если анимация сработала и элемент ушел из зоны видимости
      } else if (elementState.target.classList.contains(
        elementState.target.getAttribute('data-animated-class')
      )) {
        elementState.target.classList.remove(
          elementState.target.getAttribute('data-animated-class')
        );
      }
    });
  }
}
