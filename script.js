document.addEventListener("DOMContentLoaded", function() {
    // Diccionario de traducciones para varios idiomas
    const translations = {
      es: {
        siteTitle: "Calculadora Multifuncional",
        navPercentage: "Porcentajes",
        navDiscount: "Descuentos",
        navCurrency: "Divisas",
        navDirectory: "Directorio",
        navIVA: "IVA",
        navInterest: "Interés Simple",
        
        headingPercentage: "Calculadora de Porcentajes",
        descPercentage: "Calcula X% de un valor. Ingresa el porcentaje y el valor base.",
        percPlaceholder: "Porcentaje (%)",
        valuePlaceholder: "Valor base",
        btnCalculatePercentage: "Calcular Porcentaje",
        
        headingDiscount: "Calculadora de Descuentos",
        descDiscount: "Calcula el precio final después de restar un porcentaje. Ingresa el precio original y el % de descuento.",
        origPricePlaceholder: "Precio original",
        discountPercPlaceholder: "Descuento (%)",
        btnCalculateDiscount: "Calcular Descuento",
        
        headingCurrency: "Conversor de Divisas",
        descCurrency: "Convierte montos entre divisas. Selecciona la moneda de origen y destino y presiona convertir. Las tasas se actualizan en tiempo real.",
        amountPlaceholder: "Cantidad",
        btnConvertCurrency: "Convertir Divisa",
        
        headingDirectory: "Directorio de Calculadoras de Porcentajes",
        descDirectory: "Utiliza las siguientes herramientas para cálculos adicionales:",
        
        headingAddPercentage: "Añadir un porcentaje a una cantidad",
        descAddPercentage: "Si la cantidad inicial es X y deseas añadir Y%, la cantidad final es:",
        origAddPlaceholder: "Cantidad inicial",
        addPercPlaceholder: "Porcentaje a añadir (%)",
        btnAddPercentage: "Calcular Añadido",
        
        headingChangePercentage: "Cambio porcentual",
        descChangePercentage: "El cambio porcentual entre un valor inicial y final es:",
        initValuePlaceholder: "Valor inicial",
        finalValuePlaceholder: "Valor final",
        btnChangePercentage: "Calcular Cambio %",
        
        headingPercentToDecimal: "Convertir porcentaje a decimal",
        descPercentToDecimal: "El porcentaje en decimal se obtiene dividiendo el porcentaje entre 100:",
        percInputDecimalPlaceholder: "Porcentaje (%)",
        btnPercentToDecimal: "Convertir a Decimal",
        
        headingFractionToPercent: "Convertir fracciones a porcentajes",
        descFractionToPercent: "La fracción n/d en porcentaje es:",
        numeratorPlaceholder: "Numerador",
        denomPlaceholder: "Denominador",
        btnFractionToPercent: "Calcular Porcentaje",
        
        headingPartOfTotal: "Calcular qué porcentaje del total es un número",
        descPartOfTotal: "Si X es parte de Y, el porcentaje es:",
        partPlaceholder: "Parte",
        totalPlaceholder: "Total",
        btnPartOfTotal: "Calcular % del Total",
        
        headingTotalFromPercent: "Calcular el número total si sabe el porcentaje",
        descTotalFromPercent: "Si X es Y% del total, el total es:",
        partTotalPlaceholder: "Parte (X)",
        percentageTotalPlaceholder: "Porcentaje (%)",
        btnTotalFromPercent: "Calcular Total",
        
        headingIVA: "Calculadora de IVA",
        descIVA: "Calcula el IVA y el precio final a partir de un precio base y una tasa de IVA.",
        origPriceIVAPlaceholder: "Precio base",
        ivaRatePlaceholder: "Tasa de IVA (%)",
        btnCalculateIVA: "Calcular IVA",
        
        headingInterest: "Calculadora de Interés Simple",
        descInterest: "Calcula el interés simple y el monto total a partir del capital, la tasa de interés y el tiempo (años).",
        capitalPlaceholder: "Capital",
        interestRatePlaceholder: "Tasa de interés (%)",
        timePlaceholder: "Tiempo (años)",
        btnCalculateInterest: "Calcular Interés"
      },
      en: {
        siteTitle: "Multifunctional Calculator",
        navPercentage: "Percentages",
        navDiscount: "Discounts",
        navCurrency: "Currencies",
        navDirectory: "Directory",
        navIVA: "VAT",
        navInterest: "Simple Interest",
        
        headingPercentage: "Percentage Calculator",
        descPercentage: "Calculate X% of a value. Enter the percentage and the base value.",
        percPlaceholder: "Percentage (%)",
        valuePlaceholder: "Base value",
        btnCalculatePercentage: "Calculate Percentage",
        
        headingDiscount: "Discount Calculator",
        descDiscount: "Calculate the final price after a discount. Enter the original price and discount %.",
        origPricePlaceholder: "Original price",
        discountPercPlaceholder: "Discount (%)",
        btnCalculateDiscount: "Calculate Discount",
        
        headingCurrency: "Currency Converter",
        descCurrency: "Convert amounts between currencies. Select source and target currencies and click convert. Rates update in real time.",
        amountPlaceholder: "Amount",
        btnConvertCurrency: "Convert Currency",
        
        headingDirectory: "Directory of Percentage Calculators",
        descDirectory: "Use the following tools for additional calculations:",
        
        headingAddPercentage: "Add a Percentage to a Value",
        descAddPercentage: "If the initial amount is X and you want to add Y%, the final amount is:",
        origAddPlaceholder: "Initial amount",
        addPercPlaceholder: "Percentage to add (%)",
        btnAddPercentage: "Calculate Added Amount",
        
        headingChangePercentage: "Percentage Change",
        descChangePercentage: "The percentage change between an initial and final value is:",
        initValuePlaceholder: "Initial value",
        finalValuePlaceholder: "Final value",
        btnChangePercentage: "Calculate Change %",
        
        headingPercentToDecimal: "Convert Percentage to Decimal",
        descPercentToDecimal: "The decimal equivalent is obtained by dividing the percentage by 100:",
        percInputDecimalPlaceholder: "Percentage (%)",
        btnPercentToDecimal: "Convert to Decimal",
        
        headingFractionToPercent: "Convert Fractions to Percentages",
        descFractionToPercent: "The fraction n/d as a percentage is:",
        numeratorPlaceholder: "Numerator",
        denomPlaceholder: "Denominator",
        btnFractionToPercent: "Calculate Percentage",
        
        headingPartOfTotal: "Calculate What Percentage a Number Is of a Total",
        descPartOfTotal: "If X is part of Y, the percentage is:",
        partPlaceholder: "Part",
        totalPlaceholder: "Total",
        btnPartOfTotal: "Calculate % of Total",
        
        headingTotalFromPercent: "Calculate Total from a Given Percentage",
        descTotalFromPercent: "If X is Y% of the total, the total is:",
        partTotalPlaceholder: "Part (X)",
        percentageTotalPlaceholder: "Percentage (%)",
        btnTotalFromPercent: "Calculate Total",
        
        headingIVA: "VAT Calculator",
        descIVA: "Calculate the VAT and final price from a base price and VAT rate.",
        origPriceIVAPlaceholder: "Base price",
        ivaRatePlaceholder: "VAT Rate (%)",
        btnCalculateIVA: "Calculate VAT",
        
        headingInterest: "Simple Interest Calculator",
        descInterest: "Calculate the simple interest and total amount based on the principal, interest rate, and time (years).",
        capitalPlaceholder: "Principal",
        interestRatePlaceholder: "Interest Rate (%)",
        timePlaceholder: "Time (years)",
        btnCalculateInterest: "Calculate Interest"
      },
      pt: {
        siteTitle: "Calculadora Multifuncional",
        navPercentage: "Porcentagens",
        navDiscount: "Descontos",
        navCurrency: "Moedas",
        navDirectory: "Diretório",
        navIVA: "IVA",
        navInterest: "Juros Simples",
        
        headingPercentage: "Calculadora de Porcentagens",
        descPercentage: "Calcule X% de um valor. Insira a porcentagem e o valor base.",
        percPlaceholder: "Porcentagem (%)",
        valuePlaceholder: "Valor base",
        btnCalculatePercentage: "Calcular Porcentagem",
        
        headingDiscount: "Calculadora de Descontos",
        descDiscount: "Calcule o preço final após um desconto. Insira o preço original e o % de desconto.",
        origPricePlaceholder: "Preço original",
        discountPercPlaceholder: "Desconto (%)",
        btnCalculateDiscount: "Calcular Desconto",
        
        headingCurrency: "Conversor de Moedas",
        descCurrency: "Converta valores entre moedas. Selecione a moeda de origem e destino e clique em converter. As taxas são atualizadas em tempo real.",
        amountPlaceholder: "Quantidade",
        btnConvertCurrency: "Converter Moeda",
        
        headingDirectory: "Diretório de Calculadoras de Porcentagens",
        descDirectory: "Utilize as seguintes ferramentas para cálculos adicionais:",
        
        headingAddPercentage: "Adicionar uma porcentagem a um valor",
        descAddPercentage: "Se o valor inicial é X e você deseja adicionar Y%, o valor final é:",
        origAddPlaceholder: "Valor inicial",
        addPercPlaceholder: "Porcentagem a adicionar (%)",
        btnAddPercentage: "Calcular Valor Adicionado",
        
        headingChangePercentage: "Variação Percentual",
        descChangePercentage: "A variação percentual entre um valor inicial e final é:",
        initValuePlaceholder: "Valor inicial",
        finalValuePlaceholder: "Valor final",
        btnChangePercentage: "Calcular Variação %",
        
        headingPercentToDecimal: "Converter porcentagem para decimal",
        descPercentToDecimal: "O equivalente decimal é obtido dividindo a porcentagem por 100:",
        percInputDecimalPlaceholder: "Porcentagem (%)",
        btnPercentToDecimal: "Converter para Decimal",
        
        headingFractionToPercent: "Converter frações para porcentagens",
        descFractionToPercent: "A fração n/d em porcentagem é:",
        numeratorPlaceholder: "Numerador",
        denomPlaceholder: "Denominador",
        btnFractionToPercent: "Calcular Porcentagem",
        
        headingPartOfTotal: "Calcular que porcentagem um número representa do total",
        descPartOfTotal: "Se X é parte de Y, a porcentagem é:",
        partPlaceholder: "Parte",
        totalPlaceholder: "Total",
        btnPartOfTotal: "Calcular % do Total",
        
        headingTotalFromPercent: "Calcular o total a partir de uma porcentagem",
        descTotalFromPercent: "Se X é Y% do total, o total é:",
        partTotalPlaceholder: "Parte (X)",
        percentageTotalPlaceholder: "Porcentagem (%)",
        btnTotalFromPercent: "Calcular Total",
        
        headingIVA: "Calculadora de IVA",
        descIVA: "Calcule o IVA e o preço final a partir do preço base e da taxa de IVA.",
        origPriceIVAPlaceholder: "Preço base",
        ivaRatePlaceholder: "Taxa de IVA (%)",
        btnCalculateIVA: "Calcular IVA",
        
        headingInterest: "Calculadora de Juros Simples",
        descInterest: "Calcule os juros simples e o montante total com base no capital, taxa de juros e tempo (anos).",
        capitalPlaceholder: "Capital",
        interestRatePlaceholder: "Taxa de Juros (%)",
        timePlaceholder: "Tempo (anos)",
        btnCalculateInterest: "Calcular Juros"
      }
    };
  
    // Función para actualizar textos según idioma
    function updateLanguage(lang) {
      const siteTitleEl = document.getElementById('siteTitle');
      if (siteTitleEl) siteTitleEl.innerText = translations[lang].siteTitle;
      
      document.querySelectorAll('.nav-link').forEach(link => {
        let key = link.getAttribute('data-key');
        if(translations[lang][key]) {
          link.innerText = translations[lang][key];
        }
      });
      
      let elem;
      elem = document.querySelector('[data-key="headingPercentage"]');
      if (elem) elem.innerText = translations[lang].headingPercentage;
      elem = document.querySelector('[data-key="descPercentage"]');
      if (elem) elem.innerText = translations[lang].descPercentage;
      const percInput = document.getElementById('percInput');
      if (percInput) percInput.placeholder = translations[lang].percPlaceholder;
      const valueInput = document.getElementById('valueInput');
      if (valueInput) valueInput.placeholder = translations[lang].valuePlaceholder;
      elem = document.querySelector('[data-key="btnCalculatePercentage"]');
      if (elem) elem.innerText = translations[lang].btnCalculatePercentage;
      
      elem = document.querySelector('[data-key="headingDiscount"]');
      if (elem) elem.innerText = translations[lang].headingDiscount;
      elem = document.querySelector('[data-key="descDiscount"]');
      if (elem) elem.innerText = translations[lang].descDiscount;
      const originalPrice = document.getElementById('originalPrice');
      if (originalPrice) originalPrice.placeholder = translations[lang].origPricePlaceholder;
      const discountPerc = document.getElementById('discountPerc');
      if (discountPerc) discountPerc.placeholder = translations[lang].discountPercPlaceholder;
      elem = document.querySelector('[data-key="btnCalculateDiscount"]');
      if (elem) elem.innerText = translations[lang].btnCalculateDiscount;
      
      elem = document.querySelector('[data-key="headingCurrency"]');
      if (elem) elem.innerText = translations[lang].headingCurrency;
      elem = document.querySelector('[data-key="descCurrency"]');
      if (elem) elem.innerText = translations[lang].descCurrency;
      const amountEl = document.getElementById('amount');
      if (amountEl) amountEl.placeholder = translations[lang].amountPlaceholder;
      elem = document.querySelector('[data-key="btnConvertCurrency"]');
      if (elem) elem.innerText = translations[lang].btnConvertCurrency;
      
      elem = document.querySelector('[data-key="headingDirectory"]');
      if (elem) elem.innerText = translations[lang].headingDirectory;
      elem = document.querySelector('[data-key="descDirectory"]');
      if (elem) elem.innerText = translations[lang].descDirectory;
      
      // Añadir porcentaje a una cantidad
      elem = document.querySelector('[data-key="headingAddPercentage"]');
      if (elem) elem.innerText = translations[lang].headingAddPercentage;
      elem = document.querySelector('[data-key="descAddPercentage"]');
      if (elem) elem.innerText = translations[lang].descAddPercentage;
      const initialAdd = document.getElementById('initialAdd');
      if (initialAdd) initialAdd.placeholder = translations[lang].origAddPlaceholder;
      const addPerc = document.getElementById('addPerc');
      if (addPerc) addPerc.placeholder = translations[lang].addPercPlaceholder;
      elem = document.querySelector('[data-key="btnAddPercentage"]');
      if (elem) elem.innerText = translations[lang].btnAddPercentage;
      
      // Cambio porcentual
      elem = document.querySelector('[data-key="headingChangePercentage"]');
      if (elem) elem.innerText = translations[lang].headingChangePercentage;
      elem = document.querySelector('[data-key="descChangePercentage"]');
      if (elem) elem.innerText = translations[lang].descChangePercentage;
      const initialChange = document.getElementById('initialChange');
      if (initialChange) initialChange.placeholder = translations[lang].initValuePlaceholder;
      const finalChange = document.getElementById('finalChange');
      if (finalChange) finalChange.placeholder = translations[lang].finalValuePlaceholder;
      elem = document.querySelector('[data-key="btnChangePercentage"]');
      if (elem) elem.innerText = translations[lang].btnChangePercentage;
      
      // Convertir porcentaje a decimal
      elem = document.querySelector('[data-key="headingPercentToDecimal"]');
      if (elem) elem.innerText = translations[lang].headingPercentToDecimal;
      elem = document.querySelector('[data-key="descPercentToDecimal"]');
      if (elem) elem.innerText = translations[lang].descPercentToDecimal;
      const percDecimal = document.getElementById('percDecimal');
      if (percDecimal) percDecimal.placeholder = translations[lang].percInputDecimalPlaceholder;
      elem = document.querySelector('[data-key="btnPercentToDecimal"]');
      if (elem) elem.innerText = translations[lang].btnPercentToDecimal;
      
      // Convertir fracciones a porcentajes
      elem = document.querySelector('[data-key="headingFractionToPercent"]');
      if (elem) elem.innerText = translations[lang].headingFractionToPercent;
      elem = document.querySelector('[data-key="descFractionToPercent"]');
      if (elem) elem.innerText = translations[lang].descFractionToPercent;
      const numerator = document.getElementById('numerator');
      if (numerator) numerator.placeholder = translations[lang].numeratorPlaceholder;
      const denom = document.getElementById('denom');
      if (denom) denom.placeholder = translations[lang].denomPlaceholder;
      elem = document.querySelector('[data-key="btnFractionToPercent"]');
      if (elem) elem.innerText = translations[lang].btnFractionToPercent;
      
      // Calcular qué porcentaje del total es un número
      elem = document.querySelector('[data-key="headingPartOfTotal"]');
      if (elem) elem.innerText = translations[lang].headingPartOfTotal;
      elem = document.querySelector('[data-key="descPartOfTotal"]');
      if (elem) elem.innerText = translations[lang].descPartOfTotal;
      const partValue = document.getElementById('partValue');
      if (partValue) partValue.placeholder = translations[lang].partPlaceholder;
      const totalValue = document.getElementById('totalValue');
      if (totalValue) totalValue.placeholder = translations[lang].totalPlaceholder;
      elem = document.querySelector('[data-key="btnPartOfTotal"]');
      if (elem) elem.innerText = translations[lang].btnPartOfTotal;
      
      // Calcular el número total si se conoce el porcentaje
      elem = document.querySelector('[data-key="headingTotalFromPercent"]');
      if (elem) elem.innerText = translations[lang].headingTotalFromPercent;
      elem = document.querySelector('[data-key="descTotalFromPercent"]');
      if (elem) elem.innerText = translations[lang].descTotalFromPercent;
      const partForTotal = document.getElementById('partForTotal');
      if (partForTotal) partForTotal.placeholder = translations[lang].partTotalPlaceholder;
      const percForTotal = document.getElementById('percForTotal');
      if (percForTotal) percForTotal.placeholder = translations[lang].percentageTotalPlaceholder;
      elem = document.querySelector('[data-key="btnTotalFromPercent"]');
      if (elem) elem.innerText = translations[lang].btnTotalFromPercent;
      
      // Calculadora de IVA
      elem = document.querySelector('[data-key="headingIVA"]');
      if (elem) elem.innerText = translations[lang].headingIVA;
      elem = document.querySelector('[data-key="descIVA"]');
      if (elem) elem.innerText = translations[lang].descIVA;
      const basePriceIVA = document.getElementById('basePriceIVA');
      if (basePriceIVA) basePriceIVA.placeholder = translations[lang].origPriceIVAPlaceholder;
      const ivaRate = document.getElementById('ivaRate');
      if (ivaRate) ivaRate.placeholder = translations[lang].ivaRatePlaceholder;
      elem = document.querySelector('[data-key="btnCalculateIVA"]');
      if (elem) elem.innerText = translations[lang].btnCalculateIVA;
      
      // Calculadora de Interés Simple
      elem = document.querySelector('[data-key="headingInterest"]');
      if (elem) elem.innerText = translations[lang].headingInterest;
      elem = document.querySelector('[data-key="descInterest"]');
      if (elem) elem.innerText = translations[lang].descInterest;
      const capital = document.getElementById('capital');
      if (capital) capital.placeholder = translations[lang].capitalPlaceholder;
      const interestRate = document.getElementById('interestRate');
      if (interestRate) interestRate.placeholder = translations[lang].interestRatePlaceholder;
      const time = document.getElementById('time');
      if (time) time.placeholder = translations[lang].timePlaceholder;
      elem = document.querySelector('[data-key="btnCalculateInterest"]');
      if (elem) elem.innerText = translations[lang].btnCalculateInterest;
    }
  
    // Detectar cambio de idioma
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
      languageSelect.addEventListener('change', function() {
        updateLanguage(this.value);
      });
    }
    updateLanguage('es'); // Idioma por defecto
  
    // Modo oscuro: Alternar clase y actualizar el icono
    const darkToggle = document.getElementById('darkToggle');
    if (darkToggle) {
      darkToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        darkToggle.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
      });
    }
  
    // Botón Scroll-to-top
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      window.addEventListener('scroll', function() {
        scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
      });
      scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    // Función Calculadora de Porcentajes
    function calculatePercentage() {
      const perc = parseFloat(document.getElementById('percInput').value);
      const value = parseFloat(document.getElementById('valueInput').value);
      if (isNaN(perc) || isNaN(value)) {
        document.getElementById('percResult').innerText = 'Por favor, ingrese valores válidos.';
        return;
      }
      const result = (perc / 100) * value;
      document.getElementById('percResult').innerText = `${perc}% de ${value} es ${result.toFixed(2)}`;
    }
  
    // Función Calculadora de Descuentos
    function calculateDiscount() {
      const original = parseFloat(document.getElementById('originalPrice').value);
      const discount = parseFloat(document.getElementById('discountPerc').value);
      if (isNaN(original) || isNaN(discount)) {
        document.getElementById('discountResult').innerText = 'Por favor, ingrese valores válidos.';
        return;
      }
      const discountAmount = (discount / 100) * original;
      const finalPrice = original - discountAmount;
      document.getElementById('discountResult').innerText = `Descuento: ${discountAmount.toFixed(2)}. Precio final: ${finalPrice.toFixed(2)}`;
    }
  
    // Función Conversor de Divisas con API en tiempo real
    async function convertCurrency() {
      const amount = parseFloat(document.getElementById('amount').value);
      const from = document.getElementById('fromCurrency').value;
      const to = document.getElementById('toCurrency').value;
      if (isNaN(amount)) {
        document.getElementById('currencyResult').innerText = 'Por favor, ingrese una cantidad válida.';
        return;
      }
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        const rateFrom = data.rates[from];
        const rateTo = data.rates[to];
        const amountInUSD = amount / rateFrom;
        const convertedAmount = amountInUSD * rateTo;
        document.getElementById('currencyResult').innerText = `${amount} ${from} equivalen a ${convertedAmount.toFixed(2)} ${to}`;
      } catch (error) {
        document.getElementById('currencyResult').innerText = 'Error al obtener la tasa de cambio. Intente más tarde.';
      }
    }
  
    // Función: Añadir un porcentaje a una cantidad
    function addPercentage() {
      const initial = parseFloat(document.getElementById('initialAdd').value);
      const addPerc = parseFloat(document.getElementById('addPerc').value);
      if (isNaN(initial) || isNaN(addPerc)) {
        document.getElementById('addResult').innerText = 'Por favor, ingrese valores válidos.';
        return;
      }
      const result = initial * (1 + (addPerc / 100));
      document.getElementById('addResult').innerText = `La cantidad final es ${result.toFixed(2)}`;
    }
  
    // Función: Cambio porcentual
    function changePercentage() {
      const initial = parseFloat(document.getElementById('initialChange').value);
      const final = parseFloat(document.getElementById('finalChange').value);
      if (isNaN(initial) || isNaN(final) || initial === 0) {
        document.getElementById('changeResult').innerText = 'Por favor, ingrese valores válidos (el valor inicial no puede ser 0).';
        return;
      }
      const change = ((final - initial) / initial) * 100;
      document.getElementById('changeResult').innerText = `El cambio porcentual es ${change.toFixed(2)}%`;
    }
  
    // Función: Convertir porcentaje a decimal
    function percentToDecimal() {
      const perc = parseFloat(document.getElementById('percDecimal').value);
      if (isNaN(perc)) {
        document.getElementById('decimalResult').innerText = 'Por favor, ingrese un porcentaje válido.';
        return;
      }
      const result = perc / 100;
      document.getElementById('decimalResult').innerText = `El ${perc}% en decimal es ${result}`;
    }
  
    // Función: Convertir fracciones a porcentajes
    function fractionToPercent() {
      const num = parseFloat(document.getElementById('numerator').value);
      const denom = parseFloat(document.getElementById('denom').value);
      if (isNaN(num) || isNaN(denom) || denom === 0) {
        document.getElementById('fractionResult').innerText = 'Por favor, ingrese valores válidos (el denominador no puede ser 0).';
        return;
      }
      const result = (num / denom) * 100;
      document.getElementById('fractionResult').innerText = `La fracción ${num}/${denom} equivale al ${result.toFixed(2)}%`;
    }
  
    // Función: Calcular qué porcentaje del total es un número
    function partOfTotal() {
      const part = parseFloat(document.getElementById('partValue').value);
      const total = parseFloat(document.getElementById('totalValue').value);
      if (isNaN(part) || isNaN(total) || total === 0) {
        document.getElementById('partTotalResult').innerText = 'Por favor, ingrese valores válidos (el total no puede ser 0).';
        return;
      }
      const result = (part / total) * 100;
      document.getElementById('partTotalResult').innerText = `La parte representa el ${result.toFixed(2)}% del total`;
    }
  
    // Función: Calcular el número total si se conoce el porcentaje
    function totalFromPercent() {
      const part = parseFloat(document.getElementById('partForTotal').value);
      const perc = parseFloat(document.getElementById('percForTotal').value);
      if (isNaN(part) || isNaN(perc) || perc === 0) {
        document.getElementById('totalResult').innerText = 'Por favor, ingrese valores válidos (el porcentaje no puede ser 0).';
        return;
      }
      const total = (part * 100) / perc;
      document.getElementById('totalResult').innerText = `El número total es ${total.toFixed(2)}`;
    }
  
    // Función: Calculadora de IVA
    function calculateIVA() {
      const basePrice = parseFloat(document.getElementById('basePriceIVA').value);
      const rate = parseFloat(document.getElementById('ivaRate').value);
      if (isNaN(basePrice) || isNaN(rate)) {
        document.getElementById('ivaResult').innerText = 'Por favor, ingrese valores válidos.';
        return;
      }
      const ivaAmount = (rate / 100) * basePrice;
      const finalPrice = basePrice + ivaAmount;
      document.getElementById('ivaResult').innerText = `El IVA es ${ivaAmount.toFixed(2)} y el precio final es ${finalPrice.toFixed(2)}`;
    }
  
    // Función: Calculadora de Interés Simple
    function calculateInterest() {
      const principal = parseFloat(document.getElementById('capital').value);
      const rate = parseFloat(document.getElementById('interestRate').value);
      const time = parseFloat(document.getElementById('time').value);
      if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('interestResult').innerText = 'Por favor, ingrese valores válidos.';
        return;
      }
      const interest = (principal * rate * time) / 100;
      const total = principal + interest;
      document.getElementById('interestResult').innerText = `El interés es ${interest.toFixed(2)} y el monto total es ${total.toFixed(2)}`;
    }
  
    // Exponer funciones globalmente para usarlas desde el HTML
    window.calculatePercentage = calculatePercentage;
    window.calculateDiscount = calculateDiscount;
    window.convertCurrency = convertCurrency;
    window.addPercentage = addPercentage;
    window.changePercentage = changePercentage;
    window.percentToDecimal = percentToDecimal;
    window.fractionToPercent = fractionToPercent;
    window.partOfTotal = partOfTotal;
    window.totalFromPercent = totalFromPercent;
    window.calculateIVA = calculateIVA;
    window.calculateInterest = calculateInterest;
  });
  