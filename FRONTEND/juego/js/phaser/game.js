var game = new Phaser.Game (800,600, Phaser.CANVAS, 'container');
    game.state.add("historieta", historieta);
    game.state.add("navegacion", navegacion);
    game.state.add("Mundo1", Mundo1);
    game.state.add("Mundo2", Mundo2);
    game.state.add("Mundo3", Mundo3);
    game.state.add("Mundo4", Mundo4);
    game.state.add("Mundo5", Mundo5);
    game.state.add("Mundo6", Mundo6);
    game.state.add("Mundo7", Mundo7);
    game.state.add("Mundo8", Mundo8);
    game.state.add("Mundo9", Mundo9);
    game.state.add("Mundo10", Mundo10);
    game.state.add("Mundo11", Mundo11);
    game.state.add("Mundo12", Mundo12);
    game.state.add("desbloqueoPersonaje", desbloqueoPersonaje);
    game.state.add("batalla", batalla);
    game.state.add("creditos", creditos);
    game.state.add("compraPersonajes", compraPersonajes);
    game.state.add("rankings", rankings);
    game.state.add("invitarAmigos", invitarAmigos);
    game.state.add("perfilJugador", perfilJugador);
    game.state.add("logros", logros);
    game.state.add("boss", jefes);
    game.state.add("seleccionpersonaje", seleccionpersonaje);    
    game.state.add("seleccionavatar", seleccionavatar);
    game.state.add("cajaMisteriosa", cajaMisteriosa);
    game.state.add("boot",boot);
    game.state.add("fin", fin);
    game.state.start("boot");