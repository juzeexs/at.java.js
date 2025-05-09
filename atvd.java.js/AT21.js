function ex21(palavra1, palavra2) {
    const sort = str => str.toLowerCase().split('').sort().join('');
    console.log(sort(palavra1) === sort(palavra2) ? "É um anagrama." : "Não é um anagrama.");
  }