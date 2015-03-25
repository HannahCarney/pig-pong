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
    When I enter my name
    When I hit enter
    Then I should see "Play-Pig-Pong" as the title
    Then I should see "John"

Feature: User can see images on the home page

  Scenario: User can see homepage
    Given I am on the homepage
    Then I should see "mud" on the page
    Then I should see "mud3" on the page
    Then I should see "logo" on the page

Feature: User can see images on the gamepage

  Scenario: User can see gamepage
    Given I am on the homepage
    When I enter my name
    When I hit enter
    Then I should see "logo" on the page
    Then I should see "game-mainpage" on the page