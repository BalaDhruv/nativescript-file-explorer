import { FileExplorerBase } from './file-explorer.common';

declare const android: any;

export class FileExplorer extends FileExplorerBase {
    androidLib: any;
    storageList: any;

    constructor() {
        super();
        this.androidLib = android.support.v4.content.ContextCompat;
    }

    public listStorage(): void {
        console.log('Listing Storages..');
    }
}