function process_tpm(code) {
  let output = [];

  // Parcours du code TPM ligne par ligne
  const lines = code.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Ignorer les balises de démarrage et de fin
    if (line === '<?tpm' || line === '?>') {
      continue;
    }

    // Vérifier si la ligne est une déclaration de variable
    if (line.startsWith('$')) {
      // Récupérer le nom de la variable et sa valeur
      const parts = line.split('=');
      const variable = parts[0].trim();
      const value = parts[1].trim();

      // Supprimer le symbole du dollar pour le nom de la variable
      const variableName = variable.substr(1).trim();

      // Définir la variable dans le contexte courant
      eval(`${variableName} = ${value}`);
    }

    // Vérifier si la ligne est une instruction echo
    if (line.startsWith('echo')) {
      // Récupérer le texte à afficher
      const echoText = line.substring(4).trim();

      // Ajouter le texte à la sortie
      output.push(echoText);
    }
  }

  return output;
}

module.exports = process_tpm;
