import { CircuitElement } from '../CircuitElement';
import { Point } from '../Point';

export class PhotoResistor extends CircuitElement {
  static pointHalf = 4;
  constructor(public canvas: any, x: number, y: number) {
    super('PhotoResistor', x, y);
    this.elements.push(
      this.canvas.image('assets/images/components/PhotoResistor.svg', this.x, this.y, 44, 100),
    );
    this.nodes = [
      new Point(canvas, x + 9, y + 92, 'Terminal 1', PhotoResistor.pointHalf, this),
      new Point(canvas, x + 27, y + 92, 'Terminal 2', PhotoResistor.pointHalf, this),
    ];

    this.setDragListeners();
    this.setHoverListener();
    this.setClickListener(null);
  }
  save() {
  }
  load(data: any): void {
  }
  getNode(x: number, y: number): Point {
    return null;
  }
  properties(): { keyName: string; id: number; body: HTMLElement; title: string; } {
    const body = document.createElement('div');
    return {
      keyName: this.keyName,
      id: this.id,
      body,
      title: 'Photo Resistor'
    };
  }
  initSimulation(): void {
  }
  closeSimulation(): void {
  }
  simulate(): void {
  }

}
