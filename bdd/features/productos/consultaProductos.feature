Feature: Consulta cartera de productos y versiones
    Como vendedor quiero poder agregar productos al ser finalizados por los desarrolladores
    
    Scenario: Consultar listado de productos
        Given existe una cartera con los siguientes productos
          | nombre | descripcion                                                            |
          | ERP    | Sistema de planificacion de recursos, expensas, etc.                   |
          | CRM    | Sistema para el manejo de las relaciones e interacciones con clientes. |
          | SCM    | Sistema para el manejo de bienes y servicios.                          |
        When consulto el listado de productos
        Then se muestran los productos
          | ERP |
          | CRM |
          | SCM |

    Scenario: Consultar versiones de un producto
        Given el producto 'ERP' tiene las versiones
          | 1.0 |
          | 2.3 |
          | 3.2 |
        When cuando consulto las versiones existentes del producto 'ERP'
        Then se muestran las versiones
          | 1.0 |
          | 2.3 |
          | 3.2 |
