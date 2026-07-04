/**
 * Banco de Preguntas - Simulador Cédula A1
 * Módulo 1: 40 preguntas (40 min)
 * Módulo 2: 28 preguntas (60 min)
 * Módulo 3: 20 preguntas (32 min)
 * Total: 88 preguntas únicas
 */
const qData = [
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "q": "Un riesgo donde solo existen dos escenarios posibles (pérdida económica o no pérdida) y que es el único tipo asegurable se denomina:",
    "options": [
      "Riesgo Especulativo",
      "Riesgo Financiero",
      "Riesgo Puro",
      "Riesgo Particular"
    ],
    "c": 2,
    "e": "El riesgo puro es el único asegurable, a diferencia del especulativo que permite ganancia."
  },
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "q": "Para la CNSF, un riesgo se considera CATASTRÓFICO si afecta simultáneamente a:",
    "options": [
      "Toda una ciudad",
      "Más de 50 personas",
      "12 personas o más",
      "De 1 a 12 personas"
    ],
    "c": 2,
    "e": "Un riesgo particular afecta de 1 a 12 personas; de 12 en adelante se considera catastrófico."
  },
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "q": "¿Cuáles son las 6 características obligatorias que debe tener un riesgo para ser asegurable?",
    "options": [
      "Incierto, Posible, Concreto, Lícito, Fortuito y con Contenido Económico",
      "Posible, Legal, Aleatorio, Frecuente, Severo y Medible",
      "Incierto, Probable, Subjetivo, Lícito, Accidental y Cuantificable",
      "Fortuito, Especulativo, Concreto, Lícito, Posible y Económico"
    ],
    "c": 0,
    "e": "Recuerda la regla de examen: es la opción más larga. Incierto, Posible, Concreto, Lícito, Fortuito y Contenido Económico."
  },
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "q": "El principio rector del seguro frente al peligro dictamina que el riesgo no se elimina ni se previene, solo se:",
    "options": [
      "Asume",
      "Retiene",
      "Transfiere",
      "Asegura"
    ],
    "c": 2,
    "e": "La actitud principal que permite la existencia del seguro es TRANSFERIR el riesgo a una institución."
  },
  {
    "m": 1,
    "t": "Matemáticas Actuariales",
    "q": "En el cálculo del costo de la prima, ¿cuáles son las dos métricas actuariales clave?",
    "options": [
      "Probabilidad y Estadística",
      "Frecuencia y Severidad",
      "Suma Asegurada y Edad",
      "Mortalidad y Morbilidad"
    ],
    "c": 1,
    "e": "La Frecuencia (qué tantas veces ocurre) y la Severidad (cuánto cuesta) determinan el costo."
  },
  {
    "m": 1,
    "t": "Matemáticas Actuariales",
    "q": "El dato real que otorgan las Tablas de Mortalidad para el actuario es:",
    "options": [
      "La esperanza de vida en un país",
      "La probabilidad de supervivencia",
      "La probabilidad de muerte a una edad determinada",
      "El costo de la prima nivelada"
    ],
    "c": 2,
    "e": "Muestra la probabilidad estadística de que una persona fallezca a una edad específica."
  },
  {
    "m": 1,
    "t": "Primas",
    "q": "¿Cuál es la prima que representa el costo neto de la cobertura del riesgo, sin ningún cargo adicional por administración o comisiones?",
    "options": [
      "Prima Nivelada",
      "Prima de Tarifa",
      "Prima Fraccionada",
      "Prima Pura de Riesgo"
    ],
    "c": 3,
    "e": "La prima pura de riesgo es el costo matemático bruto antes de agregarle gastos y utilidad."
  },
  {
    "m": 1,
    "t": "Primas",
    "q": "Es un costo promedio fijo que se mantiene idéntico durante toda la vida de la póliza y que genera excedentes en sus primeros años. Aplica exclusivamente a Seguros de Vida.",
    "options": [
      "Prima Devengada",
      "Prima Nivelada",
      "Prima de Tarifa",
      "Prima Única"
    ],
    "c": 1,
    "e": "La prima nivelada es el pilar del seguro de vida, generando la reserva matemática."
  },
  {
    "m": 1,
    "t": "Primas",
    "q": "Los 4 componentes que integran la Prima de Tarifa (precio final) son: Prima pura de riesgo, Gastos de adquisición, Utilidad, y...",
    "options": [
      "Recargos de Administración",
      "Reserva Matemática",
      "Impuestos y Derechos",
      "Gastos Médicos"
    ],
    "c": 0,
    "e": "La prima de tarifa = P. Pura de Riesgo + Administración + Adquisición (comisiones) + Utilidad."
  },
  {
    "m": 1,
    "t": "Primas",
    "q": "Si ocurre una pérdida total del bien asegurado a los 3 meses de vigencia, la aseguradora tiene la obligación de devolver al cliente:",
    "options": [
      "El deducible",
      "Las primas devengadas",
      "Las primas no devengadas",
      "La reserva matemática"
    ],
    "c": 2,
    "e": "La prima no devengada es el periodo de cobertura ya pagado que no se utilizará porque el seguro terminó por pérdida total."
  },
  {
    "m": 1,
    "t": "Matemáticas Actuariales",
    "q": "¿A qué ramo de seguros aplica ÚNICA Y EXCLUSIVAMENTE el concepto de Reserva Matemática?",
    "options": [
      "Gastos Médicos Mayores",
      "Salud",
      "Vida",
      "Accidentes Personales"
    ],
    "c": 2,
    "e": "La reserva matemática se genera exclusivamente de la prima nivelada en el seguro de Vida."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "q": "Al cotizar un seguro, si una persona tiene ocupación peligrosa o practica deportes de riesgo, la aseguradora aplica un cargo adicional llamado:",
    "options": [
      "Deducible",
      "Extra Prima (Recargo)",
      "Franquicia",
      "Copago"
    ],
    "c": 1,
    "e": "Se conoce como recargo o extraprima por agravación del riesgo."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "q": "Respecto a los descuentos por 'Años de edad descontados' (No fumador, mujer, riesgo preferente), la regla en el examen establece que:",
    "options": [
      "Son acumulables hasta un máximo de 5 años",
      "Solo aplica el descuento por ser mujer",
      "No son acumulables, se otorga únicamente uno de ellos",
      "Requieren examen médico obligatorio para aplicar"
    ],
    "c": 2,
    "e": "Los descuentos de años no se suman entre sí; se otorga el mayor o el único aplicable."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "q": "En un seguro, es un porcentaje o monto mínimo del bien que debe verse afectado para que el seguro comience a operar desde el primer peso, sin que se retenga ninguna cantidad.",
    "options": [
      "Coaseguro",
      "Deducible",
      "Franquicia",
      "Copago"
    ],
    "c": 2,
    "e": "La franquicia cubre desde el primer peso si se supera el umbral; el deducible siempre se resta a fondo perdido."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "q": "De acuerdo con la ley, la edad mínima legal para otorgar una cobertura de fallecimiento tradicional (entregar Suma Asegurada por muerte) es:",
    "options": [
      "0 años (desde el nacimiento)",
      "12 años",
      "16 años",
      "18 años"
    ],
    "c": 1,
    "e": "La ley prohíbe el seguro de vida convencional para menores de 12 años, aplicando el 'contraseguro'."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "q": "Si fallece un menor de 12 años asegurado, ¿qué cobertura opera y qué entrega la aseguradora?",
    "options": [
      "Opera el rescate y entrega la reserva matemática",
      "Opera cobertura por fallecimiento y entrega la suma asegurada",
      "Opera el contraseguro y devuelve las primas pagadas",
      "Es un riesgo excluido y no entrega nada"
    ],
    "c": 2,
    "e": "El contraseguro devuelve al contratante el 100% de las primas pagadas."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "q": "Es el acuerdo por el cual dos o más aseguradoras cubren de forma concurrente el mismo riesgo. El asegurado debe cobrarle a cada una su parte proporcional.",
    "options": [
      "Reaseguro",
      "Coaseguro",
      "Fideicomiso",
      "Sindicato de Seguros"
    ],
    "c": 1,
    "e": "Es el coaseguro técnico (no confundir con el coaseguro de GMM). El Reaseguro es transparente para el cliente."
  },
  {
    "m": 1,
    "t": "Instituciones Reguladoras",
    "q": "¿Qué institución tiene como máxima autoridad financiera autorizar el inicio de operaciones de las aseguradoras en México?",
    "options": [
      "CNSF",
      "Banxico",
      "CONDUSEF",
      "SHCP"
    ],
    "c": 3,
    "e": "La Secretaría de Hacienda y Crédito Público (SHCP) otorga la autorización para constituirse."
  },
  {
    "m": 1,
    "t": "Instituciones Reguladoras",
    "q": "Entidad constituida por una asociación de personas expuestas a un riesgo, operan SIN FIN DE LUCRO y su alcance suele estar limitado geográficamente o por gremio.",
    "options": [
      "Aseguradora Tradicional",
      "Sociedad Mutualista",
      "Fondo de Aseguramiento",
      "Afianzadora"
    ],
    "c": 1,
    "e": "Las Mutualistas buscan el auxilio mutuo sin lucro; las Aseguradoras son S.A. con fines de lucro."
  },
  {
    "m": 1,
    "t": "Instituciones Reguladoras",
    "q": "¿Cuáles son las únicas tres operaciones de seguros autorizadas en México?",
    "options": [
      "Personas, Vehículos y Daños",
      "Vida, Salud y Gastos Médicos",
      "Vida, Accidentes y Enfermedades, y Daños",
      "Vida, Propiedad y Fianzas"
    ],
    "c": 2,
    "e": "Ley de Instituciones de Seguros y Fianzas: Vida, Accidentes y Enfermedades (AP, GMM, Salud) y Daños."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "q": "Es el requisito legal por el cual el contratante debe tener un afecto económico real y legítimo en que el siniestro no ocurra (ej. la propia vida o un bien propio).",
    "options": [
      "Buena Fe",
      "Interés Asegurable",
      "Contrato de Adhesión",
      "Indisputabilidad"
    ],
    "c": 1,
    "e": "Sin interés asegurable el seguro se vuelve una apuesta ilegal (ej. no puedes asegurar la vida de un extraño)."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "q": "Característica del contrato de seguro por la cual el asegurado no negocia las cláusulas, simplemente acepta las condiciones preestablecidas por la aseguradora.",
    "options": [
      "Ubérrima Fides (Buena fe)",
      "Contrato Bilateral",
      "Contrato Aleatorio",
      "Contrato de Adhesión"
    ],
    "c": 3,
    "e": "En el contrato de adhesión una parte redacta y la otra se 'adhiere'."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "q": "¿Cuál es el plazo legal de prescripción para ejercer el cobro de la cobertura de FALLECIMIENTO en un seguro de vida?",
    "options": [
      "2 años",
      "3 años",
      "5 años",
      "10 años"
    ],
    "c": 2,
    "e": "Regla general: 2 años. Excepción exclusiva para vida (fallecimiento): 5 años."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "q": "Si el asegurado se suicida durante el primer año de vigencia de la póliza de vida, ¿cómo procede la aseguradora?",
    "options": [
      "Paga la suma asegurada completa",
      "Rechaza el siniestro sin devolver nada",
      "Devuelve las primas pagadas",
      "Devuelve la Reserva Matemática acumulada a la fecha"
    ],
    "c": 3,
    "e": "Antes de 2 años es un riesgo excluido y solo se devuelve la reserva matemática generada."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "q": "¿Qué nivel mínimo de escolaridad se requiere para ser Agente de Seguros en México?",
    "options": [
      "Secundaria",
      "Bachillerato / Preparatoria",
      "Licenciatura",
      "Ninguno"
    ],
    "c": 1,
    "e": "Se requiere certificado oficial de preparatoria o equivalente."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "q": "¿Cuál es la vigencia de la Cédula de Agente emitida por la CNSF?",
    "options": [
      "1 año",
      "2 años",
      "3 años",
      "5 años"
    ],
    "c": 2,
    "e": "La vigencia es de 3 años, revalidable (o exenta de examen si obtienes más de 80 puntos)."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "q": "¿Cuántos días naturales tiene un agente nuevo para contratar y presentar su póliza de Errores y Omisiones (RC) tras obtener su cédula?",
    "options": [
      "10 días",
      "15 días",
      "30 días",
      "60 días"
    ],
    "c": 2,
    "e": "Obligatorio contratar póliza de RC en máximo 30 días naturales."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "q": "¿Cuántos días hábiles tienen como máximo los agentes para ingresar a las aseguradoras las primas cobradas en efectivo o cheque?",
    "options": [
      "3 días",
      "5 días",
      "10 días",
      "15 días"
    ],
    "c": 2,
    "e": "Ley: Límite máximo de 10 días hábiles para ingresar el dinero."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "q": "En el esquema de sanciones de la CNSF, si un agente acumula 3 amonestaciones escritas en un mismo año calendario, la consecuencia es:",
    "options": [
      "Revocación definitiva",
      "Multa económica de 100 UMA",
      "Suspensión temporal",
      "Inhabilitación de por vida"
    ],
    "c": 2,
    "e": "3 amonestaciones en un año causan suspensión temporal de la cédula."
  },
  {
    "m": 1,
    "t": "Prevención de Lavado de Dinero",
    "q": "Cuando un cliente persona física paga una prima de 11,000 USD en efectivo, el agente debe recabar obligatoriamente (Prevención de Lavado de Dinero):",
    "options": [
      "Comprobante de domicilio",
      "RFC y CURP",
      "Documento oficial vigente con fotografía y firma",
      "Declaración anual de impuestos"
    ],
    "c": 2,
    "e": "Es requisito indispensable identificarlo con identificación oficial vigente."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "q": "¿Cuál es el documento que perfecciona el contrato de seguro y sirve como comprobante de la celebración del mismo?",
    "options": [
      "La Póliza",
      "La Solicitud",
      "El Recibo de Pago",
      "El Endoso"
    ],
    "c": 0,
    "e": "La póliza es el documento legal que formaliza y perfecciona el contrato de seguro."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "q": "Es el agente vinculado a una aseguradora mediante un contrato de trabajo (relación obrero-patronal) y recibe un sueldo además de comisiones:",
    "options": [
      "Agente Vinculado",
      "Agente Independiente",
      "Agente Empleado",
      "Agente Apoderado"
    ],
    "c": 2,
    "e": "El agente empleado es el único que tiene relación laboral subordinada. Los demás son comisionistas independientes."
  },
  {
    "m": 1,
    "t": "Conceptos de Riesgo",
    "q": "Para que un riesgo sea asegurable debe ser LÍCITO. Esto significa que:",
    "options": [
      "No debe atentar contra la moral, la ley o las buenas costumbres",
      "Debe tener un costo económico fácil de medir",
      "Debe suceder de forma repentina e imprevista",
      "Debe estar sujeto a un análisis matemático"
    ],
    "c": 0,
    "e": "Lícito significa que el bien o interés asegurado está dentro de la ley."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "q": "Si un agente de seguros cambia de domicilio particular, ¿cuántos días tiene para notificar a la CNSF?",
    "options": [
      "10 días hábiles",
      "15 días hábiles",
      "30 días naturales",
      "No es necesario notificar"
    ],
    "c": 0,
    "e": "Por reglamento, los cambios de domicilio deben reportarse en máximo 10 días hábiles."
  },
  {
    "m": 1,
    "t": "Instituciones Reguladoras",
    "q": "La función principal de CONDUSEF en el ámbito de seguros es:",
    "options": [
      "Autorizar tarifas y primas",
      "Expedir cédulas a los agentes",
      "Defender los derechos de los usuarios y fungir como conciliador",
      "Investigar fraudes de aseguradoras"
    ],
    "c": 2,
    "e": "CONDUSEF es la defensora de los usuarios de servicios financieros, mediando disputas."
  },
  {
    "m": 1,
    "t": "El Contrato de Seguro",
    "q": "El Principio de Subrogación permite a la aseguradora:",
    "options": [
      "Cobrar primas atrasadas",
      "Cancelar la póliza sin previo aviso",
      "Adquirir los derechos del asegurado contra el tercero responsable del daño",
      "Compartir el riesgo con otra compañía"
    ],
    "c": 2,
    "e": "Al pagar el siniestro, la aseguradora se subroga (toma el lugar) en los derechos para demandar al culpable."
  },
  {
    "m": 1,
    "t": "Suscripción",
    "q": "Si un solicitante omite mencionar que padece hipertensión en su solicitud médica y la aseguradora lo descubre en el mes 6, ¿qué procede?",
    "options": [
      "Cancelación técnica inmediata por omisión/inexacta declaración",
      "Pagar el siniestro si ocurre",
      "Cobrar extraprima retroactiva",
      "No se puede hacer nada por ser contrato de adhesión"
    ],
    "c": 0,
    "e": "Toda omisión de salud en los primeros 2 años causa rescisión del contrato (falta de buena fe)."
  },
  {
    "m": 1,
    "t": "Agentes de Seguros",
    "q": "Un agente apoderado es aquel que:",
    "options": [
      "Vende seguros por su cuenta para 5 aseguradoras",
      "Representa jurídicamente a una Persona Moral (Corredor) autorizada por la CNSF",
      "Trabaja en el banco vendiendo seguros",
      "Funge como ajustador de siniestros"
    ],
    "c": 1,
    "e": "El agente apoderado es quien tiene poder notarial para vender a nombre de un Corredor/Despacho Moral."
  },
  {
    "m": 1,
    "t": "Instituciones Reguladoras",
    "q": "Las pólizas de seguro en México (condiciones generales) deben estar registradas y autorizadas obligatoriamente ante:",
    "options": [
      "CONDUSEF",
      "SHCP",
      "AMIS",
      "CNSF"
    ],
    "c": 3,
    "e": "La Comisión Nacional de Seguros y Fianzas aprueba los productos antes de su venta."
  },
  {
    "m": 1,
    "t": "Prevención de Lavado de Dinero",
    "q": "Dentro de la ley de PLD, las aseguradoras deben reportar a la autoridad cualquier 'Operación Inusual'. Esto se refiere a:",
    "options": [
      "Un siniestro rechazado por fraude",
      "Una operación que no concuerda con los antecedentes o actividad conocida del cliente",
      "Un pago en efectivo de 100 pesos",
      "La compra de un seguro temporal básico"
    ],
    "c": 1,
    "e": "Es inusual cuando rompe el patrón transaccional o perfil financiero del cliente."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Valores Garantizados",
    "q": "¿Cuáles son las 3 opciones de uso de los Valores Garantizados originados de la Reserva Matemática (además del préstamo)?",
    "options": [
      "Préstamo, Copago y Deducible",
      "Seguro Prorrogado, Seguro Saldado y Rescate",
      "Dividendos, Rescate y Coaseguro",
      "Préstamo Automático, Dividendo y Anualidad"
    ],
    "c": 1,
    "e": "Las opciones de conversión/disposición son Rescate, Seguro Saldado y Seguro Prorrogado."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Valores Garantizados",
    "q": "Si el asegurado deja de pagar, pero solicita mantener la MISMA SUMA ASEGURADA disminuyendo el PLAZO de cobertura original, está eligiendo el:",
    "options": [
      "Seguro Saldado",
      "Rescate",
      "Seguro Prorrogado",
      "Seguro Vitalicio"
    ],
    "c": 2,
    "e": "Mnemotecnia de examen: Prorrogado = Baja el Plazo."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Valores Garantizados",
    "q": "Si el asegurado deja de pagar, pero solicita mantener el MISMO PLAZO original del seguro, disminuyendo la SUMA ASEGURADA, está eligiendo el:",
    "options": [
      "Seguro Saldado",
      "Seguro Temporal",
      "Seguro Prorrogado",
      "Dividendos"
    ],
    "c": 0,
    "e": "Mnemotecnia de examen: Saldado = Baja la Suma asegurada."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Valores Garantizados",
    "q": "¿En un Seguro de Vida se usa el término 'Cancelación' cuando el cliente pide la devolución de su fondo y termina el contrato?",
    "options": [
      "Sí, Cancelación Voluntaria",
      "No, se llama Rescate",
      "No, se llama Préstamo Ordinario",
      "Sí, Cancelación Técnica"
    ],
    "c": 1,
    "e": "En seguros de vida, el término técnico legal es RESCATE."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Planes Dotal y Vitalicio",
    "q": "¿Plan de seguro de vida que es el más barato, ampara únicamente el riesgo de fallecimiento y si el cliente sobrevive NO le entrega nada ($0)?",
    "options": [
      "Vitalicio",
      "Dotal Puro",
      "Dotal Mixto",
      "Temporal"
    ],
    "c": 3,
    "e": "El plan Temporal solo cubre el riesgo de muerte por un plazo; si no muere, no hay pago."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Planes Dotal y Vitalicio",
    "q": "Plan de seguro que combina protección y ahorro: si el cliente sobrevive al plazo cobra su ahorro, si fallece antes, su familia cobra la suma asegurada.",
    "options": [
      "Vitalicio Pagos Limitados",
      "Temporal a 20 años",
      "Dotal Mixto",
      "Dotal Puro"
    ],
    "c": 2,
    "e": "El Dotal Mixto ampara ambas cosas (supervivencia y muerte). Es el plan más caro."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Adicionales",
    "q": "La cobertura adicional de Pérdidas Orgánicas EN EL SEGURO DE VIDA cubre exclusivamente la amputación de:",
    "options": [
      "Cualquier dedo, manos, pies y oídos",
      "Manos, pies, vista de ambos ojos, dedo índice y dedo pulgar",
      "Manos, pies, maxilar y dedo meñique",
      "Solo brazos y piernas completas"
    ],
    "c": 1,
    "e": "En Vida, pérdidas orgánicas está muy limitada a manos, pies, ojos y los dedos pulgar e índice."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Adicionales",
    "q": "Para que opere la cobertura de Muerte por Accidente Colectivo (Indemnización Triple), el siniestro debe ocurrir en:",
    "options": [
      "Como pasajero de Uber o Didi",
      "Como pasajero en un vuelo privado",
      "Como pasajero en transporte público terrestre con ruta fija, elevador público o incendio en edificio público",
      "Solo en accidentes de tren o avión comercial"
    ],
    "c": 2,
    "e": "Exige estrictamente un transporte público (ruta y boleto), un elevador público o edificio público incendiado."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Adicionales",
    "q": "Si el asegurado se accidenta y fallece a causa de las heridas 90 días después del evento, ¿opera la cobertura de Muerte Accidental?",
    "options": [
      "No, debe fallecer al instante",
      "No, el límite son 30 días",
      "Sí, el límite máximo legal son 90 días",
      "Sí, el límite son 6 meses"
    ],
    "c": 2,
    "e": "La muerte debe ocurrir dentro de los 90 días posteriores al accidente para considerarse accidental."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Básicas",
    "q": "Periodo en el cual la aseguradora puede rechazar el siniestro por omitir información médica o declarar falsedades en la solicitud de Vida:",
    "options": [
      "Periodo de Gracia",
      "Primeros 2 años de vigencia (Disputabilidad)",
      "Primeros 5 años de vigencia",
      "En cualquier momento (Fraude)"
    ],
    "c": 1,
    "e": "Después de 2 años ininterrumpidos, la póliza se vuelve Indisputable."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Básicas",
    "q": "¿Qué hace la aseguradora si el asegurado fallece y se descubre que su edad real era 75 años, pero el límite máximo de aceptación de la compañía era 70 años?",
    "options": [
      "Ajusta la Suma Asegurada de acuerdo a la prima pagada",
      "Paga la suma asegurada completa",
      "Rescinde el contrato (es nulo) y devuelve la Reserva Matemática",
      "Rescinde el contrato y devuelve las Primas Pagadas"
    ],
    "c": 2,
    "e": "Al estar FUERA de los límites de aceptación, el seguro es nulo. Se devuelve la reserva matemática."
  },
  {
    "m": 2,
    "t": "Seguro de Vida - Coberturas Básicas",
    "q": "En la figura del Fideicomiso en vida, la institución financiera o aseguradora que administra el dinero se denomina:",
    "options": [
      "Fideicomitente",
      "Fideusuario (o Fiduciario)",
      "Fideicomisario",
      "Beneficiario Irrevocable"
    ],
    "c": 1,
    "e": "Fideicomitente (cliente), Fideicomisario (beneficiario), Fideusuario (administrador)."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "q": "El seguro de Accidentes Personales (AP) cubre lesiones originadas por un evento con tres características. ¿Cuáles son?",
    "options": [
      "Crónico, preexistente y severo",
      "Súbito, fortuito y violento",
      "Progresivo, lícito y médico",
      "Aleatorio, catastrófico y súbito"
    ],
    "c": 1,
    "e": "Definición de accidente: Acción súbita (repentina), fortuita (sin intención) y violenta (externa)."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "q": "Para calcular el costo de la prima en la póliza de Accidentes Personales, ¿cuál es el factor determinante más importante?",
    "options": [
      "La edad y el sexo",
      "El historial clínico",
      "La Ocupación",
      "La zona geográfica"
    ],
    "c": 2,
    "e": "La ocupación determina el grado de riesgo a accidentarse. El sexo es indiferente en AP."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "q": "¿El suicidio está cubierto en el seguro de Accidentes Personales después de 2 años?",
    "options": [
      "Sí, al igual que en el Seguro de Vida",
      "No, el suicidio JAMÁS se considera accidente y está siempre excluido en AP",
      "Sí, si hubo incapacidad previa",
      "Solo si el juez dictamina demencia"
    ],
    "c": 1,
    "e": "El suicidio es una exclusión absoluta en Accidentes Personales; nunca se ampara."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "q": "¿Cuánto tiempo de antigüedad ininterrumpida necesita tener la póliza de AP para que operen las coberturas de Reembolso Médico y Pérdidas Orgánicas?",
    "options": [
      "Ninguno, desde el día 1",
      "30 días",
      "90 días",
      "1 año"
    ],
    "c": 1,
    "e": "Se requiere un periodo de 30 días de antigüedad en AP para usar reembolso y pérdidas orgánicas."
  },
  {
    "m": 2,
    "t": "Accidentes Personales - Exclusiones y Coberturas",
    "q": "A diferencia del Seguro de Vida, ¿qué pérdida orgánica SÍ se indemniza detalladamente en Accidentes Personales (Escala B)?",
    "options": [
      "Brazos completos",
      "Pérdida de la vista",
      "Maxilar, dedo meñique y otros dedos individuales",
      "Cuadriplejia"
    ],
    "c": 2,
    "e": "AP cubre la pérdida de dedos individuales y órganos menores mediante porcentajes específicos."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Preexistencias y Tiempos de Espera",
    "q": "En Gastos Médicos Mayores (GMM), ¿en qué momento se considera legalmente PREEXISTENTE una enfermedad?",
    "options": [
      "Si es diagnosticada en los primeros 30 días",
      "Si ya existía un diagnóstico médico previo o síntomas/signos manifiestos antes del inicio de vigencia",
      "Si requiere cirugía en el primer año",
      "Cualquier enfermedad no declarada, aunque fuera asintomática"
    ],
    "c": 1,
    "e": "La preexistencia requiere un diagnóstico previo comprobable o signos manifiestos a la vista antes de la contratación."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Preexistencias y Tiempos de Espera",
    "q": "Si un asegurado de GMM sufre un ACCIDENTE, ¿cuál es el periodo de espera para poder operarlo de la rodilla por fractura?",
    "options": [
      "1 año",
      "6 meses",
      "Ninguno, los periodos de espera se eliminan por accidente",
      "30 días"
    ],
    "c": 2,
    "e": "Los accidentes no están sujetos a periodos de espera, la cobertura es inmediata."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Preexistencias y Tiempos de Espera",
    "q": "En GMM, ¿cuál es el periodo de espera estándar para padecimientos como Tumoración mamaria, Hemorroides y Amigdalitis?",
    "options": [
      "10 meses",
      "1 año",
      "2 años",
      "5 años"
    ],
    "c": 1,
    "e": "Estos padecimientos requieren 1 año de antigüedad ininterrumpida."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Preexistencias y Tiempos de Espera",
    "q": "En GMM, ¿cuál es el periodo de espera establecido convencionalmente para SIDA y Cáncer?",
    "options": [
      "1 año",
      "2 años",
      "5 años",
      "No tienen periodo de espera"
    ],
    "c": 2,
    "e": "El SIDA, y en muchas compañías las enfermedades oncológicas complejas, exigen 5 años de antigüedad."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Deducible y Coaseguro",
    "q": "En GMM, el cliente asume una participación económica mediante dos conceptos. El monto fijo inicial se llama ____ y el porcentaje posterior se llama ____.",
    "options": [
      "Copago / Franquicia",
      "Coaseguro / Deducible",
      "Deducible / Coaseguro",
      "Reserva / Copago"
    ],
    "c": 2,
    "e": "Primero se paga el Deducible (fijo) y sobre el restante se calcula el Coaseguro (porcentaje)."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Deducible y Coaseguro",
    "q": "¿Cómo se consideran los tratamientos psiquiátricos, psicológicos y estéticos en el seguro básico de GMM?",
    "options": [
      "Totalmente cubiertos sin costo",
      "Cubiertos con deducible especial",
      "Riesgos excluidos (que en algunos casos pueden ampararse por convenio expreso)",
      "Cubiertos solo en caso de accidente"
    ],
    "c": 2,
    "e": "Están excluidos de la cobertura básica, aunque psiquiatría puede ampararse pagando extraprima (convenio)."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Deducible y Coaseguro",
    "q": "El método de indemnización en GMM donde el cliente paga todo de su bolsillo y luego envía facturas a la aseguradora para recuperar el dinero se llama:",
    "options": [
      "Pago Directo",
      "Reembolso",
      "Programación de Cirugía",
      "Copago"
    ],
    "c": 1,
    "e": "Esa es la definición exacta de Reembolso."
  },
  {
    "m": 2,
    "t": "Seguro de Salud - Atención y Copagos",
    "q": "A diferencia de GMM, el Seguro de Salud (ISES) se enfoca en la prevención y no cobra deducible ni coaseguro, sino una cuota por consulta llamada:",
    "options": [
      "Prima",
      "Franquicia",
      "Copago",
      "Extraprima"
    ],
    "c": 2,
    "e": "El copago es la participación fija por consulta en Seguros de Salud."
  },
  {
    "m": 2,
    "t": "Seguro de Salud - Atención y Copagos",
    "q": "En el Seguro de Salud, el 'Primer Nivel' de atención está compuesto obligatoriamente por estas 4 especialidades:",
    "options": [
      "Pediatría, Ginecoobstetricia, Medicina Interna y Cirugía General",
      "Cardiología, Neurología, Dermatología y Odontología",
      "Traumatología, Pediatría, Psiquiatría y Ginecología",
      "Oncología, Cirugía Plástica, Oftalmología y Medicina General"
    ],
    "c": 0,
    "e": "Memoriza estas 4: Pediatría, Gineco, Med. Interna, Cirugía Gral."
  },
  {
    "m": 2,
    "t": "Seguro de Salud - Atención y Copagos",
    "q": "¿Qué dependencia pública gratuita se encarga de resolver controversias y defender los derechos de los pacientes ante una negligencia médica de la red del Seguro de Salud?",
    "options": [
      "SHCP",
      "CONDUSEF",
      "CONAMED (Com. Nacional de Arbitraje Médico)",
      "CNSF"
    ],
    "c": 2,
    "e": "CONAMED es el árbitro para conflictos médicos en clínicas y hospitales."
  },
  {
    "m": 2,
    "t": "Gastos Médicos Mayores - Deducible y Coaseguro",
    "q": "¿En qué cobertura de seguros aplica el concepto de tope de coaseguro (monto máximo de participación del cliente)?",
    "options": [
      "Seguro de Vida",
      "Seguro de Auto",
      "Gastos Médicos Mayores",
      "Seguro de Daños"
    ],
    "c": 2,
    "e": "El tope de coaseguro protege la economía del asegurado en enfermedades muy costosas en GMM."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "q": "Dentro del Sistema Financiero Mexicano, ¿qué organismo es el encargado de proveer de moneda nacional (billetes y monedas) a la economía y controlar la inflación?",
    "options": [
      "SHCP",
      "CNBV",
      "Banco de México (Banxico)",
      "Casa de Moneda"
    ],
    "c": 2,
    "e": "Banxico es el banco central autónomo responsable de la política monetaria y emisión de dinero."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "q": "¿Qué comisión supervisa a las AFOREs y SIEFOREs?",
    "options": [
      "CNBV",
      "CNSF",
      "CONSAR",
      "CONDUSEF"
    ],
    "c": 2,
    "e": "La CONSAR regula el Sistema de Ahorro para el Retiro."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "q": "¿Cuál es la diferencia operativa entre una AFORE y una SIEFORE?",
    "options": [
      "La AFORE invierte y la SIEFORE capta los fondos",
      "La AFORE registra/administra tu cuenta y la SIEFORE es el fondo que invierte el dinero en el mercado",
      "Son el mismo organismo, cambian de nombre según el banco",
      "La AFORE es del gobierno y la SIEFORE es privada"
    ],
    "c": 1,
    "e": "AFORE = Administración y estado de cuenta. SIEFORE = Inversión bursátil (generacional)."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "q": "Las Arrendadoras Financieras, Empresas de Factoraje y Casas de Cambio pertenecen al:",
    "options": [
      "Sector Bancario",
      "Sector Bursátil",
      "Sector de Seguros",
      "Sector Auxiliar de Crédito"
    ],
    "c": 3,
    "e": "Recuerda la regla: Su nombre oficial en el examen es Sector Auxiliar de Crédito (vigilado por CNBV)."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "q": "Banjército, Bancomext y el Banco del Bienestar son instituciones del gobierno que pertenecen a la:",
    "options": [
      "Banca Comercial",
      "Banca de Desarrollo (Segundo Piso)",
      "Sector Auxiliar",
      "Sofomes"
    ],
    "c": 1,
    "e": "La Banca de Desarrollo busca impulsar sectores prioritarios del país."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "q": "Instrumento financiero emitido por el GOBIERNO a corto plazo, considerado de nulo riesgo y que se vende 'A Descuento' (Cupón Cero):",
    "options": [
      "Bondes",
      "Acciones",
      "CETES",
      "Obligaciones"
    ],
    "c": 2,
    "e": "Los Certificados de la Tesorería (CETES) son el principal instrumento gubernamental a descuento."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "q": "Instrumento de renta variable emitido por EMPRESAS, el cual representa una fracción del capital social de la compañía:",
    "options": [
      "Obligaciones",
      "CPOs",
      "Acciones",
      "CETES"
    ],
    "c": 2,
    "e": "Comprar acciones te vuelve dueño de una parte de la empresa, asumiendo riesgo de renta variable."
  },
  {
    "m": 3,
    "t": "Sistema Financiero Mexicano",
    "q": "Las EMPRESAS emiten este instrumento de deuda de largo plazo ÚNICA Y EXCLUSIVAMENTE con el fin de pagar pasivos (deudas anteriores):",
    "options": [
      "Pagarés",
      "Acciones",
      "Obligaciones",
      "Bonos de Prenda"
    ],
    "c": 2,
    "e": "Por ley, las 'Obligaciones' corporativas se emiten para reestructurar deudas."
  },
  {
    "m": 3,
    "t": "Matemáticas - Inflación",
    "q": "La tasa de interés pactada que cobra un banco por un crédito SIN considerar el impacto de la inflación se llama:",
    "options": [
      "Tasa Nominal",
      "Tasa Real",
      "Tasa Efectiva",
      "Tasa Pasiva"
    ],
    "c": 0,
    "e": "La Tasa Nominal es la tasa bruta antes de descontar la inflación."
  },
  {
    "m": 3,
    "t": "Matemáticas - Inflación",
    "q": "Si la Tasa Nominal es del 10% y la Tasa de Inflación fue del 6%, ¿cuál será aproximadamente la Tasa Real que verás como respuesta correcta en el examen?",
    "options": [
      "Exactamente 4.00%",
      "3.77% (ligeramente menor a 4%)",
      "16.00%",
      "-4.00%"
    ],
    "c": 1,
    "e": "Hack de examen: La Tasa Real es la nominal menos inflación, pero la respuesta correcta siempre es un decimal ligeramente menor a la resta directa."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Simple",
    "q": "Las ganancias en este tipo de interés son idénticas en cada periodo, ya que se calculan siempre sobre el capital inicial (no se capitalizan los intereses).",
    "options": [
      "Interés Efectivo",
      "Interés Nominal",
      "Interés Simple",
      "Interés Compuesto"
    ],
    "c": 2,
    "e": "En el Interés Simple (I = C*i*n), el dinero no se reinvierte."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Compuesto",
    "q": "Si en un problema de matemáticas del examen lees las palabras 'Capitalizable mensualmente' o 'Convertible trimestralmente', debes aplicar la fórmula de:",
    "options": [
      "Interés Simple",
      "Interés Compuesto",
      "Valor Presente Simple",
      "Factor de Descuento"
    ],
    "c": 1,
    "e": "Capitalizable o convertible son palabras clave que indican el uso de Interés Compuesto."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Simple",
    "q": "¿Cuántos decimales exactos debes usar en tu calculadora básica y cortar (sin redondear el último) para todas tus operaciones en el examen?",
    "options": [
      "2 decimales",
      "3 decimales",
      "4 decimales",
      "Todos los que salgan"
    ],
    "c": 2,
    "e": "El manual y la CNSF exigen truncar a 4 decimales en todo momento."
  },
  {
    "m": 3,
    "t": "Matemáticas - Inflación",
    "q": "Inflación: Tienes $1,200 que te alcanzan para comprar 12 camisas ($100 c/u). Si la inflación del año es 8%, la camisa costará $108. ¿Cuántas camisas completas podrás comprar con tus mismos $1,200?",
    "options": [
      "12 camisas",
      "11 camisas",
      "11.11 camisas",
      "10 camisas"
    ],
    "c": 1,
    "e": "$1,200 / 108 = 11.11. En el examen solo compras bienes enteros, así que te alcanza para 11 camisas."
  },
  {
    "m": 3,
    "t": "Matemáticas - Fracciones",
    "q": "Relaciona la fracción 5/8 con su porcentaje y decimal equivalente de manera correcta:",
    "options": [
      "0.5800 -> 58.00%",
      "0.6250 -> 62.50%",
      "0.1600 -> 16.00%",
      "0.3750 -> 37.50%"
    ],
    "c": 1,
    "e": "5 dividido entre 8 da 0.6250, que equivale al 62.50%."
  },
  {
    "m": 3,
    "t": "Matemáticas - Fracciones",
    "q": "Se reparten $2,400,000 pesos de una póliza. 3/8 del capital se destinan al cónyuge y el resto se divide idéntico entre sus 2 hijos. ¿Cuánto recibe cada hijo?",
    "options": [
      "$750,000.00",
      "$900,000.00",
      "$600,000.00",
      "$781,250.00"
    ],
    "c": 0,
    "e": "Cónyuge (3/8) = $900k. Sobran 5/8 ($1.5M). $1.5M entre 2 = $750,000 cada hijo."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Simple",
    "q": "Un cliente deposita $45,000 pesos en un PRLV al 8.5% anual. Plazo de 3 años. ¿Cuál es el monto total (capital + intereses) al vencer?",
    "options": [
      "$56,475.00",
      "$11,475.00",
      "$57,250.00",
      "$48,825.00"
    ],
    "c": 0,
    "e": "Intereses (I = 45000 * 0.0850 * 3 = 11475). Total = 45000 + 11475 = $56,475.00."
  },
  {
    "m": 3,
    "t": "Matemáticas - Interés Compuesto",
    "q": "Inversionista deposita $50,000 pesos al 12% anual capitalizable semestralmente a 2 años. Truncando a 4 decimales, ¿cuál es el interés compuesto generado?",
    "options": [
      "$13,120.00",
      "$12,000.00",
      "$13,248.50",
      "$12,624.70"
    ],
    "c": 0,
    "e": "Tasa semestral = 6%. Periodos = 4. Factor (1.06^4) truncado paso a paso da 1.2624. I = 50000 * (1.2624 - 1) = $13,120.00."
  },
  {
    "m": 3,
    "t": "Matemáticas - Valor Futuro y Presente",
    "q": "Un comerciante desea liquidar una deuda de $150,000 en 2 años. Si la tasa simple es 9% anual, ¿cuál es el Valor Presente a invertir hoy?",
    "options": [
      "$127,118.64",
      "$126,050.40",
      "$137,614.67",
      "$125,000.00"
    ],
    "c": 0,
    "e": "VP = VF / (1 + (i*n)) -> 150000 / (1 + (0.09*2)) = 150000 / 1.18 = $127,118.64."
  },
  {
    "m": 3,
    "t": "Matemáticas - Valor Futuro y Presente",
    "q": "Invierte $25,000 al 18% anual capitalizable bimestralmente. ¿Cuál será el Valor Futuro al cabo de 1 año (truncando a 4 decimales)?",
    "options": [
      "$29,845.00",
      "$29,500.00",
      "$28,950.00",
      "$30,225.40"
    ],
    "c": 0,
    "e": "Tasa bimestral = 3%. n = 6 bimestres. Factor (1.03^6) = 1.1938. VF = 25000 * 1.1938 = $29,845.00."
  }
];
