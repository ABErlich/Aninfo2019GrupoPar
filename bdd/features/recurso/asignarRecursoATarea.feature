Feature: Agregar recurso a tarea

    Agregar recurso a tareas para futura utilizacion

    Scenario: Agregar recurso a tarea correctamente
        Given tengo un recurso con 20 horas semanales asignado a un Proyecto
        And tengo una tarea asignada a un Proyecto
        And la tarea tiene 10 horasEstimadas
        When asigno la tarea a el recurso
        Then al consultar el asignado a la tarea es el recurso

    Scenario: Agregar recurso a tarea ya asignada
        Given tengo un recurso con 20 horas semanales asignado a un Proyecto
        And tengo una tarea asignada a un Proyecto
        And la tarea tiene 10 horasEstimadas
        And tengo otro recurso2 asignada a la tarea
        When asigno la tarea a el recurso
        Then deberia obtener un error que diga 'Tarea ya asignada'

    Scenario: Agregar recurso a tarea correctamente
        Given tengo un recurso con 20 horas semanales asignado a un Proyecto
        And tengo una tarea asignada a un Proyecto
        And la tarea tiene 50 horasEstimadas
        When asigno la tarea a el recurso
        Then deberia obtener un error que diga 'Recurso sobreasignado'
