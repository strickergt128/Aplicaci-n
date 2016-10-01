angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Roberto Perez',
    lastText: 'Hola como estas?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Pedro Fuentes',
    lastText: 'Hola que cuentas?',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Marcos Hernandez',
    lastText: 'Te recueras de la reunion?',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Erick Castro',
    lastText: 'Ya tengo el nuevo juego que te dije!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Melvin Soto',
    lastText: 'Hoy es la Runion hay llegas!',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
