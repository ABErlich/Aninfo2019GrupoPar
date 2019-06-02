Feature: Agregar recurso a proyecto

    Agregar recurso a proyectos para futura utilizacion

    Scenario: Agregar recurso a proyecto correctamente
        Given tengo un recurso
        And tengo un proyectoo
        When asigno a un recurso con rol 'programador', fecha de inicio '01/01/2019', fecha de fin '01/12/2019'
        Then al consultar su rol vale 'programador'
        And al consultar su fecha de inicio vale '01/01/2019'
        And al consultar su fecha de fin vale '01/12/2019'

    Scenario: Agregar recurso a dos proyectos en el mismo periodo
        Given tengo un recurso
        And tengo dos proyectos
        When asigno a un recurso con rol 'programador', fecha de inicio '01/01/2019', fecha de fin '01/12/2019', al proyecto 'P1'
        And asigno a un recurso con rol 'programador', fecha de inicio '01/01/2019', fecha de fin '01/12/2019', al proyecto 'P2'
        Then el proyecto 'P1' tiene un recurso
        And el proyecto 'P2' tiene un recurso
