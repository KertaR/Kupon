interface ICard {
  title?: string;
  subtitle?: string;
  content?: string;
  imageUrl?: string;
  avatarUrl?: string;
  buttons?: string[];
  icons?: string[];
  chips?: string[];
  unit?: string;
  color?: string;
}

export interface IWeatherDetails {
  value: string;
  icon: string;
  label: string;
}

export class Card {
  public title: string;
  public subtitle: string;
  public content: string;
  public imageUrl: string;
  public avatarUrl: string;
  public buttons: string[];
  public chips: string[];
  public unit: string;
  public color: string;

  constructor(obj: ICard) {
      this.title = obj.title || 'Card Title';
      this.subtitle = obj.subtitle || 'Card Subtitle';
      this.content = obj.content ||
          'Some card content should be placed here. Description or other related information.';
      this.imageUrl = obj.imageUrl || 'https://www.infragistics.com/angular-demos-lob/assets/images/card/media/placeholder.jpg';
      this.avatarUrl = obj.avatarUrl || 'https://www.infragistics.com/angular-demos-lob/assets/images/card/avatars/rupert_stadler.jpg';
      this.buttons = obj.buttons || ['ACTION1', 'ACTION2'];
      this.chips = obj.chips || [];
      this.unit = obj.unit || "";
      this.color = obj.color || ""
  }
}
