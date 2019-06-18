Feature: Agregar recurso a proyecto

    Agregar recurso a proyectos para futura utilizacion

    Scenario: Agregar recurso a proyecto correctamente
        Given tengo un recurso
        And tengo un proyectoo
        When asigno a un recurso con rol 'Programador', fecha de inicio '01/01/2019', fecha de fin '01/12/2019', disponibilidad 80
        Then al consultar su rol vale 'Programador'
        And al consultar su fecha de inicio vale '01/01/2019'
        And al consultar su fecha de fin vale '01/12/2019'
        And al consultar su disponibilidad vale '80'

    Scenario: Agregar recurso a dos proyectos en el mismo periodo
        Given tengo un recurso
        And tengo dos proyectos de codigo 'ERP' y 'CRM'
        When asigno a un recurso con rol 'Programador', fecha de inicio '01/01/2019', fecha de fin '01/12/2019', al proyecto 'ERP', disponibilidad 40
        And asigno a un recurso con rol 'Programador', fecha de inicio '01/01/2019', fecha de fin '01/12/2019', al proyecto 'CRM', disponibilidad 40
        Then el recurso se encuentra asignado en 'ERP'
        And el recurso se encuentra asignado en 'CRM'

    Scenario: Agregar recurso a dos proyectos en el mismo periodo invalido
        Given tengo un recurso
        And tengo dos proyectos de codigo 'ERP' y 'BI'
        When asigno a un recurso con rol 'Programador', fecha de inicio '01/01/2019', fecha de fin '08/01/2019', al proyecto 'ERP', disponibilidad 40
        And asigno a un recurso con rol 'Programador', fecha de inicio '01/01/2019', fecha de fin '08/01/2019', al proyecto 'BI', disponibilidad 90
        Then el recurso se encuentra asignado en 'ERP'
        And el recurso no se encuentra asignado en 'BI'