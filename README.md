# Calculadora (freeCodeCamp)

Proyecto de calculadora para practicar mis conocimientos y habiidades con React.

##### Detalles
- Creación y manejo de componentes.
- Customización de los componentes con el uso de *props*.
- Manejo del estado del resultado.
- Control de los eventos de *click* y teclado.

##### Comentarios

El propósito principal del ejercicio era la creación de componentes, paso de props, y control de los eventos de *click*.

Además he añadido la gestión de los eventos de teclado, para hacer la calculadora reactiva a estos.

##### Desafíos

- En *Firefox* me he encontrado con el problema de gestionar el operador de división (/). En este navegador se usa dicha tecla para abrir la búsqueda rápida. Investigando, la única forma que he encontrado de modificar este comportamiento es instalando una extensión que permita modificar el atajo. Esta solución no es aplicable al resto de usuarios, por lo que no termina siendo aplicable.

- Con el evento de botón para *Enter* he tenido que hacer una gestión especial del evento. Este sirve para hacer el cálculo de la operación en el input. Cuando la operación no se puede realizar, se envía un *alert* al usuario. Al pulsar el botón de enter para descartar el *alert*, se entra en un *loop* de avisos (esto no pasa en Chrome). Para ello he optado por eliminar el evento de teclado, y activarlo un segundo después.

<br>

     ... else {
          document.removeEventListener('keyup', handleKeyDown)
          alert('Ingresa un valor válido para ejecutar una operación')
          setTimeout(() => document.addEventListener('keyup', handleKeyDown), 1000)
        }
      } else {
        document.removeEventListener('keyup', handleKeyDown)
        alert('Ingresa un operador y un valor válido para ejecutar una operación')
        setTimeout(() => document.addEventListener('keyup', handleKeyDown), 1000)
      }
    } else {
      document.removeEventListener('keyup', handleKeyDown)
      alert('Ingresa una operación para realizar un cálculo')
      setTimeout(() => document.addEventListener('keyup', handleKeyDown), 1000)
    }

##### Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un *issue* para discutir lo que te gustaría cambiar, o para ayudarme a resolver problemas de código.