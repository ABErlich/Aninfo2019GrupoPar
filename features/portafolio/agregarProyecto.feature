Feature: Agregar un Proyecto al Portafolio
    Como gerente quiero agregar un proyecto al portafolio de Proyectos para ...

    Scenario: Agregar un Proyecto al Portafolio
        Given tengo un portafolio
        And tengo un proyecto de nombre 'Proyecto', codigo 'PRY', descripcion 'Lorem ipsum', lider 'Fulano'
        When agrego el proyecto al portafolio
        Then al consultar los proyectos el portafolio tiene 1 proyecto
        And el proyecto tiene codigo 'PRY'

    Scenario: Agregar un Proyecto al Portafolio cuando ya hay un proyecto con el mismo código
        Given tengo un portafolio
        And ya existe un proyecto en el portafolio con codigo 'PRY'
        And tengo un proyecto de nombre 'Proyecto', codigo 'PRY', descripcion 'Lorem ipsum', lider 'Fulano'
        When agrego el proyecto al portafolio
        Then deberia obtener un error que diga 'Ya exise un proyecto con codigo "PRY"'
