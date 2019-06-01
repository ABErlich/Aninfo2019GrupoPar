Feature: See Tasks
    As a proyect leader I want to see the list of tasks for a project

    Scenario: Project with no tasks
        Given I am in the projects page
        And there is a project created with name 'PROJECT'
        When I click 'Tasks'
        Then I see an empty list of tasks

    Scenario: Project with one task
        Given I am in the projects page
        And there is a project created with name 'PROJECT'
        And it has one task named 'TASK'
        When I click 'Tasks'
        Then I see a list with one task named 'TASK'
