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
    And I go to cart
    And I can see the product is on the cart
    And I proceed with checkout using <firstName>,<lastName>,<postalCode>
    When I finish the checkout
    Then The checkout is completed

    Examples:
      | firstName | lastName | postalCode |
      | abc       | bcd      |     111111 |
