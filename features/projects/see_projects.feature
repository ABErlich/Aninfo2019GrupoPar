Feature: See projects
    As a manager I want to see a list of projects

    Scenario: Empty list
        Given I am in the projects page
        And no projects are created
        Then I should see an empty list of projects
