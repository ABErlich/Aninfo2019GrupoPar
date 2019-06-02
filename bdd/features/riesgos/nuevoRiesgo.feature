Feature: Creación de Riesgo

    Scenario: Crear un Riesgo
        Given tengo una configuracion de riesgos valor bajo 0.2, medio 0.5 y alto 0.8
        When creo un riesgo de motivo 'Cambio en requerimientos', descripcion 'El cliente pide un cambio en los requerimientos del proyecto, lo que requiere redefinir el alcance y estimaciones', impacto 'BAJO', probabilidad 'MEDIO'
        Then al consultar 'motivo' del riesgo vale 'Cambio en requerimientos'
        And al consultar 'descripcion' del riesgo vale 'El cliente pide un cambio en los requerimientos del proyecto, lo que requiere redefinir el alcance y estimaciones'
        And al consultar 'impacto' del riesgo vale 0.2
        And al consultar 'probabilidad' del riesgo vale 0.5

    # Scenario: Crear un Riesgo falla por faltar motivo|descripcion|impacto|probabilidad
    # Scenario: Crear un Riesgo falla por pasar motivo|descripcion no textos
    # Scenario: Crear un Riesgo falla por pasar impacto|probabilidad no numéricos
