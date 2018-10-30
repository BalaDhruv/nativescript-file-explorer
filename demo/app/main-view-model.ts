import { Observable } from 'tns-core-modules/data/observable';
// import { FileExplorer, logWords } from 'nativescript-file-explorer';

export class HelloWorldModel extends Observable {
  public message: string;
  // private fileExplorer: FileExplorer;

  constructor() {
    super();
    this.message = 'hi';
  }
}
