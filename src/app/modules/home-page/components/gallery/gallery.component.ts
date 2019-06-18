import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // Номер фото в увеличении
  public targetPhoto = 1;
  // Остановка автопереключений фото
  public targetPhotoToggleStopped = false;

  // Номер галереи
  public galleryNumber = 0;
  // Описание объекта из галереи
  public galleryDescription = [
    {
      title: 'Ремонтно-отделочные работы под ключ по Вильямса 57 Одесса',
      type: 'Новостройка',
      square: 125,
      perio: 30,
      problem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.',
      specificity: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.'
    },
    {
      title: 'Ремонт под ключ по Королева 21 Одесса',
      type: 'Вторичка',
      square: 150,
      perio: 32,
      problem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.',
      specificity: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.'
    },
    {
      title: 'Ремонт под ключ',
      type: 'Новостройка',
      square: 140,
      perio: 27,
      problem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.',
      specificity: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.'
    },
    {
      title: 'Ремонт котеджа',
      type: 'Вторичка',
      square: 130,
      perio: 25,
      problem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.',
      specificity: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.'
    },
    {
      title: 'Ремонт под ключ',
      type: 'Новостройка',
      square: 170,
      perio: 35,
      problem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.',
      specificity: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem libero sit cumque temporibus error hic illum reiciendis, similique quos laudantium? Ipsam ad minus vero quo, perspiciatis a sapiente veniam ullam.'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.targetPhotoToggle();
  }

  // Переключение фото в одной галерее
  public targetPhotoToggle() {
    const toggle = () => {
      if (this.targetPhotoToggleStopped === true) {
        return;
      } else if (this.targetPhoto === 6) {
        this.targetPhoto = 1;
      } else {
        this.targetPhoto += 1;
      }
    };
    setInterval(toggle, 3000);
  }

  // Переключение предыдущей галереи
  public prevGalleryNumber() {
    if (this.galleryNumber > 0) {
      this.galleryNumber -= 1;
    }
  }

  // Переключение следующей галереи
  public nextGalleryNumber() {
    if (this.galleryNumber < 4) {
      this.galleryNumber += 1;
    }
  }
}
