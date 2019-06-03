Feature: Consultar horas de recursos consumidas en un proyecto
    Como gerente de finanzas quiero consular el tiempo de los recursos asignados a los proyectos para ...

    Scenario: Consulta de horas en un proyecto
        Given tengo un proyecto de nombre 'Proyecto', codigo 'PRY', descripcion 'Lorem ipsum', lider 'Fulano'
        And el desarrollador llamado 'Marcelo Develo' trabajó 2 horas 
        And el desarrollador llamado 'Jose Develo' trabajó 3 horas 
        When consulto las horas consumidas en el proyecto 'Proyecto'
        Then el resultado es 5 horas
