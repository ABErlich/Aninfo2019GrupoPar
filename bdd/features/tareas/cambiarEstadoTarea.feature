Feature: Cambiar estado a tarea

    Cambiar estado de tareas

    Scenario: Cambiar estado de tarea de 'TODO' a 'DOING'
        Given tengo un recurso con 20 horas semanales asignado a un Proyecto
        And tengo una tarea asignada a un Proyecto
        And la tarea tiene 10 horasEstimadas
        When asigno la tarea a el recurso
        And cambio el estado de la tarea
        Then al el estado de la tarea obtengo 'DOING'