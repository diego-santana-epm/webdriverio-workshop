Feature: Swag Labs Login

  Scenario Outline: As a user I want to Login
    Given I am on the login page
    When I login with <username> and <password>
    Then I can see the products label

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |

  Scenario: As a user I can checkout a products
    Given I choose a product in the catalog
    When I go to cart
    Then I can see the product is on the cart
