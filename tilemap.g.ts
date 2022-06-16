// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e001000020505050505020505050505050505050505050505050505050505050501061111101113060b0b0b0b0a0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0a0b040612111112110f0b0b0b0b0b0e0b0b0b0b0b0b0b0b0a0b0b0b0b0b0b0b04061113111114060b0b0a0b0b0b0b0b0c0b0b0b0b0b0b0b0b0e0b0c0b0b0402050505050509051615151609010b0b0b0b0b0b0b0b0b0b0b0a0b0b0b04060b0b0b0b0b0b0b0b0b0e0e0b040b0b0b0b0b0b0b0b0b0b0b0b0b0b0b04060b0b0b0b0b0e0a0b0b0b0e0b040b0b0b0b0b0b0a0b0b0b0b0b0b0b0b04060b0a0b0b0b0b0b0b0b0b0b0a040b0a0b0b0b0b0b0b0b0b0b0b0b0b0b04060b0b0b0b0b0b0b0a0b0a0b0b040b0b0b0b0b0b0b0b0b0b0b0b0b0e0b04060b0b0c0b0b0b0b0b0b0b0b0b040b0b0b0b0b0b0b0b0a0b0b0b0e0b0b04060b0b0b0b0b0a0b0b0b0b0b0b040b0b0e0b0b0b0b0b0b0b0b0b0b0b0b04060b0a0b0b0b0a0b0b0b0b0b0b040b0b0a0b0b0b0b0b0b0b0b0b0b0b0b04060a0b0d0b0b0b0b0b0b0a0b0e040b0b0b0b0b0b0b0b0c0b0b0b0e0b0a04060b0b0b0b0b0b0b0b0b0b0e0e040b0b0b0b0b0b0b0b0b0b0b0b0b0b0b04060b0b0b0b0b0e0b0b0a0b0b0b040b0b0b0b0b0b0b0b0b0b0b0b0b0b0b04030808080808080808080808080708080808080808080808080808080807`, img`
222222222222222222222222222222
2.....2......................2
2............................2
2.....2......................2
222222222..222...............2
2............2...............2
2............2...............2
2............2...............2
2............2...............2
2............2...............2
2............2...............2
2............2...............2
2............2...............2
2............2...............2
2............2...............2
222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark0,sprites.dungeon.floorDark3,sprites.dungeon.floorDark5,sprites.dungeon.floorDark1,sprites.dungeon.floorMixed,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.floorLight4,sprites.dungeon.floorLight3,sprites.dungeon.stairNorth,sprites.dungeon.purpleOuterNorth2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
