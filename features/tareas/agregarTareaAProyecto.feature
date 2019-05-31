Feature: Agregar tarea a proyecto
    Como lider de proyecto quiero poder agregar una tarea a un proyecto para ...

    Scenario: Agregar una tarea
        Given tengo un proyecto de nombre 'Proyecto', codigo 'PRY', descripcion 'Lorem ipsum', lider 'Fulano'
        And tengo una tarea de titulo 'Titulo Tarea', descripcion 'Descripcion Tarea', prioridad 'Alta'
        When agrego la tarea 'Titulo Tarea' al proyecto
        Then al consultar las tareas el proyecto tiene 1 tarea
        And al consultar 'titulo' de la tarea vale 'Titulo Tarea'
        And al consultar 'descripcion' de la tarea vale 'Descripcion Tarea'
        And al consultar 'prioridad' de la tarea vale 'Alta'
