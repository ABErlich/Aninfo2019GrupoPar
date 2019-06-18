Feature: Agregar riesgo a proyecto

    Scenario: Agregar un riesgo
        Given tengo un proyecto de nombre 'Implementación CRM banco Santander', codigo 'CRM-SANT', descripcion 'Implementación del CRM versión 5.1 para banco Santander en la región de Cono Sur', lider 'Julian Scala'
        And tengo una configuracion de riesgos valor bajo 0.2, medio 0.5 y alto 0.8
        And tengo un riesgo de motivo 'Alto recambio de personal', descripcion 'El proyecto en particular presenta un alto recambio de personal dado el ritmo vertiginoso de trabajo', impacto 'BAJO', probabilidad 'MEDIO'
        When agrego el riesgo al proyecto
        Then al consultar los riesgos el proyecto tiene 1 riesgo
        And al consultar 'motivo' del riesgo vale 'Alto recambio de personal'
        And al consultar 'descripcion' del riesgo vale 'El proyecto en particular presenta un alto recambio de personal dado el ritmo vertiginoso de trabajo'
        And al consultar 'impacto' del riesgo vale 0.2
        And al consultar 'probabilidad' del riesgo vale 0.5
