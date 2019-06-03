Feature: Umbral de riesgo de proyecto

    Scenario: Un proyecto sin riesgos
        Given tengo un proyecto de nombre 'Proyecto', codigo 'PRY', descripcion 'Lorem ipsum', lider 'Fulano'
        And el proyecto tiene una configuracion de riesgos valor bajo 0.2, medio 0.5, alto 0.8, umbral 0.6
        When consulto si el proyecto esta en riesgo
        Then obtengo que el proyecto no lo esta

    Scenario: Un proyecto con un riesgo que no sobrepasa el umbral configurado
        Given tengo un proyecto de nombre 'Proyecto', codigo 'PRY', descripcion 'Lorem ipsum', lider 'Fulano'
        And el proyecto tiene una configuracion de riesgos valor bajo 0.2, medio 0.5, alto 0.8, umbral 0.6
        And el proyecto tiene un riesgo de motivo 'Motivo Riesgo', descripcion 'Descripcion Riesgo', impacto 'BAJO', probabilidad 'BAJO'
        When consulto si el proyecto esta en riesgo
        Then obtengo que el proyecto no lo esta

    Scenario: Un proyecto con un riesgo que sobrepasa el umbral configurado
        Given tengo un proyecto de nombre 'Proyecto', codigo 'PRY', descripcion 'Lorem ipsum', lider 'Fulano'
        And el proyecto tiene una configuracion de riesgos valor bajo 0.2, medio 0.5, alto 0.8, umbral 0.6
        And el proyecto tiene un riesgo de motivo 'Motivo Riesgo', descripcion 'Descripcion Riesgo', impacto 'ALTO', probabilidad 'ALTO'
        When consulto si el proyecto esta en riesgo
        Then obtengo que el proyecto lo esta

    Scenario: Un proyecto con varios riesgos que no sobrepasan el umbral configurado
        Given tengo un proyecto de nombre 'Proyecto', codigo 'PRY', descripcion 'Lorem ipsum', lider 'Fulano'
        And el proyecto tiene una configuracion de riesgos valor bajo 0.2, medio 0.5, alto 0.8, umbral 0.6
        And el proyecto tiene un riesgo de motivo 'Motivo Riesgo 1', descripcion 'Descripcion Riesgo 1', impacto 'BAJO', probabilidad 'MEDIO'
        And el proyecto tiene un riesgo de motivo 'Motivo Riesgo 2', descripcion 'Descripcion Riesgo 2', impacto 'BAJO', probabilidad 'ALTO'
        And el proyecto tiene un riesgo de motivo 'Motivo Riesgo 3', descripcion 'Descripcion Riesgo 3', impacto 'BAJO', probabilidad 'BAJO'
        When consulto si el proyecto esta en riesgo
        Then obtengo que el proyecto no lo esta

    Scenario: Un proyecto con varios riesgos donde uno sobrepasa el umbral configurado
        Given tengo un proyecto de nombre 'Proyecto', codigo 'PRY', descripcion 'Lorem ipsum', lider 'Fulano'
        And el proyecto tiene una configuracion de riesgos valor bajo 0.2, medio 0.5, alto 0.8, umbral 0.6
        And el proyecto tiene un riesgo de motivo 'Motivo Riesgo 1', descripcion 'Descripcion Riesgo 1', impacto 'BAJO', probabilidad 'MEDIO'
        And el proyecto tiene un riesgo de motivo 'Motivo Riesgo 2', descripcion 'Descripcion Riesgo 2', impacto 'BAJO', probabilidad 'ALTO'
        And el proyecto tiene un riesgo de motivo 'Motivo Riesgo 3', descripcion 'Descripcion Riesgo 3', impacto 'ALTO', probabilidad 'ALTO'
        When consulto si el proyecto esta en riesgo
        Then obtengo que el proyecto lo esta
