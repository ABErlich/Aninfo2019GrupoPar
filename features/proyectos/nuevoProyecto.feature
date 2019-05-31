Feature: Crear un proyecto
    Como gerente quiero crear un proyecto en el sistema

    Scenario: Nuevo proyecto sin requerimientos
        Given tengo un proyecto de nombre 'Enterprise Resource Planning', codigo 'ERP', descripcion 'Sistema de planificacion de recursos, expensas, etc.', lider 'Juancito'
        When creo el proyecto
        Then al consultar 'nombre' del proyecto vale 'Enterprise Resource Planning'
        And al consultar 'codigo' del proyecto vale 'ERP'
        And al consultar 'descripcion' del proyecto vale 'Sistema de planificacion de recursos, expensas, etc.'
        And al consultar 'lider' del proyecto vale 'Juancito'
    
    Scenario: Error al crear un proyecto por faltar nombre
        Given tengo un proyecto de codigo 'ERP', descripcion 'Sistema de planificacion de recursos, expensas, etc.', lider 'Juancito'
        When creo el proyecto
        Then deberia obtener un error que diga 'Parametro requerido: nombre'

    Scenario: Error al crear un proyecto por faltar codigo
        Given tengo un proyecto de nombre 'Enterprise Resource Planning', descripcion 'Sistema de planificacion de recursos, expensas, etc.', lider 'Juancito'
        When creo el proyecto
        Then deberia obtener un error que diga 'Parametro requerido: codigo'

    Scenario: Error al crear un proyecto por faltar descripcion
        Given tengo un proyecto de nombre 'Enterprise Resource Planning', codigo 'ERP', lider 'Juancito'
        When creo el proyecto
        Then deberia obtener un error que diga 'Parametro requerido: descripcion'

    Scenario: Error al crear un proyecto por faltar lider
        Given tengo un proyecto de nombre 'Enterprise Resource Planning', codigo 'ERP', descripcion 'Sistema de planificacion de recursos, expensas, etc.'
        When creo el proyecto
        Then deberia obtener un error que diga 'Parametro requerido: lider'

    Scenario: Nuevo proyecto con requerimientos
        Given tengo un proyecto de nombre 'Enterprise Resource Planning', codigo 'ERP', descripcion 'Sistema de planificacion de recursos, expensas, etc.', lider 'Juancito', requerimientos 'Ser portable., Que este conectado con la nube.'
        When creo el proyecto
        Then al consultar 'nombre' del proyecto vale 'Enterprise Resource Planning'
        And al consultar 'codigo' del proyecto vale 'ERP'
        And al consultar 'descripcion' del proyecto vale 'Sistema de planificacion de recursos, expensas, etc.'
        And al consultar 'lider' del proyecto vale 'Juancito'
        And al consultar 'requerimientos' del proyecto vale 'Ser portable., Que este conectado con la nube.'
    
    
