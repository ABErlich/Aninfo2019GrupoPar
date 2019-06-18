Feature: Agregar recurso a proyecto

    Agregar recurso a proyectos para futura utilizacion

    Scenario: Agregar recurso a proyecto correctamente
        Given tengo un recurso llamado 'Santiago Daniel'
        And tengo un proyecto llamado 'CRM 2.0'
        When asigno a un recurso con rol 'programador', fecha de inicio '01/01/2019', fecha de fin '01/12/2019', disponibilidad 80
        Then al consultar su rol vale 'programador'
        And al consultar su fecha de inicio vale '01/01/2019'
        And al consultar su fecha de fin vale '01/12/2019'
        And al consultar su disponibilidad vale '80'

    Scenario: Agregar recurso a dos proyectos en el mismo periodo
        Given tengo un recurso llamado 'Santiago Daniel'
        And tengo dos proyectos llamados 'CRM 2.0' y 'ERP 1.5'
        When asigno a un recurso con rol 'programador', fecha de inicio '01/01/2019', fecha de fin '01/12/2019', al proyecto p1, disponibilidad 40
        And asigno a un recurso con rol 'programador', fecha de inicio '01/01/2019', fecha de fin '01/12/2019', al proyecto p2, disponibilidad 40
        Then el recurso se encuentra asignado en 'p1'
        And el recurso se encuentra asignado en 'p2'

    Scenario: Agregar recurso a dos proyectos en el mismo periodo invalido
        Given tengo un recurso llamado 'Santiago Daniel'
        And tengo dos proyectos llamados 'CRM 2.0' y 'ERP 1.5'
        When asigno a un recurso con rol 'programador', fecha de inicio '01/01/2019', fecha de fin '08/01/2019', al proyecto p1, disponibilidad 40
        And asigno a un recurso con rol 'programador', fecha de inicio '01/01/2019', fecha de fin '08/01/2019', al proyecto p3, disponibilidad 90
        Then el recurso se encuentra asignado en 'p1'
        And el recurso no se encuentra asignado en 'p3'