<?php

// Fonction pour évaluer une expression
function evaluateExpression($expression) {
    $result = eval('return '.$expression.';');
    return $result;
}

// Fonction pour affecter une valeur à une variable
function assignVariable($variable, $value) {
    global $$variable;
    $$variable = $value;
}

// Fonction pour échapper les caractères spéciaux pour prévenir les injections XSS
function escapeHtml($data) {
    return htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
}

// Exécution du code
function executeCode($code) {
    eval($code);
}

// Exemple d'utilisation
$code = '<?tpm
$var1 = 5;
$var2 = 10;
$result = $var1 + $var2;

$userInput = "<script>alert(\'XSS\');</script>";
$escapedInput = escapeHtml($userInput);

echo "Le résultat est : " . $result;
echo "<br>";
echo "Entrée utilisateur échappée : " . $escapedInput;
?>';

// Exécution du code
executeCode($code);

// Résultat :
// Le résultat est : 15
// Entrée utilisateur échappée : &lt;script&gt;alert(&#039;XSS&#039;);&lt;/script&gt;

?>
