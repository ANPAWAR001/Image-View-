// import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-imageview',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './imageview.component.html',
//   styleUrls: ['./imageview.component.css']
// })
// export class ImageviewComponent {
//   images = [
//     { id: '0', imageUrl: 'https://im.rediff.com/sports/2021/jul/16medal1.jpg', imageName: 'Abhinav Bindra' },
//     { id: '1', imageUrl: 'https://gknow.in/wp-content/uploads/2024/07/Manu-Bhaker-10-meter-pistol.jpg', imageName: 'Manu Bhaker' },
//     { id: '2', imageUrl: 'https://www.nagasconnect.com/wp-content/uploads/2024/07/manu-bhaker-.jpeg', imageName: 'Manu Bhaker & Sarabjot Singh' },
//     { id: '3', imageUrl: 'https://gumlet.assettype.com/nationalherald/2021-08/7787b450-a23f-42b7-bc30-2b979a4d353d/Neeraj_Chopra.jpg?rect=0%2C0%2C4096%2C2304&auto=format%2Ccompress&fmt=webp&w=1200', imageName: 'Neeraj Chopra' },
//     { id: '4', imageUrl: 'https://images.indianexpress.com/2021/07/mirabai-chanu-1200.jpg', imageName: 'Mirabai Chanu' },
//     { id: '5', imageUrl: 'https://www.gujaratheadline.com/wp-content/uploads/2021/08/Sindhu-bronze-medal.jpg', imageName: 'P.V Sindhu' },
//     { id: '6', imageUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1r0DOB.img?w=768&h=432&m=6&x=612&y=98&s=176&d=176', imageName: 'Swapnil Kusale' },
//     { id: '7', imageUrl: 'https://thescoopbeats.com/wp-content/uploads/2021/08/85056855.jpg', imageName: 'Ravi Kumar Dahiya' },
//     { id: '8', imageUrl: 'https://assets.khelnow.com/news/uploads/2021/08/Indian-mens-hockey-team-1200x620.jpg', imageName: 'Hockey Team India' },
//     { id: '9', imageUrl: 'https://assets.khelnow.com/news/uploads/2021/08/Devendra-Jhajharia2.jpg', imageName: 'Devendra Jhajharia' }
//   ];

//   showCarousel: boolean = false;
//   currentImageIndex: number = -1; // -1 means no image is selected
//   minZoom: number = 0.8;
//   maxZoom: number = 1.5;
//   inputIndex: number = 0;

//   @ViewChild('zoomImage', { static: false }) zoomImage!: ElementRef<HTMLImageElement>;

//   toggleImages() {
//     this.showCarousel = !this.showCarousel;
//     this.currentImageIndex = -1; // Reset the carousel index
//   }

//   onImageClick(index: number) {
//     this.currentImageIndex = index;
//   }

//   selectImageByIndex() {
//     if (this.inputIndex >= 0 && this.inputIndex < this.images.length) {
//       this.currentImageIndex = this.inputIndex;
//     } else {
//       alert('Invalid index!');
//     }
//   }

//   nextImage() {
//     if (this.currentImageIndex < this.images.length - 1) {
//       this.currentImageIndex++;
//     } else {
//       this.closeCarousel(); // Optionally close the carousel when the last image is reached
//     }
//   }

//   prevImage() {
//     if (this.currentImageIndex > 0) {
//       this.currentImageIndex--;
//     }
//   }

//   closeCarousel() {
//     this.currentImageIndex = -1; // Close the carousel
//   }

//   @HostListener('window:mousewheel', ['$event'])
//   onScroll(event: WheelEvent) {
//     if (!this.zoomImage) return;

//     let scale = this.zoomImage.nativeElement.style.transform
//       ? parseFloat(this.zoomImage.nativeElement.style.transform.replace(/scale\(([^)]+)\)/, '$1'))
//       : 1;

//     if (event.deltaY < 0) {
//       scale = Math.min(this.maxZoom, scale + 0.1);
//     } else {
//       scale = Math.max(this.minZoom, scale - 0.1);
//     }

//     this.zoomImage.nativeElement.style.transform = `scale(${scale})`;
//   }

//   // Utility methods to check if the current image is first or last
//   isFirstImage(): boolean {
//     return this.currentImageIndex === 0;
//   }

//   isLastImage(): boolean {
//     return this.currentImageIndex === this.images.length - 1;
//   }

// }

import {
  Component,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imageview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.css'],
})
export class ImageviewComponent implements OnInit {
  // Array of images to be displayed in the carousel
  // images = [
  //   { id: '0', imageUrl: 'https://im.rediff.com/sports/2021/jul/16medal1.jpg', imageName: 'Abhinav Bindra' },
  //   { id: '1', imageUrl: 'https://gknow.in/wp-content/uploads/2024/07/Manu-Bhaker-10-meter-pistol.jpg', imageName: 'Manu Bhaker' },
  //   { id: '2', imageUrl: 'https://www.nagasconnect.com/wp-content/uploads/2024/07/manu-bhaker-.jpeg', imageName: 'Manu Bhaker & Sarabjot Singh' },
  //   { id: '3', imageUrl: 'https://gumlet.assettype.com/nationalherald/2021-08/7787b450-a23f-42b7-bc30-2b979a4d353d/Neeraj_Chopra.jpg?rect=0%2C0%2C4096%2C2304&auto=format%2Ccompress&fmt=webp&w=1200', imageName: 'Neeraj Chopra' },
  //   { id: '4', imageUrl: 'https://images.indianexpress.com/2021/07/mirabai-chanu-1200.jpg', imageName: 'Mirabai Chanu' },
  //   { id: '5', imageUrl: 'https://www.gujaratheadline.com/wp-content/uploads/2021/08/Sindhu-bronze-medal.jpg', imageName: 'P.V Sindhu' },
  //   { id: '6', imageUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1r0DOB.img?w=768&h=432&m=6&x=612&y=98&s=176&d=176', imageName: 'Swapnil Kusale' },
  //   { id: '7', imageUrl: 'https://thescoopbeats.com/wp-content/uploads/2021/08/85056855.jpg', imageName: 'Ravi Kumar Dahiya' },
  //   { id: '8', imageUrl: 'https://assets.khelnow.com/news/uploads/2021/08/Indian-mens-hockey-team-1200x620.jpg', imageName: 'Hockey Team India' },
  //   { id: '9', imageUrl: 'https://assets.khelnow.com/news/uploads/2021/08/Devendra-Jhajharia2.jpg', imageName: 'Devendra Jhajharia' }
  // ];

