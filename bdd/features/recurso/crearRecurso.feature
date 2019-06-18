Feature: Crear recurso

    Crear un recurso para que se puede usar dentro del sistema

    Scenario: Crear un recurso correctamente
        Given Soy gerente de operaciones
<<<<<<< HEAD
        When creo un recurso de nombre 'Juan Memo', horas de contrato 80
        Then al consultar 'nombre' del recurso es 'Juan Memo'
=======
        When creo un recurso de nombre 'Juan Scala', horas de contrato 80
        Then al consultar 'nombre' del recurso es 'Juan Scala'
>>>>>>> 0440da41d71c086ce70bbd9bd5356992da811dcf
        And al consultar 'horasDeContrato' del recurso es 80
        And al consultar 'estado' del recurso es 'Disponible'
        And al consultar 'legajo' del recurso es 55255
