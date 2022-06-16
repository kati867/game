tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f a a f f f . . . . 
    . . . f f f c a a c f f f . . . 
    . . f f f c c c c c c f f f . . 
    . . f f c a a a a a a c c f . . 
    . . f c a f f f f f f a c f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f e f d d f e f e f f . 
    . f e e d 1 f d d f 1 d e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e e d d e e e f . . . 
    . . c c f c c a a c c f c c . . 
    . . d c f c a a a a c f c d . . 
    . . d d f a a a a a a f d d . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
