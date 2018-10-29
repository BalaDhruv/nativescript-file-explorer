var FileExplorer = require("nativescript-file-explorer").FileExplorer;
var fileExplorer = new FileExplorer();

describe("greet function", function() {
    it("exists", function() {
        expect(fileExplorer.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(fileExplorer.greet()).toEqual("Hello, NS");
    });
});