function delta() {
    let a = Number(window.prompt("Digite o valor de a: "))
    let b = Number(window.prompt("Digite o valor de b: "))
    let c = Number(window.prompt("Digite o valor de c: "))
        
    delta = Math.pow(b, 2) - 4 * a * c

    let x1 = -b + delta / 2 * a
    let x2 = -b - delta / 2 * a

    let res = document.querySelector('section#res')
    res.innerHTML = `<p>O valor de delta para a equação quadrática <mark>${a}x² + ${b}x + ${c}</mark> e as raizes <mark>${x1}</mark> e <mark>${x2}</mark> é <strong>${delta}</strong>!</p>`
    
}

function calculate() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
  
    var bmr;
    if (gender == 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
  
    document.getElementById('result').innerHTML = 'Sua TMB é ' + bmr + ' calorias';
  }
