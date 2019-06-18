Feature: Agregar un Proyecto al Portafolio
    Como gerente quiero agregar un proyecto al portafolio de Proyectos para ...

    Scenario: Agregar un Proyecto al Portafolio
        Given tengo un portafolio
        And tengo un proyecto de nombre 'Implementación ERP COCA-COLA', codigo 'COCA', descripcion 'Implementación del sistema ERP versión 3.4 para la planta embotelladora de Coca-Cola sede Pilar', lider 'Fernando Soluzzia'
        When agrego el proyecto al portafolio
        Then al consultar los proyectos el portafolio tiene 1 proyecto
        And el proyecto tiene codigo 'COCA'

    Scenario: Agregar un Proyecto al Portafolio cuando ya hay un proyecto con el mismo código
        Given tengo un portafolio
        And ya existe un proyecto en el portafolio con codigo 'COCA'
        And tengo un proyecto de nombre 'Implementación ERP COCA-COLA', codigo 'COCA', descripcion 'Implementación del sistema ERP versión 3.4 para la planta embotelladora de Coca-Cola sede Pilar', lider 'Fernando Soluzzia'
        When agrego el proyecto al portafolio
        Then deberia obtener un error que diga 'Ya exise un proyecto con codigo "COCA"'
