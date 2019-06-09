Feature: Exposición Riesgo

    Scenario: Exposición de riesgo Bajo-Bajo
        Given tengo una configuracion de riesgos valor bajo 0.2, medio 0.5 y alto 0.8
        When creo un riesgo de motivo 'Cambio en requerimientos', descripcion 'El cliente pide un cambio en los requerimientos del proyecto, lo que requiere redefinir el alcance y estimaciones', impacto 'BAJO', probabilidad 'BAJO'
        Then la exposicion del riesgo es 0.04

    Scenario: Exposición de riesgo Bajo-Medio
        Given tengo una configuracion de riesgos valor bajo 0.2, medio 0.5 y alto 0.8
        When creo un riesgo de motivo 'Cambio en requerimientos', descripcion 'El cliente pide un cambio en los requerimientos del proyecto, lo que requiere redefinir el alcance y estimaciones', impacto 'BAJO', probabilidad 'MEDIO'
        Then la exposicion del riesgo es 0.1

    Scenario: Exposición de riesgo Bajo-Alto
        Given tengo una configuracion de riesgos valor bajo 0.2, medio 0.5 y alto 0.8
        When creo un riesgo de motivo 'Cambio en requerimientos', descripcion 'El cliente pide un cambio en los requerimientos del proyecto, lo que requiere redefinir el alcance y estimaciones', impacto 'BAJO', probabilidad 'ALTO'
        Then la exposicion del riesgo es 0.16

    Scenario: Exposición de riesgo Medio-Alto
        Given tengo una configuracion de riesgos valor bajo 0.2, medio 0.5 y alto 0.8
        When creo un riesgo de motivo 'Cambio en requerimientos', descripcion 'El cliente pide un cambio en los requerimientos del proyecto, lo que requiere redefinir el alcance y estimaciones', impacto 'MEDIO', probabilidad 'ALTO'
        Then la exposicion del riesgo es 0.4

    Scenario: Exposición de riesgo Alto-Alto
        Given tengo una configuracion de riesgos valor bajo 0.2, medio 0.5 y alto 0.8
        When creo un riesgo de motivo 'Cambio en requerimientos', descripcion 'El cliente pide un cambio en los requerimientos del proyecto, lo que requiere redefinir el alcance y estimaciones', impacto 'ALTO', probabilidad 'ALTO'
        Then la exposicion del riesgo es 0.64
