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

// Exécution du code
function executeCode($code) {
    eval($code);
}

// Exemple d'utilisation
$code = '<?tpm
$var1 = 5;
$var2 = 10;
$result = $var1 + $var2;
echo "Le résultat est : " . $result;
?>';

// Exécution du code
executeCode($code);

// Résultat :
// Le résultat est : 15

?>
