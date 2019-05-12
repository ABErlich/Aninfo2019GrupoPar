Feature: Create a new project
    As a manager I want to be able to create a new project in the system

    # dado que soy gerente de op e ingreso todos los datos necesarios para crear un proyecto
    # cuando creo el proyecto
    # entonces la creacion es exitosa y recibo un mensaje indicandolo
    Scenario: New project created
        Given I am in the projects page
        When I select to create a new project
        When I complete code leader and description
        When I complete the name
        Then I should see the message "Project created"

    # dado que soy el gerente de op y omito uno o varios datos necesarios para crear un proyecto
    # cuando creo el proyecto
    # entonces la creacion falla y recibo un mensaje indicando que faltan completar datos
    Scenario: Error creating project
        Given I am in the projects page
        When I select to create a new project
        When I not complete code leader and description
        When I complete the name
        Then I should see the message "Missing required fields"


#Feature: Task list
    # dado que soy lider de proyecto y el proyecto tiene tareas cargadas
    # cuando visualizo el listado de tareas del proyecto
    # entonces obtengo un listado de la descripcion, asignado y prioridad de las tareas ordenada por la prioridad
    #Scenario: View project task list

    # dado que soy lider de proyecto y el proyecto no tiene tareas cargadas
    # cuando visualizo el listado de tareas del proyecto
    # entonces obtengo un listado vacio y la opcion de cargar tareas neuvas