  // // Flag to control carousel visibility
  // showCarousel: boolean = false;
  // // Index of the currently displayed image in the carousel
  // currentImageIndex: number = -1; // -1 means no image is selected
  // // Zoom level constraints
  // minZoom: number = 0.8;
  // maxZoom: number = 1.5;
  // // Index provided by user for selecting a specific image
  // inputIndex: number = 0;

  // @ViewChild('zoomImage', { static: false }) zoomImage!: ElementRef<HTMLImageElement>;

  // ngOnInit() {
  //   // Initialize carousel with a default image
  //   this.initializeCarousel('0', 'https://im.rediff.com/sports/2021/jul/16medal1.jpg');
  // }
  @Input() images: { id: string; imageUrl: string; imageName: string }[] = [];

  showCarousel: boolean = false;
  currentImageIndex: number = -1;
  minZoom: number = 0.8;
  maxZoom: number = 1.5;
  inputIndex: number = 0;

  @ViewChild('zoomImage', { static: false })
  zoomImage!: ElementRef<HTMLImageElement>;

  ngOnInit() {
    if (this.images.length > 0) {
      this.initializeCarousel(this.images[0].id);
    }
  }

  public updateImages(
    newImages: { id: string; imageUrl: string; imageName: string }[]
  ) {
    this.images = newImages;
    this.initializeCarousel(this.images[0].id); //first image
  }

  // Method to initialize the carousel with a specific image by ID or URL
  initializeCarousel(imageId?: string, imageUrl?: string) {
    if (imageId) {
      // Find the image by ID
      const image = this.images.find((img) => img.id === imageId);
      if (image) {
        this.currentImageIndex = this.images.indexOf(image);
        this.showCarousel = true;
      }
    } else if (imageUrl) {
      // Find the image by URL
      const image = this.images.find((img) => img.imageUrl === imageUrl);
      if (image) {
        this.currentImageIndex = this.images.indexOf(image);
        this.showCarousel = true;
      }
    } else {
      // Default initialization logic if neither ID nor URL is provided
      this.showCarousel = true;
      this.currentImageIndex = 0;
    }
  }

  // Toggles the visibility of the carousel and resets the image index
  toggleImages() {
    this.showCarousel = !this.showCarousel;
    this.currentImageIndex = -1; // Reset the carousel index
  }

  // Selects an image by its index
  onImageClick(index: number) {
    this.currentImageIndex = index;
  }

  // Selects an image based on user-provided index
  selectImageByIndex() {
    if (this.inputIndex >= 0 && this.inputIndex < this.images.length) {
      this.currentImageIndex = this.inputIndex;
    } else {
      alert('Invalid index!');
    }
  }

  // Moves to the next image in the carousel
  nextImage() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.closeCarousel(); // Optionally close the carousel when the last image is reached
    }
  }

  // Moves to the previous image in the carousel
  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  // Closes the carousel and resets the image index
  closeCarousel() {
    this.currentImageIndex = -1; // Close the carousel
  }

  // Handles zooming in and out based on mouse scroll events
  @HostListener('window:mousewheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (!this.zoomImage) return;

    let scale = this.zoomImage.nativeElement.style.transform
      ? parseFloat(
          this.zoomImage.nativeElement.style.transform.replace(
            /scale\(([^)]+)\)/,
            '$1'
          )
        )
      : 1;

    if (event.deltaY < 0) {
      scale = Math.min(this.maxZoom, scale + 0.1);
    } else {
      scale = Math.max(this.minZoom, scale - 0.1);
    }

    this.zoomImage.nativeElement.style.transform = `scale(${scale})`;
  }

  // Utility method to check if the current image is the first in the array
  isFirstImage(): boolean {
    return this.currentImageIndex === 0;
  }

  // Utility method to check if the current image is the last in the array
  isLastImage(): boolean {
    return this.currentImageIndex === this.images.length - 1;
  }

  // Utility method to check if there is only one image in the carousel
  isSingleImage(): boolean {
    return this.images.length === 1;
  }
}

//app component code
// @ViewChild(ImageviewComponent) imageViewComponent!: ImageviewComponent;

//   dynamicImages = [
//     {
//       id: '10',
//       imageUrl:
//         'https://thescoopbeats.com/wp-content/uploads/2021/08/85056855.jpg',
//       imageName: 'Ravi Kumar Dahiya',
//     },
//     {
//       id: '11',
//       imageUrl:
//         'https://assets.khelnow.com/news/uploads/2021/08/Indian-mens-hockey-team-1200x620.jpg',
//       imageName: 'Hockey Team India',
//     },
//     {
//       id: '12',
//       imageUrl:
//         'https://assets.khelnow.com/news/uploads/2021/08/Devendra-Jhajharia2.jpg',
//       imageName: 'Devendra Jhajharia',
//     },
//   ];

//   ngAfterViewInit() {
//     if (this.imageViewComponent) {
//       this.imageViewComponent.updateImages(this.dynamicImages);
//     }
//   }
