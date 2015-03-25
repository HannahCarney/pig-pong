Feature: User can go to site
  As a bored user
  I want to go to the pig-pong site
  So that I can play the game

  Scenario: User goes to play pig-pong
    Given I am on the homepage
    Then I should see "Pig-Pong" as the title
    Then I should see "Enter your name:"

Feature: User can enter name

  Scenario: User enters name into form
    Given I am on the homepage
    When I can enter my name
    Then I should see "Play-Pig-Pong" as the title
    Then I should see "John"
