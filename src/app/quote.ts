export class Quote {
    showDescription: boolean;
    formShow: boolean;
    constructor(
      public id: number,
      public quote: string,
      public author: string,
      public creator: string,
      public createdDate: Date,
      public like: number,
      public dislike: number
    ) {
      this.showDescription = false;
      this.formShow = false;
    }
}

