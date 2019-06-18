Feature: Crear recurso

    Crear un recurso para que se puede usar dentro del sistema

    Scenario: Crear un recurso correctamente
        Given Soy gerente de operaciones
        When creo un recurso de nombre 'Juan Scala', horas de contrato 80
        Then al consultar 'nombre' del recurso es 'Juan Scala'
        And al consultar 'horasDeContrato' del recurso es 80
        And al consultar 'estado' del recurso es 'Disponible'
        And al consultar 'legajo' del recurso es 1
