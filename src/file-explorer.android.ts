import { FileExplorerBase } from './file-explorer.common';

export class FileExplorer extends FileExplorerBase {
    public listStorage(): void {
        console.log('Listing Storages..');
    }
}