Feature: Crear tarea
    Como lider de proyecto quiero poder crear una tarea para ...

    Scenario: Crear una tarea y se inicializa en 'TODO'
        Given tengo un proyecto de nombre 'Desarrollo ERP (Enterprise Resource Management)', codigo 'ERP', descripcion 'Proyecto de desarrollo de un sistema ERP para la gestión de finanzas empresariales', lider 'Esteban Prolog'
        When creo una tarea de titulo 'Asignación de usuarios a centros de costo', descripcion 'Los usuarios deben poder asociarse a Centros de Costo (CC). Al momento de cargar gastos, solo deben mostrarse los CC a los que el usuario pertenece', prioridad 'Alta'
        Then al consultar 'titulo' de la tarea vale 'Asignación de usuarios a centros de costo'
        And al consultar 'descripcion' de la tarea vale 'Los usuarios deben poder asociarse a Centros de Costo (CC). Al momento de cargar gastos, solo deben mostrarse los CC a los que el usuario pertenece'
        And al consultar 'prioridad' de la tarea vale 'Alta'
        And al consultar 'estado' de la tarea vale 'TODO'
