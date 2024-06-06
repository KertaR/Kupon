import { Component } from '@angular/core';
import { Card } from './card.blueprint';


@Component({
    selector: 'app-card',
    styleUrls: ['./card.component.scss'],
    templateUrl: './card.component.html',
})
export class CardComponent {
    public card = new Card({
        buttons: ['Kuponkód'],
        content: `Ez a kupon XY termékekre van.`,
        imageUrl: 'https://www.arkadbudapest.hu/fileadmin/user_upload/GLOBAL/brand_stores/logos/rossmann.jpg',
        subtitle: '50% Testápolókra',
        title: 'Rossmann',
        color: "#ffeeee"
    });
}
