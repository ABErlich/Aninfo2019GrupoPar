Feature: Crear tarea
    Como lider de proyecto quiero poder crear una tarea para ...

    Scenario: Crear una tarea
        Given tengo un proyecto de nombre 'Proyecto', codigo 'PRY', descripcion 'Lorem ipsum', lider 'Fulano'
        When creo una tarea de titulo 'Titulo Tarea', descripcion 'Descripcion Tarea', prioridad 'Alta'
        Then al consultar 'titulo' de la tarea vale 'Titulo Tarea'
        And al consultar 'descripcion' de la tarea vale 'Descripcion Tarea'
        And al consultar 'prioridad' de la tarea vale 'Alta'
