const process_tpm = require('./module.js');

const code = `<?tpm
$var = "Sbim
echo "Hello World";
?>`;

const result = process_tpm(code);
console.log(result.join('\n'));
