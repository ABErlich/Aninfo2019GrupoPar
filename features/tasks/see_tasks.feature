Feature: See Tasks
    As a proyect leader I want to see the list of tasks for a project

    Scenario: No tasks
        Given I am in the projects page
        And there is a project created with name 'PROJECT'
        When I click 'Tasks'
        Then I see an empty list of tasks
