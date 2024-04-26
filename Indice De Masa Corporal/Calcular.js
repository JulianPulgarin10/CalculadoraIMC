function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);

    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        mostrarResultado("Por favor, ingrese valores válidos para peso y estatura.", "");
        return;
    }

    const imc = peso / (estatura ** 2);
    mostrarResultado(`Su IMC es: ${imc.toFixed(2)} - ${evaluarIMC(imc)}`, obtenerImagenResultado(imc));
}

function evaluarIMC(imc) {
    if (imc < 18.5) {
        return "<span style='font-size: 22px;'> Bajo peso... <br> Recomendación: Consulte a su médico para evaluar su estado nutricional y determinar un plan de alimentación adecuado."; 
    } else if (imc < 24.9) {
        return "<span style='font-size: 22px;'> Peso normal... <br> Recomendación: Mantenga una dieta equilibrada y realice actividad física regularmente para mantener su peso y salud.";
    } else if (imc < 29.9) {
        return "<span style='font-size: 22px;'> Sobrepeso... <br> Recomendación: Consulte a su médico para obtener orientación sobre la pérdida de peso saludable, que puede incluir cambios en la dieta y ejercicio regular.";
    } else {
        return "<span style='font-size: 22px;'> Obesidad... <br> Recomendación: Es importante buscar asesoramiento médico para evaluar los riesgos para la salud asociados con la obesidad y establecer un plan de pérdida de peso bajo supervisión médica.";
    }
}

function mostrarResultado(mensaje, imagen) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>${mensaje}</p><img src="${imagen}" alt="Resultado">`;
}

function obtenerImagenResultado(imc) {
    if (imc < 18.5) {
        return "img/bajoPeso.jpg";
    } else if (imc < 24.9) {
        return "img/pesoNormal.webp";
    } else if (imc < 29.9) {
        return "img/sobrePeso.jpg";
    } else {
        return "img/Obesidad.jpg";
    }
}



const form = document.getElementById('imcForm');
          
            form.addEventListener('mousemove', (e) => {
              const mouseX = e.pageX - form.offsetLeft;
              const mouseY = e.pageY - form.offsetTop;
              const rotateX = (mouseY / form.offsetHeight - 0.5) * 20;
              const rotateY = (mouseX / form.offsetWidth - 0.5) * -20;
              form.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
          
            form.addEventListener('mouseleave', () => {
              form.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            });


