import { Observable } from 'tns-core-modules/data/observable';
import { FileExplorer } from 'nativescript-file-explorer';

export class HelloWorldModel extends Observable {
  public message: string;
  private fileExplorer: FileExplorer;

  constructor() {
    super();

    this.fileExplorer = new FileExplorer();
    this.message = this.fileExplorer.message;
  }
}
