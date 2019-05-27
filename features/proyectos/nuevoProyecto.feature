Feature: Crear un proyecto
    Como gerente quiero crear un proyecto en el sistema

    Scenario: Nuevo proyecto
        Given tengo un proyecto
        And tiene 'nombre' 'Enterprise Resource Planning'
        And tiene 'codigo' 'ERP'
        And tiene 'descripcion' 'Sistema de planificacion de recursos, expensas, etc.'
        And tiene 'lider' 'Juancito'
        When creo el proyecto
        Then al consultar 'nombre' vale 'Enterprise Resource Planning'
        And al consultar 'codigo' vale 'ERP'
        And al consultar 'descripcion' vale 'Sistema de planificacion de recursos, expensas, etc.'
        And al consultar 'lider' vale 'Juancito'

    Scenario: Error al crear un proyecto por faltar nombre
        Given tengo un proyecto
        And tiene 'codigo' 'ERP'
        And tiene 'descripcion' 'Sistema de planificacion de recursos, expensas, etc.'
        And tiene 'lider' 'Juancito'
        When creo el proyecto
        Then deberia obtener un error que diga 'Parametro requerido: nombre'

    Scenario: Error al crear un proyecto por faltar codigo
        Given tengo un proyecto
        And tiene 'nombre' 'Enterprise Resource Planning'
        And tiene 'descripcion' 'Sistema de planificacion de recursos, expensas, etc.'
        And tiene 'lider' 'Juancito'
        When creo el proyecto
        Then deberia obtener un error que diga 'Parametro requerido: codigo'

    Scenario: Error al crear un proyecto por faltar descripcion
        Given tengo un proyecto
        And tiene 'nombre' 'Enterprise Resource Planning'
        And tiene 'codigo' 'ERP'
        And tiene 'lider' 'Juancito'
        When creo el proyecto
        Then deberia obtener un error que diga 'Parametro requerido: descripcion'

    Scenario: Error al crear un proyecto por faltar lider
        Given tengo un proyecto
        And tiene 'nombre' 'Enterprise Resource Planning'
        And tiene 'codigo' 'ERP'
        And tiene 'descripcion' 'Sistema de planificacion de recursos, expensas, etc.'
        When creo el proyecto
        Then deberia obtener un error que diga 'Parametro requerido: lider'
