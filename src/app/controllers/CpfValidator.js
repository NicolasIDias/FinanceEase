async function validarCPF (cpf) {
  cpf = cpf.replace(/[^\d]+/g, '')
  if (cpf.length !== 11) {
    return false
  }

  if (/^(\d)\1+$/.test(cpf)) {
    return false
  }

  let soma = 0
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i)
  }
  let resto = (soma * 10) % 11
  const digitoVerificador1 = resto === 10 ? 0 : resto

  if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
    return false
  }

  soma = 0
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i)
  }
  resto = (soma * 10) % 11
  const digitoVerificador2 = resto === 10 ? 0 : resto

  if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
    return false
  }

  return true
}

module.exports = validarCPF
