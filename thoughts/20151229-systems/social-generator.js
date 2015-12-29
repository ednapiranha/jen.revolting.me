(function () {
  var results = document.querySelector('pre');
  var users = ['⦾', '⊛/f', '⊛/g', '⊛'];
  var communication = ['↦', '↭'];
  var permissions = ['allow', 'deny'];
  var signifiers = ['like', 'unlike', 'share'];

  function setCommunication(relationship, user) {
    communication.forEach(function (comm) {
      relationship.textContent += '⦾' + ' ' + comm + ' ' + user + '\n';
      results.appendChild(relationship);
    });
  }

  users.forEach(function (user, idx) {
    var relationship = document.createElement('p');
    setCommunication(relationship, user);
  });
})();
