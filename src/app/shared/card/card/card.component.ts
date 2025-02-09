import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProducts } from '../../../core/interfaces/http';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) isSmallCard: boolean = false;
  @Input({ required: true }) Products!: IProducts[];
}
