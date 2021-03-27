Feature: Omnistack teste web
Testes automatizados do frontend web dos artefatos gerados na semana Omnistack

  Scenario: Cadastrar um novo Developer
    Given Browse to web site "http://localhost:3000/"
    Then the "github_username" field is filled with "Vinicius-Targa"
    Then the "techs" field is filled with "C++"
    When i press the "save_Button" button

  Scenario: Entrar no perfil do github de um Developer cadastrado
    Given Browse to web site "http://localhost:3000/"
    When i press the "github_profile" button