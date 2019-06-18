Feature: Umbral de riesgo de proyecto

    Scenario: Un proyecto sin riesgos
        Given tengo un proyecto de nombre 'Implementación CRM banco Santander', codigo 'CRM-SANT', descripcion 'Implementación del CRM versión 5.1 para banco Santander en la región de Cono Sur', lider 'Julian Scala'
        And el proyecto tiene una configuracion de riesgos valor bajo 0.2, medio 0.5, alto 0.8, umbral 0.6
        When consulto si el proyecto esta en riesgo
        Then obtengo que el proyecto no lo esta

    Scenario: Un proyecto con un riesgo que no sobrepasa el umbral configurado
        Given tengo un proyecto de nombre 'Implementación CRM banco Santander', codigo 'CRM-SANT', descripcion 'Implementación del CRM versión 5.1 para banco Santander en la región de Cono Sur', lider 'Julian Scala'
        And el proyecto tiene una configuracion de riesgos valor bajo 0.2, medio 0.5, alto 0.8, umbral 0.6
        And el proyecto tiene un riesgo de motivo 'Tarifa inestable', descripcion 'Tarifa inestable dada la condicion del dolar actual', impacto 'BAJO', probabilidad 'BAJO'
        When consulto si el proyecto esta en riesgo
        Then obtengo que el proyecto no lo esta

    Scenario: Un proyecto con un riesgo que sobrepasa el umbral configurado
        Given tengo un proyecto de nombre 'Implementación CRM banco Santander', codigo 'CRM-SANT', descripcion 'Implementación del CRM versión 5.1 para banco Santander en la región de Cono Sur', lider 'Julian Scala'
        And el proyecto tiene una configuracion de riesgos valor bajo 0.2, medio 0.5, alto 0.8, umbral 0.6
        And el proyecto tiene un riesgo de motivo 'Tarifa inestable', descripcion 'Tarifa inestable dada la condicion del dolar actual', impacto 'ALTO', probabilidad 'ALTO'
        When consulto si el proyecto esta en riesgo
        Then obtengo que el proyecto lo esta

    Scenario: Un proyecto con varios riesgos que no sobrepasan el umbral configurado
        Given tengo un proyecto de nombre 'Implementación CRM banco Santander', codigo 'CRM-SANT', descripcion 'Implementación del CRM versión 5.1 para banco Santander en la región de Cono Sur', lider 'Julian Scala'
        And el proyecto tiene una configuracion de riesgos valor bajo 0.2, medio 0.5, alto 0.8, umbral 0.6
        And el proyecto tiene un riesgo de motivo 'Tarifa inestable', descripcion 'Tarifa inestable dada la condicion del dolar actual', impacto 'BAJO', probabilidad 'MEDIO'
        And el proyecto tiene un riesgo de motivo 'Baja disponibilidad de recursos', descripcion 'Baja disponibilidad de recursos debido a la reduccion de personal por problemas financieros', impacto 'BAJO', probabilidad 'ALTO'
        And el proyecto tiene un riesgo de motivo 'Situación financiera de cliente', descripcion 'El cliente hoy en día atraviesa dificultades financieras que pueden dificultar el pago a probeedores', impacto 'BAJO', probabilidad 'BAJO'
        When consulto si el proyecto esta en riesgo
        Then obtengo que el proyecto no lo esta

    Scenario: Un proyecto con varios riesgos donde uno sobrepasa el umbral configurado
        Given tengo un proyecto de nombre 'Implementación CRM banco Santander', codigo 'CRM-SANT', descripcion 'Implementación del CRM versión 5.1 para banco Santander en la región de Cono Sur', lider 'Julian Scala'
        And el proyecto tiene una configuracion de riesgos valor bajo 0.2, medio 0.5, alto 0.8, umbral 0.6
        And el proyecto tiene un riesgo de motivo 'Tarifa inestable', descripcion 'Tarifa inestable dada la condicion del dolar actual', impacto 'BAJO', probabilidad 'MEDIO'
        And el proyecto tiene un riesgo de motivo 'Baja disponibilidad de recursos', descripcion 'Baja disponibilidad de recursos debido a la reduccion de personal por problemas financieros', impacto 'BAJO', probabilidad 'ALTO'
        And el proyecto tiene un riesgo de motivo 'Situación financiera de cliente', descripcion 'El cliente hoy en día atraviesa dificultades financieras que pueden dificultar el pago a probeedores', impacto 'ALTO', probabilidad 'ALTO'
        When consulto si el proyecto esta en riesgo
        Then obtengo que el proyecto lo esta
