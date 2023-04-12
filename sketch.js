// La liste de progressions harmoniques
let progressions = [
  ["I-IV-V", "Probablement la plus courante de toutes les progressions harmoniques, elle a été utilisée par de nombreux compositeurs à travers les siècles, notamment Bach, Mozart, Beethoven et Chopin."],
  ["I-V-vi-IV", "Également connue sous le nom de \"progression pop-punk\", elle est devenue populaire dans la musique populaire moderne, mais elle a également été utilisée par des compositeurs classiques comme Haydn et Schubert."],
  ["I-IV-vi-V", "Une variation de la progression I-IV-V, cette progression a été utilisée par des compositeurs tels que Brahms et Tchaïkovski."],
  ["I-V-vi-iii-IV-I-IV-V", "Une progression complexe qui a été utilisée par des compositeurs tels que Beethoven et Schubert."],
  ["I-vi-IV-V", "Une progression simple mais efficace qui a été utilisée par des compositeurs tels que Bach, Handel et Haydn."],
  ["I-vi-iii-IV", "Une progression commune dans la musique baroque et classique, elle a été utilisée par des compositeurs tels que Vivaldi, Handel et Bach."],
  ["ii-V-I", "Une progression populaire dans le jazz, elle a également été utilisée par des compositeurs classiques tels que Mozart et Beethoven."],
  ["IV-IV-I-V", "Une progression courante dans la musique populaire moderne, elle a également été utilisée par des compositeurs tels que Bach et Chopin."],
  ["I-vi-ii-V", "Une progression courante dans la musique populaire moderne, elle a également été utilisée par des compositeurs classiques tels que Mozart et Beethoven."],
  ["I-vi-IV-iii-VI-ii-V", "Une progression complexe qui a été utilisée par des compositeurs tels que Beethoven et Chopin."],
  ["vi-IV-I-V", "Une progression courante dans la musique populaire moderne, elle a également été utilisée par des compositeurs classiques tels que Mozart et Haydn."],
  ["I-IV-IV-V-IV-I", "Une progression courante dans la musique populaire moderne, elle a également été utilisée par des compositeurs tels que Chopin et Brahms."],
  ["I-IV-iii-VI-ii-V", "Une progression complexe qui a été utilisée par des compositeurs tels que Beethoven et Chopin."],
  ["I-IV-IV-V", "Une progression courante dans la musique populaire moderne, elle a également été utilisée par des compositeurs tels que Bach et Chopin."],
  ["i-VI-III-VII", "Une progression courante dans la musique classique romantique, elle a été utilisée par des compositeurs tels que Chopin et Liszt."]
];

let currentProgression = null;

function setup() {
  createCanvas(400, 400);
  background(81, 90, 90);
  
  // Créer un bouton pour sélectionner une progression harmonique
  let button = createButton("Sélectionner une progression");
  button.mousePressed(selectRandomProgression);
  
  // Centrer le texte
  //textAlign(CENTER);
}

function draw() {
  // Vérifier que la variable currentProgression n'est pas null avant de l'afficher
  if (currentProgression != null) {
    // Définir la zone de texte pour la progression harmonique
    let textZone = {
      x: width /5 ,
      y: height /2.5,
      w: 275,
      h: 300
    };
    
    // Définir les propriétés de style pour le texte
    textAlign(CENTER);
    textSize(40);
    fill(240, 243, 244 );
    
    // Forcer le texte à s'ajuster automatiquement dans la zone définie
    textWrap(WORD);
    text(currentProgression[0] + " - " + currentProgression[1], textZone.x, textZone.y, textZone.w, textZone.h);
    
    
  }

}

function selectRandomProgression() {
  // Choisir une progression harmonique aléatoire dans la liste
  let randomIndex = floor(random(progressions.length));
  currentProgression = progressions[randomIndex];
  
  // Redessiner l'arrière-plan
  background(81, 90, 90 );
}
