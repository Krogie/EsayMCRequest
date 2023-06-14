// Function to check the server status
function getServerIP(domain, callback) {
  const url = `https://api.mcsrvstat.us/2/${domain}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.ip) {
        callback(data.ip);
      } else {
        console.error('Error retrieving server IP');
        callback(null);
      }
    })
    .catch(error => {
      console.error('Error retrieving server IP:', error);
      callback(null);
    });
}


// Called die Funktion
const domain = 'yourmcserver.net';

getServerIP(domain, ip => {
  if (ip) {
    console.log('Server IP:', ip);

    // Führe die Statusabfrage mit der IP-Adresse durch
    const port = 25565; // Der Port deines Minecraft-Servers
    checkMinecraftServerStatus(ip, port, status => {
      // Handle den Serverstatus hier
    });
  } else {
    console.log('Fehler beim Abrufen der Server-IP');
  }
});
