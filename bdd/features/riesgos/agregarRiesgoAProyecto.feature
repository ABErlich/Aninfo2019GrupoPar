Feature: Agregar riesgo a proyecto

    Scenario: Agregar un riesgo
        Given tengo un proyecto de nombre 'Proyecto', codigo 'PRY', descripcion 'Lorem ipsum', lider 'Fulano'
        And tengo una configuracion de riesgos valor bajo 0.2, medio 0.5 y alto 0.8
        And tengo un riesgo de motivo 'Motivo Riesgo', descripcion 'Descripcion Riesgo', impacto 'BAJO', probabilidad 'MEDIO'
        When agrego el riesgo al proyecto
        Then al consultar los riesgos el proyecto tiene 1 riesgo
        And al consultar 'motivo' del riesgo vale 'Motivo Riesgo'
        And al consultar 'descripcion' del riesgo vale 'Descripcion Riesgo'
        And al consultar 'impacto' del riesgo vale 0.2
        And al consultar 'probabilidad' del riesgo vale 0.5
