Feature: Agregar tarea a proyecto
    Como lider de proyecto quiero poder agregar una tarea a un proyecto para ...

    Scenario: Agregar una tarea
        Given tengo un proyecto de nombre 'Desarrollo ERP (Enterprise Resource Management)', codigo 'ERP', descripcion 'Proyecto de desarrollo de un sistema ERP para la gestión de finanzas empresariales', lider 'Esteban Prolog'
        And tengo una tarea de titulo 'Asignación de usuarios a centros de costo', descripcion 'Los usuarios deben poder asociarse a Centros de Costo (CC). Al momento de cargar gastos, solo deben mostrarse los CC a los que el usuario pertenece', prioridad 'Alta'
        When agrego la tarea 'Asignación de usuarios a centros de costo' al proyecto
        Then al consultar las tareas el proyecto tiene 1 tarea
        And al consultar 'titulo' de la tarea vale 'Asignación de usuarios a centros de costo'
        And al consultar 'descripcion' de la tarea vale 'Los usuarios deben poder asociarse a Centros de Costo (CC). Al momento de cargar gastos, solo deben mostrarse los CC a los que el usuario pertenece'
        And al consultar 'prioridad' de la tarea vale 'Alta'
        And al consultar proyecto de la tarea vale proyecto asignado anteriormente.
