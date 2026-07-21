/**
 * Banco de Preguntas - Simulador Cédula A1
 * Módulo 1: 64 preguntas en el banco (examen: 40)
 * Módulo 2: 55 preguntas en el banco (examen: 28)
 * Módulo 3: 49 preguntas en el banco (examen: 20)
 * Total banco: 168 preguntas con 3 variantes cada una.
 * Cada intento muestrea el tamaño oficial del examen por módulo,
 * estratificado por tema, para que las preguntas roten entre intentos.
 * Las preguntas de matemáticas traen variantes con datos distintos y
 * solución paso a paso propia (campo "e" por variante).
 */
const qData = [
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "variants": [
      {
        "q": "Un riesgo donde solo existen dos escenarios posibles (pérdida económica o no pérdida) y que es el único tipo asegurable se denomina:",
        "options": [
          "Riesgo Especulativo",
          "Riesgo Financiero",
          "Riesgo Puro",
          "Riesgo Particular"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Un riesgo donde solo existen dos escenarios posibles (pérdida económica o no pérdida) y que es el único tipo asegurable se denomina:",
        "options": [
          "Riesgo Especulativo",
          "Riesgo Financiero",
          "Riesgo Puro",
          "Riesgo Particular"
        ],
        "c": 2
      },
      {
        "q": "En relación a Conceptos de Riesgo, un riesgo donde solo existen dos escenarios posibles (pérdida económica o no pérdida) y que es el único tipo asegurable se denomina:",
        "options": [
          "Riesgo Especulativo",
          "Riesgo Financiero",
          "Riesgo Puro",
          "Riesgo Particular"
        ],
        "c": 2
      }
    ],
    "e": "El riesgo puro es el único asegurable, a diferencia del especulativo que permite ganancia."
  },
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "variants": [
      {
        "q": "Para la CNSF, un riesgo se considera CATASTRÓFICO si afecta simultáneamente a:",
        "options": [
          "Toda una ciudad",
          "Más de 50 personas",
          "12 personas o más",
          "De 1 a 12 personas"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Para la CNSF, un riesgo se considera CATASTRÓFICO si afecta simultáneamente a:",
        "options": [
          "Toda una ciudad",
          "Más de 50 personas",
          "12 personas o más",
          "De 1 a 12 personas"
        ],
        "c": 2
      },
      {
        "q": "En relación a Conceptos de Riesgo, para la CNSF, un riesgo se considera CATASTRÓFICO si afecta simultáneamente a:",
        "options": [
          "Toda una ciudad",
          "Más de 50 personas",
          "12 personas o más",
          "De 1 a 12 personas"
        ],
        "c": 2
      }
    ],
    "e": "Un riesgo particular afecta de 1 a 12 personas; de 12 en adelante se considera catastrófico."
  },
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "variants": [
      {
        "q": "¿Cuáles son las 6 características obligatorias que debe tener un riesgo para ser asegurable?",
        "options": [
          "Incierto, Posible, Concreto, Lícito, Fortuito y con Contenido Económico",
          "Posible, Legal, Aleatorio, Frecuente, Severo y Medible",
          "Incierto, Probable, Subjetivo, Lícito, Accidental y Cuantificable",
          "Fortuito, Especulativo, Concreto, Lícito, Posible y Económico"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a este tema, ¿Cuáles son las 6 características obligatorias que debe tener un riesgo para ser asegurable?",
        "options": [
          "Incierto, Posible, Concreto, Lícito, Fortuito y con Contenido Económico",
          "Posible, Legal, Aleatorio, Frecuente, Severo y Medible",
          "Incierto, Probable, Subjetivo, Lícito, Accidental y Cuantificable",
          "Fortuito, Especulativo, Concreto, Lícito, Posible y Económico"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuáles son las 6 características obligatorias que debe tener un riesgo para ser asegurable?",
        "options": [
          "Incierto, Posible, Concreto, Lícito, Fortuito y con Contenido Económico",
          "Posible, Legal, Aleatorio, Frecuente, Severo y Medible",
          "Incierto, Probable, Subjetivo, Lícito, Accidental y Cuantificable",
          "Fortuito, Especulativo, Concreto, Lícito, Posible y Económico"
        ],
        "c": 0
      }
    ],
    "e": "Recuerda la regla de examen: es la opción más larga. Incierto, Posible, Concreto, Lícito, Fortuito y Contenido Económico."
  },
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "variants": [
      {
        "q": "El principio rector del seguro frente al peligro dictamina que el riesgo no se elimina ni se previene, solo se:",
        "options": [
          "Asume",
          "Retiene",
          "Transfiere",
          "Asegura"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? El principio rector del seguro frente al peligro dictamina que el riesgo no se elimina ni se previene, solo se:",
        "options": [
          "Asume",
          "Retiene",
          "Transfiere",
          "Asegura"
        ],
        "c": 2
      },
      {
        "q": "En relación a Conceptos de Riesgo, el principio rector del seguro frente al peligro dictamina que el riesgo no se elimina ni se previene, solo se:",
        "options": [
          "Asume",
          "Retiene",
          "Transfiere",
          "Asegura"
        ],
        "c": 2
      }
    ],
    "e": "La actitud principal que permite la existencia del seguro es TRANSFERIR el riesgo a una institución."
  },
  {
    "m": 1,
    "t": "Matemáticas Actuariales",
    "variants": [
      {
        "q": "En el cálculo del costo de la prima, ¿cuáles son las dos métricas actuariales clave?",
        "options": [
          "Probabilidad y Estadística",
          "Frecuencia y Severidad",
          "Suma Asegurada y Edad",
          "Mortalidad y Morbilidad"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? En el cálculo del costo de la prima, ¿cuáles son las dos métricas actuariales clave?",
        "options": [
          "Probabilidad y Estadística",
          "Frecuencia y Severidad",
          "Suma Asegurada y Edad",
          "Mortalidad y Morbilidad"
        ],
        "c": 1
      },
      {
        "q": "En relación a Matemáticas Actuariales, en el cálculo del costo de la prima, ¿cuáles son las dos métricas actuariales clave?",
        "options": [
          "Probabilidad y Estadística",
          "Frecuencia y Severidad",
          "Suma Asegurada y Edad",
          "Mortalidad y Morbilidad"
        ],
        "c": 1
      }
    ],
    "e": "La Frecuencia (qué tantas veces ocurre) y la Severidad (cuánto cuesta) determinan el costo."
  },
  {
    "m": 1,
    "t": "Matemáticas Actuariales",
    "variants": [
      {
        "q": "El dato real que otorgan las Tablas de Mortalidad para el actuario es:",
        "options": [
          "La esperanza de vida en un país",
          "La probabilidad de supervivencia",
          "La probabilidad de muerte a una edad determinada",
          "El costo de la prima nivelada"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? El dato real que otorgan las Tablas de Mortalidad para el actuario es:",
        "options": [
          "La esperanza de vida en un país",
          "La probabilidad de supervivencia",
          "La probabilidad de muerte a una edad determinada",
          "El costo de la prima nivelada"
        ],
        "c": 2
      },
      {
        "q": "En relación a Matemáticas Actuariales, el dato real que otorgan las Tablas de Mortalidad para el actuario es:",
        "options": [
          "La esperanza de vida en un país",
          "La probabilidad de supervivencia",
          "La probabilidad de muerte a una edad determinada",
          "El costo de la prima nivelada"
        ],
        "c": 2
      }
    ],
    "e": "Muestra la probabilidad estadística de que una persona fallezca a una edad específica."
  },
  {
    "m": 1,
    "t": "Primas",
    "variants": [
      {
        "q": "¿Cuál es la prima que representa el costo neto de la cobertura del riesgo, sin ningún cargo adicional por administración o comisiones?",
        "options": [
          "Prima Nivelada",
          "Prima de Tarifa",
          "Prima Fraccionada",
          "Prima Pura de Riesgo"
        ],
        "c": 3
      },
      {
        "q": "Con respecto a este tema, ¿Cuál es la prima que representa el costo neto de la cobertura del riesgo, sin ningún cargo adicional por administración o comisiones?",
        "options": [
          "Prima Nivelada",
          "Prima de Tarifa",
          "Prima Fraccionada",
          "Prima Pura de Riesgo"
        ],
        "c": 3
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuál es la prima que representa el costo neto de la cobertura del riesgo, sin ningún cargo adicional por administración o comisiones?",
        "options": [
          "Prima Nivelada",
          "Prima de Tarifa",
          "Prima Fraccionada",
          "Prima Pura de Riesgo"
        ],
        "c": 3
      }
    ],
    "e": "La prima pura de riesgo es el costo matemático bruto antes de agregarle gastos y utilidad."
  },
  {
    "m": 1,
    "t": "Primas",
    "variants": [
      {
        "q": "Es un costo promedio fijo que se mantiene idéntico durante toda la vida de la póliza y que genera excedentes en sus primeros años. Aplica exclusivamente a Seguros de Vida.",
        "options": [
          "Prima Devengada",
          "Prima Nivelada",
          "Prima de Tarifa",
          "Prima Única"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Es un costo promedio fijo que se mantiene idéntico durante toda la vida de la póliza y que genera excedentes en sus primeros años. Aplica exclusivamente a Seguros de Vida.",
        "options": [
          "Prima Devengada",
          "Prima Nivelada",
          "Prima de Tarifa",
          "Prima Única"
        ],
        "c": 1
      },
      {
        "q": "En relación a Primas, es un costo promedio fijo que se mantiene idéntico durante toda la vida de la póliza y que genera excedentes en sus primeros años. Aplica exclusivamente a Seguros de Vida.",
        "options": [
          "Prima Devengada",
          "Prima Nivelada",
          "Prima de Tarifa",
          "Prima Única"
        ],
        "c": 1
      }
    ],
    "e": "La prima nivelada es el pilar del seguro de vida, generando la reserva matemática."
  },
  {
    "m": 1,
    "t": "Primas",
    "variants": [
      {
        "q": "Los 4 componentes que integran la Prima de Tarifa (precio final) son: Prima pura de riesgo, Gastos de adquisición, Utilidad, y...",
        "options": [
          "Recargos de Administración",
          "Reserva Matemática",
          "Impuestos y Derechos",
          "Gastos Médicos"
        ],
        "c": 0
      },
      {
        "q": "¿Cómo definirías lo siguiente? Los 4 componentes que integran la Prima de Tarifa (precio final) son: Prima pura de riesgo, Gastos de adquisición, Utilidad, y...",
        "options": [
          "Recargos de Administración",
          "Reserva Matemática",
          "Impuestos y Derechos",
          "Gastos Médicos"
        ],
        "c": 0
      },
      {
        "q": "En relación a Primas, los 4 componentes que integran la Prima de Tarifa (precio final) son: Prima pura de riesgo, Gastos de adquisición, Utilidad, y...",
        "options": [
          "Recargos de Administración",
          "Reserva Matemática",
          "Impuestos y Derechos",
          "Gastos Médicos"
        ],
        "c": 0
      }
    ],
    "e": "La prima de tarifa = P. Pura de Riesgo + Administración + Adquisición (comisiones) + Utilidad."
  },
  {
    "m": 1,
    "t": "Primas",
    "variants": [
      {
        "q": "Si ocurre una pérdida total del bien asegurado a los 3 meses de vigencia, la aseguradora tiene la obligación de devolver al cliente:",
        "options": [
          "El deducible",
          "Las primas devengadas",
          "Las primas no devengadas",
          "La reserva matemática"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Si ocurre una pérdida total del bien asegurado a los 3 meses de vigencia, la aseguradora tiene la obligación de devolver al cliente:",
        "options": [
          "El deducible",
          "Las primas devengadas",
          "Las primas no devengadas",
          "La reserva matemática"
        ],
        "c": 2
      },
      {
        "q": "En relación a Primas, si ocurre una pérdida total del bien asegurado a los 3 meses de vigencia, la aseguradora tiene la obligación de devolver al cliente:",
        "options": [
          "El deducible",
          "Las primas devengadas",
          "Las primas no devengadas",
          "La reserva matemática"
        ],
        "c": 2
      }
    ],
    "e": "La prima no devengada es el periodo de cobertura ya pagado que no se utilizará porque el seguro terminó por pérdida total."
  },
  {
    "m": 1,
    "t": "Matemáticas Actuariales",
    "variants": [
      {
        "q": "¿A qué ramo de seguros aplica ÚNICA Y EXCLUSIVAMENTE el concepto de Reserva Matemática?",
        "options": [
          "Gastos Médicos Mayores",
          "Salud",
          "Vida",
          "Accidentes Personales"
        ],
        "c": 2
      },
      {
        "q": "Con respecto a este tema, ¿A qué ramo de seguros aplica ÚNICA Y EXCLUSIVAMENTE el concepto de Reserva Matemática?",
        "options": [
          "Gastos Médicos Mayores",
          "Salud",
          "Vida",
          "Accidentes Personales"
        ],
        "c": 2
      },
      {
        "q": "Señale la respuesta correcta: ¿A qué ramo de seguros aplica ÚNICA Y EXCLUSIVAMENTE el concepto de Reserva Matemática?",
        "options": [
          "Gastos Médicos Mayores",
          "Salud",
          "Vida",
          "Accidentes Personales"
        ],
        "c": 2
      }
    ],
    "e": "La reserva matemática se genera exclusivamente de la prima nivelada en el seguro de Vida."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "variants": [
      {
        "q": "Al cotizar un seguro, si una persona tiene ocupación peligrosa o practica deportes de riesgo, la aseguradora aplica un cargo adicional llamado:",
        "options": [
          "Deducible",
          "Extra Prima (Recargo)",
          "Franquicia",
          "Copago"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Al cotizar un seguro, si una persona tiene ocupación peligrosa o practica deportes de riesgo, la aseguradora aplica un cargo adicional llamado:",
        "options": [
          "Deducible",
          "Extra Prima (Recargo)",
          "Franquicia",
          "Copago"
        ],
        "c": 1
      },
      {
        "q": "En relación a Suscripción, al cotizar un seguro, si una persona tiene ocupación peligrosa o practica deportes de riesgo, la aseguradora aplica un cargo adicional llamado:",
        "options": [
          "Deducible",
          "Extra Prima (Recargo)",
          "Franquicia",
          "Copago"
        ],
        "c": 1
      }
    ],
    "e": "Se conoce como recargo o extraprima por agravación del riesgo."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "variants": [
      {
        "q": "Respecto a los descuentos por 'Años de edad descontados' (No fumador, mujer, riesgo preferente), la regla en el examen establece que:",
        "options": [
          "Son acumulables hasta un máximo de 5 años",
          "Solo aplica el descuento por ser mujer",
          "No son acumulables, se otorga únicamente uno de ellos",
          "Requieren examen médico obligatorio para aplicar"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Respecto a los descuentos por 'Años de edad descontados' (No fumador, mujer, riesgo preferente), la regla en el examen establece que:",
        "options": [
          "Son acumulables hasta un máximo de 5 años",
          "Solo aplica el descuento por ser mujer",
          "No son acumulables, se otorga únicamente uno de ellos",
          "Requieren examen médico obligatorio para aplicar"
        ],
        "c": 2
      },
      {
        "q": "En relación a Suscripción, respecto a los descuentos por 'Años de edad descontados' (No fumador, mujer, riesgo preferente), la regla en el examen establece que:",
        "options": [
          "Son acumulables hasta un máximo de 5 años",
          "Solo aplica el descuento por ser mujer",
          "No son acumulables, se otorga únicamente uno de ellos",
          "Requieren examen médico obligatorio para aplicar"
        ],
        "c": 2
      }
    ],
    "e": "Los descuentos de años no se suman entre sí; se otorga el mayor o el único aplicable."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "En un seguro, es un porcentaje o monto mínimo del bien que debe verse afectado para que el seguro comience a operar desde el primer peso, sin que se retenga ninguna cantidad.",
        "options": [
          "Coaseguro",
          "Deducible",
          "Franquicia",
          "Copago"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? En un seguro, es un porcentaje o monto mínimo del bien que debe verse afectado para que el seguro comience a operar desde el primer peso, sin que se retenga ninguna cantidad.",
        "options": [
          "Coaseguro",
          "Deducible",
          "Franquicia",
          "Copago"
        ],
        "c": 2
      },
      {
        "q": "En relación a El Contrato de Seguro, en un seguro, es un porcentaje o monto mínimo del bien que debe verse afectado para que el seguro comience a operar desde el primer peso, sin que se retenga ninguna cantidad.",
        "options": [
          "Coaseguro",
          "Deducible",
          "Franquicia",
          "Copago"
        ],
        "c": 2
      }
    ],
    "e": "La franquicia cubre desde el primer peso si se supera el umbral; el deducible siempre se resta a fondo perdido."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "variants": [
      {
        "q": "De acuerdo con la ley, la edad mínima legal para otorgar una cobertura de fallecimiento tradicional (entregar Suma Asegurada por muerte) es:",
        "options": [
          "0 años (desde el nacimiento)",
          "12 años",
          "16 años",
          "18 años"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? De acuerdo con la ley, la edad mínima legal para otorgar una cobertura de fallecimiento tradicional (entregar Suma Asegurada por muerte) es:",
        "options": [
          "0 años (desde el nacimiento)",
          "12 años",
          "16 años",
          "18 años"
        ],
        "c": 1
      },
      {
        "q": "En relación a Suscripción, de acuerdo con la ley, la edad mínima legal para otorgar una cobertura de fallecimiento tradicional (entregar Suma Asegurada por muerte) es:",
        "options": [
          "0 años (desde el nacimiento)",
          "12 años",
          "16 años",
          "18 años"
        ],
        "c": 1
      }
    ],
    "e": "La ley prohíbe el seguro de vida convencional para menores de 12 años, aplicando el 'contraseguro'."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "variants": [
      {
        "q": "Si fallece un menor de 12 años asegurado, ¿qué cobertura opera y qué entrega la aseguradora?",
        "options": [
          "Opera el rescate y entrega la reserva matemática",
          "Opera cobertura por fallecimiento y entrega la suma asegurada",
          "Opera el contraseguro y devuelve las primas pagadas",
          "Es un riesgo excluido y no entrega nada"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Si fallece un menor de 12 años asegurado, ¿qué cobertura opera y qué entrega la aseguradora?",
        "options": [
          "Opera el rescate y entrega la reserva matemática",
          "Opera cobertura por fallecimiento y entrega la suma asegurada",
          "Opera el contraseguro y devuelve las primas pagadas",
          "Es un riesgo excluido y no entrega nada"
        ],
        "c": 2
      },
      {
        "q": "En relación a Suscripción, si fallece un menor de 12 años asegurado, ¿qué cobertura opera y qué entrega la aseguradora?",
        "options": [
          "Opera el rescate y entrega la reserva matemática",
          "Opera cobertura por fallecimiento y entrega la suma asegurada",
          "Opera el contraseguro y devuelve las primas pagadas",
          "Es un riesgo excluido y no entrega nada"
        ],
        "c": 2
      }
    ],
    "e": "El contraseguro devuelve al contratante el 100% de las primas pagadas."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "Es el acuerdo por el cual dos o más aseguradoras cubren de forma concurrente el mismo riesgo. El asegurado debe cobrarle a cada una su parte proporcional.",
        "options": [
          "Reaseguro",
          "Coaseguro",
          "Fideicomiso",
          "Sindicato de Seguros"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Es el acuerdo por el cual dos o más aseguradoras cubren de forma concurrente el mismo riesgo. El asegurado debe cobrarle a cada una su parte proporcional.",
        "options": [
          "Reaseguro",
          "Coaseguro",
          "Fideicomiso",
          "Sindicato de Seguros"
        ],
        "c": 1
      },
      {
        "q": "En relación a El Contrato de Seguro, es el acuerdo por el cual dos o más aseguradoras cubren de forma concurrente el mismo riesgo. El asegurado debe cobrarle a cada una su parte proporcional.",
        "options": [
          "Reaseguro",
          "Coaseguro",
          "Fideicomiso",
          "Sindicato de Seguros"
        ],
        "c": 1
      }
    ],
    "e": "Es el coaseguro técnico (no confundir con el coaseguro de GMM). El Reaseguro es transparente para el cliente."
  },
  {
    "m": 1,
    "t": "Instituciones Reguladoras",
    "variants": [
      {
        "q": "¿Qué institución tiene como máxima autoridad financiera autorizar el inicio de operaciones de las aseguradoras en México?",
        "options": [
          "CNSF",
          "Banxico",
          "CONDUSEF",
          "SHCP"
        ],
        "c": 3
      },
      {
        "q": "Con respecto a este tema, ¿Qué institución tiene como máxima autoridad financiera autorizar el inicio de operaciones de las aseguradoras en México?",
        "options": [
          "CNSF",
          "Banxico",
          "CONDUSEF",
          "SHCP"
        ],
        "c": 3
      },
      {
        "q": "Señale la respuesta correcta: ¿Qué institución tiene como máxima autoridad financiera autorizar el inicio de operaciones de las aseguradoras en México?",
        "options": [
          "CNSF",
          "Banxico",
          "CONDUSEF",
          "SHCP"
        ],
        "c": 3
      }
    ],
    "e": "La Secretaría de Hacienda y Crédito Público (SHCP) otorga la autorización para constituirse."
  },
  {
    "m": 1,
    "t": "Instituciones Reguladoras",
    "variants": [
      {
        "q": "Entidad constituida por una asociación de personas expuestas a un riesgo, operan SIN FIN DE LUCRO y su alcance suele estar limitado geográficamente o por gremio.",
        "options": [
          "Aseguradora Tradicional",
          "Sociedad Mutualista",
          "Fondo de Aseguramiento",
          "Afianzadora"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Entidad constituida por una asociación de personas expuestas a un riesgo, operan SIN FIN DE LUCRO y su alcance suele estar limitado geográficamente o por gremio.",
        "options": [
          "Aseguradora Tradicional",
          "Sociedad Mutualista",
          "Fondo de Aseguramiento",
          "Afianzadora"
        ],
        "c": 1
      },
      {
        "q": "En relación a Instituciones Reguladoras, entidad constituida por una asociación de personas expuestas a un riesgo, operan SIN FIN DE LUCRO y su alcance suele estar limitado geográficamente o por gremio.",
        "options": [
          "Aseguradora Tradicional",
          "Sociedad Mutualista",
          "Fondo de Aseguramiento",
          "Afianzadora"
        ],
        "c": 1
      }
    ],
    "e": "Las Mutualistas buscan el auxilio mutuo sin lucro; las Aseguradoras son S.A. con fines de lucro."
  },
  {
    "m": 1,
    "t": "Instituciones Reguladoras",
    "variants": [
      {
        "q": "¿Cuáles son las únicas tres operaciones de seguros autorizadas en México?",
        "options": [
          "Personas, Vehículos y Daños",
          "Vida, Salud y Gastos Médicos",
          "Vida, Accidentes y Enfermedades, y Daños",
          "Vida, Propiedad y Fianzas"
        ],
        "c": 2
      },
      {
        "q": "Con respecto a este tema, ¿Cuáles son las únicas tres operaciones de seguros autorizadas en México?",
        "options": [
          "Personas, Vehículos y Daños",
          "Vida, Salud y Gastos Médicos",
          "Vida, Accidentes y Enfermedades, y Daños",
          "Vida, Propiedad y Fianzas"
        ],
        "c": 2
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuáles son las únicas tres operaciones de seguros autorizadas en México?",
        "options": [
          "Personas, Vehículos y Daños",
          "Vida, Salud y Gastos Médicos",
          "Vida, Accidentes y Enfermedades, y Daños",
          "Vida, Propiedad y Fianzas"
        ],
        "c": 2
      }
    ],
    "e": "Ley de Instituciones de Seguros y Fianzas: Vida, Accidentes y Enfermedades (AP, GMM, Salud) y Daños."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "Es el requisito legal por el cual el contratante debe tener un afecto económico real y legítimo en que el siniestro no ocurra (ej. la propia vida o un bien propio).",
        "options": [
          "Buena Fe",
          "Interés Asegurable",
          "Contrato de Adhesión",
          "Indisputabilidad"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Es el requisito legal por el cual el contratante debe tener un afecto económico real y legítimo en que el siniestro no ocurra (ej. la propia vida o un bien propio).",
        "options": [
          "Buena Fe",
          "Interés Asegurable",
          "Contrato de Adhesión",
          "Indisputabilidad"
        ],
        "c": 1
      },
      {
        "q": "En relación a El Contrato de Seguro, es el requisito legal por el cual el contratante debe tener un afecto económico real y legítimo en que el siniestro no ocurra (ej. la propia vida o un bien propio).",
        "options": [
          "Buena Fe",
          "Interés Asegurable",
          "Contrato de Adhesión",
          "Indisputabilidad"
        ],
        "c": 1
      }
    ],
    "e": "Sin interés asegurable el seguro se vuelve una apuesta ilegal (ej. no puedes asegurar la vida de un extraño)."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "Característica del contrato de seguro por la cual el asegurado no negocia las cláusulas, simplemente acepta las condiciones preestablecidas por la aseguradora.",
        "options": [
          "Ubérrima Fides (Buena fe)",
          "Contrato Bilateral",
          "Contrato Aleatorio",
          "Contrato de Adhesión"
        ],
        "c": 3
      },
      {
        "q": "¿Cómo definirías lo siguiente? Característica del contrato de seguro por la cual el asegurado no negocia las cláusulas, simplemente acepta las condiciones preestablecidas por la aseguradora.",
        "options": [
          "Ubérrima Fides (Buena fe)",
          "Contrato Bilateral",
          "Contrato Aleatorio",
          "Contrato de Adhesión"
        ],
        "c": 3
      },
      {
        "q": "En relación a El Contrato de Seguro, característica del contrato de seguro por la cual el asegurado no negocia las cláusulas, simplemente acepta las condiciones preestablecidas por la aseguradora.",
        "options": [
          "Ubérrima Fides (Buena fe)",
          "Contrato Bilateral",
          "Contrato Aleatorio",
          "Contrato de Adhesión"
        ],
        "c": 3
      }
    ],
    "e": "En el contrato de adhesión una parte redacta y la otra se 'adhiere'."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "¿Cuál es el plazo legal de prescripción para ejercer el cobro de la cobertura de FALLECIMIENTO en un seguro de vida?",
        "options": [
          "2 años",
          "3 años",
          "5 años",
          "10 años"
        ],
        "c": 2
      },
      {
        "q": "Con respecto a este tema, ¿Cuál es el plazo legal de prescripción para ejercer el cobro de la cobertura de FALLECIMIENTO en un seguro de vida?",
        "options": [
          "2 años",
          "3 años",
          "5 años",
          "10 años"
        ],
        "c": 2
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuál es el plazo legal de prescripción para ejercer el cobro de la cobertura de FALLECIMIENTO en un seguro de vida?",
        "options": [
          "2 años",
          "3 años",
          "5 años",
          "10 años"
        ],
        "c": 2
      }
    ],
    "e": "Regla general: 2 años. Excepción exclusiva para vida (fallecimiento): 5 años."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "variants": [
      {
        "q": "Si el asegurado se suicida durante el primer año de vigencia de la póliza de vida, ¿cómo procede la aseguradora?",
        "options": [
          "Paga la suma asegurada completa",
          "Rechaza el siniestro sin devolver nada",
          "Devuelve las primas pagadas",
          "Devuelve la Reserva Matemática acumulada a la fecha"
        ],
        "c": 3
      },
      {
        "q": "¿Cómo definirías lo siguiente? Si el asegurado se suicida durante el primer año de vigencia de la póliza de vida, ¿cómo procede la aseguradora?",
        "options": [
          "Paga la suma asegurada completa",
          "Rechaza el siniestro sin devolver nada",
          "Devuelve las primas pagadas",
          "Devuelve la Reserva Matemática acumulada a la fecha"
        ],
        "c": 3
      },
      {
        "q": "En relación a Suscripción, si el asegurado se suicida durante el primer año de vigencia de la póliza de vida, ¿cómo procede la aseguradora?",
        "options": [
          "Paga la suma asegurada completa",
          "Rechaza el siniestro sin devolver nada",
          "Devuelve las primas pagadas",
          "Devuelve la Reserva Matemática acumulada a la fecha"
        ],
        "c": 3
      }
    ],
    "e": "Antes de 2 años es un riesgo excluido y solo se devuelve la reserva matemática generada."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "variants": [
      {
        "q": "¿Qué nivel mínimo de escolaridad se requiere para ser Agente de Seguros en México?",
        "options": [
          "Secundaria",
          "Bachillerato / Preparatoria",
          "Licenciatura",
          "Ninguno"
        ],
        "c": 1
      },
      {
        "q": "Con respecto a este tema, ¿Qué nivel mínimo de escolaridad se requiere para ser Agente de Seguros en México?",
        "options": [
          "Secundaria",
          "Bachillerato / Preparatoria",
          "Licenciatura",
          "Ninguno"
        ],
        "c": 1
      },
      {
        "q": "Señale la respuesta correcta: ¿Qué nivel mínimo de escolaridad se requiere para ser Agente de Seguros en México?",
        "options": [
          "Secundaria",
          "Bachillerato / Preparatoria",
          "Licenciatura",
          "Ninguno"
        ],
        "c": 1
      }
    ],
    "e": "Se requiere certificado oficial de preparatoria o equivalente."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "variants": [
      {
        "q": "¿Cuál es la vigencia de la Cédula de Agente emitida por la CNSF?",
        "options": [
          "1 año",
          "2 años",
          "3 años",
          "5 años"
        ],
        "c": 2
      },
      {
        "q": "Con respecto a este tema, ¿Cuál es la vigencia de la Cédula de Agente emitida por la CNSF?",
        "options": [
          "1 año",
          "2 años",
          "3 años",
          "5 años"
        ],
        "c": 2
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuál es la vigencia de la Cédula de Agente emitida por la CNSF?",
        "options": [
          "1 año",
          "2 años",
          "3 años",
          "5 años"
        ],
        "c": 2
      }
    ],
    "e": "La vigencia es de 3 años, revalidable (o exenta de examen si obtienes más de 80 puntos)."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "variants": [
      {
        "q": "¿Cuántos días naturales tiene un agente nuevo para contratar y presentar su póliza de Errores y Omisiones (RC) tras obtener su cédula?",
        "options": [
          "10 días",
          "15 días",
          "30 días",
          "60 días"
        ],
        "c": 2
      },
      {
        "q": "Con respecto a este tema, ¿Cuántos días naturales tiene un agente nuevo para contratar y presentar su póliza de Errores y Omisiones (RC) tras obtener su cédula?",
        "options": [
          "10 días",
          "15 días",
          "30 días",
          "60 días"
        ],
        "c": 2
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuántos días naturales tiene un agente nuevo para contratar y presentar su póliza de Errores y Omisiones (RC) tras obtener su cédula?",
        "options": [
          "10 días",
          "15 días",
          "30 días",
          "60 días"
        ],
        "c": 2
      }
    ],
    "e": "Obligatorio contratar póliza de RC en máximo 30 días naturales."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "variants": [
      {
        "q": "¿Cuántos días hábiles tienen como máximo los agentes para ingresar a las aseguradoras las primas cobradas en efectivo o cheque?",
        "options": [
          "3 días",
          "5 días",
          "10 días",
          "15 días"
        ],
        "c": 2
      },
      {
        "q": "Con respecto a este tema, ¿Cuántos días hábiles tienen como máximo los agentes para ingresar a las aseguradoras las primas cobradas en efectivo o cheque?",
        "options": [
          "3 días",
          "5 días",
          "10 días",
          "15 días"
        ],
        "c": 2
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuántos días hábiles tienen como máximo los agentes para ingresar a las aseguradoras las primas cobradas en efectivo o cheque?",
        "options": [
          "3 días",
          "5 días",
          "10 días",
          "15 días"
        ],
        "c": 2
      }
    ],
    "e": "Ley: Límite máximo de 10 días hábiles para ingresar el dinero."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "variants": [
      {
        "q": "En el esquema de sanciones de la CNSF, si un agente acumula 3 amonestaciones escritas en un mismo año calendario, la consecuencia es:",
        "options": [
          "Revocación definitiva",
          "Multa económica de 100 UMA",
          "Suspensión temporal",
          "Inhabilitación de por vida"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? En el esquema de sanciones de la CNSF, si un agente acumula 3 amonestaciones escritas en un mismo año calendario, la consecuencia es:",
        "options": [
          "Revocación definitiva",
          "Multa económica de 100 UMA",
          "Suspensión temporal",
          "Inhabilitación de por vida"
        ],
        "c": 2
      },
      {
        "q": "En relación a Agentes de Seguros, en el esquema de sanciones de la CNSF, si un agente acumula 3 amonestaciones escritas en un mismo año calendario, la consecuencia es:",
        "options": [
          "Revocación definitiva",
          "Multa económica de 100 UMA",
          "Suspensión temporal",
          "Inhabilitación de por vida"
        ],
        "c": 2
      }
    ],
    "e": "3 amonestaciones en un año causan suspensión temporal de la cédula."
  },
  {
    "m": 1,
    "t": "Prevención de Lavado de Dinero",
    "variants": [
      {
        "q": "Cuando un cliente persona física paga una prima de 11,000 USD en efectivo, el agente debe recabar obligatoriamente (Prevención de Lavado de Dinero):",
        "options": [
          "Comprobante de domicilio",
          "RFC y CURP",
          "Documento oficial vigente con fotografía y firma",
          "Declaración anual de impuestos"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Cuando un cliente persona física paga una prima de 11,000 USD en efectivo, el agente debe recabar obligatoriamente (Prevención de Lavado de Dinero):",
        "options": [
          "Comprobante de domicilio",
          "RFC y CURP",
          "Documento oficial vigente con fotografía y firma",
          "Declaración anual de impuestos"
        ],
        "c": 2
      },
      {
        "q": "En relación a Prevención de Lavado de Dinero, cuando un cliente persona física paga una prima de 11,000 USD en efectivo, el agente debe recabar obligatoriamente (Prevención de Lavado de Dinero):",
        "options": [
          "Comprobante de domicilio",
          "RFC y CURP",
          "Documento oficial vigente con fotografía y firma",
          "Declaración anual de impuestos"
        ],
        "c": 2
      }
    ],
    "e": "Es requisito indispensable identificarlo con identificación oficial vigente."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "¿Cuál es el documento que perfecciona el contrato de seguro y sirve como comprobante de la celebración del mismo?",
        "options": [
          "La Póliza",
          "La Solicitud",
          "El Recibo de Pago",
          "El Endoso"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a este tema, ¿Cuál es el documento que perfecciona el contrato de seguro y sirve como comprobante de la celebración del mismo?",
        "options": [
          "La Póliza",
          "La Solicitud",
          "El Recibo de Pago",
          "El Endoso"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuál es el documento que perfecciona el contrato de seguro y sirve como comprobante de la celebración del mismo?",
        "options": [
          "La Póliza",
          "La Solicitud",
          "El Recibo de Pago",
          "El Endoso"
        ],
        "c": 0
      }
    ],
    "e": "La póliza es el documento legal que formaliza y perfecciona el contrato de seguro."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "variants": [
      {
        "q": "Es el agente vinculado a una aseguradora mediante un contrato de trabajo (relación obrero-patronal) y recibe un sueldo además de comisiones:",
        "options": [
          "Agente Vinculado",
          "Agente Independiente",
          "Agente Empleado",
          "Agente Apoderado"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Es el agente vinculado a una aseguradora mediante un contrato de trabajo (relación obrero-patronal) y recibe un sueldo además de comisiones:",
        "options": [
          "Agente Vinculado",
          "Agente Independiente",
          "Agente Empleado",
          "Agente Apoderado"
        ],
        "c": 2
      },
      {
        "q": "En relación a Agentes de Seguros, es el agente vinculado a una aseguradora mediante un contrato de trabajo (relación obrero-patronal) y recibe un sueldo además de comisiones:",
        "options": [
          "Agente Vinculado",
          "Agente Independiente",
          "Agente Empleado",
          "Agente Apoderado"
        ],
        "c": 2
      }
    ],
    "e": "El agente empleado es el único que tiene relación laboral subordinada. Los demás son comisionistas independientes."
  },
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "variants": [
      {
        "q": "Para que un riesgo sea asegurable debe ser LÍCITO. Esto significa que:",
        "options": [
          "No debe atentar contra la moral, la ley o las buenas costumbres",
          "Debe tener un costo económico fácil de medir",
          "Debe suceder de forma repentina e imprevista",
          "Debe estar sujeto a un análisis matemático"
        ],
        "c": 0
      },
      {
        "q": "¿Cómo definirías lo siguiente? Para que un riesgo sea asegurable debe ser LÍCITO. Esto significa que:",
        "options": [
          "No debe atentar contra la moral, la ley o las buenas costumbres",
          "Debe tener un costo económico fácil de medir",
          "Debe suceder de forma repentina e imprevista",
          "Debe estar sujeto a un análisis matemático"
        ],
        "c": 0
      },
      {
        "q": "En relación a Conceptos de Riesgo, para que un riesgo sea asegurable debe ser LÍCITO. Esto significa que:",
        "options": [
          "No debe atentar contra la moral, la ley o las buenas costumbres",
          "Debe tener un costo económico fácil de medir",
          "Debe suceder de forma repentina e imprevista",
          "Debe estar sujeto a un análisis matemático"
        ],
        "c": 0
      }
    ],
    "e": "Lícito significa que el bien o interés asegurado está dentro de la ley."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "variants": [
      {
        "q": "Si un agente de seguros cambia de domicilio particular, ¿cuántos días tiene para notificar a la CNSF?",
        "options": [
          "10 días hábiles",
          "15 días hábiles",
          "30 días naturales",
          "No es necesario notificar"
        ],
        "c": 0
      },
      {
        "q": "¿Cómo definirías lo siguiente? Si un agente de seguros cambia de domicilio particular, ¿cuántos días tiene para notificar a la CNSF?",
        "options": [
          "10 días hábiles",
          "15 días hábiles",
          "30 días naturales",
          "No es necesario notificar"
        ],
        "c": 0
      },
      {
        "q": "En relación a Agentes de Seguros, si un agente de seguros cambia de domicilio particular, ¿cuántos días tiene para notificar a la CNSF?",
        "options": [
          "10 días hábiles",
          "15 días hábiles",
          "30 días naturales",
          "No es necesario notificar"
        ],
        "c": 0
      }
    ],
    "e": "Por reglamento, los cambios de domicilio deben reportarse en máximo 10 días hábiles."
  },
  {
    "m": 1,
    "t": "Instituciones Reguladoras",
    "variants": [
      {
        "q": "La función principal de CONDUSEF en el ámbito de seguros es:",
        "options": [
          "Autorizar tarifas y primas",
          "Expedir cédulas a los agentes",
          "Defender los derechos de los usuarios y fungir como conciliador",
          "Investigar fraudes de aseguradoras"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? La función principal de CONDUSEF en el ámbito de seguros es:",
        "options": [
          "Autorizar tarifas y primas",
          "Expedir cédulas a los agentes",
          "Defender los derechos de los usuarios y fungir como conciliador",
          "Investigar fraudes de aseguradoras"
        ],
        "c": 2
      },
      {
        "q": "En relación a Instituciones Reguladoras, la función principal de CONDUSEF en el ámbito de seguros es:",
        "options": [
          "Autorizar tarifas y primas",
          "Expedir cédulas a los agentes",
          "Defender los derechos de los usuarios y fungir como conciliador",
          "Investigar fraudes de aseguradoras"
        ],
        "c": 2
      }
    ],
    "e": "CONDUSEF es la defensora de los usuarios de servicios financieros, mediando disputas."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "El Principio de Subrogación permite a la aseguradora:",
        "options": [
          "Cobrar primas atrasadas",
          "Cancelar la póliza sin previo aviso",
          "Adquirir los derechos del asegurado contra el tercero responsable del daño",
          "Compartir el riesgo con otra compañía"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? El Principio de Subrogación permite a la aseguradora:",
        "options": [
          "Cobrar primas atrasadas",
          "Cancelar la póliza sin previo aviso",
          "Adquirir los derechos del asegurado contra el tercero responsable del daño",
          "Compartir el riesgo con otra compañía"
        ],
        "c": 2
      },
      {
        "q": "En relación a El Contrato de Seguro, el Principio de Subrogación permite a la aseguradora:",
        "options": [
          "Cobrar primas atrasadas",
          "Cancelar la póliza sin previo aviso",
          "Adquirir los derechos del asegurado contra el tercero responsable del daño",
          "Compartir el riesgo con otra compañía"
        ],
        "c": 2
      }
    ],
    "e": "Al pagar el siniestro, la aseguradora se subroga (toma el lugar) en los derechos para demandar al culpable."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "variants": [
      {
        "q": "Si un solicitante omite mencionar que padece hipertensión en su solicitud médica y la aseguradora lo descubre en el mes 6, ¿qué procede?",
        "options": [
          "Cancelación técnica inmediata por omisión/inexacta declaración",
          "Pagar el siniestro si ocurre",
          "Cobrar extraprima retroactiva",
          "No se puede hacer nada por ser contrato de adhesión"
        ],
        "c": 0
      },
      {
        "q": "¿Cómo definirías lo siguiente? Si un solicitante omite mencionar que padece hipertensión en su solicitud médica y la aseguradora lo descubre en el mes 6, ¿qué procede?",
        "options": [
          "Cancelación técnica inmediata por omisión/inexacta declaración",
          "Pagar el siniestro si ocurre",
          "Cobrar extraprima retroactiva",
          "No se puede hacer nada por ser contrato de adhesión"
        ],
        "c": 0
      },
      {
        "q": "En relación a Suscripción, si un solicitante omite mencionar que padece hipertensión en su solicitud médica y la aseguradora lo descubre en el mes 6, ¿qué procede?",
        "options": [
          "Cancelación técnica inmediata por omisión/inexacta declaración",
          "Pagar el siniestro si ocurre",
          "Cobrar extraprima retroactiva",
          "No se puede hacer nada por ser contrato de adhesión"
        ],
        "c": 0
      }
    ],
    "e": "Toda omisión de salud en los primeros 2 años causa rescisión del contrato (falta de buena fe)."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "variants": [
      {
        "q": "Un agente apoderado es aquel que:",
        "options": [
          "Vende seguros por su cuenta para 5 aseguradoras",
          "Representa jurídicamente a una Persona Moral (Corredor) autorizada por la CNSF",
          "Trabaja en el banco vendiendo seguros",
          "Funge como ajustador de siniestros"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Un agente apoderado es aquel que:",
        "options": [
          "Vende seguros por su cuenta para 5 aseguradoras",
          "Representa jurídicamente a una Persona Moral (Corredor) autorizada por la CNSF",
          "Trabaja en el banco vendiendo seguros",
          "Funge como ajustador de siniestros"
        ],
        "c": 1
      },
      {
        "q": "En relación a Agentes de Seguros, un agente apoderado es aquel que:",
        "options": [
          "Vende seguros por su cuenta para 5 aseguradoras",
          "Representa jurídicamente a una Persona Moral (Corredor) autorizada por la CNSF",
          "Trabaja en el banco vendiendo seguros",
          "Funge como ajustador de siniestros"
        ],
        "c": 1
      }
    ],
    "e": "El agente apoderado es quien tiene poder notarial para vender a nombre de un Corredor/Despacho Moral."
  },
  {
    "m": 1,
    "t": "Instituciones Reguladoras",
    "variants": [
      {
        "q": "Las pólizas de seguro en México (condiciones generales) deben estar registradas y autorizadas obligatoriamente ante:",
        "options": [
          "CONDUSEF",
          "SHCP",
          "AMIS",
          "CNSF"
        ],
        "c": 3
      },
      {
        "q": "¿Cómo definirías lo siguiente? Las pólizas de seguro en México (condiciones generales) deben estar registradas y autorizadas obligatoriamente ante:",
        "options": [
          "CONDUSEF",
          "SHCP",
          "AMIS",
          "CNSF"
        ],
        "c": 3
      },
      {
        "q": "En relación a Instituciones Reguladoras, las pólizas de seguro en México (condiciones generales) deben estar registradas y autorizadas obligatoriamente ante:",
        "options": [
          "CONDUSEF",
          "SHCP",
          "AMIS",
          "CNSF"
        ],
        "c": 3
      }
    ],
    "e": "La Comisión Nacional de Seguros y Fianzas aprueba los productos antes de su venta."
  },
  {
    "m": 1,
    "t": "Prevención de Lavado de Dinero",
    "variants": [
      {
        "q": "Dentro de la ley de PLD, las aseguradoras deben reportar a la autoridad cualquier 'Operación Inusual'. Esto se refiere a:",
        "options": [
          "Un siniestro rechazado por fraude",
          "Una operación que no concuerda con los antecedentes o actividad conocida del cliente",
          "Un pago en efectivo de 100 pesos",
          "La compra de un seguro temporal básico"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Dentro de la ley de PLD, las aseguradoras deben reportar a la autoridad cualquier 'Operación Inusual'. Esto se refiere a:",
        "options": [
          "Un siniestro rechazado por fraude",
          "Una operación que no concuerda con los antecedentes o actividad conocida del cliente",
          "Un pago en efectivo de 100 pesos",
          "La compra de un seguro temporal básico"
        ],
        "c": 1
      },
      {
        "q": "En relación a Prevención de Lavado de Dinero, dentro de la ley de PLD, las aseguradoras deben reportar a la autoridad cualquier 'Operación Inusual'. Esto se refiere a:",
        "options": [
          "Un siniestro rechazado por fraude",
          "Una operación que no concuerda con los antecedentes o actividad conocida del cliente",
          "Un pago en efectivo de 100 pesos",
          "La compra de un seguro temporal básico"
        ],
        "c": 1
      }
    ],
    "e": "Es inusual cuando rompe el patrón transaccional o perfil financiero del cliente."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Valores Garantizados",
    "variants": [
      {
        "q": "¿Cuáles son las 3 opciones de uso de los Valores Garantizados originados de la Reserva Matemática (además del préstamo)?",
        "options": [
          "Préstamo, Copago y Deducible",
          "Seguro Prorrogado, Seguro Saldado y Rescate",
          "Dividendos, Rescate y Coaseguro",
          "Préstamo Automático, Dividendo y Anualidad"
        ],
        "c": 1
      },
      {
        "q": "Con respecto a este tema, ¿Cuáles son las 3 opciones de uso de los Valores Garantizados originados de la Reserva Matemática (además del préstamo)?",
        "options": [
          "Préstamo, Copago y Deducible",
          "Seguro Prorrogado, Seguro Saldado y Rescate",
          "Dividendos, Rescate y Coaseguro",
          "Préstamo Automático, Dividendo y Anualidad"
        ],
        "c": 1
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuáles son las 3 opciones de uso de los Valores Garantizados originados de la Reserva Matemática (además del préstamo)?",
        "options": [
          "Préstamo, Copago y Deducible",
          "Seguro Prorrogado, Seguro Saldado y Rescate",
          "Dividendos, Rescate y Coaseguro",
          "Préstamo Automático, Dividendo y Anualidad"
        ],
        "c": 1
      }
    ],
    "e": "Las opciones de conversión/disposición son Rescate, Seguro Saldado y Seguro Prorrogado."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Valores Garantizados",
    "variants": [
      {
        "q": "Si el asegurado deja de pagar, pero solicita mantener la MISMA SUMA ASEGURADA disminuyendo el PLAZO de cobertura original, está eligiendo el:",
        "options": [
          "Seguro Saldado",
          "Rescate",
          "Seguro Prorrogado",
          "Seguro Vitalicio"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Si el asegurado deja de pagar, pero solicita mantener la MISMA SUMA ASEGURADA disminuyendo el PLAZO de cobertura original, está eligiendo el:",
        "options": [
          "Seguro Saldado",
          "Rescate",
          "Seguro Prorrogado",
          "Seguro Vitalicio"
        ],
        "c": 2
      },
      {
        "q": "En relación a Seguro de Vida - Valores Garantizados, si el asegurado deja de pagar, pero solicita mantener la MISMA SUMA ASEGURADA disminuyendo el PLAZO de cobertura original, está eligiendo el:",
        "options": [
          "Seguro Saldado",
          "Rescate",
          "Seguro Prorrogado",
          "Seguro Vitalicio"
        ],
        "c": 2
      }
    ],
    "e": "Mnemotecnia de examen: Prorrogado = Baja el Plazo."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Valores Garantizados",
    "variants": [
      {
        "q": "Si el asegurado deja de pagar, pero solicita mantener el MISMO PLAZO original del seguro, disminuyendo la SUMA ASEGURADA, está eligiendo el:",
        "options": [
          "Seguro Saldado",
          "Seguro Temporal",
          "Seguro Prorrogado",
          "Dividendos"
        ],
        "c": 0
      },
      {
        "q": "¿Cómo definirías lo siguiente? Si el asegurado deja de pagar, pero solicita mantener el MISMO PLAZO original del seguro, disminuyendo la SUMA ASEGURADA, está eligiendo el:",
        "options": [
          "Seguro Saldado",
          "Seguro Temporal",
          "Seguro Prorrogado",
          "Dividendos"
        ],
        "c": 0
      },
      {
        "q": "En relación a Seguro de Vida - Valores Garantizados, si el asegurado deja de pagar, pero solicita mantener el MISMO PLAZO original del seguro, disminuyendo la SUMA ASEGURADA, está eligiendo el:",
        "options": [
          "Seguro Saldado",
          "Seguro Temporal",
          "Seguro Prorrogado",
          "Dividendos"
        ],
        "c": 0
      }
    ],
    "e": "Mnemotecnia de examen: Saldado = Baja la Suma asegurada."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Valores Garantizados",
    "variants": [
      {
        "q": "¿En un Seguro de Vida se usa el término 'Cancelación' cuando el cliente pide la devolución de su fondo y termina el contrato?",
        "options": [
          "Sí, Cancelación Voluntaria",
          "No, se llama Rescate",
          "No, se llama Préstamo Ordinario",
          "Sí, Cancelación Técnica"
        ],
        "c": 1
      },
      {
        "q": "Con respecto a este tema, ¿En un Seguro de Vida se usa el término 'Cancelación' cuando el cliente pide la devolución de su fondo y termina el contrato?",
        "options": [
          "Sí, Cancelación Voluntaria",
          "No, se llama Rescate",
          "No, se llama Préstamo Ordinario",
          "Sí, Cancelación Técnica"
        ],
        "c": 1
      },
      {
        "q": "Señale la respuesta correcta: ¿En un Seguro de Vida se usa el término 'Cancelación' cuando el cliente pide la devolución de su fondo y termina el contrato?",
        "options": [
          "Sí, Cancelación Voluntaria",
          "No, se llama Rescate",
          "No, se llama Préstamo Ordinario",
          "Sí, Cancelación Técnica"
        ],
        "c": 1
      }
    ],
    "e": "En seguros de vida, el término técnico legal es RESCATE."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Planes Dotal y Vitalicio",
    "variants": [
      {
        "q": "¿Plan de seguro de vida que es el más barato, ampara únicamente el riesgo de fallecimiento y si el cliente sobrevive NO le entrega nada ($0)?",
        "options": [
          "Vitalicio",
          "Dotal Puro",
          "Dotal Mixto",
          "Temporal"
        ],
        "c": 3
      },
      {
        "q": "Con respecto a este tema, ¿Plan de seguro de vida que es el más barato, ampara únicamente el riesgo de fallecimiento y si el cliente sobrevive NO le entrega nada ($0)?",
        "options": [
          "Vitalicio",
          "Dotal Puro",
          "Dotal Mixto",
          "Temporal"
        ],
        "c": 3
      },
      {
        "q": "Señale la respuesta correcta: ¿Plan de seguro de vida que es el más barato, ampara únicamente el riesgo de fallecimiento y si el cliente sobrevive NO le entrega nada ($0)?",
        "options": [
          "Vitalicio",
          "Dotal Puro",
          "Dotal Mixto",
          "Temporal"
        ],
        "c": 3
      }
    ],
    "e": "El plan Temporal solo cubre el riesgo de muerte por un plazo; si no muere, no hay pago."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Planes Dotal y Vitalicio",
    "variants": [
      {
        "q": "Plan de seguro que combina protección y ahorro: si el cliente sobrevive al plazo cobra su ahorro, si fallece antes, su familia cobra la suma asegurada.",
        "options": [
          "Vitalicio Pagos Limitados",
          "Temporal a 20 años",
          "Dotal Mixto",
          "Dotal Puro"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Plan de seguro que combina protección y ahorro: si el cliente sobrevive al plazo cobra su ahorro, si fallece antes, su familia cobra la suma asegurada.",
        "options": [
          "Vitalicio Pagos Limitados",
          "Temporal a 20 años",
          "Dotal Mixto",
          "Dotal Puro"
        ],
        "c": 2
      },
      {
        "q": "En relación a Seguro de Vida - Planes Dotal y Vitalicio, plan de seguro que combina protección y ahorro: si el cliente sobrevive al plazo cobra su ahorro, si fallece antes, su familia cobra la suma asegurada.",
        "options": [
          "Vitalicio Pagos Limitados",
          "Temporal a 20 años",
          "Dotal Mixto",
          "Dotal Puro"
        ],
        "c": 2
      }
    ],
    "e": "El Dotal Mixto ampara ambas cosas (supervivencia y muerte). Es el plan más caro."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Adicionales",
    "variants": [
      {
        "q": "La cobertura adicional de Pérdidas Orgánicas EN EL SEGURO DE VIDA cubre exclusivamente la amputación de:",
        "options": [
          "Cualquier dedo, manos, pies y oídos",
          "Manos, pies, vista de ambos ojos, dedo índice y dedo pulgar",
          "Manos, pies, maxilar y dedo meñique",
          "Solo brazos y piernas completas"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? La cobertura adicional de Pérdidas Orgánicas EN EL SEGURO DE VIDA cubre exclusivamente la amputación de:",
        "options": [
          "Cualquier dedo, manos, pies y oídos",
          "Manos, pies, vista de ambos ojos, dedo índice y dedo pulgar",
          "Manos, pies, maxilar y dedo meñique",
          "Solo brazos y piernas completas"
        ],
        "c": 1
      },
      {
        "q": "En relación a Seguro de Vida - Coberturas Adicionales, la cobertura adicional de Pérdidas Orgánicas EN EL SEGURO DE VIDA cubre exclusivamente la amputación de:",
        "options": [
          "Cualquier dedo, manos, pies y oídos",
          "Manos, pies, vista de ambos ojos, dedo índice y dedo pulgar",
          "Manos, pies, maxilar y dedo meñique",
          "Solo brazos y piernas completas"
        ],
        "c": 1
      }
    ],
    "e": "En Vida, pérdidas orgánicas está muy limitada a manos, pies, ojos y los dedos pulgar e índice."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Adicionales",
    "variants": [
      {
        "q": "Para que opere la cobertura de Muerte por Accidente Colectivo (Indemnización Triple), el siniestro debe ocurrir en:",
        "options": [
          "Como pasajero de Uber o Didi",
          "Como pasajero en un vuelo privado",
          "Como pasajero en transporte público terrestre con ruta fija, elevador público o incendio en edificio público",
          "Solo en accidentes de tren o avión comercial"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Para que opere la cobertura de Muerte por Accidente Colectivo (Indemnización Triple), el siniestro debe ocurrir en:",
        "options": [
          "Como pasajero de Uber o Didi",
          "Como pasajero en un vuelo privado",
          "Como pasajero en transporte público terrestre con ruta fija, elevador público o incendio en edificio público",
          "Solo en accidentes de tren o avión comercial"
        ],
        "c": 2
      },
      {
        "q": "En relación a Seguro de Vida - Coberturas Adicionales, para que opere la cobertura de Muerte por Accidente Colectivo (Indemnización Triple), el siniestro debe ocurrir en:",
        "options": [
          "Como pasajero de Uber o Didi",
          "Como pasajero en un vuelo privado",
          "Como pasajero en transporte público terrestre con ruta fija, elevador público o incendio en edificio público",
          "Solo en accidentes de tren o avión comercial"
        ],
        "c": 2
      }
    ],
    "e": "Exige estrictamente un transporte público (ruta y boleto), un elevador público o edificio público incendiado."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Adicionales",
    "variants": [
      {
        "q": "Si el asegurado se accidenta y fallece a causa de las heridas 90 días después del evento, ¿opera la cobertura de Muerte Accidental?",
        "options": [
          "No, debe fallecer al instante",
          "No, el límite son 30 días",
          "Sí, el límite máximo legal son 90 días",
          "Sí, el límite son 6 meses"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Si el asegurado se accidenta y fallece a causa de las heridas 90 días después del evento, ¿opera la cobertura de Muerte Accidental?",
        "options": [
          "No, debe fallecer al instante",
          "No, el límite son 30 días",
          "Sí, el límite máximo legal son 90 días",
          "Sí, el límite son 6 meses"
        ],
        "c": 2
      },
      {
        "q": "En relación a Seguro de Vida - Coberturas Adicionales, si el asegurado se accidenta y fallece a causa de las heridas 90 días después del evento, ¿opera la cobertura de Muerte Accidental?",
        "options": [
          "No, debe fallecer al instante",
          "No, el límite son 30 días",
          "Sí, el límite máximo legal son 90 días",
          "Sí, el límite son 6 meses"
        ],
        "c": 2
      }
    ],
    "e": "La muerte debe ocurrir dentro de los 90 días posteriores al accidente para considerarse accidental."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Básicas",
    "variants": [
      {
        "q": "Periodo en el cual la aseguradora puede rechazar el siniestro por omitir información médica o declarar falsedades en la solicitud de Vida:",
        "options": [
          "Periodo de Gracia",
          "Primeros 2 años de vigencia (Disputabilidad)",
          "Primeros 5 años de vigencia",
          "En cualquier momento (Fraude)"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Periodo en el cual la aseguradora puede rechazar el siniestro por omitir información médica o declarar falsedades en la solicitud de Vida:",
        "options": [
          "Periodo de Gracia",
          "Primeros 2 años de vigencia (Disputabilidad)",
          "Primeros 5 años de vigencia",
          "En cualquier momento (Fraude)"
        ],
        "c": 1
      },
      {
        "q": "En relación a Seguro de Vida - Coberturas Básicas, periodo en el cual la aseguradora puede rechazar el siniestro por omitir información médica o declarar falsedades en la solicitud de Vida:",
        "options": [
          "Periodo de Gracia",
          "Primeros 2 años de vigencia (Disputabilidad)",
          "Primeros 5 años de vigencia",
          "En cualquier momento (Fraude)"
        ],
        "c": 1
      }
    ],
    "e": "Después de 2 años ininterrumpidos, la póliza se vuelve Indisputable."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Básicas",
    "variants": [
      {
        "q": "¿Qué hace la aseguradora si el asegurado fallece y se descubre que su edad real era 75 años, pero el límite máximo de aceptación de la compañía era 70 años?",
        "options": [
          "Ajusta la Suma Asegurada de acuerdo a la prima pagada",
          "Paga la suma asegurada completa",
          "Rescinde el contrato (es nulo) y devuelve la Reserva Matemática",
          "Rescinde el contrato y devuelve las Primas Pagadas"
        ],
        "c": 2
      },
      {
        "q": "Con respecto a este tema, ¿Qué hace la aseguradora si el asegurado fallece y se descubre que su edad real era 75 años, pero el límite máximo de aceptación de la compañía era 70 años?",
        "options": [
          "Ajusta la Suma Asegurada de acuerdo a la prima pagada",
          "Paga la suma asegurada completa",
          "Rescinde el contrato (es nulo) y devuelve la Reserva Matemática",
          "Rescinde el contrato y devuelve las Primas Pagadas"
        ],
        "c": 2
      },
      {
        "q": "Señale la respuesta correcta: ¿Qué hace la aseguradora si el asegurado fallece y se descubre que su edad real era 75 años, pero el límite máximo de aceptación de la compañía era 70 años?",
        "options": [
          "Ajusta la Suma Asegurada de acuerdo a la prima pagada",
          "Paga la suma asegurada completa",
          "Rescinde el contrato (es nulo) y devuelve la Reserva Matemática",
          "Rescinde el contrato y devuelve las Primas Pagadas"
        ],
        "c": 2
      }
    ],
    "e": "Al estar FUERA de los límites de aceptación, el seguro es nulo. Se devuelve la reserva matemática."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Básicas",
    "variants": [
      {
        "q": "En la figura del Fideicomiso en vida, la institución financiera o aseguradora que administra el dinero se denomina:",
        "options": [
          "Fideicomitente",
          "Fideusuario (o Fiduciario)",
          "Fideicomisario",
          "Beneficiario Irrevocable"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? En la figura del Fideicomiso en vida, la institución financiera o aseguradora que administra el dinero se denomina:",
        "options": [
          "Fideicomitente",
          "Fideusuario (o Fiduciario)",
          "Fideicomisario",
          "Beneficiario Irrevocable"
        ],
        "c": 1
      },
      {
        "q": "En relación a Seguro de Vida - Coberturas Básicas, en la figura del Fideicomiso en vida, la institución financiera o aseguradora que administra el dinero se denomina:",
        "options": [
          "Fideicomitente",
          "Fideusuario (o Fiduciario)",
          "Fideicomisario",
          "Beneficiario Irrevocable"
        ],
        "c": 1
      }
    ],
    "e": "Fideicomitente (cliente), Fideicomisario (beneficiario), Fideusuario (administrador)."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "variants": [
      {
        "q": "El seguro de Accidentes Personales (AP) cubre lesiones originadas por un evento con tres características. ¿Cuáles son?",
        "options": [
          "Crónico, preexistente y severo",
          "Súbito, fortuito y violento",
          "Progresivo, lícito y médico",
          "Aleatorio, catastrófico y súbito"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? El seguro de Accidentes Personales (AP) cubre lesiones originadas por un evento con tres características. ¿Cuáles son?",
        "options": [
          "Crónico, preexistente y severo",
          "Súbito, fortuito y violento",
          "Progresivo, lícito y médico",
          "Aleatorio, catastrófico y súbito"
        ],
        "c": 1
      },
      {
        "q": "En relación a Accidentes Personales - Exclusiones y Coberturas, el seguro de Accidentes Personales (AP) cubre lesiones originadas por un evento con tres características. ¿Cuáles son?",
        "options": [
          "Crónico, preexistente y severo",
          "Súbito, fortuito y violento",
          "Progresivo, lícito y médico",
          "Aleatorio, catastrófico y súbito"
        ],
        "c": 1
      }
    ],
    "e": "Definición de accidente: Acción súbita (repentina), fortuita (sin intención) y violenta (externa)."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "variants": [
      {
        "q": "Para calcular el costo de la prima en la póliza de Accidentes Personales, ¿cuál es el factor determinante más importante?",
        "options": [
          "La edad y el sexo",
          "El historial clínico",
          "La Ocupación",
          "La zona geográfica"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Para calcular el costo de la prima en la póliza de Accidentes Personales, ¿cuál es el factor determinante más importante?",
        "options": [
          "La edad y el sexo",
          "El historial clínico",
          "La Ocupación",
          "La zona geográfica"
        ],
        "c": 2
      },
      {
        "q": "En relación a Accidentes Personales - Exclusiones y Coberturas, para calcular el costo de la prima en la póliza de Accidentes Personales, ¿cuál es el factor determinante más importante?",
        "options": [
          "La edad y el sexo",
          "El historial clínico",
          "La Ocupación",
          "La zona geográfica"
        ],
        "c": 2
      }
    ],
    "e": "La ocupación determina el grado de riesgo a accidentarse. El sexo es indiferente en AP."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "variants": [
      {
        "q": "¿El suicidio está cubierto en el seguro de Accidentes Personales después de 2 años?",
        "options": [
          "Sí, al igual que en el Seguro de Vida",
          "No, el suicidio JAMÁS se considera accidente y está siempre excluido en AP",
          "Sí, si hubo incapacidad previa",
          "Solo si el juez dictamina demencia"
        ],
        "c": 1
      },
      {
        "q": "Con respecto a este tema, ¿El suicidio está cubierto en el seguro de Accidentes Personales después de 2 años?",
        "options": [
          "Sí, al igual que en el Seguro de Vida",
          "No, el suicidio JAMÁS se considera accidente y está siempre excluido en AP",
          "Sí, si hubo incapacidad previa",
          "Solo si el juez dictamina demencia"
        ],
        "c": 1
      },
      {
        "q": "Señale la respuesta correcta: ¿El suicidio está cubierto en el seguro de Accidentes Personales después de 2 años?",
        "options": [
          "Sí, al igual que en el Seguro de Vida",
          "No, el suicidio JAMÁS se considera accidente y está siempre excluido en AP",
          "Sí, si hubo incapacidad previa",
          "Solo si el juez dictamina demencia"
        ],
        "c": 1
      }
    ],
    "e": "El suicidio es una exclusión absoluta en Accidentes Personales; nunca se ampara."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "variants": [
      {
        "q": "¿Cuánto tiempo de antigüedad ininterrumpida necesita tener la póliza de AP para que operen las coberturas de Reembolso Médico y Pérdidas Orgánicas?",
        "options": [
          "Ninguno, desde el día 1",
          "30 días",
          "90 días",
          "1 año"
        ],
        "c": 1
      },
      {
        "q": "Con respecto a este tema, ¿Cuánto tiempo de antigüedad ininterrumpida necesita tener la póliza de AP para que operen las coberturas de Reembolso Médico y Pérdidas Orgánicas?",
        "options": [
          "Ninguno, desde el día 1",
          "30 días",
          "90 días",
          "1 año"
        ],
        "c": 1
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuánto tiempo de antigüedad ininterrumpida necesita tener la póliza de AP para que operen las coberturas de Reembolso Médico y Pérdidas Orgánicas?",
        "options": [
          "Ninguno, desde el día 1",
          "30 días",
          "90 días",
          "1 año"
        ],
        "c": 1
      }
    ],
    "e": "Se requiere un periodo de 30 días de antigüedad en AP para usar reembolso y pérdidas orgánicas."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "variants": [
      {
        "q": "A diferencia del Seguro de Vida, ¿qué pérdida orgánica SÍ se indemniza detalladamente en Accidentes Personales (Escala B)?",
        "options": [
          "Brazos completos",
          "Pérdida de la vista",
          "Maxilar, dedo meñique y otros dedos individuales",
          "Cuadriplejia"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? A diferencia del Seguro de Vida, ¿qué pérdida orgánica SÍ se indemniza detalladamente en Accidentes Personales (Escala B)?",
        "options": [
          "Brazos completos",
          "Pérdida de la vista",
          "Maxilar, dedo meñique y otros dedos individuales",
          "Cuadriplejia"
        ],
        "c": 2
      },
      {
        "q": "En relación a Accidentes Personales - Exclusiones y Coberturas, a diferencia del Seguro de Vida, ¿qué pérdida orgánica SÍ se indemniza detalladamente en Accidentes Personales (Escala B)?",
        "options": [
          "Brazos completos",
          "Pérdida de la vista",
          "Maxilar, dedo meñique y otros dedos individuales",
          "Cuadriplejia"
        ],
        "c": 2
      }
    ],
    "e": "AP cubre la pérdida de dedos individuales y órganos menores mediante porcentajes específicos."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Preexistencias y Tiempos de Espera",
    "variants": [
      {
        "q": "En Gastos Médicos Mayores (GMM), ¿en qué momento se considera legalmente PREEXISTENTE una enfermedad?",
        "options": [
          "Si es diagnosticada en los primeros 30 días",
          "Si ya existía un diagnóstico médico previo o síntomas/signos manifiestos antes del inicio de vigencia",
          "Si requiere cirugía en el primer año",
          "Cualquier enfermedad no declarada, aunque fuera asintomática"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? En Gastos Médicos Mayores (GMM), ¿en qué momento se considera legalmente PREEXISTENTE una enfermedad?",
        "options": [
          "Si es diagnosticada en los primeros 30 días",
          "Si ya existía un diagnóstico médico previo o síntomas/signos manifiestos antes del inicio de vigencia",
          "Si requiere cirugía en el primer año",
          "Cualquier enfermedad no declarada, aunque fuera asintomática"
        ],
        "c": 1
      },
      {
        "q": "En relación a Gastos Médicos Mayores - Preexistencias y Tiempos de Espera, en Gastos Médicos Mayores (GMM), ¿en qué momento se considera legalmente PREEXISTENTE una enfermedad?",
        "options": [
          "Si es diagnosticada en los primeros 30 días",
          "Si ya existía un diagnóstico médico previo o síntomas/signos manifiestos antes del inicio de vigencia",
          "Si requiere cirugía en el primer año",
          "Cualquier enfermedad no declarada, aunque fuera asintomática"
        ],
        "c": 1
      }
    ],
    "e": "La preexistencia requiere un diagnóstico previo comprobable o signos manifiestos a la vista antes de la contratación."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Preexistencias y Tiempos de Espera",
    "variants": [
      {
        "q": "Si un asegurado de GMM sufre un ACCIDENTE, ¿cuál es el periodo de espera para poder operarlo de la rodilla por fractura?",
        "options": [
          "1 año",
          "6 meses",
          "Ninguno, los periodos de espera se eliminan por accidente",
          "30 días"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Si un asegurado de GMM sufre un ACCIDENTE, ¿cuál es el periodo de espera para poder operarlo de la rodilla por fractura?",
        "options": [
          "1 año",
          "6 meses",
          "Ninguno, los periodos de espera se eliminan por accidente",
          "30 días"
        ],
        "c": 2
      },
      {
        "q": "En relación a Gastos Médicos Mayores - Preexistencias y Tiempos de Espera, si un asegurado de GMM sufre un ACCIDENTE, ¿cuál es el periodo de espera para poder operarlo de la rodilla por fractura?",
        "options": [
          "1 año",
          "6 meses",
          "Ninguno, los periodos de espera se eliminan por accidente",
          "30 días"
        ],
        "c": 2
      }
    ],
    "e": "Los accidentes no están sujetos a periodos de espera, la cobertura es inmediata."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Preexistencias y Tiempos de Espera",
    "variants": [
      {
        "q": "En GMM, ¿cuál es el periodo de espera estándar para padecimientos como Tumoración mamaria, Hemorroides y Amigdalitis?",
        "options": [
          "10 meses",
          "1 año",
          "2 años",
          "5 años"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? En GMM, ¿cuál es el periodo de espera estándar para padecimientos como Tumoración mamaria, Hemorroides y Amigdalitis?",
        "options": [
          "10 meses",
          "1 año",
          "2 años",
          "5 años"
        ],
        "c": 1
      },
      {
        "q": "En relación a Gastos Médicos Mayores - Preexistencias y Tiempos de Espera, en GMM, ¿cuál es el periodo de espera estándar para padecimientos como Tumoración mamaria, Hemorroides y Amigdalitis?",
        "options": [
          "10 meses",
          "1 año",
          "2 años",
          "5 años"
        ],
        "c": 1
      }
    ],
    "e": "Estos padecimientos requieren 1 año de antigüedad ininterrumpida."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Preexistencias y Tiempos de Espera",
    "variants": [
      {
        "q": "En GMM, ¿cuál es el periodo de espera establecido convencionalmente para SIDA y Cáncer?",
        "options": [
          "1 año",
          "2 años",
          "5 años",
          "No tienen periodo de espera"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? En GMM, ¿cuál es el periodo de espera establecido convencionalmente para SIDA y Cáncer?",
        "options": [
          "1 año",
          "2 años",
          "5 años",
          "No tienen periodo de espera"
        ],
        "c": 2
      },
      {
        "q": "En relación a Gastos Médicos Mayores - Preexistencias y Tiempos de Espera, en GMM, ¿cuál es el periodo de espera establecido convencionalmente para SIDA y Cáncer?",
        "options": [
          "1 año",
          "2 años",
          "5 años",
          "No tienen periodo de espera"
        ],
        "c": 2
      }
    ],
    "e": "El SIDA, y en muchas compañías las enfermedades oncológicas complejas, exigen 5 años de antigüedad."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Deducible y Coaseguro",
    "variants": [
      {
        "q": "En GMM, el cliente asume una participación económica mediante dos conceptos. El monto fijo inicial se llama ____ y el porcentaje posterior se llama ____.",
        "options": [
          "Copago / Franquicia",
          "Coaseguro / Deducible",
          "Deducible / Coaseguro",
          "Reserva / Copago"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? En GMM, el cliente asume una participación económica mediante dos conceptos. El monto fijo inicial se llama ____ y el porcentaje posterior se llama ____.",
        "options": [
          "Copago / Franquicia",
          "Coaseguro / Deducible",
          "Deducible / Coaseguro",
          "Reserva / Copago"
        ],
        "c": 2
      },
      {
        "q": "En relación a Gastos Médicos Mayores - Deducible y Coaseguro, en GMM, el cliente asume una participación económica mediante dos conceptos. El monto fijo inicial se llama ____ y el porcentaje posterior se llama ____.",
        "options": [
          "Copago / Franquicia",
          "Coaseguro / Deducible",
          "Deducible / Coaseguro",
          "Reserva / Copago"
        ],
        "c": 2
      }
    ],
    "e": "Primero se paga el Deducible (fijo) y sobre el restante se calcula el Coaseguro (porcentaje)."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Deducible y Coaseguro",
    "variants": [
      {
        "q": "¿Cómo se consideran los tratamientos psiquiátricos, psicológicos y estéticos en el seguro básico de GMM?",
        "options": [
          "Totalmente cubiertos sin costo",
          "Cubiertos con deducible especial",
          "Riesgos excluidos (que en algunos casos pueden ampararse por convenio expreso)",
          "Cubiertos solo en caso de accidente"
        ],
        "c": 2
      },
      {
        "q": "Con respecto a este tema, ¿Cómo se consideran los tratamientos psiquiátricos, psicológicos y estéticos en el seguro básico de GMM?",
        "options": [
          "Totalmente cubiertos sin costo",
          "Cubiertos con deducible especial",
          "Riesgos excluidos (que en algunos casos pueden ampararse por convenio expreso)",
          "Cubiertos solo en caso de accidente"
        ],
        "c": 2
      },
      {
        "q": "Señale la respuesta correcta: ¿Cómo se consideran los tratamientos psiquiátricos, psicológicos y estéticos en el seguro básico de GMM?",
        "options": [
          "Totalmente cubiertos sin costo",
          "Cubiertos con deducible especial",
          "Riesgos excluidos (que en algunos casos pueden ampararse por convenio expreso)",
          "Cubiertos solo en caso de accidente"
        ],
        "c": 2
      }
    ],
    "e": "Están excluidos de la cobertura básica, aunque psiquiatría puede ampararse pagando extraprima (convenio)."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Deducible y Coaseguro",
    "variants": [
      {
        "q": "El método de indemnización en GMM donde el cliente paga todo de su bolsillo y luego envía facturas a la aseguradora para recuperar el dinero se llama:",
        "options": [
          "Pago Directo",
          "Reembolso",
          "Programación de Cirugía",
          "Copago"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? El método de indemnización en GMM donde el cliente paga todo de su bolsillo y luego envía facturas a la aseguradora para recuperar el dinero se llama:",
        "options": [
          "Pago Directo",
          "Reembolso",
          "Programación de Cirugía",
          "Copago"
        ],
        "c": 1
      },
      {
        "q": "En relación a Gastos Médicos Mayores - Deducible y Coaseguro, el método de indemnización en GMM donde el cliente paga todo de su bolsillo y luego envía facturas a la aseguradora para recuperar el dinero se llama:",
        "options": [
          "Pago Directo",
          "Reembolso",
          "Programación de Cirugía",
          "Copago"
        ],
        "c": 1
      }
    ],
    "e": "Esa es la definición exacta de Reembolso."
  },
  {
    "m": 2,
    "t": "Seguro de Salud - Atención y Copagos",
    "variants": [
      {
        "q": "A diferencia de GMM, el Seguro de Salud (ISES) se enfoca en la prevención y no cobra deducible ni coaseguro, sino una cuota por consulta llamada:",
        "options": [
          "Prima",
          "Franquicia",
          "Copago",
          "Extraprima"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? A diferencia de GMM, el Seguro de Salud (ISES) se enfoca en la prevención y no cobra deducible ni coaseguro, sino una cuota por consulta llamada:",
        "options": [
          "Prima",
          "Franquicia",
          "Copago",
          "Extraprima"
        ],
        "c": 2
      },
      {
        "q": "En relación a Seguro de Salud - Atención y Copagos, a diferencia de GMM, el Seguro de Salud (ISES) se enfoca en la prevención y no cobra deducible ni coaseguro, sino una cuota por consulta llamada:",
        "options": [
          "Prima",
          "Franquicia",
          "Copago",
          "Extraprima"
        ],
        "c": 2
      }
    ],
    "e": "El copago es la participación fija por consulta en Seguros de Salud."
  },
  {
    "m": 2,
    "t": "Seguro de Salud - Atención y Copagos",
    "variants": [
      {
        "q": "En el Seguro de Salud, el 'Primer Nivel' de atención está compuesto obligatoriamente por estas 4 especialidades:",
        "options": [
          "Pediatría, Ginecoobstetricia, Medicina Interna y Cirugía General",
          "Cardiología, Neurología, Dermatología y Odontología",
          "Traumatología, Pediatría, Psiquiatría y Ginecología",
          "Oncología, Cirugía Plástica, Oftalmología y Medicina General"
        ],
        "c": 0
      },
      {
        "q": "¿Cómo definirías lo siguiente? En el Seguro de Salud, el 'Primer Nivel' de atención está compuesto obligatoriamente por estas 4 especialidades:",
        "options": [
          "Pediatría, Ginecoobstetricia, Medicina Interna y Cirugía General",
          "Cardiología, Neurología, Dermatología y Odontología",
          "Traumatología, Pediatría, Psiquiatría y Ginecología",
          "Oncología, Cirugía Plástica, Oftalmología y Medicina General"
        ],
        "c": 0
      },
      {
        "q": "En relación a Seguro de Salud - Atención y Copagos, en el Seguro de Salud, el 'Primer Nivel' de atención está compuesto obligatoriamente por estas 4 especialidades:",
        "options": [
          "Pediatría, Ginecoobstetricia, Medicina Interna y Cirugía General",
          "Cardiología, Neurología, Dermatología y Odontología",
          "Traumatología, Pediatría, Psiquiatría y Ginecología",
          "Oncología, Cirugía Plástica, Oftalmología y Medicina General"
        ],
        "c": 0
      }
    ],
    "e": "Memoriza estas 4: Pediatría, Gineco, Med. Interna, Cirugía Gral."
  },
  {
    "m": 2,
    "t": "Seguro de Salud - Atención y Copagos",
    "variants": [
      {
        "q": "¿Qué dependencia pública gratuita se encarga de resolver controversias y defender los derechos de los pacientes ante una negligencia médica de la red del Seguro de Salud?",
        "options": [
          "SHCP",
          "CONDUSEF",
          "CONAMED (Com. Nacional de Arbitraje Médico)",
          "CNSF"
        ],
        "c": 2
      },
      {
        "q": "Con respecto a este tema, ¿Qué dependencia pública gratuita se encarga de resolver controversias y defender los derechos de los pacientes ante una negligencia médica de la red del Seguro de Salud?",
        "options": [
          "SHCP",
          "CONDUSEF",
          "CONAMED (Com. Nacional de Arbitraje Médico)",
          "CNSF"
        ],
        "c": 2
      },
      {
        "q": "Señale la respuesta correcta: ¿Qué dependencia pública gratuita se encarga de resolver controversias y defender los derechos de los pacientes ante una negligencia médica de la red del Seguro de Salud?",
        "options": [
          "SHCP",
          "CONDUSEF",
          "CONAMED (Com. Nacional de Arbitraje Médico)",
          "CNSF"
        ],
        "c": 2
      }
    ],
    "e": "CONAMED es el árbitro para conflictos médicos en clínicas y hospitales."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Deducible y Coaseguro",
    "variants": [
      {
        "q": "¿En qué cobertura de seguros aplica el concepto de tope de coaseguro (monto máximo de participación del cliente)?",
        "options": [
          "Seguro de Vida",
          "Seguro de Auto",
          "Gastos Médicos Mayores",
          "Seguro de Daños"
        ],
        "c": 2
      },
      {
        "q": "Con respecto a este tema, ¿En qué cobertura de seguros aplica el concepto de tope de coaseguro (monto máximo de participación del cliente)?",
        "options": [
          "Seguro de Vida",
          "Seguro de Auto",
          "Gastos Médicos Mayores",
          "Seguro de Daños"
        ],
        "c": 2
      },
      {
        "q": "Señale la respuesta correcta: ¿En qué cobertura de seguros aplica el concepto de tope de coaseguro (monto máximo de participación del cliente)?",
        "options": [
          "Seguro de Vida",
          "Seguro de Auto",
          "Gastos Médicos Mayores",
          "Seguro de Daños"
        ],
        "c": 2
      }
    ],
    "e": "El tope de coaseguro protege la economía del asegurado en enfermedades muy costosas en GMM."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Dentro del Sistema Financiero Mexicano, ¿qué organismo es el encargado de proveer de moneda nacional (billetes y monedas) a la economía y controlar la inflación?",
        "options": [
          "SHCP",
          "CNBV",
          "Banco de México (Banxico)",
          "Casa de Moneda"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Dentro del Sistema Financiero Mexicano, ¿qué organismo es el encargado de proveer de moneda nacional (billetes y monedas) a la economía y controlar la inflación?",
        "options": [
          "SHCP",
          "CNBV",
          "Banco de México (Banxico)",
          "Casa de Moneda"
        ],
        "c": 2
      },
      {
        "q": "En relación a Sistema Financiero Mexicano, dentro del Sistema Financiero Mexicano, ¿qué organismo es el encargado de proveer de moneda nacional (billetes y monedas) a la economía y controlar la inflación?",
        "options": [
          "SHCP",
          "CNBV",
          "Banco de México (Banxico)",
          "Casa de Moneda"
        ],
        "c": 2
      }
    ],
    "e": "Banxico es el banco central autónomo responsable de la política monetaria y emisión de dinero."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "¿Qué comisión supervisa a las AFOREs y SIEFOREs?",
        "options": [
          "CNBV",
          "CNSF",
          "CONSAR",
          "CONDUSEF"
        ],
        "c": 2
      },
      {
        "q": "Con respecto a este tema, ¿Qué comisión supervisa a las AFOREs y SIEFOREs?",
        "options": [
          "CNBV",
          "CNSF",
          "CONSAR",
          "CONDUSEF"
        ],
        "c": 2
      },
      {
        "q": "Señale la respuesta correcta: ¿Qué comisión supervisa a las AFOREs y SIEFOREs?",
        "options": [
          "CNBV",
          "CNSF",
          "CONSAR",
          "CONDUSEF"
        ],
        "c": 2
      }
    ],
    "e": "La CONSAR regula el Sistema de Ahorro para el Retiro."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "¿Cuál es la diferencia operativa entre una AFORE y una SIEFORE?",
        "options": [
          "La AFORE invierte y la SIEFORE capta los fondos",
          "La AFORE registra/administra tu cuenta y la SIEFORE es el fondo que invierte el dinero en el mercado",
          "Son el mismo organismo, cambian de nombre según el banco",
          "La AFORE es del gobierno y la SIEFORE es privada"
        ],
        "c": 1
      },
      {
        "q": "Con respecto a este tema, ¿Cuál es la diferencia operativa entre una AFORE y una SIEFORE?",
        "options": [
          "La AFORE invierte y la SIEFORE capta los fondos",
          "La AFORE registra/administra tu cuenta y la SIEFORE es el fondo que invierte el dinero en el mercado",
          "Son el mismo organismo, cambian de nombre según el banco",
          "La AFORE es del gobierno y la SIEFORE es privada"
        ],
        "c": 1
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuál es la diferencia operativa entre una AFORE y una SIEFORE?",
        "options": [
          "La AFORE invierte y la SIEFORE capta los fondos",
          "La AFORE registra/administra tu cuenta y la SIEFORE es el fondo que invierte el dinero en el mercado",
          "Son el mismo organismo, cambian de nombre según el banco",
          "La AFORE es del gobierno y la SIEFORE es privada"
        ],
        "c": 1
      }
    ],
    "e": "AFORE = Administración y estado de cuenta. SIEFORE = Inversión bursátil (generacional)."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Las Arrendadoras Financieras, Empresas de Factoraje y Casas de Cambio pertenecen al:",
        "options": [
          "Sector Bancario",
          "Sector Bursátil",
          "Sector de Seguros",
          "Sector Auxiliar de Crédito"
        ],
        "c": 3
      },
      {
        "q": "¿Cómo definirías lo siguiente? Las Arrendadoras Financieras, Empresas de Factoraje y Casas de Cambio pertenecen al:",
        "options": [
          "Sector Bancario",
          "Sector Bursátil",
          "Sector de Seguros",
          "Sector Auxiliar de Crédito"
        ],
        "c": 3
      },
      {
        "q": "En relación a Sistema Financiero Mexicano, las Arrendadoras Financieras, Empresas de Factoraje y Casas de Cambio pertenecen al:",
        "options": [
          "Sector Bancario",
          "Sector Bursátil",
          "Sector de Seguros",
          "Sector Auxiliar de Crédito"
        ],
        "c": 3
      }
    ],
    "e": "Recuerda la regla: Su nombre oficial en el examen es Sector Auxiliar de Crédito (vigilado por CNBV)."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Banjército, Bancomext y el Banco del Bienestar son instituciones del gobierno que pertenecen a la:",
        "options": [
          "Banca Comercial",
          "Banca de Desarrollo (Segundo Piso)",
          "Sector Auxiliar",
          "Sofomes"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Banjército, Bancomext y el Banco del Bienestar son instituciones del gobierno que pertenecen a la:",
        "options": [
          "Banca Comercial",
          "Banca de Desarrollo (Segundo Piso)",
          "Sector Auxiliar",
          "Sofomes"
        ],
        "c": 1
      },
      {
        "q": "En relación a Sistema Financiero Mexicano, banjército, Bancomext y el Banco del Bienestar son instituciones del gobierno que pertenecen a la:",
        "options": [
          "Banca Comercial",
          "Banca de Desarrollo (Segundo Piso)",
          "Sector Auxiliar",
          "Sofomes"
        ],
        "c": 1
      }
    ],
    "e": "La Banca de Desarrollo busca impulsar sectores prioritarios del país."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Instrumento financiero emitido por el GOBIERNO a corto plazo, considerado de nulo riesgo y que se vende 'A Descuento' (Cupón Cero):",
        "options": [
          "Bondes",
          "Acciones",
          "CETES",
          "Obligaciones"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Instrumento financiero emitido por el GOBIERNO a corto plazo, considerado de nulo riesgo y que se vende 'A Descuento' (Cupón Cero):",
        "options": [
          "Bondes",
          "Acciones",
          "CETES",
          "Obligaciones"
        ],
        "c": 2
      },
      {
        "q": "En relación a Sistema Financiero Mexicano, instrumento financiero emitido por el GOBIERNO a corto plazo, considerado de nulo riesgo y que se vende 'A Descuento' (Cupón Cero):",
        "options": [
          "Bondes",
          "Acciones",
          "CETES",
          "Obligaciones"
        ],
        "c": 2
      }
    ],
    "e": "Los Certificados de la Tesorería (CETES) son el principal instrumento gubernamental a descuento."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Instrumento de renta variable emitido por EMPRESAS, el cual representa una fracción del capital social de la compañía:",
        "options": [
          "Obligaciones",
          "CPOs",
          "Acciones",
          "CETES"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Instrumento de renta variable emitido por EMPRESAS, el cual representa una fracción del capital social de la compañía:",
        "options": [
          "Obligaciones",
          "CPOs",
          "Acciones",
          "CETES"
        ],
        "c": 2
      },
      {
        "q": "En relación a Sistema Financiero Mexicano, instrumento de renta variable emitido por EMPRESAS, el cual representa una fracción del capital social de la compañía:",
        "options": [
          "Obligaciones",
          "CPOs",
          "Acciones",
          "CETES"
        ],
        "c": 2
      }
    ],
    "e": "Comprar acciones te vuelve dueño de una parte de la empresa, asumiendo riesgo de renta variable."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Las EMPRESAS emiten este instrumento de deuda de largo plazo ÚNICA Y EXCLUSIVAMENTE con el fin de pagar pasivos (deudas anteriores):",
        "options": [
          "Pagarés",
          "Acciones",
          "Obligaciones",
          "Bonos de Prenda"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Las EMPRESAS emiten este instrumento de deuda de largo plazo ÚNICA Y EXCLUSIVAMENTE con el fin de pagar pasivos (deudas anteriores):",
        "options": [
          "Pagarés",
          "Acciones",
          "Obligaciones",
          "Bonos de Prenda"
        ],
        "c": 2
      },
      {
        "q": "En relación a Sistema Financiero Mexicano, las EMPRESAS emiten este instrumento de deuda de largo plazo ÚNICA Y EXCLUSIVAMENTE con el fin de pagar pasivos (deudas anteriores):",
        "options": [
          "Pagarés",
          "Acciones",
          "Obligaciones",
          "Bonos de Prenda"
        ],
        "c": 2
      }
    ],
    "e": "Por ley, las 'Obligaciones' corporativas se emiten para reestructurar deudas."
  },
  {
    "m": 3,
    "t": "Matemáticas - Inflación",
    "variants": [
      {
        "q": "La tasa de interés pactada que cobra un banco por un crédito SIN considerar el impacto de la inflación se llama:",
        "options": [
          "Tasa Nominal",
          "Tasa Real",
          "Tasa Efectiva",
          "Tasa Pasiva"
        ],
        "c": 0
      },
      {
        "q": "¿Cómo definirías lo siguiente? La tasa de interés pactada que cobra un banco por un crédito SIN considerar el impacto de la inflación se llama:",
        "options": [
          "Tasa Nominal",
          "Tasa Real",
          "Tasa Efectiva",
          "Tasa Pasiva"
        ],
        "c": 0
      },
      {
        "q": "En relación a Matemáticas - Inflación, la tasa de interés pactada que cobra un banco por un crédito SIN considerar el impacto de la inflación se llama:",
        "options": [
          "Tasa Nominal",
          "Tasa Real",
          "Tasa Efectiva",
          "Tasa Pasiva"
        ],
        "c": 0
      }
    ],
    "e": "La Tasa Nominal es la tasa pactada bruta, ANTES de descontar la inflación. Relación clave: Tasa Real ≈ Tasa Nominal − Tasa de Inflación (y en el examen, la tasa real correcta es ligeramente menor a esa resta)."
  },
  {
    "m": 3,
    "t": "Matemáticas - Inflación",
    "variants": [
      {
        "q": "Si la Tasa Nominal es del 10% y la Tasa de Inflación fue del 6%, ¿cuál será aproximadamente la Tasa Real que verás como respuesta correcta en el examen?",
        "options": [
          "Exactamente 4.00%",
          "3.77% (ligeramente menor a 4%)",
          "16.00%",
          "-4.00%"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Si la Tasa Nominal es del 10% y la Tasa de Inflación fue del 6%, ¿cuál será aproximadamente la Tasa Real que verás como respuesta correcta en el examen?",
        "options": [
          "Exactamente 4.00%",
          "3.77% (ligeramente menor a 4%)",
          "16.00%",
          "-4.00%"
        ],
        "c": 1
      },
      {
        "q": "En relación a Matemáticas - Inflación, si la Tasa Nominal es del 10% y la Tasa de Inflación fue del 6%, ¿cuál será aproximadamente la Tasa Real que verás como respuesta correcta en el examen?",
        "options": [
          "Exactamente 4.00%",
          "3.77% (ligeramente menor a 4%)",
          "16.00%",
          "-4.00%"
        ],
        "c": 1
      }
    ],
    "e": "Fórmula conceptual: Tasa Real ≈ Tasa Nominal − Inflación.<br>Paso 1: 10% − 6% = 4%.<br>Paso 2 (regla de descarte del examen): la respuesta correcta NUNCA es la resta exacta, sino la opción ligeramente MENOR y más cercana → 3.77%."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Simple",
    "variants": [
      {
        "q": "Las ganancias en este tipo de interés son idénticas en cada periodo, ya que se calculan siempre sobre el capital inicial (no se capitalizan los intereses).",
        "options": [
          "Interés Efectivo",
          "Interés Nominal",
          "Interés Simple",
          "Interés Compuesto"
        ],
        "c": 2
      },
      {
        "q": "¿Cómo definirías lo siguiente? Las ganancias en este tipo de interés son idénticas en cada periodo, ya que se calculan siempre sobre el capital inicial (no se capitalizan los intereses).",
        "options": [
          "Interés Efectivo",
          "Interés Nominal",
          "Interés Simple",
          "Interés Compuesto"
        ],
        "c": 2
      },
      {
        "q": "En relación a Matemáticas - Interés Simple, las ganancias en este tipo de interés son idénticas en cada periodo, ya que se calculan siempre sobre el capital inicial (no se capitalizan los intereses).",
        "options": [
          "Interés Efectivo",
          "Interés Nominal",
          "Interés Simple",
          "Interés Compuesto"
        ],
        "c": 2
      }
    ],
    "e": "Fórmula: I = C × i × n. Como el interés se calcula SIEMPRE sobre el capital inicial C (no se reinvierte ni capitaliza), la ganancia es idéntica en cada periodo."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Compuesto",
    "variants": [
      {
        "q": "Si en un problema de matemáticas del examen lees las palabras 'Capitalizable mensualmente' o 'Convertible trimestralmente', debes aplicar la fórmula de:",
        "options": [
          "Interés Simple",
          "Interés Compuesto",
          "Valor Presente Simple",
          "Factor de Descuento"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Si en un problema de matemáticas del examen lees las palabras 'Capitalizable mensualmente' o 'Convertible trimestralmente', debes aplicar la fórmula de:",
        "options": [
          "Interés Simple",
          "Interés Compuesto",
          "Valor Presente Simple",
          "Factor de Descuento"
        ],
        "c": 1
      },
      {
        "q": "En relación a Matemáticas - Interés Compuesto, si en un problema de matemáticas del examen lees las palabras 'Capitalizable mensualmente' o 'Convertible trimestralmente', debes aplicar la fórmula de:",
        "options": [
          "Interés Simple",
          "Interés Compuesto",
          "Valor Presente Simple",
          "Factor de Descuento"
        ],
        "c": 1
      }
    ],
    "e": "'Capitalizable' o 'convertible' → Interés Compuesto: VF = C × (1+i)^n, I = C × [(1+i)^n − 1]. Ajusta la tasa anual según la capitalización: mensual ÷12, bimestral ÷6, trimestral ÷4, semestral ÷2; y n = número total de periodos. Si el problema NO trae esas palabras, usa Interés Simple."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Simple",
    "variants": [
      {
        "q": "¿Cuántos decimales exactos debes usar en tu calculadora básica y cortar (sin redondear el último) para todas tus operaciones en el examen?",
        "options": [
          "2 decimales",
          "3 decimales",
          "4 decimales",
          "Todos los que salgan"
        ],
        "c": 2
      },
      {
        "q": "Con respecto a este tema, ¿Cuántos decimales exactos debes usar en tu calculadora básica y cortar (sin redondear el último) para todas tus operaciones en el examen?",
        "options": [
          "2 decimales",
          "3 decimales",
          "4 decimales",
          "Todos los que salgan"
        ],
        "c": 2
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuántos decimales exactos debes usar en tu calculadora básica y cortar (sin redondear el último) para todas tus operaciones en el examen?",
        "options": [
          "2 decimales",
          "3 decimales",
          "4 decimales",
          "Todos los que salgan"
        ],
        "c": 2
      }
    ],
    "e": "Regla CNSF: en TODAS las operaciones (intermedias y finales) usa exactamente 4 decimales TRUNCANDO, es decir, cortando la cifra sin redondear el último dígito. Ejemplo: 1.06 × 1.06 = 1.1236; 1.1236 × 1.06 = 1.191016 → se corta a 1.1910."
  },
  {
    "m": 3,
    "t": "Matemáticas - Inflación",
    "variants": [
      {
        "q": "Inflación: Tienes $1,200 que te alcanzan para comprar 12 camisas ($100 c/u). Si la inflación del año es 8%, la camisa costará $108. ¿Cuántas camisas completas podrás comprar con tus mismos $1,200?",
        "options": [
          "12 camisas",
          "11 camisas",
          "11.11 camisas",
          "10 camisas"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Inflación: Tienes $1,200 que te alcanzan para comprar 12 camisas ($100 c/u). Si la inflación del año es 8%, la camisa costará $108. ¿Cuántas camisas completas podrás comprar con tus mismos $1,200?",
        "options": [
          "12 camisas",
          "11 camisas",
          "11.11 camisas",
          "10 camisas"
        ],
        "c": 1
      },
      {
        "q": "En relación a Matemáticas - Inflación, inflación: Tienes $1,200 que te alcanzan para comprar 12 camisas ($100 c/u). Si la inflación del año es 8%, la camisa costará $108. ¿Cuántas camisas completas podrás comprar con tus mismos $1,200?",
        "options": [
          "12 camisas",
          "11 camisas",
          "11.11 camisas",
          "10 camisas"
        ],
        "c": 1
      }
    ],
    "e": "Paso 1: precio nuevo con inflación = $100 × 1.08 = $108.<br>Paso 2: camisas posibles = $1,200 ÷ $108 = 11.1111.<br>Paso 3: solo se compran bienes ENTEROS: se descartan los decimales → 11 camisas."
  },
  {
    "m": 3,
    "t": "Matemáticas - Fracciones",
    "variants": [
      {
        "q": "Relaciona la fracción 5/8 con su porcentaje y decimal equivalente de manera correcta:",
        "options": [
          "0.5800 -> 58.00%",
          "0.6250 -> 62.50%",
          "0.1600 -> 16.00%",
          "0.3750 -> 37.50%"
        ],
        "c": 1
      },
      {
        "q": "¿Cómo definirías lo siguiente? Relaciona la fracción 5/8 con su porcentaje y decimal equivalente de manera correcta:",
        "options": [
          "0.5800 -> 58.00%",
          "0.6250 -> 62.50%",
          "0.1600 -> 16.00%",
          "0.3750 -> 37.50%"
        ],
        "c": 1
      },
      {
        "q": "En relación a Matemáticas - Fracciones, relaciona la fracción 5/8 con su porcentaje y decimal equivalente de manera correcta:",
        "options": [
          "0.5800 -> 58.00%",
          "0.6250 -> 62.50%",
          "0.1600 -> 16.00%",
          "0.3750 -> 37.50%"
        ],
        "c": 1
      }
    ],
    "e": "Método: numerador ÷ denominador y luego × 100.<br>Paso 1: 5 ÷ 8 = 0.6250.<br>Paso 2: 0.6250 × 100 = 62.50%."
  },
  {
    "m": 3,
    "t": "Matemáticas - Fracciones",
    "variants": [
      {
        "q": "Se reparten $2,400,000 pesos de una póliza. 3/8 del capital se destinan al cónyuge y el resto se divide idéntico entre sus 2 hijos. ¿Cuánto recibe cada hijo?",
        "options": [
          "$750,000.00",
          "$900,000.00",
          "$600,000.00",
          "$781,250.00"
        ],
        "c": 0
      },
      {
        "q": "¿Cómo definirías lo siguiente? Se reparten $2,400,000 pesos de una póliza. 3/8 del capital se destinan al cónyuge y el resto se divide idéntico entre sus 2 hijos. ¿Cuánto recibe cada hijo?",
        "options": [
          "$750,000.00",
          "$900,000.00",
          "$600,000.00",
          "$781,250.00"
        ],
        "c": 0
      },
      {
        "q": "En relación a Matemáticas - Fracciones, se reparten $2,400,000 pesos de una póliza. 3/8 del capital se destinan al cónyuge y el resto se divide idéntico entre sus 2 hijos. ¿Cuánto recibe cada hijo?",
        "options": [
          "$750,000.00",
          "$900,000.00",
          "$600,000.00",
          "$781,250.00"
        ],
        "c": 0
      }
    ],
    "e": "Paso 1: cónyuge = 3/8 = 0.3750 → $2,400,000 × 0.3750 = $900,000.<br>Paso 2: resto para los hijos = $2,400,000 − $900,000 = $1,500,000.<br>Paso 3: $1,500,000 ÷ 2 hijos = $750,000.00 cada uno."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Simple",
    "variants": [
      {
        "q": "Un cliente deposita $45,000 pesos en un PRLV al 8.5% anual. Plazo de 3 años. ¿Cuál es el monto total (capital + intereses) al vencer?",
        "options": [
          "$56,475.00",
          "$11,475.00",
          "$57,250.00",
          "$48,825.00"
        ],
        "c": 0
      },
      {
        "q": "¿Cómo definirías lo siguiente? Un cliente deposita $45,000 pesos en un PRLV al 8.5% anual. Plazo de 3 años. ¿Cuál es el monto total (capital + intereses) al vencer?",
        "options": [
          "$56,475.00",
          "$11,475.00",
          "$57,250.00",
          "$48,825.00"
        ],
        "c": 0
      },
      {
        "q": "En relación a Matemáticas - Interés Simple, un cliente deposita $45,000 pesos en un PRLV al 8.5% anual. Plazo de 3 años. ¿Cuál es el monto total (capital + intereses) al vencer?",
        "options": [
          "$56,475.00",
          "$11,475.00",
          "$57,250.00",
          "$48,825.00"
        ],
        "c": 0
      }
    ],
    "e": "Fórmula: I = C × i × n; Monto = C + I.<br>Paso 1: i = 8.5% = 0.0850.<br>Paso 2: I = 45,000 × 0.0850 × 3 = $11,475.<br>Paso 3: Monto = 45,000 + 11,475 = $56,475.00."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Compuesto",
    "variants": [
      {
        "q": "Inversionista deposita $50,000 pesos al 12% anual capitalizable semestralmente a 2 años. Truncando a 4 decimales, ¿cuál es el interés compuesto generado?",
        "options": [
          "$13,120.00",
          "$12,000.00",
          "$13,248.50",
          "$12,624.70"
        ],
        "c": 0
      },
      {
        "q": "¿Cómo definirías lo siguiente? Inversionista deposita $50,000 pesos al 12% anual capitalizable semestralmente a 2 años. Truncando a 4 decimales, ¿cuál es el interés compuesto generado?",
        "options": [
          "$13,120.00",
          "$12,000.00",
          "$13,248.50",
          "$12,624.70"
        ],
        "c": 0
      },
      {
        "q": "En relación a Matemáticas - Interés Compuesto, inversionista deposita $50,000 pesos al 12% anual capitalizable semestralmente a 2 años. Truncando a 4 decimales, ¿cuál es el interés compuesto generado?",
        "options": [
          "$13,120.00",
          "$12,000.00",
          "$13,248.50",
          "$12,624.70"
        ],
        "c": 0
      }
    ],
    "e": "Fórmula: I = C × [(1+i)^n − 1] con truncamiento a 4 decimales.<br>Paso 1: tasa semestral = 12% ÷ 2 = 6% (i = 0.0600).<br>Paso 2: n = 2 años × 2 = 4 semestres.<br>Paso 3: factor: 1.06 × 1.06 = 1.1236 → × 1.06 = 1.1910 → × 1.06 = 1.2624 (truncando en cada paso).<br>Paso 4: I = 50,000 × (1.2624 − 1) = $13,120.00."
  },
  {
    "m": 3,
    "t": "Matemáticas - Valor Futuro y Presente",
    "variants": [
      {
        "q": "Un comerciante desea liquidar una deuda de $150,000 en 2 años. Si la tasa simple es 9% anual, ¿cuál es el Valor Presente a invertir hoy?",
        "options": [
          "$127,118.64",
          "$126,050.40",
          "$137,614.67",
          "$125,000.00"
        ],
        "c": 0
      },
      {
        "q": "¿Cómo definirías lo siguiente? Un comerciante desea liquidar una deuda de $150,000 en 2 años. Si la tasa simple es 9% anual, ¿cuál es el Valor Presente a invertir hoy?",
        "options": [
          "$127,118.64",
          "$126,050.40",
          "$137,614.67",
          "$125,000.00"
        ],
        "c": 0
      },
      {
        "q": "En relación a Matemáticas - Valor Futuro y Presente, un comerciante desea liquidar una deuda de $150,000 en 2 años. Si la tasa simple es 9% anual, ¿cuál es el Valor Presente a invertir hoy?",
        "options": [
          "$127,118.64",
          "$126,050.40",
          "$137,614.67",
          "$125,000.00"
        ],
        "c": 0
      }
    ],
    "e": "Fórmula: VP = VF ÷ (1 + i × n).<br>Paso 1: i × n = 0.09 × 2 = 0.18.<br>Paso 2: divisor = 1 + 0.18 = 1.18.<br>Paso 3: VP = 150,000 ÷ 1.18 = $127,118.64."
  },
  {
    "m": 3,
    "t": "Matemáticas - Valor Futuro y Presente",
    "variants": [
      {
        "q": "Invierte $25,000 al 18% anual capitalizable bimestralmente. ¿Cuál será el Valor Futuro al cabo de 1 año (truncando a 4 decimales)?",
        "options": [
          "$29,845.00",
          "$29,500.00",
          "$28,950.00",
          "$30,225.40"
        ],
        "c": 0
      },
      {
        "q": "¿Cómo definirías lo siguiente? Invierte $25,000 al 18% anual capitalizable bimestralmente. ¿Cuál será el Valor Futuro al cabo de 1 año (truncando a 4 decimales)?",
        "options": [
          "$29,845.00",
          "$29,500.00",
          "$28,950.00",
          "$30,225.40"
        ],
        "c": 0
      },
      {
        "q": "En relación a Matemáticas - Valor Futuro y Presente, invierte $25,000 al 18% anual capitalizable bimestralmente. ¿Cuál será el Valor Futuro al cabo de 1 año (truncando a 4 decimales)?",
        "options": [
          "$29,845.00",
          "$29,500.00",
          "$28,950.00",
          "$30,225.40"
        ],
        "c": 0
      }
    ],
    "e": "Fórmula: VF = C × (1+i)^n con truncamiento a 4 decimales.<br>Paso 1: tasa bimestral = 18% ÷ 6 = 3% (i = 0.0300).<br>Paso 2: n = 1 año = 6 bimestres.<br>Paso 3: factor: 1.03 → 1.0609 → 1.0927 → 1.1254 → 1.1591 → 1.1938 (multiplicando por 1.03 y truncando).<br>Paso 4: VF = 25,000 × 1.1938 = $29,845.00."
  },
  {
    "m": 1,
    "t": "Historia del Seguro",
    "variants": [
      {
        "q": "El 'Préstamo a la Gruesa Ventura', antecedente remoto del seguro marítimo, funcionaba de la siguiente manera:",
        "options": [
          "Un prestamista financiaba el viaje; si el barco naufragaba, el naviero no pagaba nada; si llegaba a salvo, devolvía el capital más un interés muy alto",
          "El naviero pagaba una prima fija anual a cambio de la reposición del barco en caso de naufragio",
          "El Estado cubría las pérdidas de los navieros mediante impuestos portuarios",
          "Varios navieros formaban un fondo común y repartían las pérdidas en partes iguales"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: El 'Préstamo a la Gruesa Ventura', antecedente remoto del seguro marítimo, funcionaba de la siguiente manera:",
        "options": [
          "Un prestamista financiaba el viaje; si el barco naufragaba, el naviero no pagaba nada; si llegaba a salvo, devolvía el capital más un interés muy alto",
          "El naviero pagaba una prima fija anual a cambio de la reposición del barco en caso de naufragio",
          "El Estado cubría las pérdidas de los navieros mediante impuestos portuarios",
          "Varios navieros formaban un fondo común y repartían las pérdidas en partes iguales"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Historia del Seguro: El 'Préstamo a la Gruesa Ventura', antecedente remoto del seguro marítimo, funcionaba de la siguiente manera:",
        "options": [
          "Un prestamista financiaba el viaje; si el barco naufragaba, el naviero no pagaba nada; si llegaba a salvo, devolvía el capital más un interés muy alto",
          "El naviero pagaba una prima fija anual a cambio de la reposición del barco en caso de naufragio",
          "El Estado cubría las pérdidas de los navieros mediante impuestos portuarios",
          "Varios navieros formaban un fondo común y repartían las pérdidas en partes iguales"
        ],
        "c": 0
      }
    ],
    "e": "En el Préstamo a la Gruesa Ventura el prestamista asumía el riesgo del viaje: si el barco naufragaba, el naviero quedaba eximido de pagar; si llegaba a salvo, devolvía el capital más un interés muy alto que compensaba el riesgo."
  },
  {
    "m": 1,
    "t": "Historia del Seguro",
    "variants": [
      {
        "q": "Lloyd's de Londres, nacido en la cafetería de Edward Lloyd en 1698, se caracteriza por ser:",
        "options": [
          "Un mercado o corporación que agrupa miembros en sindicatos para aceptar y distribuir riesgos complejos a nivel mundial",
          "La primera compañía de seguros de vida tradicional de Europa",
          "Una mutualista inglesa sin fin de lucro para navieros",
          "El primer organismo gubernamental regulador de seguros"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Lloyd's de Londres, nacido en la cafetería de Edward Lloyd en 1698, se caracteriza por ser:",
        "options": [
          "Un mercado o corporación que agrupa miembros en sindicatos para aceptar y distribuir riesgos complejos a nivel mundial",
          "La primera compañía de seguros de vida tradicional de Europa",
          "Una mutualista inglesa sin fin de lucro para navieros",
          "El primer organismo gubernamental regulador de seguros"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Historia del Seguro: Lloyd's de Londres, nacido en la cafetería de Edward Lloyd en 1698, se caracteriza por ser:",
        "options": [
          "Un mercado o corporación que agrupa miembros en sindicatos para aceptar y distribuir riesgos complejos a nivel mundial",
          "La primera compañía de seguros de vida tradicional de Europa",
          "Una mutualista inglesa sin fin de lucro para navieros",
          "El primer organismo gubernamental regulador de seguros"
        ],
        "c": 0
      }
    ],
    "e": "Lloyd's NO es una compañía de seguros tradicional: es una corporación o mercado que agrupa a miembros individuales y corporativos en sindicatos para aceptar y distribuir riesgos complejos a nivel mundial."
  },
  {
    "m": 1,
    "t": "Historia del Seguro",
    "variants": [
      {
        "q": "En Inglaterra (1774) se legitimó el seguro de vida exigiendo dos condiciones para evitar que se usara como apuesta sobre la vida humana. ¿Cuáles son?",
        "options": [
          "El consentimiento por escrito del asegurado y la existencia de un interés asegurable",
          "El pago anticipado de la prima y un examen médico obligatorio",
          "La autorización de la Corona y un contrato notariado",
          "La mayoría de edad del beneficiario y el aval de dos testigos"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: En Inglaterra (1774) se legitimó el seguro de vida exigiendo dos condiciones para evitar que se usara como apuesta sobre la vida humana. ¿Cuáles son?",
        "options": [
          "El consentimiento por escrito del asegurado y la existencia de un interés asegurable",
          "El pago anticipado de la prima y un examen médico obligatorio",
          "La autorización de la Corona y un contrato notariado",
          "La mayoría de edad del beneficiario y el aval de dos testigos"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Historia del Seguro: En Inglaterra (1774) se legitimó el seguro de vida exigiendo dos condiciones para evitar que se usara como apuesta sobre la vida humana. ¿Cuáles son?",
        "options": [
          "El consentimiento por escrito del asegurado y la existencia de un interés asegurable",
          "El pago anticipado de la prima y un examen médico obligatorio",
          "La autorización de la Corona y un contrato notariado",
          "La mayoría de edad del beneficiario y el aval de dos testigos"
        ],
        "c": 0
      }
    ],
    "e": "Las dos condiciones nacidas en Inglaterra (1774) fueron: 1) el consentimiento por escrito del asegurado y 2) la existencia de un interés asegurable (que el beneficiario sufra un daño financiero real por el fallecimiento)."
  },
  {
    "m": 1,
    "t": "Historia del Seguro",
    "variants": [
      {
        "q": "La 'Mexicanización' del seguro (1935, gobierno de Lázaro Cárdenas) obligó a las aseguradoras a:",
        "options": [
          "Invertir sus reservas técnicas dentro de territorio mexicano",
          "Contratar únicamente agentes de nacionalidad mexicana",
          "Fusionarse con bancos nacionales para operar",
          "Ceder el 50% de sus utilidades al gobierno federal"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: La 'Mexicanización' del seguro (1935, gobierno de Lázaro Cárdenas) obligó a las aseguradoras a:",
        "options": [
          "Invertir sus reservas técnicas dentro de territorio mexicano",
          "Contratar únicamente agentes de nacionalidad mexicana",
          "Fusionarse con bancos nacionales para operar",
          "Ceder el 50% de sus utilidades al gobierno federal"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Historia del Seguro: La 'Mexicanización' del seguro (1935, gobierno de Lázaro Cárdenas) obligó a las aseguradoras a:",
        "options": [
          "Invertir sus reservas técnicas dentro de territorio mexicano",
          "Contratar únicamente agentes de nacionalidad mexicana",
          "Fusionarse con bancos nacionales para operar",
          "Ceder el 50% de sus utilidades al gobierno federal"
        ],
        "c": 0
      }
    ],
    "e": "La ley de 1935 obligó a invertir las reservas técnicas dentro de México. Al negarse, 79 de las 86 aseguradoras extranjeras se retiraron del país."
  },
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "variants": [
      {
        "q": "El riesgo que se puede medir matemática y estadísticamente es el Objetivo. ¿Cómo se llama el riesgo que es solo una percepción psicológica o miedo individual sin sustento estadístico?",
        "options": [
          "Riesgo Subjetivo",
          "Riesgo Especulativo",
          "Riesgo Consecuencial",
          "Riesgo Particular"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: El riesgo que se puede medir matemática y estadísticamente es el Objetivo. ¿Cómo se llama el riesgo que es solo una percepción psicológica o miedo individual sin sustento estadístico?",
        "options": [
          "Riesgo Subjetivo",
          "Riesgo Especulativo",
          "Riesgo Consecuencial",
          "Riesgo Particular"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Conceptos de Riesgo: El riesgo que se puede medir matemática y estadísticamente es el Objetivo. ¿Cómo se llama el riesgo que es solo una percepción psicológica o miedo individual sin sustento estadístico?",
        "options": [
          "Riesgo Subjetivo",
          "Riesgo Especulativo",
          "Riesgo Consecuencial",
          "Riesgo Particular"
        ],
        "c": 0
      }
    ],
    "e": "Riesgo Objetivo = medible estadísticamente (ej. probabilidad de muerte en la tabla demográfica). Riesgo Subjetivo = percepción o miedo individual sin sustento estadístico (ej. el miedo a volar)."
  },
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "variants": [
      {
        "q": "Las utilidades que una fábrica deja de percibir mientras permanece cerrada reconstruyéndose tras un incendio son un ejemplo de:",
        "options": [
          "Riesgo Consecuencial (pérdida indirecta)",
          "Riesgo Especulativo",
          "Riesgo Subjetivo",
          "Riesgo Catastrófico"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Las utilidades que una fábrica deja de percibir mientras permanece cerrada reconstruyéndose tras un incendio son un ejemplo de:",
        "options": [
          "Riesgo Consecuencial (pérdida indirecta)",
          "Riesgo Especulativo",
          "Riesgo Subjetivo",
          "Riesgo Catastrófico"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Conceptos de Riesgo: Las utilidades que una fábrica deja de percibir mientras permanece cerrada reconstruyéndose tras un incendio son un ejemplo de:",
        "options": [
          "Riesgo Consecuencial (pérdida indirecta)",
          "Riesgo Especulativo",
          "Riesgo Subjetivo",
          "Riesgo Catastrófico"
        ],
        "c": 0
      }
    ],
    "e": "El riesgo consecuencial cubre las pérdidas INDIRECTAS derivadas de un siniestro directo, como las utilidades que se dejan de ganar mientras la fábrica está cerrada."
  },
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "variants": [
      {
        "q": "¿Cuáles son las 6 actitudes que una persona o empresa puede tomar frente al riesgo?",
        "options": [
          "Eliminar, Prevenir, Disminuir, Retener/Asumir, Distribuir y Transferir",
          "Evitar, Ignorar, Medir, Asegurar, Ahorrar y Invertir",
          "Prevenir, Asegurar, Denunciar, Mitigar, Aceptar y Negociar",
          "Eliminar, Transferir, Cotizar, Registrar, Provisionar y Liquidar"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuáles son las 6 actitudes que una persona o empresa puede tomar frente al riesgo?",
        "options": [
          "Eliminar, Prevenir, Disminuir, Retener/Asumir, Distribuir y Transferir",
          "Evitar, Ignorar, Medir, Asegurar, Ahorrar y Invertir",
          "Prevenir, Asegurar, Denunciar, Mitigar, Aceptar y Negociar",
          "Eliminar, Transferir, Cotizar, Registrar, Provisionar y Liquidar"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Conceptos de Riesgo: ¿Cuáles son las 6 actitudes que una persona o empresa puede tomar frente al riesgo?",
        "options": [
          "Eliminar, Prevenir, Disminuir, Retener/Asumir, Distribuir y Transferir",
          "Evitar, Ignorar, Medir, Asegurar, Ahorrar y Invertir",
          "Prevenir, Asegurar, Denunciar, Mitigar, Aceptar y Negociar",
          "Eliminar, Transferir, Cotizar, Registrar, Provisionar y Liquidar"
        ],
        "c": 0
      }
    ],
    "e": "Las 6 actitudes son: Eliminar, Prevenir, Disminuir, Retener/Asumir, Distribuir y Transferir. La más importante para el examen es TRANSFERIR (contratar un seguro): el riesgo no se elimina ni se previene, solo se transfiere."
  },
  {
    "m": 1,
    "t": "Matemáticas Actuariales",
    "variants": [
      {
        "q": "El principio técnico que establece que a mayor número de asegurados en el fondo común, más precisa es la predicción del comportamiento del riesgo, se llama:",
        "options": [
          "Ley de los Grandes Números",
          "Principio de Subrogación",
          "Ley de la Oferta y la Demanda",
          "Principio de Ubérrima Fides"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: El principio técnico que establece que a mayor número de asegurados en el fondo común, más precisa es la predicción del comportamiento del riesgo, se llama:",
        "options": [
          "Ley de los Grandes Números",
          "Principio de Subrogación",
          "Ley de la Oferta y la Demanda",
          "Principio de Ubérrima Fides"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Matemáticas Actuariales: El principio técnico que establece que a mayor número de asegurados en el fondo común, más precisa es la predicción del comportamiento del riesgo, se llama:",
        "options": [
          "Ley de los Grandes Números",
          "Principio de Subrogación",
          "Ley de la Oferta y la Demanda",
          "Principio de Ubérrima Fides"
        ],
        "c": 0
      }
    ],
    "e": "Los principios técnicos del seguro son: Estadística (registro histórico), Probabilidad (proyección a futuro) y la Ley de los Grandes Números: a más asegurados en el fondo común, más precisa es la predicción del riesgo."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "¿Cuáles son los 3 aspectos fundamentales del seguro?",
        "options": [
          "Económico (fondo común), Jurídico (contrato/póliza) y Técnico (actuarial)",
          "Comercial, Fiscal y Administrativo",
          "Preventivo, Correctivo y Compensatorio",
          "Financiero, Legal y Social"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuáles son los 3 aspectos fundamentales del seguro?",
        "options": [
          "Económico (fondo común), Jurídico (contrato/póliza) y Técnico (actuarial)",
          "Comercial, Fiscal y Administrativo",
          "Preventivo, Correctivo y Compensatorio",
          "Financiero, Legal y Social"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a El Contrato de Seguro: ¿Cuáles son los 3 aspectos fundamentales del seguro?",
        "options": [
          "Económico (fondo común), Jurídico (contrato/póliza) y Técnico (actuarial)",
          "Comercial, Fiscal y Administrativo",
          "Preventivo, Correctivo y Compensatorio",
          "Financiero, Legal y Social"
        ],
        "c": 0
      }
    ],
    "e": "Los 3 aspectos fundamentales: Económico (resarcir daños mediante un fondo común de la colectividad), Jurídico (se formaliza en un contrato llamado póliza) y Técnico (cálculo actuarial de costos justos con matemáticas y estadística)."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "La persona que adquiere por sucesión legal los derechos del beneficiario en caso de que éste fallezca se denomina:",
        "options": [
          "Causahabiente",
          "Contratante",
          "Fideicomisario",
          "Asegurado sustituto"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: La persona que adquiere por sucesión legal los derechos del beneficiario en caso de que éste fallezca se denomina:",
        "options": [
          "Causahabiente",
          "Contratante",
          "Fideicomisario",
          "Asegurado sustituto"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a El Contrato de Seguro: La persona que adquiere por sucesión legal los derechos del beneficiario en caso de que éste fallezca se denomina:",
        "options": [
          "Causahabiente",
          "Contratante",
          "Fideicomisario",
          "Asegurado sustituto"
        ],
        "c": 0
      }
    ],
    "e": "El causahabiente adquiere por sucesión legal los derechos del beneficiario cuando éste fallece (comúnmente el cónyuge o los hijos)."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "En el contrato de seguro, la persona que firma la póliza y está obligada al pago de la prima (puede o no ser el asegurado) es:",
        "options": [
          "El Contratante",
          "El Beneficiario",
          "El Agente de seguros",
          "El Causahabiente"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: En el contrato de seguro, la persona que firma la póliza y está obligada al pago de la prima (puede o no ser el asegurado) es:",
        "options": [
          "El Contratante",
          "El Beneficiario",
          "El Agente de seguros",
          "El Causahabiente"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a El Contrato de Seguro: En el contrato de seguro, la persona que firma la póliza y está obligada al pago de la prima (puede o no ser el asegurado) es:",
        "options": [
          "El Contratante",
          "El Beneficiario",
          "El Agente de seguros",
          "El Causahabiente"
        ],
        "c": 0
      }
    ],
    "e": "El Contratante firma la póliza y está obligado al pago de la prima; puede o no ser la misma persona que el Asegurado (sobre quien recae el riesgo)."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "Ante un siniestro, la persona encargada de investigar las circunstancias del evento, determinar si la póliza lo cubre y valuar el costo económico de los daños es:",
        "options": [
          "El Ajustador (valuador)",
          "El Actuario",
          "El Suscriptor",
          "El Agente de seguros"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Ante un siniestro, la persona encargada de investigar las circunstancias del evento, determinar si la póliza lo cubre y valuar el costo económico de los daños es:",
        "options": [
          "El Ajustador (valuador)",
          "El Actuario",
          "El Suscriptor",
          "El Agente de seguros"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a El Contrato de Seguro: Ante un siniestro, la persona encargada de investigar las circunstancias del evento, determinar si la póliza lo cubre y valuar el costo económico de los daños es:",
        "options": [
          "El Ajustador (valuador)",
          "El Actuario",
          "El Suscriptor",
          "El Agente de seguros"
        ],
        "c": 0
      }
    ],
    "e": "El Ajustador o valuador investiga las circunstancias del siniestro, determina si la póliza cubre el evento y valúa el costo económico de los daños."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "En el Reaseguro, ¿qué relación jurídica tiene el asegurado final con la empresa reaseguradora?",
        "options": [
          "Ninguna: el reaseguro es de empresa a empresa; la aseguradora paga el 100% al cliente y luego cobra su parte al reasegurador",
          "El asegurado debe cobrar a cada reaseguradora su parte proporcional",
          "El reasegurador se convierte en el nuevo obligado directo frente al cliente",
          "El asegurado debe autorizar por escrito el contrato de reaseguro"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: En el Reaseguro, ¿qué relación jurídica tiene el asegurado final con la empresa reaseguradora?",
        "options": [
          "Ninguna: el reaseguro es de empresa a empresa; la aseguradora paga el 100% al cliente y luego cobra su parte al reasegurador",
          "El asegurado debe cobrar a cada reaseguradora su parte proporcional",
          "El reasegurador se convierte en el nuevo obligado directo frente al cliente",
          "El asegurado debe autorizar por escrito el contrato de reaseguro"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a El Contrato de Seguro: En el Reaseguro, ¿qué relación jurídica tiene el asegurado final con la empresa reaseguradora?",
        "options": [
          "Ninguna: el reaseguro es de empresa a empresa; la aseguradora paga el 100% al cliente y luego cobra su parte al reasegurador",
          "El asegurado debe cobrar a cada reaseguradora su parte proporcional",
          "El reasegurador se convierte en el nuevo obligado directo frente al cliente",
          "El asegurado debe autorizar por escrito el contrato de reaseguro"
        ],
        "c": 0
      }
    ],
    "e": "El reaseguro ocurre de empresa a empresa: el cliente final no interviene ni se entera. En un siniestro, la aseguradora original le paga el 100% y después se cobra con el reasegurador. No confundir con el coaseguro, donde el beneficiario sí cobra a cada aseguradora su parte."
  },
  {
    "m": 1,
    "t": "Primas",
    "variants": [
      {
        "q": "La prima que aumenta cada año debido a la edad del asegurado o a la inflación médica (típica de Gastos Médicos Mayores) es la:",
        "options": [
          "Prima Creciente o Natural",
          "Prima Nivelada",
          "Prima Decreciente",
          "Prima Única"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: La prima que aumenta cada año debido a la edad del asegurado o a la inflación médica (típica de Gastos Médicos Mayores) es la:",
        "options": [
          "Prima Creciente o Natural",
          "Prima Nivelada",
          "Prima Decreciente",
          "Prima Única"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Primas: La prima que aumenta cada año debido a la edad del asegurado o a la inflación médica (típica de Gastos Médicos Mayores) es la:",
        "options": [
          "Prima Creciente o Natural",
          "Prima Nivelada",
          "Prima Decreciente",
          "Prima Única"
        ],
        "c": 0
      }
    ],
    "e": "La Prima Creciente (Natural) aumenta cada año por la edad del asegurado o la inflación médica, como en GMM. La Nivelada es fija (exclusiva de Vida) y la Decreciente baja año con año (créditos hipotecarios)."
  },
  {
    "m": 1,
    "t": "Primas",
    "variants": [
      {
        "q": "La prima que disminuye año con año, típica de seguros asociados a créditos hipotecarios o de auto donde el saldo deudor va bajando, es la:",
        "options": [
          "Prima Decreciente",
          "Prima Creciente",
          "Prima Fraccionada",
          "Prima Devengada"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: La prima que disminuye año con año, típica de seguros asociados a créditos hipotecarios o de auto donde el saldo deudor va bajando, es la:",
        "options": [
          "Prima Decreciente",
          "Prima Creciente",
          "Prima Fraccionada",
          "Prima Devengada"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Primas: La prima que disminuye año con año, típica de seguros asociados a créditos hipotecarios o de auto donde el saldo deudor va bajando, es la:",
        "options": [
          "Prima Decreciente",
          "Prima Creciente",
          "Prima Fraccionada",
          "Prima Devengada"
        ],
        "c": 0
      }
    ],
    "e": "La Prima Decreciente disminuye año con año porque el saldo deudor asegurado (ej. de un crédito hipotecario) también va bajando."
  },
  {
    "m": 1,
    "t": "Primas",
    "variants": [
      {
        "q": "Por definición de examen, la Prima Anual cubre un lapso exacto de:",
        "options": [
          "12 meses",
          "365 días hábiles",
          "10 meses",
          "24 meses"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Por definición de examen, la Prima Anual cubre un lapso exacto de:",
        "options": [
          "12 meses",
          "365 días hábiles",
          "10 meses",
          "24 meses"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Primas: Por definición de examen, la Prima Anual cubre un lapso exacto de:",
        "options": [
          "12 meses",
          "365 días hábiles",
          "10 meses",
          "24 meses"
        ],
        "c": 0
      }
    ],
    "e": "La Prima Anual cubre un lapso completo de 12 meses. Es una pregunta directa de examen."
  },
  {
    "m": 1,
    "t": "Primas",
    "variants": [
      {
        "q": "La Prima Fraccionada (mensual, trimestral o semestral) se caracteriza por:",
        "options": [
          "Dividir el pago en lapsos menores a un año e incluir cargos por financiamiento",
          "Ser más barata que la prima anual por pronto pago",
          "Aplicar solo a seguros de daños",
          "Mantenerse idéntica durante toda la vida de la póliza"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: La Prima Fraccionada (mensual, trimestral o semestral) se caracteriza por:",
        "options": [
          "Dividir el pago en lapsos menores a un año e incluir cargos por financiamiento",
          "Ser más barata que la prima anual por pronto pago",
          "Aplicar solo a seguros de daños",
          "Mantenerse idéntica durante toda la vida de la póliza"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Primas: La Prima Fraccionada (mensual, trimestral o semestral) se caracteriza por:",
        "options": [
          "Dividir el pago en lapsos menores a un año e incluir cargos por financiamiento",
          "Ser más barata que la prima anual por pronto pago",
          "Aplicar solo a seguros de daños",
          "Mantenerse idéntica durante toda la vida de la póliza"
        ],
        "c": 0
      }
    ],
    "e": "La Prima Fraccionada divide el pago en lapsos menores a un año (mensual, trimestral, semestral) e incluye cargos por financiamiento, por lo que el costo total anualizado es MAYOR que pagando de forma anual."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "variants": [
      {
        "q": "En el examen de Cédula, ¿qué beneficio obtiene el sustentante que aprueba con 80 puntos o más?",
        "options": [
          "Queda exento del examen de refrendo de por vida (la cédula se renueva administrativamente)",
          "Obtiene una cédula con vigencia doble (6 años)",
          "Puede intermediar todos los ramos, incluido Daños",
          "Recibe la cédula A2 de forma automática"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: En el examen de Cédula, ¿qué beneficio obtiene el sustentante que aprueba con 80 puntos o más?",
        "options": [
          "Queda exento del examen de refrendo de por vida (la cédula se renueva administrativamente)",
          "Obtiene una cédula con vigencia doble (6 años)",
          "Puede intermediar todos los ramos, incluido Daños",
          "Recibe la cédula A2 de forma automática"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Agentes de Seguros: En el examen de Cédula, ¿qué beneficio obtiene el sustentante que aprueba con 80 puntos o más?",
        "options": [
          "Queda exento del examen de refrendo de por vida (la cédula se renueva administrativamente)",
          "Obtiene una cédula con vigencia doble (6 años)",
          "Puede intermediar todos los ramos, incluido Daños",
          "Recibe la cédula A2 de forma automática"
        ],
        "c": 0
      }
    ],
    "e": "Esquema de calificaciones: de 60 a 79 puntos se aprueba con cédula por 3 años (revalidando con examen al vencimiento); con 80 puntos o más se queda EXENTO del examen de refrendo de por vida (renovación administrativa)."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "variants": [
      {
        "q": "¿Qué seguros puede intermediar el agente con Cédula A1?",
        "options": [
          "Seguros de Vida Individual y Gastos Médicos Mayores Individual",
          "Todos los seguros de personas y daños",
          "Únicamente seguros de autos y hogar",
          "Seguros colectivos y fianzas empresariales"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Qué seguros puede intermediar el agente con Cédula A1?",
        "options": [
          "Seguros de Vida Individual y Gastos Médicos Mayores Individual",
          "Todos los seguros de personas y daños",
          "Únicamente seguros de autos y hogar",
          "Seguros colectivos y fianzas empresariales"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Agentes de Seguros: ¿Qué seguros puede intermediar el agente con Cédula A1?",
        "options": [
          "Seguros de Vida Individual y Gastos Médicos Mayores Individual",
          "Todos los seguros de personas y daños",
          "Únicamente seguros de autos y hogar",
          "Seguros colectivos y fianzas empresariales"
        ],
        "c": 0
      }
    ],
    "e": "La Cédula A1 permite la intermediación de Seguros de Vida Individual y Gastos Médicos Mayores Individual."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "variants": [
      {
        "q": "¿Cómo se determina la aprobación del examen de Cédula A1?",
        "options": [
          "Por módulo individual: se deben aprobar todos los módulos, no se promedia",
          "Por promedio general de los tres módulos",
          "Con aprobar al menos dos de los tres módulos",
          "Con una entrevista adicional ante la CNSF"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cómo se determina la aprobación del examen de Cédula A1?",
        "options": [
          "Por módulo individual: se deben aprobar todos los módulos, no se promedia",
          "Por promedio general de los tres módulos",
          "Con aprobar al menos dos de los tres módulos",
          "Con una entrevista adicional ante la CNSF"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Agentes de Seguros: ¿Cómo se determina la aprobación del examen de Cédula A1?",
        "options": [
          "Por módulo individual: se deben aprobar todos los módulos, no se promedia",
          "Por promedio general de los tres módulos",
          "Con aprobar al menos dos de los tres módulos",
          "Con una entrevista adicional ante la CNSF"
        ],
        "c": 0
      }
    ],
    "e": "La aprobación es POR MÓDULO individual, no por promedio general. Si se reprueba un módulo, solo se vuelve a pagar y agendar ese módulo específico, conservando los aprobados."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "variants": [
      {
        "q": "¿Cuál es la sanción máxima en la escala de la CNSF para agentes de seguros?",
        "options": [
          "Revocación definitiva de la cédula, sin posibilidad de recuperarla o volver a tramitarla",
          "Multa de 500 UMAs",
          "Suspensión temporal por 5 años",
          "Amonestación pública en el Diario Oficial"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuál es la sanción máxima en la escala de la CNSF para agentes de seguros?",
        "options": [
          "Revocación definitiva de la cédula, sin posibilidad de recuperarla o volver a tramitarla",
          "Multa de 500 UMAs",
          "Suspensión temporal por 5 años",
          "Amonestación pública en el Diario Oficial"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Agentes de Seguros: ¿Cuál es la sanción máxima en la escala de la CNSF para agentes de seguros?",
        "options": [
          "Revocación definitiva de la cédula, sin posibilidad de recuperarla o volver a tramitarla",
          "Multa de 500 UMAs",
          "Suspensión temporal por 5 años",
          "Amonestación pública en el Diario Oficial"
        ],
        "c": 0
      }
    ],
    "e": "Escala de sanciones (de menor a mayor): 1) Amonestación (3 en un mismo año causan suspensión), 2) Suspensión temporal, 3) Multa (en UMAs), 4) Revocación definitiva: cancelación permanente de la cédula sin posibilidad de recuperarla."
  },
  {
    "m": 1,
    "t": "Instituciones Reguladoras",
    "variants": [
      {
        "q": "¿Cuál es la forma jurídica de una aseguradora tradicional en México?",
        "options": [
          "Sociedad Anónima (persona moral) constituida con fin de lucro",
          "Asociación civil sin fin de lucro",
          "Fideicomiso público federal",
          "Sociedad cooperativa de ahorro"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuál es la forma jurídica de una aseguradora tradicional en México?",
        "options": [
          "Sociedad Anónima (persona moral) constituida con fin de lucro",
          "Asociación civil sin fin de lucro",
          "Fideicomiso público federal",
          "Sociedad cooperativa de ahorro"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Instituciones Reguladoras: ¿Cuál es la forma jurídica de una aseguradora tradicional en México?",
        "options": [
          "Sociedad Anónima (persona moral) constituida con fin de lucro",
          "Asociación civil sin fin de lucro",
          "Fideicomiso público federal",
          "Sociedad cooperativa de ahorro"
        ],
        "c": 0
      }
    ],
    "e": "La aseguradora tradicional es una persona moral (Sociedad Anónima) con fin de lucro y alcance nacional e internacional; a diferencia de la Sociedad Mutualista, que es una asociación de personas sin fin de lucro y alcance limitado."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "variants": [
      {
        "q": "El principio de Buena Fe (Ubérrima Fides) del contrato de seguro consiste en que:",
        "options": [
          "Se asume que todo lo declarado por el contratante y asegurado en la solicitud es verídico, sin necesidad de comprobarlo al inicio",
          "La aseguradora debe verificar con investigadores cada declaración antes de emitir",
          "El asegurado puede modificar sus declaraciones durante el primer año",
          "El agente es responsable legal de las declaraciones del cliente"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: El principio de Buena Fe (Ubérrima Fides) del contrato de seguro consiste en que:",
        "options": [
          "Se asume que todo lo declarado por el contratante y asegurado en la solicitud es verídico, sin necesidad de comprobarlo al inicio",
          "La aseguradora debe verificar con investigadores cada declaración antes de emitir",
          "El asegurado puede modificar sus declaraciones durante el primer año",
          "El agente es responsable legal de las declaraciones del cliente"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a El Contrato de Seguro: El principio de Buena Fe (Ubérrima Fides) del contrato de seguro consiste en que:",
        "options": [
          "Se asume que todo lo declarado por el contratante y asegurado en la solicitud es verídico, sin necesidad de comprobarlo al inicio",
          "La aseguradora debe verificar con investigadores cada declaración antes de emitir",
          "El asegurado puede modificar sus declaraciones durante el primer año",
          "El agente es responsable legal de las declaraciones del cliente"
        ],
        "c": 0
      }
    ],
    "e": "Por el principio de Ubérrima Fides (máxima buena fe) se asume que todo lo declarado en la solicitud es verídico sin comprobarlo al inicio. Por eso la omisión o inexacta declaración permite a la aseguradora rescindir el contrato."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "variants": [
      {
        "q": "El descuento por 'Riesgo Preferente' (3 a 5 años de edad descontados) se caracteriza porque:",
        "options": [
          "Requiere aprobación del área médica mediante estudios específicos y debe solicitarse expresamente",
          "Se aplica automáticamente a todos los no fumadores",
          "Se acumula con el descuento de mujer y no fumador",
          "Aplica solo a mayores de 60 años"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: El descuento por 'Riesgo Preferente' (3 a 5 años de edad descontados) se caracteriza porque:",
        "options": [
          "Requiere aprobación del área médica mediante estudios específicos y debe solicitarse expresamente",
          "Se aplica automáticamente a todos los no fumadores",
          "Se acumula con el descuento de mujer y no fumador",
          "Aplica solo a mayores de 60 años"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Suscripción: El descuento por 'Riesgo Preferente' (3 a 5 años de edad descontados) se caracteriza porque:",
        "options": [
          "Requiere aprobación del área médica mediante estudios específicos y debe solicitarse expresamente",
          "Se aplica automáticamente a todos los no fumadores",
          "Se acumula con el descuento de mujer y no fumador",
          "Aplica solo a mayores de 60 años"
        ],
        "c": 0
      }
    ],
    "e": "Descuentos por años de edad: No fumador (1–2 años), Mujer (1–3 años) y Riesgo Preferente (3–5 años). El preferente requiere aprobación del área médica con estudios específicos y solicitud expresa. Recuerda: los descuentos NO son acumulables, solo se otorga uno."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Valores Garantizados",
    "variants": [
      {
        "q": "Si un recibo de prima queda pendiente de pago, la aseguradora puede tomar dinero de la reserva matemática para cubrirlo y evitar que la póliza se cancele. Este valor garantizado se llama:",
        "options": [
          "Préstamo Automático",
          "Préstamo Ordinario",
          "Rescate",
          "Dividendo anticipado"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Si un recibo de prima queda pendiente de pago, la aseguradora puede tomar dinero de la reserva matemática para cubrirlo y evitar que la póliza se cancele. Este valor garantizado se llama:",
        "options": [
          "Préstamo Automático",
          "Préstamo Ordinario",
          "Rescate",
          "Dividendo anticipado"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Valores Garantizados: Si un recibo de prima queda pendiente de pago, la aseguradora puede tomar dinero de la reserva matemática para cubrirlo y evitar que la póliza se cancele. Este valor garantizado se llama:",
        "options": [
          "Préstamo Automático",
          "Préstamo Ordinario",
          "Rescate",
          "Dividendo anticipado"
        ],
        "c": 0
      }
    ],
    "e": "El Préstamo puede ser Ordinario (el asegurado lo solicita formalmente con cargo a su reserva) o Automático (la aseguradora toma de la reserva para cubrir un recibo pendiente y evitar la cancelación)."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Valores Garantizados",
    "variants": [
      {
        "q": "Al convertir la póliza a Seguro Saldado o Prorrogado, ¿puede el cliente revertir el cambio años después?",
        "options": [
          "No: la póliza queda bloqueada (candado) y no puede regresar al plan original",
          "Sí, en cualquier momento pagando las primas atrasadas",
          "Sí, pero solo durante el primer año posterior a la conversión",
          "Solo si la aseguradora lo autoriza por escrito cada aniversario"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Al convertir la póliza a Seguro Saldado o Prorrogado, ¿puede el cliente revertir el cambio años después?",
        "options": [
          "No: la póliza queda bloqueada (candado) y no puede regresar al plan original",
          "Sí, en cualquier momento pagando las primas atrasadas",
          "Sí, pero solo durante el primer año posterior a la conversión",
          "Solo si la aseguradora lo autoriza por escrito cada aniversario"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Valores Garantizados: Al convertir la póliza a Seguro Saldado o Prorrogado, ¿puede el cliente revertir el cambio años después?",
        "options": [
          "No: la póliza queda bloqueada (candado) y no puede regresar al plan original",
          "Sí, en cualquier momento pagando las primas atrasadas",
          "Sí, pero solo durante el primer año posterior a la conversión",
          "Solo si la aseguradora lo autoriza por escrito cada aniversario"
        ],
        "c": 0
      }
    ],
    "e": "Al optar por Seguro Saldado o Prorrogado la póliza queda bloqueada con un candado: el cliente NO puede revertir el cambio ni regresar al plan original, y ya no vuelve a realizar aportaciones."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Valores Garantizados",
    "variants": [
      {
        "q": "Los dividendos de una póliza de vida se caracterizan por:",
        "options": [
          "No estar garantizados y entregarse siempre a favor del asegurado",
          "Estar garantizados por ley y pagarse cada aniversario",
          "Repartirse entre los accionistas de la aseguradora",
          "Formar parte obligatoria de la prima de tarifa"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Los dividendos de una póliza de vida se caracterizan por:",
        "options": [
          "No estar garantizados y entregarse siempre a favor del asegurado",
          "Estar garantizados por ley y pagarse cada aniversario",
          "Repartirse entre los accionistas de la aseguradora",
          "Formar parte obligatoria de la prima de tarifa"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Valores Garantizados: Los dividendos de una póliza de vida se caracterizan por:",
        "options": [
          "No estar garantizados y entregarse siempre a favor del asegurado",
          "Estar garantizados por ley y pagarse cada aniversario",
          "Repartirse entre los accionistas de la aseguradora",
          "Formar parte obligatoria de la prima de tarifa"
        ],
        "c": 0
      }
    ],
    "e": "Los dividendos son ganancias provenientes de excedentes financieros de la compañía: NO están garantizados (dependen de las utilidades) y siempre se entregan a favor del ASEGURADO, nunca de socios, accionistas o empleados."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Básicas",
    "variants": [
      {
        "q": "¿Cuáles son las edades oficiales de contratación de un seguro de vida individual?",
        "options": [
          "De 12 a 70 años",
          "De 18 a 65 años",
          "De 0 a 99 años",
          "De 16 a 75 años"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuáles son las edades oficiales de contratación de un seguro de vida individual?",
        "options": [
          "De 12 a 70 años",
          "De 18 a 65 años",
          "De 0 a 99 años",
          "De 16 a 75 años"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Coberturas Básicas: ¿Cuáles son las edades oficiales de contratación de un seguro de vida individual?",
        "options": [
          "De 12 a 70 años",
          "De 18 a 65 años",
          "De 0 a 99 años",
          "De 16 a 75 años"
        ],
        "c": 0
      }
    ],
    "e": "Los límites oficiales de contratación del seguro de vida son de 12 a 70 años. La edad mínima de 12 años la fija la ley para la cobertura de fallecimiento (antes opera el contraseguro)."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Básicas",
    "variants": [
      {
        "q": "¿Cuáles son los 3 grandes riesgos que cubre el seguro de vida?",
        "options": [
          "Vivir poco (muerte prematura), vivir mucho (vejez sin recursos) e invalidez",
          "Enfermedad, desempleo y accidentes",
          "Muerte, robo y responsabilidad civil",
          "Fallecimiento, gastos médicos y educación"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuáles son los 3 grandes riesgos que cubre el seguro de vida?",
        "options": [
          "Vivir poco (muerte prematura), vivir mucho (vejez sin recursos) e invalidez",
          "Enfermedad, desempleo y accidentes",
          "Muerte, robo y responsabilidad civil",
          "Fallecimiento, gastos médicos y educación"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Coberturas Básicas: ¿Cuáles son los 3 grandes riesgos que cubre el seguro de vida?",
        "options": [
          "Vivir poco (muerte prematura), vivir mucho (vejez sin recursos) e invalidez",
          "Enfermedad, desempleo y accidentes",
          "Muerte, robo y responsabilidad civil",
          "Fallecimiento, gastos médicos y educación"
        ],
        "c": 0
      }
    ],
    "e": "Los 3 grandes riesgos del seguro de vida: 1) Vivir poco (fallecimiento prematuro), 2) Vivir mucho (vejez o retiro sin recursos económicos) y 3) Invalidez (enfermedad o accidente que incapacite laboralmente)."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Planes Dotal y Vitalicio",
    "variants": [
      {
        "q": "El plan de seguro de vida que ÚNICAMENTE acumula ahorro y no cuenta con cobertura de fallecimiento es el:",
        "options": [
          "Dotal Puro",
          "Dotal Mixto",
          "Temporal",
          "Vitalicio"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: El plan de seguro de vida que ÚNICAMENTE acumula ahorro y no cuenta con cobertura de fallecimiento es el:",
        "options": [
          "Dotal Puro",
          "Dotal Mixto",
          "Temporal",
          "Vitalicio"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Planes Dotal y Vitalicio: El plan de seguro de vida que ÚNICAMENTE acumula ahorro y no cuenta con cobertura de fallecimiento es el:",
        "options": [
          "Dotal Puro",
          "Dotal Mixto",
          "Temporal",
          "Vitalicio"
        ],
        "c": 0
      }
    ],
    "e": "El Dotal Puro solo acumula ahorro (supervivencia) y NO tiene cobertura de fallecimiento. El Dotal Mixto combina ahorro + fallecimiento y es el plan más caro del mercado."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Planes Dotal y Vitalicio",
    "variants": [
      {
        "q": "El plan Vitalicio en su modalidad de 'Pagos Limitados' consiste en:",
        "options": [
          "Pagar primas solo durante 10 o 20 años y quedar cubierto por fallecimiento toda la vida",
          "Pagar primas de por vida con cobertura de 10 o 20 años",
          "Cubrir el fallecimiento solo si ocurre en los primeros 10 años",
          "Un plan de ahorro sin cobertura de fallecimiento"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: El plan Vitalicio en su modalidad de 'Pagos Limitados' consiste en:",
        "options": [
          "Pagar primas solo durante 10 o 20 años y quedar cubierto por fallecimiento toda la vida",
          "Pagar primas de por vida con cobertura de 10 o 20 años",
          "Cubrir el fallecimiento solo si ocurre en los primeros 10 años",
          "Un plan de ahorro sin cobertura de fallecimiento"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Planes Dotal y Vitalicio: El plan Vitalicio en su modalidad de 'Pagos Limitados' consiste en:",
        "options": [
          "Pagar primas solo durante 10 o 20 años y quedar cubierto por fallecimiento toda la vida",
          "Pagar primas de por vida con cobertura de 10 o 20 años",
          "Cubrir el fallecimiento solo si ocurre en los primeros 10 años",
          "Un plan de ahorro sin cobertura de fallecimiento"
        ],
        "c": 0
      }
    ],
    "e": "El plan Vitalicio cubre toda la vida y puede ser Ordinario (pago de primas de por vida) o de Pagos Limitados (paga 10 o 20 años y queda cubierto para siempre)."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Planes Dotal y Vitalicio",
    "variants": [
      {
        "q": "Liquidar la diferencia entre la reserva matemática actual y la que debe constituirse para el nuevo seguro es una obligación que adquiere el asegurado cuando:",
        "options": [
          "Cambia su plan temporal a uno dotal",
          "Solicita un préstamo ordinario",
          "Convierte su póliza a seguro saldado",
          "Designa un nuevo beneficiario"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Liquidar la diferencia entre la reserva matemática actual y la que debe constituirse para el nuevo seguro es una obligación que adquiere el asegurado cuando:",
        "options": [
          "Cambia su plan temporal a uno dotal",
          "Solicita un préstamo ordinario",
          "Convierte su póliza a seguro saldado",
          "Designa un nuevo beneficiario"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Planes Dotal y Vitalicio: Liquidar la diferencia entre la reserva matemática actual y la que debe constituirse para el nuevo seguro es una obligación que adquiere el asegurado cuando:",
        "options": [
          "Cambia su plan temporal a uno dotal",
          "Solicita un préstamo ordinario",
          "Convierte su póliza a seguro saldado",
          "Designa un nuevo beneficiario"
        ],
        "c": 0
      }
    ],
    "e": "Al cambiar un plan temporal a uno dotal, el asegurado debe liquidar la diferencia entre la reserva matemática actual y la que se requiere constituir para el nuevo plan (el dotal acumula más reserva). Reactivo textual del examen de prueba."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Básicas",
    "variants": [
      {
        "q": "¿Qué se requiere para que sea válido el contrato de seguro de vida de un asegurado de 14 años de edad?",
        "options": [
          "Que el menor y su representante legal otorguen su consentimiento",
          "Únicamente el consentimiento del padre o tutor",
          "Únicamente el consentimiento del menor",
          "Autorización de un juez de lo familiar"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Qué se requiere para que sea válido el contrato de seguro de vida de un asegurado de 14 años de edad?",
        "options": [
          "Que el menor y su representante legal otorguen su consentimiento",
          "Únicamente el consentimiento del padre o tutor",
          "Únicamente el consentimiento del menor",
          "Autorización de un juez de lo familiar"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Coberturas Básicas: ¿Qué se requiere para que sea válido el contrato de seguro de vida de un asegurado de 14 años de edad?",
        "options": [
          "Que el menor y su representante legal otorguen su consentimiento",
          "Únicamente el consentimiento del padre o tutor",
          "Únicamente el consentimiento del menor",
          "Autorización de un juez de lo familiar"
        ],
        "c": 0
      }
    ],
    "e": "Para un menor entre 12 y 18 años (ej. 14 años), el contrato de vida es válido cuando el menor Y su representante legal otorgan su consentimiento. Reactivo textual del examen de prueba."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Básicas",
    "variants": [
      {
        "q": "¿Cuál es el plazo que tiene la aseguradora para comunicarle al asegurado la rescisión del contrato por omisión o inexacta declaración?",
        "options": [
          "30 días naturales",
          "15 días naturales",
          "45 días naturales",
          "60 días naturales"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuál es el plazo que tiene la aseguradora para comunicarle al asegurado la rescisión del contrato por omisión o inexacta declaración?",
        "options": [
          "30 días naturales",
          "15 días naturales",
          "45 días naturales",
          "60 días naturales"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Coberturas Básicas: ¿Cuál es el plazo que tiene la aseguradora para comunicarle al asegurado la rescisión del contrato por omisión o inexacta declaración?",
        "options": [
          "30 días naturales",
          "15 días naturales",
          "45 días naturales",
          "60 días naturales"
        ],
        "c": 0
      }
    ],
    "e": "La aseguradora cuenta con 30 días naturales para comunicar al asegurado la rescisión del contrato por omisión o inexacta declaración. Reactivo textual del examen de prueba."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Básicas",
    "variants": [
      {
        "q": "¿Cuáles son los 3 documentos base del asegurado para reclamar una póliza de vida (incluso en suicidio procedente)?",
        "options": [
          "Póliza, acta de nacimiento y acta de defunción del asegurado",
          "Póliza, acta de matrimonio y credencial del beneficiario",
          "Acta de defunción, dictamen forense y acta del ministerio público",
          "Póliza, comprobante de domicilio y últimas 3 primas pagadas"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuáles son los 3 documentos base del asegurado para reclamar una póliza de vida (incluso en suicidio procedente)?",
        "options": [
          "Póliza, acta de nacimiento y acta de defunción del asegurado",
          "Póliza, acta de matrimonio y credencial del beneficiario",
          "Acta de defunción, dictamen forense y acta del ministerio público",
          "Póliza, comprobante de domicilio y últimas 3 primas pagadas"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Coberturas Básicas: ¿Cuáles son los 3 documentos base del asegurado para reclamar una póliza de vida (incluso en suicidio procedente)?",
        "options": [
          "Póliza, acta de nacimiento y acta de defunción del asegurado",
          "Póliza, acta de matrimonio y credencial del beneficiario",
          "Acta de defunción, dictamen forense y acta del ministerio público",
          "Póliza, comprobante de domicilio y últimas 3 primas pagadas"
        ],
        "c": 0
      }
    ],
    "e": "Los 3 documentos base para la reclamación de vida son: 1) la Póliza, 2) el Acta de nacimiento del asegurado y 3) el Acta de defunción. Son los mismos incluso cuando la muerte es por suicidio procedente (después de 2 años)."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Básicas",
    "variants": [
      {
        "q": "En el fideicomiso del seguro de vida, quien contrata y da las instrucciones es el ____, y quien recibe el dinero o bienes es el ____.",
        "options": [
          "Fideicomitente / Fideicomisario",
          "Fideicomisario / Fideicomitente",
          "Fiduciario / Fideicomitente",
          "Fideicomisario / Fiduciario"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: En el fideicomiso del seguro de vida, quien contrata y da las instrucciones es el ____, y quien recibe el dinero o bienes es el ____.",
        "options": [
          "Fideicomitente / Fideicomisario",
          "Fideicomisario / Fideicomitente",
          "Fiduciario / Fideicomitente",
          "Fideicomisario / Fiduciario"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Coberturas Básicas: En el fideicomiso del seguro de vida, quien contrata y da las instrucciones es el ____, y quien recibe el dinero o bienes es el ____.",
        "options": [
          "Fideicomitente / Fideicomisario",
          "Fideicomisario / Fideicomitente",
          "Fiduciario / Fideicomitente",
          "Fideicomisario / Fiduciario"
        ],
        "c": 0
      }
    ],
    "e": "Las 3 figuras del fideicomiso: Fideicomitente = contratante (ordena e instruye), Fideicomisario = beneficiario (recibe los bienes) y Fideusuario/Fiduciario = la institución o aseguradora que administra el fondo."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Adicionales",
    "variants": [
      {
        "q": "Para que proceda el pago de la cobertura de Invalidez en el seguro de vida, la invalidez debe ser:",
        "options": [
          "Total y permanente, avalada por IMSS/ISSSTE o una institución médica",
          "Parcial y temporal, con constancia del patrón",
          "Cualquier incapacidad mayor a 30 días",
          "Determinada exclusivamente por el agente de seguros"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Para que proceda el pago de la cobertura de Invalidez en el seguro de vida, la invalidez debe ser:",
        "options": [
          "Total y permanente, avalada por IMSS/ISSSTE o una institución médica",
          "Parcial y temporal, con constancia del patrón",
          "Cualquier incapacidad mayor a 30 días",
          "Determinada exclusivamente por el agente de seguros"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Coberturas Adicionales: Para que proceda el pago de la cobertura de Invalidez en el seguro de vida, la invalidez debe ser:",
        "options": [
          "Total y permanente, avalada por IMSS/ISSSTE o una institución médica",
          "Parcial y temporal, con constancia del patrón",
          "Cualquier incapacidad mayor a 30 días",
          "Determinada exclusivamente por el agente de seguros"
        ],
        "c": 0
      }
    ],
    "e": "La invalidez cubierta debe ser TOTAL Y PERMANENTE (sin posibilidad de recuperación), avalada por IMSS, ISSSTE o institución médica. Puede pagarse como suma asegurada única, renta mensual o mediante exención de pago de primas."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Adicionales",
    "variants": [
      {
        "q": "Si el asegurado fallece manejando en estado de ebriedad comprobado, ¿qué ocurre con las coberturas de su póliza de vida?",
        "options": [
          "Se paga la cobertura básica de fallecimiento, pero se excluye la adicional de Muerte Accidental",
          "No se paga absolutamente nada",
          "Se pagan todas las coberturas, incluida Muerte Accidental",
          "Solo se devuelven las primas pagadas"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Si el asegurado fallece manejando en estado de ebriedad comprobado, ¿qué ocurre con las coberturas de su póliza de vida?",
        "options": [
          "Se paga la cobertura básica de fallecimiento, pero se excluye la adicional de Muerte Accidental",
          "No se paga absolutamente nada",
          "Se pagan todas las coberturas, incluida Muerte Accidental",
          "Solo se devuelven las primas pagadas"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Vida - Coberturas Adicionales: Si el asegurado fallece manejando en estado de ebriedad comprobado, ¿qué ocurre con las coberturas de su póliza de vida?",
        "options": [
          "Se paga la cobertura básica de fallecimiento, pero se excluye la adicional de Muerte Accidental",
          "No se paga absolutamente nada",
          "Se pagan todas las coberturas, incluida Muerte Accidental",
          "Solo se devuelven las primas pagadas"
        ],
        "c": 0
      }
    ],
    "e": "Regla clave: las exclusiones aplican a las coberturas ADICIONALES, no a la básica. Con alcohol o drogas comprobados se paga la cobertura básica de fallecimiento, pero se excluye la adicional de Muerte Accidental."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "variants": [
      {
        "q": "¿A qué edad se cancela forzosamente la póliza de Accidentes Personales?",
        "options": [
          "A los 70 años",
          "A los 65 años",
          "A los 75 años",
          "Nunca se cancela por edad"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿A qué edad se cancela forzosamente la póliza de Accidentes Personales?",
        "options": [
          "A los 70 años",
          "A los 65 años",
          "A los 75 años",
          "Nunca se cancela por edad"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Accidentes Personales - Exclusiones y Coberturas: ¿A qué edad se cancela forzosamente la póliza de Accidentes Personales?",
        "options": [
          "A los 70 años",
          "A los 65 años",
          "A los 75 años",
          "Nunca se cancela por edad"
        ],
        "c": 0
      }
    ],
    "e": "En AP las edades son: contratación mínima 12 años, máxima 65 años, y el plan concluye o se cancela forzosamente a los 70 años (es un plan temporal)."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "variants": [
      {
        "q": "La cobertura de Incapacidad (total o parcial) en Accidentes Personales requiere una edad mínima de:",
        "options": [
          "16 años (edad legal para trabajar)",
          "12 años",
          "18 años",
          "21 años"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: La cobertura de Incapacidad (total o parcial) en Accidentes Personales requiere una edad mínima de:",
        "options": [
          "16 años (edad legal para trabajar)",
          "12 años",
          "18 años",
          "21 años"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Accidentes Personales - Exclusiones y Coberturas: La cobertura de Incapacidad (total o parcial) en Accidentes Personales requiere una edad mínima de:",
        "options": [
          "16 años (edad legal para trabajar)",
          "12 años",
          "18 años",
          "21 años"
        ],
        "c": 0
      }
    ],
    "e": "La cobertura de Incapacidad Total/Parcial en AP requiere edad mínima de 16 años, porque es la edad legal para trabajar (la incapacidad se relaciona con la pérdida de capacidad laboral)."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "variants": [
      {
        "q": "En Accidentes Personales, el factor que NO influye en la tarifa (hombres y mujeres pagan exactamente lo mismo) es:",
        "options": [
          "El sexo / género",
          "La ocupación",
          "La edad",
          "La suma asegurada"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: En Accidentes Personales, el factor que NO influye en la tarifa (hombres y mujeres pagan exactamente lo mismo) es:",
        "options": [
          "El sexo / género",
          "La ocupación",
          "La edad",
          "La suma asegurada"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Accidentes Personales - Exclusiones y Coberturas: En Accidentes Personales, el factor que NO influye en la tarifa (hombres y mujeres pagan exactamente lo mismo) es:",
        "options": [
          "El sexo / género",
          "La ocupación",
          "La edad",
          "La suma asegurada"
        ],
        "c": 0
      }
    ],
    "e": "En AP el factor determinante es la OCUPACIÓN, y también influyen edad y suma asegurada. El factor indiferente es el SEXO: hombres y mujeres pagan la misma tarifa. Reactivo textual del examen de prueba ('Excepto: Sexo')."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Preexistencias y Tiempos de Espera",
    "variants": [
      {
        "q": "¿Cuál es el periodo de espera en GMM para embarazo/maternidad y para padecimientos de nariz y senos paranasales, respectivamente?",
        "options": [
          "10 meses y 2 años",
          "1 año y 5 años",
          "6 meses y 1 año",
          "2 años y 10 meses"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuál es el periodo de espera en GMM para embarazo/maternidad y para padecimientos de nariz y senos paranasales, respectivamente?",
        "options": [
          "10 meses y 2 años",
          "1 año y 5 años",
          "6 meses y 1 año",
          "2 años y 10 meses"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Gastos Médicos Mayores - Preexistencias y Tiempos de Espera: ¿Cuál es el periodo de espera en GMM para embarazo/maternidad y para padecimientos de nariz y senos paranasales, respectivamente?",
        "options": [
          "10 meses y 2 años",
          "1 año y 5 años",
          "6 meses y 1 año",
          "2 años y 10 meses"
        ],
        "c": 0
      }
    ],
    "e": "Periodos de espera en GMM: 10 meses → embarazo/maternidad; 1 año → tumoración mamaria, histerectomía, hemorroides, amigdalitis; 2 años → nariz y senos paranasales; 5 años → SIDA y cáncer. Recuerda: por ACCIDENTE los periodos se eliminan."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Deducible y Coaseguro",
    "variants": [
      {
        "q": "El plazo estándar de ley para pagar la prima una vez vencido el recibo (Periodo de Gracia) en GMM es de ____; si no se paga, inicia el ____.",
        "options": [
          "30 días / Periodo al Descubierto (póliza suspendida)",
          "10 días / Periodo de Espera",
          "45 días / Periodo de Disputabilidad",
          "60 días / Rescate automático"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: El plazo estándar de ley para pagar la prima una vez vencido el recibo (Periodo de Gracia) en GMM es de ____; si no se paga, inicia el ____.",
        "options": [
          "30 días / Periodo al Descubierto (póliza suspendida)",
          "10 días / Periodo de Espera",
          "45 días / Periodo de Disputabilidad",
          "60 días / Rescate automático"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Gastos Médicos Mayores - Deducible y Coaseguro: El plazo estándar de ley para pagar la prima una vez vencido el recibo (Periodo de Gracia) en GMM es de ____; si no se paga, inicia el ____.",
        "options": [
          "30 días / Periodo al Descubierto (póliza suspendida)",
          "10 días / Periodo de Espera",
          "45 días / Periodo de Disputabilidad",
          "60 días / Rescate automático"
        ],
        "c": 0
      }
    ],
    "e": "El Periodo de Gracia estándar de ley es de 30 días. Al día siguiente de vencido sin pago inicia el Periodo al Descubierto: la póliza queda suspendida y la aseguradora no cubre ningún siniestro ocurrido en ese lapso."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Preexistencias y Tiempos de Espera",
    "variants": [
      {
        "q": "Una enfermedad CONGÉNITA es aquella que:",
        "options": [
          "Se nace con ella o se contrae durante la gestación en el útero materno",
          "Se diagnostica después de contratar la póliza",
          "Aparece únicamente en la vejez",
          "Se contagia de persona a persona"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Una enfermedad CONGÉNITA es aquella que:",
        "options": [
          "Se nace con ella o se contrae durante la gestación en el útero materno",
          "Se diagnostica después de contratar la póliza",
          "Aparece únicamente en la vejez",
          "Se contagia de persona a persona"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Gastos Médicos Mayores - Preexistencias y Tiempos de Espera: Una enfermedad CONGÉNITA es aquella que:",
        "options": [
          "Se nace con ella o se contrae durante la gestación en el útero materno",
          "Se diagnostica después de contratar la póliza",
          "Aparece únicamente en la vejez",
          "Se contagia de persona a persona"
        ],
        "c": 0
      }
    ],
    "e": "Enfermedad congénita: padecimiento con el que se nace o que se contrae durante la gestación en el útero materno. En la póliza inicial de GMM, los padecimientos congénitos NO están cubiertos (reactivo del examen de prueba)."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Deducible y Coaseguro",
    "variants": [
      {
        "q": "Señala el grupo de gastos que SÍ están cubiertos por la póliza de Gastos Médicos Mayores:",
        "options": [
          "Histerectomía, cama extra para el acompañante y exámenes de gabinete de operaciones cubiertas",
          "Suite hospitalaria, estacionamiento y gastos del acompañante",
          "Check-ups preventivos, anteojos y alimentación del acompañante",
          "Tratamiento dental, calvicie y acupuntura"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Señala el grupo de gastos que SÍ están cubiertos por la póliza de Gastos Médicos Mayores:",
        "options": [
          "Histerectomía, cama extra para el acompañante y exámenes de gabinete de operaciones cubiertas",
          "Suite hospitalaria, estacionamiento y gastos del acompañante",
          "Check-ups preventivos, anteojos y alimentación del acompañante",
          "Tratamiento dental, calvicie y acupuntura"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Gastos Médicos Mayores - Deducible y Coaseguro: Señala el grupo de gastos que SÍ están cubiertos por la póliza de Gastos Médicos Mayores:",
        "options": [
          "Histerectomía, cama extra para el acompañante y exámenes de gabinete de operaciones cubiertas",
          "Suite hospitalaria, estacionamiento y gastos del acompañante",
          "Check-ups preventivos, anteojos y alimentación del acompañante",
          "Tratamiento dental, calvicie y acupuntura"
        ],
        "c": 0
      }
    ],
    "e": "Del examen de prueba: los cubiertos son Histerectomía, Cama extra para el acompañante y Exámenes de gabinete para operaciones cubiertas (B, C, E). Suite, estacionamiento, gastos/alimentación del acompañante, check-ups, anteojos, dental, calvicie y acupuntura son exclusiones."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Deducible y Coaseguro",
    "variants": [
      {
        "q": "Los tratamientos médicos o quirúrgicos por esterilidad, infertilidad, control de natalidad e impotencia sexual se consideran en GMM:",
        "options": [
          "Riesgos no cubiertos, pero que pueden serlo mediante convenio expreso",
          "Riesgos cubiertos en la cobertura básica",
          "Cubiertos solo si derivan de un accidente",
          "Cubiertos tras 5 años de espera"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Los tratamientos médicos o quirúrgicos por esterilidad, infertilidad, control de natalidad e impotencia sexual se consideran en GMM:",
        "options": [
          "Riesgos no cubiertos, pero que pueden serlo mediante convenio expreso",
          "Riesgos cubiertos en la cobertura básica",
          "Cubiertos solo si derivan de un accidente",
          "Cubiertos tras 5 años de espera"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Gastos Médicos Mayores - Deducible y Coaseguro: Los tratamientos médicos o quirúrgicos por esterilidad, infertilidad, control de natalidad e impotencia sexual se consideran en GMM:",
        "options": [
          "Riesgos no cubiertos, pero que pueden serlo mediante convenio expreso",
          "Riesgos cubiertos en la cobertura básica",
          "Cubiertos solo si derivan de un accidente",
          "Cubiertos tras 5 años de espera"
        ],
        "c": 0
      }
    ],
    "e": "Independientemente de su causa u origen, esterilidad, infertilidad, control de natalidad e impotencia sexual son riesgos NO cubiertos que pueden ampararse mediante convenio expreso. Reactivo textual del examen de prueba."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Deducible y Coaseguro",
    "variants": [
      {
        "q": "¿Cuáles son las 3 características que definen a la red de proveedores de servicios médicos en GMM?",
        "options": [
          "Prestan servicios al asegurado, la aseguradora puede pagar directo y están en convenio con ella",
          "Realizan medicina preventiva, atienden gastos menores al deducible y cobran copago",
          "Son públicos, gratuitos y regulados por CONDUSEF",
          "No se apegan al gasto usual, cobran anticipos y operan sin convenio"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuáles son las 3 características que definen a la red de proveedores de servicios médicos en GMM?",
        "options": [
          "Prestan servicios al asegurado, la aseguradora puede pagar directo y están en convenio con ella",
          "Realizan medicina preventiva, atienden gastos menores al deducible y cobran copago",
          "Son públicos, gratuitos y regulados por CONDUSEF",
          "No se apegan al gasto usual, cobran anticipos y operan sin convenio"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Gastos Médicos Mayores - Deducible y Coaseguro: ¿Cuáles son las 3 características que definen a la red de proveedores de servicios médicos en GMM?",
        "options": [
          "Prestan servicios al asegurado, la aseguradora puede pagar directo y están en convenio con ella",
          "Realizan medicina preventiva, atienden gastos menores al deducible y cobran copago",
          "Son públicos, gratuitos y regulados por CONDUSEF",
          "No se apegan al gasto usual, cobran anticipos y operan sin convenio"
        ],
        "c": 0
      }
    ],
    "e": "La red de proveedores: 1) presta servicios al asegurado, 2) permite que la aseguradora efectúe el PAGO DIRECTO y 3) está en convenio con la aseguradora. Reactivo textual del examen de prueba (opciones 2, 3 y 6)."
  },
  {
    "m": 2,
    "t": "Seguro de Salud - Atención y Copagos",
    "variants": [
      {
        "q": "¿Cuáles son las 3 formas en que puede terminar la obligación de la aseguradora en el Seguro de Salud?",
        "options": [
          "Al certificarse la curación del padecimiento, al agotarse la suma asegurada y a los 2 años de terminada la vigencia (cuando menos)",
          "Al año del padecimiento, al cambiar de médico y al cumplir 65 años",
          "Con la primera reclamación, al agotar el deducible y por decisión del agente",
          "Al certificarse el tratamiento, a los 2 años de agotarse la suma y por inflación médica"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuáles son las 3 formas en que puede terminar la obligación de la aseguradora en el Seguro de Salud?",
        "options": [
          "Al certificarse la curación del padecimiento, al agotarse la suma asegurada y a los 2 años de terminada la vigencia (cuando menos)",
          "Al año del padecimiento, al cambiar de médico y al cumplir 65 años",
          "Con la primera reclamación, al agotar el deducible y por decisión del agente",
          "Al certificarse el tratamiento, a los 2 años de agotarse la suma y por inflación médica"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Salud - Atención y Copagos: ¿Cuáles son las 3 formas en que puede terminar la obligación de la aseguradora en el Seguro de Salud?",
        "options": [
          "Al certificarse la curación del padecimiento, al agotarse la suma asegurada y a los 2 años de terminada la vigencia (cuando menos)",
          "Al año del padecimiento, al cambiar de médico y al cumplir 65 años",
          "Con la primera reclamación, al agotar el deducible y por decisión del agente",
          "Al certificarse el tratamiento, a los 2 años de agotarse la suma y por inflación médica"
        ],
        "c": 0
      }
    ],
    "e": "Las 3 formas de terminar la obligación de la aseguradora en salud: 1) certificarse la curación del padecimiento, 2) agotarse el límite de la suma asegurada convenida y 3) transcurrir cuando menos 2 años de terminada la vigencia. Reactivo textual del examen de prueba (opciones 1, 4 y 6)."
  },
  {
    "m": 2,
    "t": "Seguro de Salud - Atención y Copagos",
    "variants": [
      {
        "q": "En el Seguro de Salud, 'restaurar' implica llevar a cabo acciones para:",
        "options": [
          "La recuperación de la salud",
          "Fomentar la salud",
          "Prevenir enfermedades",
          "Mejorar el bienestar del asegurado"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: En el Seguro de Salud, 'restaurar' implica llevar a cabo acciones para:",
        "options": [
          "La recuperación de la salud",
          "Fomentar la salud",
          "Prevenir enfermedades",
          "Mejorar el bienestar del asegurado"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Salud - Atención y Copagos: En el Seguro de Salud, 'restaurar' implica llevar a cabo acciones para:",
        "options": [
          "La recuperación de la salud",
          "Fomentar la salud",
          "Prevenir enfermedades",
          "Mejorar el bienestar del asegurado"
        ],
        "c": 0
      }
    ],
    "e": "'Restaurar' = acciones para la RECUPERACIÓN de la salud. No confundir con fomentar (promoción) ni prevenir (evitar enfermedades). Reactivo textual del examen de prueba."
  },
  {
    "m": 2,
    "t": "Seguro de Salud - Atención y Copagos",
    "variants": [
      {
        "q": "Los siguientes factores determinan el costo del Seguro de Salud, EXCEPTO:",
        "options": [
          "La ocupación",
          "Los hábitos (tabaquismo, alcoholismo)",
          "El peso (IMC)",
          "La edad y el sexo"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Los siguientes factores determinan el costo del Seguro de Salud, EXCEPTO:",
        "options": [
          "La ocupación",
          "Los hábitos (tabaquismo, alcoholismo)",
          "El peso (IMC)",
          "La edad y el sexo"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Salud - Atención y Copagos: Los siguientes factores determinan el costo del Seguro de Salud, EXCEPTO:",
        "options": [
          "La ocupación",
          "Los hábitos (tabaquismo, alcoholismo)",
          "El peso (IMC)",
          "La edad y el sexo"
        ],
        "c": 0
      }
    ],
    "e": "El costo del seguro de salud considera factores de salud: IMC (peso), hábitos como tabaquismo y alcoholismo, y edad y sexo. La OCUPACIÓN no es factor del seguro de salud: es el factor principal de Accidentes Personales. Reactivo del examen de prueba."
  },
  {
    "m": 2,
    "t": "Seguro de Salud - Atención y Copagos",
    "variants": [
      {
        "q": "Por su doble naturaleza, el rol operativo/médico de una institución de seguros de salud (clínicas, higiene, infraestructura) es vigilado por:",
        "options": [
          "La Secretaría de Salud (y CONAMED para los derechos del paciente)",
          "La CNSF y la SHCP",
          "La CONDUSEF",
          "El Consejo de Salubridad General"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Por su doble naturaleza, el rol operativo/médico de una institución de seguros de salud (clínicas, higiene, infraestructura) es vigilado por:",
        "options": [
          "La Secretaría de Salud (y CONAMED para los derechos del paciente)",
          "La CNSF y la SHCP",
          "La CONDUSEF",
          "El Consejo de Salubridad General"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Seguro de Salud - Atención y Copagos: Por su doble naturaleza, el rol operativo/médico de una institución de seguros de salud (clínicas, higiene, infraestructura) es vigilado por:",
        "options": [
          "La Secretaría de Salud (y CONAMED para los derechos del paciente)",
          "La CNSF y la SHCP",
          "La CONDUSEF",
          "El Consejo de Salubridad General"
        ],
        "c": 0
      }
    ],
    "e": "Doble regulación del seguro de salud: rol financiero (como aseguradora) → SHCP y CNSF; rol operativo (como proveedor médico) → Secretaría de Salud (autoriza y vigila infraestructura, higiene y operación) y CONAMED (defiende los derechos de los pacientes)."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Dentro del organigrama del Sistema Financiero Mexicano, el Banco de México (Banxico) opera como:",
        "options": [
          "Organismo de apoyo (staff) autónomo de la SHCP",
          "Comisión desconcentrada que supervisa a los bancos",
          "La máxima autoridad del sistema financiero",
          "Entidad defensora de los usuarios financieros"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Dentro del organigrama del Sistema Financiero Mexicano, el Banco de México (Banxico) opera como:",
        "options": [
          "Organismo de apoyo (staff) autónomo de la SHCP",
          "Comisión desconcentrada que supervisa a los bancos",
          "La máxima autoridad del sistema financiero",
          "Entidad defensora de los usuarios financieros"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: Dentro del organigrama del Sistema Financiero Mexicano, el Banco de México (Banxico) opera como:",
        "options": [
          "Organismo de apoyo (staff) autónomo de la SHCP",
          "Comisión desconcentrada que supervisa a los bancos",
          "La máxima autoridad del sistema financiero",
          "Entidad defensora de los usuarios financieros"
        ],
        "c": 0
      }
    ],
    "e": "Banxico es el banco central y opera como organismo de apoyo (staff, autónomo de las comisiones). Provee de moneda nacional al país y regula la inflación y las tasas de interés. La máxima autoridad es la SHCP y la defensa de usuarios corresponde a CONDUSEF."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Un usuario quiere presentar una reclamación contra su AFORE y otra contra su banco. ¿Ante qué organismo puede presentar AMBAS?",
        "options": [
          "CONDUSEF",
          "CONSAR",
          "CNBV",
          "Banco de México"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Un usuario quiere presentar una reclamación contra su AFORE y otra contra su banco. ¿Ante qué organismo puede presentar AMBAS?",
        "options": [
          "CONDUSEF",
          "CONSAR",
          "CNBV",
          "Banco de México"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: Un usuario quiere presentar una reclamación contra su AFORE y otra contra su banco. ¿Ante qué organismo puede presentar AMBAS?",
        "options": [
          "CONDUSEF",
          "CONSAR",
          "CNBV",
          "Banco de México"
        ],
        "c": 0
      }
    ],
    "e": "La CONDUSEF protege y defiende a los usuarios de TODO el Sistema Financiero Mexicano: atiende consultas y reclamaciones contra cualquier entidad (bancos, aseguradoras, afores, etc.). CONSAR y CNBV supervisan sectores, pero no son la ventanilla de defensa del usuario."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "¿Qué tres sectores del sistema financiero supervisa, regula y sanciona la CNBV?",
        "options": [
          "Bancario, Auxiliar de Crédito y Bursátil",
          "Seguros, Fianzas y Retiro",
          "Bancario, Seguros y Retiro",
          "Bursátil, Retiro y Fianzas"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Qué tres sectores del sistema financiero supervisa, regula y sanciona la CNBV?",
        "options": [
          "Bancario, Auxiliar de Crédito y Bursátil",
          "Seguros, Fianzas y Retiro",
          "Bancario, Seguros y Retiro",
          "Bursátil, Retiro y Fianzas"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: ¿Qué tres sectores del sistema financiero supervisa, regula y sanciona la CNBV?",
        "options": [
          "Bancario, Auxiliar de Crédito y Bursátil",
          "Seguros, Fianzas y Retiro",
          "Bancario, Seguros y Retiro",
          "Bursátil, Retiro y Fianzas"
        ],
        "c": 0
      }
    ],
    "e": "Las tres comisiones se reparten los 5 sectores: CNBV → Bancario, Auxiliar de Crédito y Bursátil; CNSF → Seguros y Fianzas; CONSAR → Ahorro para el Retiro."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Las SIEFOREs están segmentadas por generaciones. ¿Aproximadamente cada cuántos años cambia la SIEFORE que invierte el dinero de un trabajador?",
        "options": [
          "Cada 8 o 9 años, de acuerdo con la edad de retiro del grupo",
          "Cada año, según el rendimiento obtenido",
          "Nunca cambia; es la misma toda la vida laboral",
          "Cada 3 años, junto con el refrendo de la cédula"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Las SIEFOREs están segmentadas por generaciones. ¿Aproximadamente cada cuántos años cambia la SIEFORE que invierte el dinero de un trabajador?",
        "options": [
          "Cada 8 o 9 años, de acuerdo con la edad de retiro del grupo",
          "Cada año, según el rendimiento obtenido",
          "Nunca cambia; es la misma toda la vida laboral",
          "Cada 3 años, junto con el refrendo de la cédula"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: Las SIEFOREs están segmentadas por generaciones. ¿Aproximadamente cada cuántos años cambia la SIEFORE que invierte el dinero de un trabajador?",
        "options": [
          "Cada 8 o 9 años, de acuerdo con la edad de retiro del grupo",
          "Cada año, según el rendimiento obtenido",
          "Nunca cambia; es la misma toda la vida laboral",
          "Cada 3 años, junto con el refrendo de la cédula"
        ],
        "c": 0
      }
    ],
    "e": "Las SIEFOREs cambian aproximadamente cada 8 o 9 años según la edad de retiro del grupo de trabajadores, mientras que la AFORE permanece constante a menos que el trabajador decida cambiarse."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Una entidad que otorga crédito únicamente para un sector específico (ej. automotriz o hipotecario) es una ____, mientras que la que otorga créditos, factoraje y arrendamiento a múltiples sectores es una ____.",
        "options": [
          "SOFOL / SOFOM",
          "SOFOM / SOFOL",
          "SOFIPO / SOCAP",
          "Unión de Crédito / Casa de Bolsa"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Una entidad que otorga crédito únicamente para un sector específico (ej. automotriz o hipotecario) es una ____, mientras que la que otorga créditos, factoraje y arrendamiento a múltiples sectores es una ____.",
        "options": [
          "SOFOL / SOFOM",
          "SOFOM / SOFOL",
          "SOFIPO / SOCAP",
          "Unión de Crédito / Casa de Bolsa"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: Una entidad que otorga crédito únicamente para un sector específico (ej. automotriz o hipotecario) es una ____, mientras que la que otorga créditos, factoraje y arrendamiento a múltiples sectores es una ____.",
        "options": [
          "SOFOL / SOFOM",
          "SOFOM / SOFOL",
          "SOFIPO / SOCAP",
          "Unión de Crédito / Casa de Bolsa"
        ],
        "c": 0
      }
    ],
    "e": "SOFOL = Sociedad Financiera de Objeto LIMITADO (un solo sector). SOFOM = Sociedad Financiera de Objeto MÚLTIPLE (crédito, factoraje y arrendamiento a varios sectores); puede ser regulada (E.R.) o no regulada (E.N.R.)."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "El Factoraje Financiero consiste en:",
        "options": [
          "Comprar cuentas por cobrar (facturas) con descuento, dando liquidez inmediata a las empresas",
          "Adquirir bienes y ceder su uso temporal a cambio de un pago periódico",
          "Comprar y vender divisas extranjeras de forma autorizada",
          "Almacenar mercancías y emitir certificados de depósito"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: El Factoraje Financiero consiste en:",
        "options": [
          "Comprar cuentas por cobrar (facturas) con descuento, dando liquidez inmediata a las empresas",
          "Adquirir bienes y ceder su uso temporal a cambio de un pago periódico",
          "Comprar y vender divisas extranjeras de forma autorizada",
          "Almacenar mercancías y emitir certificados de depósito"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: El Factoraje Financiero consiste en:",
        "options": [
          "Comprar cuentas por cobrar (facturas) con descuento, dando liquidez inmediata a las empresas",
          "Adquirir bienes y ceder su uso temporal a cambio de un pago periódico",
          "Comprar y vender divisas extranjeras de forma autorizada",
          "Almacenar mercancías y emitir certificados de depósito"
        ],
        "c": 0
      }
    ],
    "e": "El factoraje compra las cuentas por cobrar (facturas) de una empresa con un descuento y le da liquidez inmediata. La segunda opción describe a las Arrendadoras Financieras, la tercera a las Casas de Cambio y la cuarta a los Almacenes Generales de Depósito — todos del Sector Auxiliar de Crédito."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "¿Qué dos títulos emiten los Almacenes Generales de Depósito?",
        "options": [
          "Certificados de Depósito y Bonos de Prenda",
          "CETES y BONDES",
          "Acciones y Obligaciones",
          "Pagarés y Papel Comercial"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Qué dos títulos emiten los Almacenes Generales de Depósito?",
        "options": [
          "Certificados de Depósito y Bonos de Prenda",
          "CETES y BONDES",
          "Acciones y Obligaciones",
          "Pagarés y Papel Comercial"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: ¿Qué dos títulos emiten los Almacenes Generales de Depósito?",
        "options": [
          "Certificados de Depósito y Bonos de Prenda",
          "CETES y BONDES",
          "Acciones y Obligaciones",
          "Pagarés y Papel Comercial"
        ],
        "c": 0
      }
    ],
    "e": "Los Almacenes Generales de Depósito almacenan, guardan y conservan mercancía (comunes en aduanas) y emiten dos títulos: Certificados de Depósito y Bonos de Prenda."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "¿Cuál es la diferencia entre una Casa de Bolsa y una Sociedad de Inversión?",
        "options": [
          "La Casa de Bolsa atiende a grandes inversionistas; la Sociedad de Inversión a pequeños y medianos con portafolios diversificados",
          "La Casa de Bolsa es del gobierno; la Sociedad de Inversión es privada",
          "La Sociedad de Inversión emite billetes; la Casa de Bolsa los distribuye",
          "No hay diferencia, son sinónimos en el mercado bursátil"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cuál es la diferencia entre una Casa de Bolsa y una Sociedad de Inversión?",
        "options": [
          "La Casa de Bolsa atiende a grandes inversionistas; la Sociedad de Inversión a pequeños y medianos con portafolios diversificados",
          "La Casa de Bolsa es del gobierno; la Sociedad de Inversión es privada",
          "La Sociedad de Inversión emite billetes; la Casa de Bolsa los distribuye",
          "No hay diferencia, son sinónimos en el mercado bursátil"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: ¿Cuál es la diferencia entre una Casa de Bolsa y una Sociedad de Inversión?",
        "options": [
          "La Casa de Bolsa atiende a grandes inversionistas; la Sociedad de Inversión a pequeños y medianos con portafolios diversificados",
          "La Casa de Bolsa es del gobierno; la Sociedad de Inversión es privada",
          "La Sociedad de Inversión emite billetes; la Casa de Bolsa los distribuye",
          "No hay diferencia, son sinónimos en el mercado bursátil"
        ],
        "c": 0
      }
    ],
    "e": "Ambas pertenecen al Sector Bursátil (vigilado por CNBV). Las Casas de Bolsa son intermediarios autorizados que atienden grandes inversionistas; las Sociedades de Inversión se dirigen a pequeños y medianos inversionistas ofreciendo portafolios diversificados de renta fija y variable."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "¿Cómo se distribuyen por emisor los 14 instrumentos financieros principales que evalúa el examen?",
        "options": [
          "7 del Gobierno, 3 de Bancos y 4 de Empresas",
          "4 del Gobierno, 7 de Bancos y 3 de Empresas",
          "5 del Gobierno, 5 de Bancos y 4 de Empresas",
          "10 del Gobierno, 2 de Bancos y 2 de Empresas"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: ¿Cómo se distribuyen por emisor los 14 instrumentos financieros principales que evalúa el examen?",
        "options": [
          "7 del Gobierno, 3 de Bancos y 4 de Empresas",
          "4 del Gobierno, 7 de Bancos y 3 de Empresas",
          "5 del Gobierno, 5 de Bancos y 4 de Empresas",
          "10 del Gobierno, 2 de Bancos y 2 de Empresas"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: ¿Cómo se distribuyen por emisor los 14 instrumentos financieros principales que evalúa el examen?",
        "options": [
          "7 del Gobierno, 3 de Bancos y 4 de Empresas",
          "4 del Gobierno, 7 de Bancos y 3 de Empresas",
          "5 del Gobierno, 5 de Bancos y 4 de Empresas",
          "10 del Gobierno, 2 de Bancos y 2 de Empresas"
        ],
        "c": 0
      }
    ],
    "e": "Los 14 instrumentos se clasifican por emisor: Gobierno 7 (Cetes, Bondes, Udibonos, BPAS…), Bancos 3 (PRLV, CEDES…) y Empresas 4 (Acciones, Obligaciones, CPOs y Papel Comercial)."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Instrumento emitido por el Gobierno que paga interés VARIABLE referenciado a tasas diarias:",
        "options": [
          "Bondes",
          "Cetes",
          "Obligaciones",
          "PRLV"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Instrumento emitido por el Gobierno que paga interés VARIABLE referenciado a tasas diarias:",
        "options": [
          "Bondes",
          "Cetes",
          "Obligaciones",
          "PRLV"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: Instrumento emitido por el Gobierno que paga interés VARIABLE referenciado a tasas diarias:",
        "options": [
          "Bondes",
          "Cetes",
          "Obligaciones",
          "PRLV"
        ],
        "c": 0
      }
    ],
    "e": "Los Bondes (Bonos de Desarrollo) pagan interés variable referenciado a tasas diarias. No confundir con los Cetes, que son cupón cero y se venden a descuento; las Obligaciones son de empresas y el PRLV es bancario."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Los CPOs (Certificados de Participación Ordinaria) emitidos por empresas son:",
        "options": [
          "Títulos que representan fideicomisos de acciones corporativas y generan derechos patrimoniales",
          "Deuda de corto plazo para financiar la nómina",
          "Instrumentos del gobierno ligados al valor de la UDI",
          "Pagarés bancarios con rendimiento liquidable al vencimiento"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Los CPOs (Certificados de Participación Ordinaria) emitidos por empresas son:",
        "options": [
          "Títulos que representan fideicomisos de acciones corporativas y generan derechos patrimoniales",
          "Deuda de corto plazo para financiar la nómina",
          "Instrumentos del gobierno ligados al valor de la UDI",
          "Pagarés bancarios con rendimiento liquidable al vencimiento"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: Los CPOs (Certificados de Participación Ordinaria) emitidos por empresas son:",
        "options": [
          "Títulos que representan fideicomisos de acciones corporativas y generan derechos patrimoniales",
          "Deuda de corto plazo para financiar la nómina",
          "Instrumentos del gobierno ligados al valor de la UDI",
          "Pagarés bancarios con rendimiento liquidable al vencimiento"
        ],
        "c": 0
      }
    ],
    "e": "Los CPOs son títulos corporativos que representan fideicomisos de acciones y generan derechos patrimoniales. Los ligados a UDI son los Udibonos (gobierno) y el pagaré bancario es el PRLV."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Las Afianzadoras son entidades mercantiles con fin de lucro creadas para:",
        "options": [
          "Garantizar el cumplimiento de obligaciones ante terceros (ej. fianzas de arrendamiento o licitaciones)",
          "Asumir riesgos de fallecimiento mediante primas",
          "Administrar las cuentas individuales de retiro",
          "Auxiliar a las personas expuestas a un riesgo sin fin de lucro"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Las Afianzadoras son entidades mercantiles con fin de lucro creadas para:",
        "options": [
          "Garantizar el cumplimiento de obligaciones ante terceros (ej. fianzas de arrendamiento o licitaciones)",
          "Asumir riesgos de fallecimiento mediante primas",
          "Administrar las cuentas individuales de retiro",
          "Auxiliar a las personas expuestas a un riesgo sin fin de lucro"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: Las Afianzadoras son entidades mercantiles con fin de lucro creadas para:",
        "options": [
          "Garantizar el cumplimiento de obligaciones ante terceros (ej. fianzas de arrendamiento o licitaciones)",
          "Asumir riesgos de fallecimiento mediante primas",
          "Administrar las cuentas individuales de retiro",
          "Auxiliar a las personas expuestas a un riesgo sin fin de lucro"
        ],
        "c": 0
      }
    ],
    "e": "Las Afianzadoras pertenecen al sector de Seguros y Fianzas (vigilado por la CNSF) y garantizan el cumplimiento de obligaciones ante terceros: fianzas de arrendamiento, licitaciones de obra, etc. Operan con fin de lucro, a diferencia de las mutualistas."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "Las Uniones de Crédito facilitan el acceso a financiamiento y mejores tasas:",
        "options": [
          "Exclusivamente a sus socios comerciales",
          "A cualquier persona física con buen historial",
          "Únicamente a entidades del gobierno federal",
          "Solo a trabajadores afiliados al IMSS"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: Las Uniones de Crédito facilitan el acceso a financiamiento y mejores tasas:",
        "options": [
          "Exclusivamente a sus socios comerciales",
          "A cualquier persona física con buen historial",
          "Únicamente a entidades del gobierno federal",
          "Solo a trabajadores afiliados al IMSS"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: Las Uniones de Crédito facilitan el acceso a financiamiento y mejores tasas:",
        "options": [
          "Exclusivamente a sus socios comerciales",
          "A cualquier persona física con buen historial",
          "Únicamente a entidades del gobierno federal",
          "Solo a trabajadores afiliados al IMSS"
        ],
        "c": 0
      }
    ],
    "e": "Las Uniones de Crédito (Sector Auxiliar de Crédito, vigilado por CNBV) son sociedades que facilitan financiamiento y mejores tasas exclusivamente a sus socios comerciales."
  },
  {
    "m": 3,
    "t": "Tasas de Interés",
    "variants": [
      {
        "q": "La tasa que el banco PAGA a los ahorradores e inversionistas es la tasa ____, y la que COBRA a quienes solicitan un crédito es la tasa ____.",
        "options": [
          "Pasiva / Activa",
          "Activa / Pasiva",
          "Real / Nominal",
          "Efectiva / De rendimiento"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: La tasa que el banco PAGA a los ahorradores e inversionistas es la tasa ____, y la que COBRA a quienes solicitan un crédito es la tasa ____.",
        "options": [
          "Pasiva / Activa",
          "Activa / Pasiva",
          "Real / Nominal",
          "Efectiva / De rendimiento"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Tasas de Interés: La tasa que el banco PAGA a los ahorradores e inversionistas es la tasa ____, y la que COBRA a quienes solicitan un crédito es la tasa ____.",
        "options": [
          "Pasiva / Activa",
          "Activa / Pasiva",
          "Real / Nominal",
          "Efectiva / De rendimiento"
        ],
        "c": 0
      }
    ],
    "e": "Visto desde el banco: Tasa PASIVA = el banco paga (salida de dinero, ej. rendimiento al inversionista). Tasa ACTIVA = el banco cobra (entrada de dinero, ej. intereses de un crédito)."
  },
  {
    "m": 3,
    "t": "Tasas de Interés",
    "variants": [
      {
        "q": "La tasa de interés que realmente actúa sobre el capital acumulado al considerar la capitalización de intereses se llama:",
        "options": [
          "Tasa Efectiva",
          "Tasa Nominal",
          "Tasa de Cambio",
          "Tasa Pasiva"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: La tasa de interés que realmente actúa sobre el capital acumulado al considerar la capitalización de intereses se llama:",
        "options": [
          "Tasa Efectiva",
          "Tasa Nominal",
          "Tasa de Cambio",
          "Tasa Pasiva"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Tasas de Interés: La tasa de interés que realmente actúa sobre el capital acumulado al considerar la capitalización de intereses se llama:",
        "options": [
          "Tasa Efectiva",
          "Tasa Nominal",
          "Tasa de Cambio",
          "Tasa Pasiva"
        ],
        "c": 0
      }
    ],
    "e": "La Tasa Efectiva considera la capitalización de intereses sobre el capital acumulado. La Nominal es la pactada sin considerar inflación; la de Cambio relaciona la moneda nacional con una divisa; la Pasiva es la que el banco paga al ahorrador."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "variants": [
      {
        "q": "De los 14 instrumentos financieros, los ÚNICOS de renta variable son:",
        "options": [
          "Las Acciones",
          "Los Cetes",
          "Las Obligaciones",
          "Los Udibonos"
        ],
        "c": 0
      },
      {
        "q": "Señale la respuesta correcta: De los 14 instrumentos financieros, los ÚNICOS de renta variable son:",
        "options": [
          "Las Acciones",
          "Los Cetes",
          "Las Obligaciones",
          "Los Udibonos"
        ],
        "c": 0
      },
      {
        "q": "Con respecto a Sistema Financiero Mexicano: De los 14 instrumentos financieros, los ÚNICOS de renta variable son:",
        "options": [
          "Las Acciones",
          "Los Cetes",
          "Las Obligaciones",
          "Los Udibonos"
        ],
        "c": 0
      }
    ],
    "e": "Renta variable = solo las Acciones (su rendimiento depende del desempeño de la empresa; representan una fracción del capital social). El resto de los instrumentos son de renta fija, con rendimiento pactado."
  },
  {
    "m": 3,
    "t": "Matemáticas - Fracciones",
    "variants": [
      {
        "q": "Relaciona la fracción 1/4 con su porcentaje y decimal equivalente de manera correcta:",
        "options": [
          "0.2500 -> 25.00%",
          "0.5000 -> 50.00%",
          "1.0000 -> 100.00%",
          "1.2500 -> 125.00%"
        ],
        "c": 0,
        "e": "Fórmula: numerador ÷ denominador, luego × 100.<br>Paso 1: 1 ÷ 4 = 0.2500.<br>Paso 2: 0.2500 × 100 = 25.00%."
      },
      {
        "q": "Relaciona la fracción 39/40 con su porcentaje y decimal equivalente de manera correcta:",
        "options": [
          "0.3500 -> 35.00%",
          "0.7500 -> 75.00%",
          "0.5250 -> 52.50%",
          "0.9750 -> 97.50%"
        ],
        "c": 3,
        "e": "Fórmula: numerador ÷ denominador, luego × 100.<br>Paso 1: 39 ÷ 40 = 0.9750.<br>Paso 2: 0.9750 × 100 = 97.50%."
      },
      {
        "q": "Relaciona la fracción 23/40 con su porcentaje y decimal equivalente de manera correcta:",
        "options": [
          "0.5750 -> 57.50%",
          "1.0500 -> 105.00%",
          "0.8500 -> 85.00%",
          "0.6500 -> 65.00%"
        ],
        "c": 0,
        "e": "Fórmula: numerador ÷ denominador, luego × 100.<br>Paso 1: 23 ÷ 40 = 0.5750.<br>Paso 2: 0.5750 × 100 = 57.50%."
      }
    ],
    "e": "Para convertir una fracción: divide numerador entre denominador (4 decimales truncados) y multiplica por 100 para obtener el porcentaje."
  },
  {
    "m": 3,
    "t": "Matemáticas - Fracciones",
    "variants": [
      {
        "q": "Relaciona la fracción 6/25 con su porcentaje y decimal equivalente de manera correcta:",
        "options": [
          "0.5200 -> 52.00%",
          "0.2400 -> 24.00%",
          "0.1200 -> 12.00%",
          "0.9200 -> 92.00%"
        ],
        "c": 1,
        "e": "Fórmula: numerador ÷ denominador, luego × 100.<br>Paso 1: 6 ÷ 25 = 0.2400.<br>Paso 2: 0.2400 × 100 = 24.00%."
      },
      {
        "q": "Relaciona la fracción 11/25 con su porcentaje y decimal equivalente de manera correcta:",
        "options": [
          "0.6800 -> 68.00%",
          "0.4400 -> 44.00%",
          "0.0400 -> 4.00%",
          "0.4800 -> 48.00%"
        ],
        "c": 1,
        "e": "Fórmula: numerador ÷ denominador, luego × 100.<br>Paso 1: 11 ÷ 25 = 0.4400.<br>Paso 2: 0.4400 × 100 = 44.00%."
      },
      {
        "q": "Relaciona la fracción 14/25 con su porcentaje y decimal equivalente de manera correcta:",
        "options": [
          "1.0800 -> 108.00%",
          "0.5600 -> 56.00%",
          "0.1200 -> 12.00%",
          "0.5200 -> 52.00%"
        ],
        "c": 1,
        "e": "Fórmula: numerador ÷ denominador, luego × 100.<br>Paso 1: 14 ÷ 25 = 0.5600.<br>Paso 2: 0.5600 × 100 = 56.00%."
      }
    ],
    "e": "Para convertir una fracción: divide numerador entre denominador (4 decimales truncados) y multiplica por 100 para obtener el porcentaje."
  },
  {
    "m": 3,
    "t": "Matemáticas - Fracciones",
    "variants": [
      {
        "q": "Se reparten $1,000,000 pesos. 4/8 del capital se destinan al cónyuge y el resto se divide en partes iguales entre sus 4 hijos. ¿Cuánto recibe cada hijo?",
        "options": [
          "$125,000.00",
          "$112,500.00",
          "$150,000.00",
          "$137,500.00"
        ],
        "c": 0,
        "e": "Paso 1: fracción del cónyuge: 4/8 = 0.5000.<br>Paso 2: proporción para los hijos: 1.0000 − 0.5000 = 0.5000.<br>Paso 3: bolsa de los hijos: $1,000,000 × 0.5000 = $500,000.<br>Paso 4: $500,000 ÷ 4 hijos = $125,000.00 cada uno."
      },
      {
        "q": "Se reparten $4,200,000 pesos. 1/10 del capital se destina al cónyuge y el resto se divide en partes iguales entre sus 3 hijos. ¿Cuánto recibe cada hijo?",
        "options": [
          "$1,386,000.00",
          "$1,134,000.00",
          "$1,512,000.00",
          "$1,260,000.00"
        ],
        "c": 3,
        "e": "Paso 1: fracción del cónyuge: 1/10 = 0.1000.<br>Paso 2: proporción para los hijos: 1.0000 − 0.1000 = 0.9000.<br>Paso 3: bolsa de los hijos: $4,200,000 × 0.9000 = $3,780,000.<br>Paso 4: $3,780,000 ÷ 3 hijos = $1,260,000.00 cada uno."
      },
      {
        "q": "Se reparten $4,900,000 pesos. 2/5 del capital se destinan al cónyuge y el resto se divide en partes iguales entre sus 4 hijos. ¿Cuánto recibe cada hijo?",
        "options": [
          "$808,500.00",
          "$882,000.00",
          "$735,000.00",
          "$661,500.00"
        ],
        "c": 2,
        "e": "Paso 1: fracción del cónyuge: 2/5 = 0.4000.<br>Paso 2: proporción para los hijos: 1.0000 − 0.4000 = 0.6000.<br>Paso 3: bolsa de los hijos: $4,900,000 × 0.6000 = $2,940,000.<br>Paso 4: $2,940,000 ÷ 4 hijos = $735,000.00 cada uno."
      }
    ],
    "e": "Método: convierte la fracción del cónyuge a decimal, réstala de 1, multiplica por el capital para obtener la bolsa de los hijos y divide entre el número de hijos."
  },
  {
    "m": 3,
    "t": "Matemáticas - Fracciones",
    "variants": [
      {
        "q": "Se reparten $2,100,000 pesos. 1/5 del capital se destina al cónyuge y el resto se divide en partes iguales entre sus 2 hijos. ¿Cuánto recibe cada hijo?",
        "options": [
          "$924,000.00",
          "$840,000.00",
          "$1,008,000.00",
          "$756,000.00"
        ],
        "c": 1,
        "e": "Paso 1: cónyuge: 1/5 = 0.2000.<br>Paso 2: hijos: 1.0000 − 0.2000 = 0.8000.<br>Paso 3: bolsa: $2,100,000 × 0.8000 = $1,680,000.<br>Paso 4: $1,680,000 ÷ 2 = $840,000.00 cada hijo."
      },
      {
        "q": "Se reparten $1,600,000 pesos. 1/5 del capital se destina al cónyuge y el resto se divide en partes iguales entre sus 3 hijos. ¿Cuánto recibe cada hijo?",
        "options": [
          "$512,000.00",
          "$384,000.00",
          "$426,666.67",
          "$469,333.33"
        ],
        "c": 2,
        "e": "Paso 1: cónyuge: 1/5 = 0.2000.<br>Paso 2: hijos: 1.0000 − 0.2000 = 0.8000.<br>Paso 3: bolsa: $1,600,000 × 0.8000 = $1,280,000.<br>Paso 4: $1,280,000 ÷ 3 = $426,666.67 cada hijo."
      },
      {
        "q": "Se reparten $3,100,000 pesos. 4/10 del capital se destinan al cónyuge y el resto se divide en partes iguales entre sus 3 hijos. ¿Cuánto recibe cada hijo?",
        "options": [
          "$682,000.00",
          "$558,000.00",
          "$620,000.00",
          "$744,000.00"
        ],
        "c": 2,
        "e": "Paso 1: cónyuge: 4/10 = 0.4000.<br>Paso 2: hijos: 1.0000 − 0.4000 = 0.6000.<br>Paso 3: bolsa: $3,100,000 × 0.6000 = $1,860,000.<br>Paso 4: $1,860,000 ÷ 3 = $620,000.00 cada hijo."
      }
    ],
    "e": "Método: convierte la fracción del cónyuge a decimal, réstala de 1, multiplica por el capital y divide entre el número de hijos."
  },
  {
    "m": 3,
    "t": "Matemáticas - Inflación",
    "variants": [
      {
        "q": "Tienes un presupuesto de $4,215 pesos que te alcanza para comprar 15 pantalones idénticos. Si se proyecta una inflación del 10%, ¿cuántos pantalones completos podrás comprar en un año con el mismo presupuesto?",
        "options": [
          "12 pantalones",
          "15 pantalones",
          "13 pantalones",
          "14 pantalones"
        ],
        "c": 2,
        "e": "Paso 1: precio actual: $4,215 ÷ 15 = $281.00.<br>Paso 2: precio con inflación: $281.00 × 1.10 = $309.10.<br>Paso 3: $4,215 ÷ $309.10 = 13.6364.<br>Paso 4: solo se compran unidades completas (se descartan decimales): 13 pantalones."
      },
      {
        "q": "Tienes un presupuesto de $2,176 pesos que te alcanza para comprar 16 pantalones idénticos. Si se proyecta una inflación del 11%, ¿cuántos pantalones completos podrás comprar en un año con el mismo presupuesto?",
        "options": [
          "16 pantalones",
          "15 pantalones",
          "13 pantalones",
          "14 pantalones"
        ],
        "c": 3,
        "e": "Paso 1: precio actual: $2,176 ÷ 16 = $136.00.<br>Paso 2: precio con inflación: $136.00 × 1.11 = $150.96.<br>Paso 3: $2,176 ÷ $150.96 = 14.4144.<br>Paso 4: solo unidades completas: 14 pantalones."
      },
      {
        "q": "Tienes un presupuesto de $3,540 pesos que te alcanza para comprar 12 pantalones idénticos. Si se proyecta una inflación del 6%, ¿cuántos pantalones completos podrás comprar en un año con el mismo presupuesto?",
        "options": [
          "13 pantalones",
          "11 pantalones",
          "12 pantalones",
          "10 pantalones"
        ],
        "c": 1,
        "e": "Paso 1: precio actual: $3,540 ÷ 12 = $295.00.<br>Paso 2: precio con inflación: $295.00 × 1.06 = $312.70.<br>Paso 3: $3,540 ÷ $312.70 = 11.3208.<br>Paso 4: solo unidades completas: 11 pantalones."
      }
    ],
    "e": "Método: precio unitario = presupuesto ÷ unidades; nuevo precio = precio × (1 + inflación); unidades nuevas = presupuesto ÷ nuevo precio, descartando los decimales (solo bienes enteros)."
  },
  {
    "m": 3,
    "t": "Matemáticas - Inflación",
    "variants": [
      {
        "q": "Tienes un presupuesto de $1,380 pesos que te alcanza para comprar 10 pantalones idénticos. Si se proyecta una inflación del 10%, ¿cuántos pantalones completos podrás comprar en un año con el mismo presupuesto?",
        "options": [
          "11 pantalones",
          "8 pantalones",
          "9 pantalones",
          "10 pantalones"
        ],
        "c": 2,
        "e": "Paso 1: precio actual: $1,380 ÷ 10 = $138.00.<br>Paso 2: con inflación: $138.00 × 1.10 = $151.80.<br>Paso 3: $1,380 ÷ $151.80 = 9.0909.<br>Paso 4: solo unidades completas: 9 pantalones."
      },
      {
        "q": "Tienes un presupuesto de $3,382 pesos que te alcanza para comprar 19 pantalones idénticos. Si se proyecta una inflación del 10%, ¿cuántos pantalones completos podrás comprar en un año con el mismo presupuesto?",
        "options": [
          "17 pantalones",
          "19 pantalones",
          "18 pantalones",
          "16 pantalones"
        ],
        "c": 0,
        "e": "Paso 1: precio actual: $3,382 ÷ 19 = $178.00.<br>Paso 2: con inflación: $178.00 × 1.10 = $195.80.<br>Paso 3: $3,382 ÷ $195.80 = 17.2727.<br>Paso 4: solo unidades completas: 17 pantalones."
      },
      {
        "q": "Tienes un presupuesto de $2,896 pesos que te alcanza para comprar 16 pantalones idénticos. Si se proyecta una inflación del 7%, ¿cuántos pantalones completos podrás comprar en un año con el mismo presupuesto?",
        "options": [
          "15 pantalones",
          "13 pantalones",
          "16 pantalones",
          "14 pantalones"
        ],
        "c": 3,
        "e": "Paso 1: precio actual: $2,896 ÷ 16 = $181.00.<br>Paso 2: con inflación: $181.00 × 1.07 = $193.67.<br>Paso 3: $2,896 ÷ $193.67 = 14.9533.<br>Paso 4: solo unidades completas: 14 pantalones."
      }
    ],
    "e": "Método: precio unitario = presupuesto ÷ unidades; nuevo precio = precio × (1 + inflación); unidades nuevas = presupuesto ÷ nuevo precio, descartando decimales."
  },
  {
    "m": 3,
    "t": "Matemáticas - Regla de Tres",
    "variants": [
      {
        "q": "En una empresa, 390 empleados representan exactamente el 50% del total. ¿Cuál es el número total de empleados?",
        "options": [
          "780 empleados",
          "830 empleados",
          "880 empleados",
          "730 empleados"
        ],
        "c": 0,
        "e": "Regla de tres: 390 → 50%, X → 100%.<br>Paso 1: X = (390 × 100) ÷ 50.<br>Paso 2: X = 39,000 ÷ 50 = 780 empleados."
      },
      {
        "q": "En una empresa, 52 empleados representan exactamente el 26% del total. ¿Cuál es el número total de empleados?",
        "options": [
          "300 empleados",
          "200 empleados",
          "150 empleados",
          "250 empleados"
        ],
        "c": 1,
        "e": "Regla de tres: 52 → 26%, X → 100%.<br>Paso 1: X = (52 × 100) ÷ 26.<br>Paso 2: X = 5,200 ÷ 26 = 200 empleados."
      },
      {
        "q": "En una empresa, 81 empleados representan exactamente el 36% del total. ¿Cuál es el número total de empleados?",
        "options": [
          "175 empleados",
          "275 empleados",
          "325 empleados",
          "225 empleados"
        ],
        "c": 3,
        "e": "Regla de tres: 81 → 36%, X → 100%.<br>Paso 1: X = (81 × 100) ÷ 36.<br>Paso 2: X = 8,100 ÷ 36 = 225 empleados."
      }
    ],
    "e": "Regla de tres directa: si D empleados son el P%, el total es X = (D × 100) ÷ P."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Simple",
    "variants": [
      {
        "q": "Se invierten $41,000 pesos a una tasa de interés simple anual del 5.1%. Si el plazo es de 2 años, ¿cuál es el monto total (capital + intereses) al concluir el plazo?",
        "options": [
          "$45,182.00",
          "$49,700.20",
          "$43,091.00",
          "$4,182.00"
        ],
        "c": 0,
        "e": "Fórmula: I = C × i × n, Monto = C + I.<br>Paso 1: i = 5.1% = 0.0510.<br>Paso 2: I = 41,000 × 0.0510 × 2 = $4,182.00.<br>Paso 3: Monto = 41,000 + 4,182 = $45,182.00."
      },
      {
        "q": "Se invierten $71,000 pesos a una tasa de interés simple anual del 8.8%. Si el plazo es de 5 años, ¿cuál es el monto total (capital + intereses) al concluir el plazo?",
        "options": [
          "$112,464.00",
          "$31,240.00",
          "$86,620.00",
          "$102,240.00"
        ],
        "c": 3,
        "e": "Fórmula: I = C × i × n, Monto = C + I.<br>Paso 1: i = 8.8% = 0.0880.<br>Paso 2: I = 71,000 × 0.0880 × 5 = $31,240.00.<br>Paso 3: Monto = 71,000 + 31,240 = $102,240.00."
      },
      {
        "q": "Se invierten $54,000 pesos a una tasa de interés simple anual del 5.2%. Si el plazo es de 5 años, ¿cuál es el monto total (capital + intereses) al concluir el plazo?",
        "options": [
          "$74,844.00",
          "$68,040.00",
          "$61,020.00",
          "$14,040.00"
        ],
        "c": 1,
        "e": "Fórmula: I = C × i × n, Monto = C + I.<br>Paso 1: i = 5.2% = 0.0520.<br>Paso 2: I = 54,000 × 0.0520 × 5 = $14,040.00.<br>Paso 3: Monto = 54,000 + 14,040 = $68,040.00."
      }
    ],
    "e": "Interés simple: I = C × i × n (tasa en decimal). El monto al vencimiento es Capital + Intereses. Cuidado: una de las opciones trampa suele ser SOLO el interés, sin sumar el capital."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Simple",
    "variants": [
      {
        "q": "Se solicita un crédito de $68,000 pesos a un plazo de 10 meses. La tasa simple anual es del 30%. ¿Cuál es el monto de los intereses a pagar?",
        "options": [
          "$20,400.00",
          "$17,000.00",
          "$204,000.00",
          "$13,600.00"
        ],
        "c": 1,
        "e": "La tasa es ANUAL pero el plazo está en MESES: ajusta la tasa.<br>Paso 1: tasa mensual = 30% ÷ 12 = 2.50% (i = 0.0250).<br>Paso 2: I = 68,000 × 0.0250 × 10 = $17,000.00."
      },
      {
        "q": "Se solicita un crédito de $35,000 pesos a un plazo de 8 meses. La tasa simple anual es del 30%. ¿Cuál es el monto de los intereses a pagar?",
        "options": [
          "$10,500.00",
          "$84,000.00",
          "$7,000.00",
          "$8,400.00"
        ],
        "c": 2,
        "e": "La tasa es ANUAL pero el plazo está en MESES: ajusta la tasa.<br>Paso 1: tasa mensual = 30% ÷ 12 = 2.50% (i = 0.0250).<br>Paso 2: I = 35,000 × 0.0250 × 8 = $7,000.00."
      },
      {
        "q": "Se solicita un crédito de $58,000 pesos a un plazo de 11 meses. La tasa simple anual es del 24%. ¿Cuál es el monto de los intereses a pagar?",
        "options": [
          "$15,312.00",
          "$13,920.00",
          "$153,120.00",
          "$12,760.00"
        ],
        "c": 3,
        "e": "La tasa es ANUAL pero el plazo está en MESES: ajusta la tasa.<br>Paso 1: tasa mensual = 24% ÷ 12 = 2.00% (i = 0.0200).<br>Paso 2: I = 58,000 × 0.0200 × 11 = $12,760.00."
      }
    ],
    "e": "Cuando la tasa es anual y el plazo está en meses, divide la tasa entre 12 y usa I = C × i_mensual × n_meses."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Compuesto",
    "variants": [
      {
        "q": "Depósito de $92,000 a tasa del 10% anual capitalizable semestralmente por 2 años. Usando truncamiento a 4 decimales en cada paso intermedio, ¿cuál es el interés compuesto generado?",
        "options": [
          "$19,816.80",
          "$20,223.11",
          "$20,807.64",
          "$18,400.00"
        ],
        "c": 0,
        "e": "Fórmula: I = C × [(1+i)^n − 1], truncando a 4 decimales.<br>Paso 1: tasa semestral = 10% ÷ 2 = 5% (i = 0.0500).<br>Paso 2: n = 2 años × 2 = 4 semestres.<br>Paso 3: factor: 1.05 × 1.05 = 1.1025 → × 1.05 = 1.1576 → × 1.05 = 1.2154.<br>Paso 4: I = 92,000 × (1.2154 − 1) = $19,816.80."
      },
      {
        "q": "Depósito de $30,000 a tasa del 16% anual capitalizable semestralmente por 3 años. Usando truncamiento a 4 decimales en cada paso intermedio, ¿cuál es el interés compuesto generado?",
        "options": [
          "$14,400.00",
          "$17,601.00",
          "$18,481.05",
          "$17,958.35"
        ],
        "c": 1,
        "e": "Fórmula: I = C × [(1+i)^n − 1], truncando a 4 decimales.<br>Paso 1: tasa semestral = 16% ÷ 2 = 8% (i = 0.0800).<br>Paso 2: n = 3 × 2 = 6 semestres.<br>Paso 3: factor: 1.08 → 1.1664 → 1.2597 → 1.3604 → 1.4692 → 1.5867 (multiplicando por 1.08 y truncando).<br>Paso 4: I = 30,000 × (1.5867 − 1) = $17,601.00."
      },
      {
        "q": "Depósito de $22,000 a tasa del 12% anual capitalizable semestralmente por 2 años. Usando truncamiento a 4 decimales en cada paso intermedio, ¿cuál es el interés compuesto generado?",
        "options": [
          "$5,889.98",
          "$5,280.00",
          "$6,061.44",
          "$5,772.80"
        ],
        "c": 3,
        "e": "Fórmula: I = C × [(1+i)^n − 1], truncando a 4 decimales.<br>Paso 1: tasa semestral = 12% ÷ 2 = 6% (i = 0.0600).<br>Paso 2: n = 2 × 2 = 4 semestres.<br>Paso 3: factor: 1.06 × 1.06 = 1.1236 → × 1.06 = 1.1910 → × 1.06 = 1.2624.<br>Paso 4: I = 22,000 × (1.2624 − 1) = $5,772.80."
      }
    ],
    "e": "'Capitalizable semestralmente' → interés compuesto: divide la tasa anual entre 2, n = años × 2, construye el factor multiplicando (1+i) por sí mismo truncando a 4 decimales en cada paso, y aplica I = C × (factor − 1)."
  },
  {
    "m": 3,
    "t": "Matemáticas - Valor Futuro y Presente",
    "variants": [
      {
        "q": "Inversión de $37,000 a tasa del 12% anual capitalizable bimestralmente por 1 año. Usando truncamiento a 4 decimales en cada paso, ¿cuál es el Valor Futuro (Capital + Interés)?",
        "options": [
          "$41,440.00",
          "$43,745.10",
          "$42,501.37",
          "$41,662.00"
        ],
        "c": 3,
        "e": "Fórmula: VF = C × (1+i)^n, truncando a 4 decimales.<br>Paso 1: tasa bimestral = 12% ÷ 6 = 2% (i = 0.0200).<br>Paso 2: n = 1 año = 6 bimestres.<br>Paso 3: factor: 1.02 → 1.0404 → 1.0612 → 1.0824 → 1.1040 → 1.1260.<br>Paso 4: VF = 37,000 × 1.1260 = $41,662.00."
      },
      {
        "q": "Inversión de $24,000 a tasa del 18% anual capitalizable bimestralmente por 1 año. Usando truncamiento a 4 decimales en cada paso, ¿cuál es el Valor Futuro (Capital + Interés)?",
        "options": [
          "$28,651.20",
          "$30,083.76",
          "$29,230.40",
          "$28,320.00"
        ],
        "c": 0,
        "e": "Fórmula: VF = C × (1+i)^n, truncando a 4 decimales.<br>Paso 1: tasa bimestral = 18% ÷ 6 = 3% (i = 0.0300).<br>Paso 2: n = 6 bimestres.<br>Paso 3: factor: 1.03 → 1.0609 → 1.0927 → 1.1254 → 1.1591 → 1.1938.<br>Paso 4: VF = 24,000 × 1.1938 = $28,651.20."
      },
      {
        "q": "Inversión de $16,000 a tasa del 24% anual capitalizable bimestralmente por 1 año. Usando truncamiento a 4 decimales en cada paso, ¿cuál es el Valor Futuro (Capital + Interés)?",
        "options": [
          "$19,840.00",
          "$20,650.01",
          "$20,240.00",
          "$21,252.00"
        ],
        "c": 2,
        "e": "Fórmula: VF = C × (1+i)^n, truncando a 4 decimales.<br>Paso 1: tasa bimestral = 24% ÷ 6 = 4% (i = 0.0400).<br>Paso 2: n = 6 bimestres.<br>Paso 3: factor: 1.04 → 1.0816 → 1.1248 → 1.1697 → 1.2164 → 1.2650.<br>Paso 4: VF = 16,000 × 1.2650 = $20,240.00."
      }
    ],
    "e": "'Capitalizable bimestralmente' → tasa anual ÷ 6 y n en bimestres (1 año = 6). Construye el factor (1+i)^n multiplicando y truncando a 4 decimales, luego VF = C × factor."
  },
  {
    "m": 3,
    "t": "Matemáticas - Valor Futuro y Presente",
    "variants": [
      {
        "q": "Se desea alcanzar un monto de $105,000 en 3 años. Si la tasa de interés simple anual es del 13%, ¿cuánto se debe invertir hoy (Valor Presente)?",
        "options": [
          "$79,316.55",
          "$75,539.57",
          "$72,770.27",
          "$64,050.00"
        ],
        "c": 1,
        "e": "Fórmula: VP = VF ÷ (1 + i × n).<br>Paso 1: i × n = 0.13 × 3 = 0.39.<br>Paso 2: divisor = 1 + 0.39 = 1.39.<br>Paso 3: VP = 105,000 ÷ 1.39 = $75,539.57."
      },
      {
        "q": "Se desea alcanzar un monto de $172,000 en 5 años. Si la tasa de interés simple anual es del 8%, ¿cuánto se debe invertir hoy (Valor Presente)?",
        "options": [
          "$129,000.00",
          "$103,200.00",
          "$122,857.14",
          "$117,060.31"
        ],
        "c": 2,
        "e": "Fórmula: VP = VF ÷ (1 + i × n).<br>Paso 1: i × n = 0.08 × 5 = 0.40.<br>Paso 2: divisor = 1 + 0.40 = 1.40.<br>Paso 3: VP = 172,000 ÷ 1.40 = $122,857.14."
      },
      {
        "q": "Se desea alcanzar un monto de $276,000 en 5 años. Si la tasa de interés simple anual es del 12%, ¿cuánto se debe invertir hoy (Valor Presente)?",
        "options": [
          "$156,609.81",
          "$181,125.00",
          "$110,400.00",
          "$172,500.00"
        ],
        "c": 3,
        "e": "Fórmula: VP = VF ÷ (1 + i × n).<br>Paso 1: i × n = 0.12 × 5 = 0.60.<br>Paso 2: divisor = 1 + 0.60 = 1.60.<br>Paso 3: VP = 276,000 ÷ 1.60 = $172,500.00."
      }
    ],
    "e": "Valor Presente con interés simple: VP = VF ÷ (1 + i × n). Primero calcula i × n, súmale 1 y divide el Valor Futuro entre ese resultado."
  },
  {
    "m": 3,
    "t": "Matemáticas - Inflación",
    "variants": [
      {
        "q": "Un fondo ofrece rendimiento nominal del 15.70%. Si la inflación es del 7.50%, ¿cuál es la tasa real (usando regla de descarte)?",
        "options": [
          "8.00%",
          "8.20%",
          "8.45%",
          "15.70%"
        ],
        "c": 0,
        "e": "Regla de descarte de Tasa Real.<br>Paso 1: resta simple: 15.70% − 7.50% = 8.20%.<br>Paso 2: la tasa real correcta es SIEMPRE ligeramente MENOR a la resta directa.<br>Paso 3: la única opción menor y cercana a 8.20% es 8.00%."
      },
      {
        "q": "Un fondo ofrece rendimiento nominal del 14.80%. Si la inflación es del 4.80%, ¿cuál es la tasa real (usando regla de descarte)?",
        "options": [
          "10.00%",
          "9.40%",
          "10.25%",
          "14.80%"
        ],
        "c": 1,
        "e": "Regla de descarte de Tasa Real.<br>Paso 1: resta simple: 14.80% − 4.80% = 10.00%.<br>Paso 2: la respuesta correcta es ligeramente MENOR a la resta.<br>Paso 3: la única opción menor y cercana a 10.00% es 9.40%."
      },
      {
        "q": "Un fondo ofrece rendimiento nominal del 12.00%. Si la inflación es del 6.60%, ¿cuál es la tasa real (usando regla de descarte)?",
        "options": [
          "5.65%",
          "12.00%",
          "4.80%",
          "5.40%"
        ],
        "c": 2,
        "e": "Regla de descarte de Tasa Real.<br>Paso 1: resta simple: 12.00% − 6.60% = 5.40%.<br>Paso 2: la respuesta correcta es ligeramente MENOR a la resta.<br>Paso 3: la única opción menor y cercana a 5.40% es 4.80%."
      }
    ],
    "e": "Tasa Real ≈ Tasa Nominal − Inflación, pero en el examen la respuesta correcta NUNCA es la resta exacta: elige la opción ligeramente menor y más cercana al resultado de la resta."
  }
];
