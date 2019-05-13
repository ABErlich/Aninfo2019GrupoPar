Feature: See projects
    As a manager I want to see a list of projects

    Scenario: Empty list
        Given I am in the projects page
        And no projects are created
        Then I should see an empty list of projects

    Scenario: Projects created
        Given I am in the projects page
        And there is a project created with name 'PROJECT'
        Then I should see a list with one project named 'PROJECT'
