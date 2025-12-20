import React, { useState, useEffect } from 'react';

const COCKTAIL_DB_BASE = 'https://www.thecocktaildb.com/api/json/v1/1';


const MY_COCKTAILS = [
  {
    "id": "13938",
    "name": "AT&T",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
    "glass": "Highball Glass",
    "instructions": "Pour Vodka and Gin over ice, add Tonic and Stir",
    "ingredients": [
      { "name": "Vodka", "measure": "30 ml" },
      { "name": "gin", "measure": "30 ml" },
      { "name": "tonic water", "measure": "120 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "12560",
    "name": "Afterglow",
    "category": "mocktail",
    "image": "https://i.pinimg.com/736x/d4/d3/23/d4d323359bf075b90214514ed545f660.jpg",
    "glass": "Highball Glass",
    "instructions": "Mix. Serve over ice.",
    "ingredients": [
      { "name": "grenadine", "measure": "1 part" },
      { "name": "orange juice", "measure": "4 parts" },
      { "name": "pineapple juice", "measure": "4 parts" }
    ],
    "isCustom": false
  },
  {
    "id": "11288",
    "name": "Cuba Libre",
    "category": "cocktail",
    "image": "https://assets.bacardicontenthub.com/transform/368ce95d-d736-4e00-ba77-414124ca659f/FY21_Bacardi_Lifestyleproduct_Bright-Dapple_Bacardi_Cola_Bwchb01?io=transform:fit,width:3200,height:1800&format=webp&quality=75",
    "glass": "Highball glass",
    "instructions": "Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.",
    "ingredients": [
      { "name": "Bacardi", "measure": "60 ml" },
      { "name": "lime", "measure": "Juice of 1/2" },
      { "name": "coca-cola", "measure": "" }
    ],
    "isCustom": false
  },
  {
    "id": "13206",
    "name": "Caipirissima",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/yd47111503565515.jpg",
    "glass": "Collins Glass",
    "instructions": "Same as Caipirinha but instead of cachaca you add WHITE RUM. It's great!!!!!!!!",
    "ingredients": [
      { "name": "lime", "measure": "2" },
      { "name": "sugar", "measure": "2 tblsp" },
      { "name": "white rum", "measure": "60-90 ml" },
      { "name": "ice", "measure": "crushed" }
    ],
    "isCustom": false
  },
  {
    "id": "17196",
    "name": "Cosmopolitan",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
    "glass": "Cocktail glass",
    "instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.",
    "ingredients": [
      { "name": "Vodka", "measure": "45 ml" },
      { "name": "lime juice", "measure": "15 ml" },
      { "name": "cointreau", "measure": "15 ml" },
      { "name": "cranberry juice", "measure": "60 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "13328",
    "name": "The Daqui-rye",
    "category": "cocktail",
    "image": "https://www.belvederevodka.com/static/44eb2eb2ceecff4e4e10ee5e864448c4/0df34/cocktail-the-zesty-one-daiqui-rye.webp",
    "glass": "Tumbler",
    "instructions": "Add all ingredients to cocktail shaker and shake over cubed ice. Fine strain into chilled coupette. Garnish with a lime zest.",
    "ingredients": [
      { "name": "Vodka", "measure": "50 ml" },
      { "name": "Lime Juice", "measure": "20 ml" },
      { "name": "Sugar Syrup", "measure": "10 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "17108",
    "name": "Coke and Drops",
    "category": "mocktail",
    "image": "https://www.puredrinkology.com/recipes/coke-and-drops/images/cover_hudb7ee179df4aca282ff034f0edfc5d83_270624_1000x0_resize_q75_box.jpeg",
    "glass": "Cocktail glass",
    "instructions": "Take a glass, pour the Coke in the glass, then you take 7 drops of lemon juice. Garnish with a lemon slice on the rim of the glass.",
    "ingredients": [
      { "name": "coca-cola", "measure": "100 ml" },
      { "name": "lemon juice", "measure": "7 drops" }
    ],
    "isCustom": false
  },
  {
    "id": "11006",
    "name": "Daiquiri",
    "category": "cocktail",
    "image": "https://flawless.life/wp-content/uploads/2024/10/La-Ricetta-del-Daiquiri-cover-1-1000x600.jpg",
    "glass": "Cocktail glass",
    "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
    "ingredients": [
      { "name": "Bacardi", "measure": "45 ml" },
      { "name": "lime", "measure": "Juice of 1/2" },
      { "name": "sugar", "measure": "1 tsp" }
    ],
    "isCustom": false
  },
  {
    "id": "11320",
    "name": "Dragonfly",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/uc63bh1582483589.jpg",
    "glass": "Highball glass",
    "instructions": "In a highball glass almost filled with ice cubes, combine the gin and ginger ale. Stir well. Garnish with the lime wedge.",
    "ingredients": [
      { "name": "gin", "measure": "45 ml" },
      { "name": "ginger ale", "measure": "120 ml" },
      { "name": "lime", "measure": "1" }
    ],
    "isCustom": false
  },
  {
    "id": "11368",
    "name": "Flying Dutchman",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/mwko4q1582482903.jpg",
    "glass": "Old-fashioned glass",
    "instructions": "In an old-fashioned glass almost filled with ice cubes, combine the gin and Cointreau. Stir well.",
    "ingredients": [
      { "name": "gin", "measure": "60 ml" },
      { "name": "Cointreau", "measure": "15 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "11390",
    "name": "Frozen Mint Daiquiri",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/jrhn1q1504884469.jpg",
    "glass": "Old-fashioned glass",
    "instructions": "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into an old-fashioned glass and serve.",
    "ingredients": [
      { "name": "Bacardi", "measure": "60 ml" },
      { "name": "lime juice", "measure": "1 tblsp" },
      { "name": "mint", "measure": "6" },
      { "name": "sugar", "measure": "1 tsp" }
    ],
    "isCustom": false
  },
  {
    "id": "11391",
    "name": "Frozen Pineapple Daiquiri",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/k3aecd1582481679.jpg",
    "glass": "Cocktail Glass",
    "instructions": "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into a cocktail glass and serve.",
    "ingredients": [
      { "name": "Bacardi", "measure": "45 ml" },
      { "name": "pineapple", "measure": "4 chunks" },
      { "name": "lime juice", "measure": "1 tblsp" },
      { "name": "sugar", "measure": "1/2 tsp" }
    ],
    "isCustom": false
  },
  {
    "id": "17255",
    "name": "Gimlet",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg",
    "glass": "Martini Glass",
    "instructions": "Add all the ingredients to a shaker and fill with ice. Shake, and strain into a chilled cocktail glass. Garnish with a lime wheel.",
    "ingredients": [
      { "name": "gin", "measure": "75 ml" },
      { "name": "lime juice", "measure": "15 ml" },
      { "name": "sugar syrup", "measure": "15 ml" },
      { "name": "lime", "measure": "1" }
    ],
    "isCustom": false
  },
  {
    "id": "11410",
    "name": "Gin Fizz",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
    "glass": "Highball glass",
    "instructions": "Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
    "ingredients": [
      { "name": "gin", "measure": "60 ml" },
      { "name": "lemon", "measure": "Juice of 1/2" },
      { "name": "sugar", "measure": "1 tsp" },
      { "name": "soda water", "measure": "" }
    ],
    "isCustom": false
  },
  {
    "id": "11424",
    "name": "Godmother",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/quksqg1582582597.jpg",
    "glass": "Old-fashioned glass",
    "instructions": "Pour Vodka and amaretto into an old-fashioned glass over ice and serve.",
    "ingredients": [
      { "name": "Vodka", "measure": "45 ml" },
      { "name": "amaretto", "measure": "20 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "11423",
    "name": "Godfather",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/e5zgao1582582378.jpg",
    "glass": "Old-fashioned glass",
    "instructions": "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
    "ingredients": [
      { "name": "scotch", "measure": "45 ml" },
      { "name": "amaretto", "measure": "20 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "178365",
    "name": "Gin Tonic",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg",
    "glass": "Highball glass",
    "instructions": "Fill a highball glass with ice, pour the gin, top with tonic water and squeeze a lemon wedge and garnish with a lemon wedge.",
    "ingredients": [
      { "name": "gin", "measure": "40 ml" },
      { "name": "tonic water", "measure": "100 ml" },
      { "name": "lemon", "measure": "1 Slice" },
      { "name": "ice", "measure": "cubes" }
    ],
    "isCustom": false
  },
  {
    "id": "11420",
    "name": "Gin Toddy",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/jxstwf1582582101.jpg",
    "glass": "Old-fashioned glass",
    "instructions": "Mix sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
    "ingredients": [
      { "name": "gin", "measure": "60 ml" },
      { "name": "water", "measure": "2 tsp" },
      { "name": "sugar", "measure": "1/2 tsp" },
      { "name": "lemon", "measure": "1 twist" }
    ],
    "isCustom": false
  },
  {
    "id": "178366",
    "name": "Gin Lemon",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/6gdohq1681212476.jpg",
    "glass": "Highball glass",
    "instructions": "Fill the tumbler with ice, pour the gin and lemonade over it. Gently mix and decorate with a slice of lemon.",
    "ingredients": [
      { "name": "gin", "measure": "60 ml" },
      { "name": "lemon juice", "measure": "80 ml" },
      { "name": "lemon", "measure": "1 Slice" },
      { "name": "ice", "measure": "cubes" }
    ],
    "isCustom": false
  },
  {
    "id": "11415",
    "name": "Gin Sling",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/8cl9sm1582581761.jpg",
    "glass": "Old-fashioned glass",
    "instructions": "Dissolve sugar in mixture of water and juice of lemon. Add gin. Pour into an old-fashioned glass over ice cubes and stir. Add the twist of orange peel and serve.",
    "ingredients": [
      { "name": "gin", "measure": "60 ml" },
      { "name": "lemon", "measure": "Juice of 1/2" },
      { "name": "sugar", "measure": "1 tsp" },
      { "name": "water", "measure": "1 tsp" },
      { "name": "orange", "measure": "Twist of peel" }
    ],
    "isCustom": false
  },
  {
    "id": "17230",
    "name": "Gin Rickey",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/s00d6f1504883945.jpg",
    "glass": "Highball glass",
    "instructions": "Half-fill a tall glass with ice. Mix the gin and Grenadine together and pour over the ice. Add the lime or lemon juice and top off with soda water.",
    "ingredients": [
      { "name": "gin", "measure": "60 ml" },
      { "name": "grenadine", "measure": "1 tsp" },
      { "name": "lemon", "measure": "Juice of 1/2" },
      { "name": "soda water", "measure": "Top up" },
      { "name": "lime", "measure": "Garnish" }
    ],
    "isCustom": false
  },
  {
    "id": "11407",
    "name": "Gin Cooler",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/678xt11582481163.jpg",
    "glass": "Collins glass",
    "instructions": "Stir sugar and soda water in a collins glass. Fill glass with ice and add gin. Fill with soda water and stir. Add the lemon peel and the orange spiral.",
    "ingredients": [
      { "name": "gin", "measure": "60 ml" },
      { "name": "soda water", "measure": "" },
      { "name": "sugar", "measure": "1 tsp" },
      { "name": "orange", "measure": "spiral" },
      { "name": "lemon", "measure": "peel" }
    ],
    "isCustom": false
  },
  {
    "id": "11433",
    "name": "Grass Skirt",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/qyvprp1473891585.jpg",
    "glass": "Old-fashioned glass",
    "instructions": "In a shaker half-filled with ice cubes, combine the gin, Cointreau, pineapple juice, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the pineapple slice.",
    "ingredients": [
      { "name": "gin", "measure": "45 ml" },
      { "name": "Cointreau", "measure": "30 ml" },
      { "name": "pineapple juice", "measure": "30 ml" },
      { "name": "grenadine", "measure": "1/2 tsp" },
      { "name": "pineapple", "measure": "1 slice" }
    ],
    "isCustom": false
  },
  {
    "id": "178342",
    "name": "Gin and Soda",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/nzlyc81605905755.jpg",
    "glass": "Highball glass",
    "instructions": "Pour the Gin and Soda water into a highball glass almost filled with ice cubes. Stir well. Garnish with the lime wedge.",
    "ingredients": [
      { "name": "gin", "measure": "60 ml" },
      { "name": "soda water", "measure": "150 ml" },
      { "name": "lime", "measure": "1/4" }
    ],
    "isCustom": false
  },
  {
    "id": "178316",
    "name": "Honey Bee",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/vu8l7t1582475673.jpg",
    "glass": "Margarita glass",
    "instructions": "Shake ingredients with crushed ice",
    "ingredients": [
      { "name": "white rum", "measure": "60 ml" },
      { "name": "honey", "measure": "20 ml" },
      { "name": "lemon juice", "measure": "20 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "11470",
    "name": "Havana Cocktail",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/59splc1504882899.jpg",
    "glass": "Cocktail glass",
    "instructions": "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
    "ingredients": [
      { "name": "Bacardi", "measure": "30 ml" },
      { "name": "pineapple juice", "measure": "30 ml" },
      { "name": "lemon juice", "measure": "1 tsp" }
    ],
    "isCustom": false
  },
  {
    "id": "11472",
    "name": "Hawaiian Cocktail",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/ujoh9x1504882987.jpg",
    "glass": "Cocktail glass",
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "ingredients": [
      { "name": "gin", "measure": "60 ml" },
      { "name": "Cointreau", "measure": "15 ml" },
      { "name": "pineapple juice", "measure": "1 tblsp" }
    ],
    "isCustom": false
  },
  {
    "id": "11524",
    "name": "Imperial Fizz",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/zj1usl1504884548.jpg",
    "glass": "Highball glass",
    "instructions": "Shake all ingredients (except soda water) with ice and strain into a highball glass over two ice cubes. Fill with soda water, stir, and serve.",
    "ingredients": [
      { "name": "Bacardi", "measure": "15 ml" },
      { "name": "whiskey", "measure": "45 ml" },
      { "name": "lemon", "measure": "Juice of 1/2" },
      { "name": "sugar", "measure": "1 tsp" },
      { "name": "soda water", "measure": "" }
    ],
    "isCustom": false
  },
  {
    "id": "16178",
    "name": "Jitterbug",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/wwqvrq1441245318.jpg",
    "glass": "Cocktail Glass",
    "instructions": "Wet glass, dip rim in sugar. Then add Ice. Then add everything else.",
    "ingredients": [
      { "name": "gin", "measure": "60 ml" },
      { "name": "Vodka", "measure": "30 ml" },
      { "name": "grenadine", "measure": "3 dashes" },
      { "name": "lime juice", "measure": "30 ml" },
      { "name": "sugar", "measure": "for rim" },
      { "name": "sugar syrup", "measure": "3 dashes" },
      { "name": "soda water", "measure": "Top up" }
    ],
    "isCustom": false
  },
  {
    "id": "11600",
    "name": "Kamikaze",
    "category": "shot",
    "image": "https://www.thecocktaildb.com/images/media/drink/d7ff7u1606855412.jpg",
    "glass": "Cocktail glass",
    "instructions": "Shake all ingredients together with ice. Strain into glass, garnish and serve.",
    "ingredients": [
      { "name": "Vodka", "measure": "30 ml" },
      { "name": "Cointreau", "measure": "30 ml" },
      { "name": "lime juice", "measure": "30 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "12720",
    "name": "Kill the Cold Smoothie",
    "category": "mocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/7j1z2e1487603414.jpg",
    "glass": "Highball glass",
    "instructions": "Juice ginger and lemon and add it to hot water.",
    "ingredients": [
      { "name": "ginger", "measure": "1 inch" },
      { "name": "lemon", "measure": "1/4" },
      { "name": "water", "measure": "1 cup hot" }
    ],
    "isCustom": false
  },
  {
    "id": "12704",
    "name": "Limeade",
    "category": "mocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/5jdp5r1487603680.jpg",
    "glass": "Highball glass",
    "instructions": "In a large glass, put the lime juice and sugar, and stir well. Add cold seltzer water to fill.",
    "ingredients": [
      { "name": "lime", "measure": "Juice of 1" },
      { "name": "sugar", "measure": "1 tblsp" },
      { "name": "soda water", "measure": "Top up" }
    ],
    "isCustom": false
  },
  {
    "id": "14366",
    "name": "Lemon Drop",
    "category": "shot",
    "image": "https://www.thecocktaildb.com/images/media/drink/mtpxgk1504373297.jpg",
    "glass": "Cocktail glass",
    "instructions": "Shake and strain into a chilled cocktail glass rimmed with sugar.",
    "ingredients": [
      { "name": "Vodka", "measure": "45 ml" },
      { "name": "cointreau", "measure": "45 ml" },
      { "name": "lemon", "measure": "Juice of 1 wedge" }
    ],
    "isCustom": false
  },
  {
    "id": "11002",
    "name": "Long Island Tea",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg",
    "glass": "Highball glass",
    "instructions": "Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.",
    "ingredients": [
      { "name": "Vodka", "measure": "15 ml" },
      { "name": "Bacardi", "measure": "15 ml" },
      { "name": "gin", "measure": "15 ml" },
      { "name": "tequila", "measure": "15 ml" },
      { "name": "lemon", "measure": "Juice of 1/2" },
      { "name": "coca-cola", "measure": "1 splash" }
    ],
    "isCustom": false
  },
  {
    "id": "17204",
    "name": "Long Island Iced Tea",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg",
    "glass": "Highball glass",
    "instructions": "Mix all contents in a highball glass and stir gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist.",
    "ingredients": [
      { "name": "Vodka", "measure": "15 ml" },
      { "name": "tequila", "measure": "15 ml" },
      { "name": "Bacardi", "measure": "15 ml" },
      { "name": "gin", "measure": "15 ml" },
      { "name": "coca-cola", "measure": "1 dash" },
      { "name": "lemon", "measure": "Twist of peel" }
    ],
    "isCustom": false
  },
  {
    "id": "11000",
    "name": "Mojito",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
    "glass": "Highball glass",
    "instructions": "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
    "ingredients": [
      { "name": "Bacardi", "measure": "60-90 ml" },
      { "name": "lime", "measure": "Juice of 1" },
      { "name": "sugar", "measure": "2 tsp" },
      { "name": "mint", "measure": "2-4 sprigs" },
      { "name": "soda water", "measure": "" }
    ],
    "isCustom": false
  },
  {
    "id": "11007",
    "name": "Margarita",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    "glass": "Cocktail glass",
    "instructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Shake the other ingredients with ice, then carefully pour into the glass.",
    "ingredients": [
      { "name": "tequila", "measure": "45 ml" },
      { "name": "Cointreau", "measure": "15 ml" },
      { "name": "lime juice", "measure": "30 ml" },
      { "name": "salt", "measure": "for rim" }
    ],
    "isCustom": false
  },
  {
    "id": "11009",
    "name": "Moscow Mule",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    "glass": "Copper Mug",
    "instructions": "Combine Vodka and ginger ale in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.",
    "ingredients": [
      { "name": "Vodka", "measure": "60 ml" },
      { "name": "lime juice", "measure": "60 ml" },
      { "name": "ginger ale", "measure": "240 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "178358",
    "name": "Mango Mojito",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/wfqmgm1630406820.jpg",
    "glass": "Jar",
    "instructions": "Squeeze the juice from 1½ limes and blend with the mango to give a smooth purée. Put lime pieces in glass with sugar and mint leaves. Muddle together. Add mango purée, white rum and crushed ice. Top up with soda water.",
    "ingredients": [
      { "name": "lime", "measure": "3" },
      { "name": "mango", "measure": "1 Fresh" },
      { "name": "mint", "measure": "Sprig" },
      { "name": "white rum", "measure": "200 ml" },
      { "name": "ice", "measure": "cubes" },
      { "name": "soda water", "measure": "Top" }
    ],
    "isCustom": false
  },
  {
    "id": "12618",
    "name": "Orangeade",
    "category": "mocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/ytsxxw1441167732.jpg",
    "glass": "Highball glass",
    "instructions": "Place some ice cubes in a large tumbler, add lemon juice, orange juice, sugar syrup, and stir well. Top up with cold soda water.",
    "ingredients": [
      { "name": "lemon juice", "measure": "50 ml" },
      { "name": "orange juice", "measure": "150 ml" },
      { "name": "sugar syrup", "measure": "20 ml" },
      { "name": "soda water", "measure": "" }
    ],
    "isCustom": false
  },
  {
    "id": "15330",
    "name": "Orange Crush",
    "category": "shot",
    "image": "https://www.thecocktaildb.com/images/media/drink/zvoics1504885926.jpg",
    "glass": "Shot glass",
    "instructions": "(2 Shots) Add all ingredients to tumbler - Pour as shot",
    "ingredients": [
      { "name": "Vodka", "measure": "30 ml" },
      { "name": "Cointreau", "measure": "30 ml" },
      { "name": "orange juice", "measure": "30 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "15092",
    "name": "Pysch Vitamin Light",
    "category": "mocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/xsqsxw1441553580.jpg",
    "glass": "Collins Glass",
    "instructions": "Shake with ice.",
    "ingredients": [
      { "name": "orange juice", "measure": "1 part" },
      { "name": "apple juice", "measure": "1 part" },
      { "name": "pineapple juice", "measure": "1 part" },
      { "name": "ice", "measure": "" }
    ],
    "isCustom": false
  },
  {
    "id": "12718",
    "name": "Pineapple Ginger Smoothie",
    "category": "mocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/eg9i1d1487603469.jpg",
    "glass": "Highball Glass",
    "instructions": "Throw everything into a blender and liquify.",
    "ingredients": [
      { "name": "ginger", "measure": "1/4 inch" },
      { "name": "pineapple", "measure": "1/2" }
    ],
    "isCustom": false
  },
  {
    "id": "12097",
    "name": "Rum Toddy",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/athdk71504886286.jpg",
    "glass": "Old-fashioned glass",
    "instructions": "Dissolve sugar in water in an old-fashioned glass. Add rum and one ice cube and stir. Add the twist of lemon peel and serve.",
    "ingredients": [
      { "name": "Bacardi", "measure": "60 ml" },
      { "name": "sugar", "measure": "2 tsp" },
      { "name": "lemon", "measure": "1 twist of peel" },
      { "name": "water", "measure": "2 tsp" }
    ],
    "isCustom": false
  },
  {
    "id": "12071",
    "name": "Rum Cooler",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/2hgwsb1504888674.jpg",
    "glass": "Collins glass",
    "instructions": "Pour the rum and sprite into a collins glass almost filled with ice cubes. Stir well and garnish with the lemon wedge.",
    "ingredients": [
      { "name": "Bacardi", "measure": "60 ml" },
      { "name": "sprite", "measure": "120 ml" },
      { "name": "lemon", "measure": "1 wedge" }
    ],
    "isCustom": false
  },
  {
    "id": "17114",
    "name": "Ruby Tuesday",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/qsyqqq1441553437.jpg",
    "glass": "Highball glass",
    "instructions": "Pour gin and cranberry into a highball filled with ice cubes. Add grenadine and stir.",
    "ingredients": [
      { "name": "gin", "measure": "60 ml" },
      { "name": "cranberry juice", "measure": "150 ml" },
      { "name": "grenadine", "measure": "2 splashes" }
    ],
    "isCustom": false
  },
  {
    "id": "12630",
    "name": "Rail Splitter",
    "category": "mocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/stsuqq1441207660.jpg",
    "glass": "Highball glass",
    "instructions": "Mix sugar syrup with lemon juice in a tall glass. Fill up with ginger ale.",
    "ingredients": [
      { "name": "sugar syrup", "measure": "2 tsp" },
      { "name": "lemon juice", "measure": "" },
      { "name": "ginger ale", "measure": "" }
    ],
    "isCustom": false
  },
  {
    "id": "12091",
    "name": "Rum Screwdriver",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/4c85zq1511782093.jpg",
    "glass": "Highball glass",
    "instructions": "Pour rum into a highball glass over ice cubes. Add orange juice, stir, and serve.",
    "ingredients": [
      { "name": "Bacardi", "measure": "45 ml" },
      { "name": "orange juice", "measure": "150 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "12162",
    "name": "Screwdriver",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/8xnyke1504352207.jpg",
    "glass": "Highball glass",
    "instructions": "Mix in a highball glass with ice. Garnish and serve.",
    "ingredients": [
      { "name": "Vodka", "measure": "45 ml" },
      { "name": "orange juice", "measure": "120 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "178307",
    "name": "Tequila Slammer",
    "category": "shot",
    "image": "https://www.thecocktaildb.com/images/media/drink/43uhr51551451311.jpg",
    "glass": "Shot glass",
    "instructions": "Mix carefully to avoid releasing the dissolved CO2.",
    "ingredients": [
      { "name": "tequila", "measure": "1 shot" },
      { "name": "7-up", "measure": "1 part" }
    ],
    "isCustom": false
  },
  {
    "id": "13621",
    "name": "Tequila Sunrise",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg",
    "glass": "Highball glass",
    "instructions": "Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect.",
    "ingredients": [
      { "name": "tequila", "measure": "60 ml" },
      { "name": "orange juice", "measure": "120 ml" },
      { "name": "grenadine", "measure": "15 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "178363",
    "name": "Vodka Lemon",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/mql55h1643820632.jpg",
    "glass": "Highball glass",
    "instructions": "Put ice cubes in the glass, pour the vodka, lemonade and mix with a bar spoon. Decorate with a slice of lemon.",
    "ingredients": [
      { "name": "Vodka", "measure": "50 ml" },
      { "name": "lemon juice", "measure": "70 ml" },
      { "name": "lemon", "measure": "1 Slice" },
      { "name": "ice", "measure": "cubes" }
    ],
    "isCustom": false
  },
  {
    "id": "178362",
    "name": "Vodka Slime",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/apex461643588115.jpg",
    "glass": "Highball glass",
    "instructions": "Fill glass with ice. Add vodka, sprite then finish with the lime juice.",
    "ingredients": [
      { "name": "sprite", "measure": "1 cup" },
      { "name": "lime juice", "measure": "15 ml" },
      { "name": "Vodka", "measure": "45 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "178364",
    "name": "Vodka Tonic",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/9koz3f1643821062.jpg",
    "glass": "Highball glass",
    "instructions": "Fill a tumbler with fresh ice. Pour vodka and top up with tonic. Squeeze lime wedge into the glass and decorate with the slice.",
    "ingredients": [
      { "name": "Vodka", "measure": "40 ml" },
      { "name": "tonic water", "measure": "100 ml" },
      { "name": "lemon", "measure": "1 Slice" }
    ],
    "isCustom": false
  },
  {
    "id": "12460",
    "name": "Vodka And Tonic",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/lmj2yt1504820500.jpg",
    "glass": "Highball glass",
    "instructions": "Pour vodka into a highball glass over ice cubes. Fill with tonic water, stir, and serve.",
    "ingredients": [
      { "name": "Vodka", "measure": "60 ml" },
      { "name": "tonic water", "measure": "" }
    ],
    "isCustom": false
  },
  {
    "id": "17194",
    "name": "White Lady",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/jofsaz1504352991.jpg",
    "glass": "Cocktail glass",
    "instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass.",
    "ingredients": [
      { "name": "gin", "measure": "40 ml" },
      { "name": "Cointreau", "measure": "30 ml" },
      { "name": "lemon juice", "measure": "20 ml" }
    ],
    "isCustom": false
  },
  {
    "id": "12474",
    "name": "Waikiki Beachcomber",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/ysuqus1441208583.jpg",
    "glass": "Cocktail glass",
    "instructions": "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
    "ingredients": [
      { "name": "Cointreau", "measure": "20 ml" },
      { "name": "gin", "measure": "20 ml" },
      { "name": "pineapple juice", "measure": "1 tblsp" }
    ],
    "isCustom": false
  },
  {
    "id": "14594",
    "name": "Zizi Coin-coin",
    "category": "cocktail",
    "image": "https://www.thecocktaildb.com/images/media/drink/0fbo2t1485620752.jpg",
    "glass": "Margarita/Coupette glass",
    "instructions": "Pour Cointreau on ice, add fresh lemon juice, stir gently, and add slices of lemon/lime in glass.",
    "ingredients": [
      { "name": "cointreau", "measure": "50 ml" },
      { "name": "lemon juice", "measure": "20 ml" },
      { "name": "ice", "measure": "cubes" },
      { "name": "lemon", "measure": "slices" }
    ],
    "isCustom": false
  },
  {
  "id": "custom-1",
  "name": "Daqui-rye",
  "category": "cocktail",
  "image": "https://www.belvederevodka.com/static/44eb2eb2ceecff4e4e10ee5e864448c4/0df34/cocktail-the-zesty-one-daiqui-rye.webp",
  "glass": "Coupette",
  "instructions": "Add all ingredients to cocktail shaker and shake over cubed ice. Fine strain into chilled coupette. Garnish with a lime zest.",
  "ingredients": [
    { "name": "Vodka", "measure": "50 ml" },
    { "name": "Lemon Juice", "measure": "20 ml" },
    { "name": "Sugar Syrup", "measure": "10 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-2",
  "name": "French Martini Shot",
  "category": "shot",
  "image": "https://www.belvederevodka.com/static/c64f7794cc5942188e1b57f478cb850d/0df34/cocktail_the_cheeky_one.webp",
  "glass": "Shot Glass",
  "instructions": "(4 Shots) Add all ingredients to cocktail shaker and shake over cubed ice. Fine strain into chilled shot glasses.",
  "ingredients": [
    { "name": "Vodka", "measure": "40 ml" },
    { "name": "Bacardi Razz", "measure": "10 ml" },
    { "name": "Pineapple Juice", "measure": "45 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-3",
  "name": "Matador",
  "category": "cocktail",
  "image": "https://www.thebottleclub.com/cdn/shop/articles/TBC_recipe_image_63-348330.jpg?v=1707229863",
  "glass": "Long Glass",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a chilled long glass.",
  "ingredients": [
    { "name": "Tequila", "measure": "90 ml" },
    { "name": "Lime Juice", "measure": "30 ml" },
    { "name": "Pineapple Juice", "measure": "90 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-4",
  "name": "Passion Fruit Margarita",
  "category": "cocktail",
  "image": "https://braziliankitchenabroad.com/wp-content/uploads/2023/03/Passion-Fruit-Margarita-3-1074x1536.jpg",
  "glass": "Tumbler",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a chilled tumbler.",
  "ingredients": [
    { "name": "Tequila", "measure": "30 ml" },
    { "name": "Bacardi Razz", "measure": "15 ml" },
    { "name": "Cointreau", "measure": "15 ml" },
    { "name": "Passion Fruit Juice", "measure": "30 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-5",
  "name": "Vodka Margarita",
  "category": "cocktail",
  "image": "https://www.amsterdamrepublic.com/wp-content/uploads/2022/02/vodkamargarita2-1620.jpg",
  "glass": "Martini Glass",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a chilled martini glass.",
  "ingredients": [
    { "name": "Vodka", "measure": "45 ml" },
    { "name": "Lime Juice", "measure": "30 ml" },
    { "name": "Cointreau", "measure": "15 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-6",
  "name": "Amaretto Sour",
  "category": "cocktail",
  "image": "https://storage.googleapis.com/thepourtest.appspot.com/recipes/lFMkI3epgxqMfcigFmCL/76580E74-FF13-477D-9E9E-5E82F46A4758_1200x1200.jpeg",
  "glass": "Tumbler",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a chilled tumbler.",
  "ingredients": [
    { "name": "Amaretto", "measure": "60 ml" },
    { "name": "Lemon Juice", "measure": "30 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-7",
  "name": "Tequila Blue",
  "category": "shot",
  "image": "https://c8.alamy.com/comp/2WFN3N4/shooter-in-shot-glass-isolated-on-white-alcohol-drink-2WFN3N4.jpg",
  "glass": "Shot Glass",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a shot glass.",
  "ingredients": [
    { "name": "Blue Curacao", "measure": "25 ml" },
    { "name": "Tequila", "measure": "25 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-8",
  "name": "Undertaker",
  "category": "shot",
  "image": "https://cdn.diffordsguide.com/cocktail/AMQvlA/default/0/512x.webp?v=1737701586",
  "glass": "Shot Glass",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a shot glass.",
  "ingredients": [
    { "name": "Jägermeister", "measure": "15 ml" },
    { "name": "Bacardi", "measure": "15 ml" },
    { "name": "Cointreau", "measure": "15 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-9",
  "name": "Blue Lagoon",
  "category": "cocktail",
  "image": "https://www.gall.nl/dw/image/v2/BCLJ_PRD/on/demandware.static/-/Sites-gall-nl-Library/default/dw8d0ebf8d/2024/Content/Cocktails/Cocktail%20Blue%20lagoon%20header.jpg?sw=2560&q=95",
  "glass": "Hurricane Glass",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a shot glass.",
  "ingredients": [
    { "name": "Vodka", "measure": "60 ml" },
    { "name": "Blue Curacao", "measure": "45 ml" },
    { "name": "Lime Juice", "measure": "15 ml" },
    { "name": "Sprite", "measure": "Top off" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-10",
  "name": "Razz Mojito",
  "category": "cocktail",
  "image": "https://assets.bacardicontenthub.com/transform/4c08080b-de6d-4de6-8866-dd044c2341c4/FY21_US_Bacardi_Hero-Cocktail_Marketing_Asset_Raspberry-Mojito_PKX-tiff?io=transform:fit,width:1800,height:1350&format=webp&quality=75",
  "glass": "Hurricane Glass",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a shot glass.",
  "ingredients": [
    { "name": "Bacardi Razz", "measure": "50 ml" },
    { "name": "Sugar Syrup", "measure": "15 ml" },
    { "name": "Lime Juice", "measure": "30 ml" },
    { "name": "Spa Rood", "measure": "Top off" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-11",
  "name": "Cos-Glow",
  "category": "cocktail",
  "image": "https://www.cointreau.com/int/en/sites/int/files/styles/cocktail_image_l/public/cocktail-images/C0318-cos-glow.jpg.webp?itok=I0kICjze",
  "glass": "Margarita Glass",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a chilled margarita glass.",
  "ingredients": [
    { "name": "Cointreau", "measure": "20 ml" },
    { "name": "Vodka", "measure": "60 ml" },
    { "name": "Lime Juice", "measure": "20 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-12",
  "name": "Koi-Yellow",
  "category": "cocktail",
  "image": "https://www.cointreau.com/int/en/sites/int/files/styles/cocktail_image_l/public/cocktail-images/C0214-koi-yellow.jpg.webp?itok=0iwT5v9f",
  "glass": "Tumbler",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a chilled tumbler glass.",
  "ingredients": [
    { "name": "Cointreau", "measure": "15 ml" },
    { "name": "Bacardi Razz", "measure": "60 ml" },
    { "name": "Lime Juice", "measure": "30 ml" },
    { "name": "Sugar Syrup", "measure": "15 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-13",
  "name": "Bunny Mother",
  "category": "cocktail",
  "image": "https://www.cointreau.com/int/en/sites/int/files/styles/cocktail_image_l/public/cocktail-images/C0056-bunny-mother.jpg.webp?itok=WLts7BP0",
  "glass": "Tumbler",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a chilled tumbler glass.",
  "ingredients": [
    { "name": "Cointreau", "measure": "5 ml" },
    { "name": "Grenadine Syrup", "measure": "5 ml" },
    { "name": "Orange Juice", "measure": "30 ml" },
    { "name": "Vodka", "measure": "45 ml" },
    { "name": "Sugar Syrup", "measure": "15 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-14",
  "name": "Aku Aku",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/VRjq0O/default/0/512x.webp?v=1737701573",
  "glass": "Coupe Glass",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a chilled coupe glass.",
  "ingredients": [
    { "name": "Bacardi", "measure": "30 ml" },
    { "name": "Peach Schnapps", "measure": "15 ml" },
    { "name": "Pineapple Juice", "measure": "45 ml" },
    { "name": "Lime Juice", "measure": "30 ml" },
    { "name": "Sugar Syrup", "measure": "15 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-15",
  "name": "Bermuda",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/MOXGar/default/0/512x.webp?v=1737701573",
  "glass": "Coupe Glass",
  "instructions": "Fill a shaker with ice, add all ingredients and shake well. Strain into a chilled coupe glass.",
  "ingredients": [
    { "name": "Gin", "measure": "60 ml" },
    { "name": "Peach Schnapps", "measure": "15 ml" },
    { "name": "Orange Juice", "measure": "15 ml" },
    { "name": "Grenadine Syrup", "measure": "10 ml" }
  ],
  "isCustom": false
  },
  {
  "id": "custom-16",
  "name": "Fizzy Peach",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/OdyzwR/default/0/512x.webp?v=1737701601",
  "glass": "Highball glass",
  "instructions": "Build in glass over ice. Stir gently.",
  "ingredients": [
    { "name": "Peach Schnapps", "measure": "40 ml" },
    { "name": "Lime Juice", "measure": "10 ml" },
    { "name": "Soda Water", "measure": "100 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-17",
  "name": "Hairy Navel",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/reGXaR/default/0/512x.webp?v=1737701598",
  "glass": "Highball glass",
  "instructions": "Build in glass over ice. Stir gently.",
  "ingredients": [
    { "name": "Vodka", "measure": "45 ml" },
    { "name": "Peach Schnapps", "measure": "30 ml" },
    { "name": "Orange Juice", "measure": "105 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-18",
  "name": "Iguana Wana",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/oryVWO/default/0/512x.webp?v=1737701575",
  "glass": "Highball glass",
  "instructions": "Build in glass over ice. Stir gently.",
  "ingredients": [
    { "name": "Vodka", "measure": "30 ml" },
    { "name": "Peach Schnapps", "measure": "20 ml" },
    { "name": "Orange Juice", "measure": "60 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-19",
  "name": "Sex on the Beach",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/RaL2yO/default/0/512x.webp?v=1737701598",
  "glass": "Highball glass",
  "instructions": "Build in glass over ice. Stir gently.",
  "ingredients": [
    { "name": "Vodka", "measure": "45 ml" },
    { "name": "Peach Schnapps", "measure": "20 ml" },
    { "name": "Orange Juice", "measure": "30 ml" },
    { "name": "Pineapple Juice", "measure": "30 ml" },
    { "name": "Cranberry Juice", "measure": "30 ml" },
    { "name": "Bacardi Razz", "measure": "15 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-20",
  "name": "Woo Woo",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/R1jnPA/default/0/512x.webp?v=1737701584",
  "glass": "Highball glass",
  "instructions": "Build in glass over ice. Stir gently.",
  "ingredients": [
    { "name": "Vodka", "measure": "30 ml" },
    { "name": "Peach Schnapps", "measure": "15 ml" },
    { "name": "Cranberry Juice", "measure": "70 ml" },
    { "name": "Sugar Syrup", "measure": "10 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-21",
  "name": "Adios, Motherfucker",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/Amy0mA/default/0/512x.webp?v=1737701606",
  "glass": "Highball glass",
  "instructions": "Build in glass over ice. Top with lemon-lime soda. Stir gently.",
  "ingredients": [
    { "name": "Vodka", "measure": "12.5 ml" },
    { "name": "Gin", "measure": "12.5 ml" },
    { "name": "Light Rum", "measure": "12.5 ml" },
    { "name": "Tequila", "measure": "12.5 ml" },
    { "name": "Blue Curacao", "measure": "12.5 ml" },
    { "name": "Lemon Juice", "measure": "12.5 ml" },
    { "name": "Lime Juice", "measure": "12.5 ml" },
    { "name": "Sugar Syrup", "measure": "12.5 ml" },
    { "name": "Sprite", "measure": "40 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-22",
  "name": "Bikini Martini",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/9REkGr/default/0/512x.webp?v=1737701572",
  "glass": "Martini glass",
  "instructions": "Shake all ingredients with ice. Strain into chilled glass.",
  "ingredients": [
    { "name": "Gin", "measure": "60 ml" },
    { "name": "Blue Curacao", "measure": "22.5 ml" },
    { "name": "Peach Schnapps", "measure": "7.5 ml" },
    { "name": "Lemon Juice", "measure": "7.5 ml" },
    { "name": "Water", "measure": "10 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-23",
  "name": "Black Widow's Bite",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/AqZwxr/default/0/512x.webp?v=1737701639",
  "glass": "Cocktail glass",
  "instructions": "Shake all ingredients with ice. Strain into chilled glass.",
  "ingredients": [
    { "name": "Vodka", "measure": "45 ml" },
    { "name": "Blue Curacao", "measure": "22.5 ml" },
    { "name": "Orange Juice", "measure": "30 ml" },
    { "name": "Orange Bitters", "measure": "2 dashes" }
  ],
  "isCustom": false
},
{
  "id": "custom-24",
  "name": "Blue Hawaii",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/RJe3bO/default/0/512x.webp?v=1737701585",
  "glass": "Hurricane glass",
  "instructions": "Shake all ingredients with ice. Strain into glass filled with crushed ice.",
  "ingredients": [
    { "name": "Light Rum", "measure": "22.5 ml" },
    { "name": "Vodka", "measure": "22.5 ml" },
    { "name": "Blue Curacao", "measure": "15 ml" },
    { "name": "Pineapple Juice", "measure": "90 ml" },
    { "name": "Lime Juice", "measure": "10 ml" },
    { "name": "Lemon Juice", "measure": "10 ml" },
    { "name": "Sugar Syrup", "measure": "10 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-25",
  "name": "Pink Panther 43",
  "category": "cocktail",
  "image": "https://licor43.com/wp-content/uploads/2025/09/l43-recipe-pink-panther-43.webp",
  "glass": "Highball glass",
  "instructions": "Add all ingredients to glass with ice. Stir gently.",
  "ingredients": [
    { "name": "Licor 43", "measure": "40 ml" },
    { "name": "Grenadine", "measure": "20 ml" },
    { "name": "Milk", "measure": "80 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-26",
  "name": "Sour 43",
  "category": "cocktail",
  "image": "https://licor43.com/wp-content/uploads/2025/09/l43-recipe-square-0005-sour-43-v2-1200x1200.webp",
  "glass": "Cocktail glass",
  "instructions": "Shake all ingredients with ice. Strain into chilled glass.",
  "ingredients": [
    { "name": "Licor 43", "measure": "40 ml" },
    { "name": "Sugar Syrup", "measure": "10 ml" },
    { "name": "Lemon Juice", "measure": "25 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-27",
  "name": "Maracuya 43",
  "category": "cocktail",
  "image": "https://licor43.com/wp-content/uploads/2025/09/l43-recipe-maracuya-43.webp",
  "glass": "Highball glass",
  "instructions": "Build in glass over ice. Stir gently.",
  "ingredients": [
    { "name": "Licor 43", "measure": "50 ml" },
    { "name": "Passion Fruit Juice", "measure": "150 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-28",
  "name": "Pornstar 43",
  "category": "cocktail",
  "image": "https://licor43.com/wp-content/uploads/2025/09/l43-recipe-pornstar-43-1200x1200.webp",
  "glass": "Martini glass",
  "instructions": "Shake all ingredients with ice. Strain into chilled glass. Garnish with half a passion fruit.",
  "ingredients": [
    { "name": "Licor 43", "measure": "50 ml" },
    { "name": "Vodka", "measure": "30 ml" },
    { "name": "Passoa", "measure": "20 ml" },
    { "name": "Lemon Juice", "measure": "20 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-29",
  "name": "Balon 43",
  "category": "cocktail",
  "image": "https://licor43.com/wp-content/uploads/2025/09/l43-recipe-square-0052-balon-43.webp",
  "glass": "Wine glass",
  "instructions": "Build in glass over ice. Top with sparkling water. Garnish with lemon and orange slices.",
  "ingredients": [
    { "name": "Licor 43", "measure": "35 ml" },
    { "name": "Soda Water", "measure": "100 ml" },
    { "name": "Lemon Juice", "measure": "15 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-30",
  "name": "Ginger 43",
  "category": "cocktail",
  "image": "https://licor43.com/wp-content/uploads/2025/09/l43-recipe-square-0028-ginger-43-global-opcion-botella.webp",
  "glass": "Highball glass",
  "instructions": "Build in glass over ice. Top with ginger ale. Garnish with lime slice.",
  "ingredients": [
    { "name": "Licor 43", "measure": "50 ml" },
    { "name": "Ginger Ale", "measure": "200 ml" },
    { "name": "Lime Juice", "measure": "15 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-31",
  "name": "Ibiza 43",
  "category": "cocktail",
  "image": "https://licor43.com/wp-content/uploads/2025/09/l43-recipe-square-0024-ibiza-43-v2.webp",
  "glass": "Highball glass",
  "instructions": "Build in glass over ice. Garnish with pineapple chunk.",
  "ingredients": [
    { "name": "Licor 43", "measure": "50 ml" },
    { "name": "Pineapple Juice", "measure": "150 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-32",
  "name": "Spanish Margarita 43",
  "category": "cocktail",
  "image": "https://licor43.com/wp-content/uploads/2025/09/l43-recipe-square-0003-spanish-margarita-1200x1200.webp",
  "glass": "Margarita glass",
  "instructions": "Shake all ingredients with ice. Strain into chilled glass. Garnish with lemon slice and mint sprig.",
  "ingredients": [
    { "name": "Licor 43", "measure": "35 ml" },
    { "name": "Tequila", "measure": "40 ml" },
    { "name": "Lime Juice", "measure": "15 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-33",
  "name": "Nautilus",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/KO5P7r/default/0/512x.webp?v=1737701576",
  "glass": "Cocktail glass",
  "instructions": "Shake all ingredients with ice. Strain into chilled glass.",
  "ingredients": [
    { "name": "Tequila", "measure": "60 ml" },
    { "name": "Cranberry Juice", "measure": "60 ml" },
    { "name": "Lime Juice", "measure": "30 ml" },
    { "name": "Sugar Syrup", "measure": "15 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-34",
  "name": "Rude Cosmopolitan",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/JRJWEA/default/0/512x.webp?v=1737701579",
  "glass": "Martini glass",
  "instructions": "Shake all ingredients with ice. Strain into chilled glass.",
  "ingredients": [
    { "name": "Tequila", "measure": "37.5 ml" },
    { "name": "Triple Sec", "measure": "22.5 ml" },
    { "name": "Cranberry Juice", "measure": "30 ml" },
    { "name": "Lime Juice", "measure": "15 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-35",
  "name": "Azalea Margarita",
  "category": "cocktail",
  "image": "https://cdn.diffordsguide.com/cocktail/rNeJoA/default/0/512x.webp?v=1737701614",
  "glass": "Margarita glass",
  "instructions": "Shake all ingredients with ice. Strain into chilled glass.",
  "ingredients": [
    { "name": "Tequila", "measure": "45 ml" },
    { "name": "Triple Sec", "measure": "15 ml" },
    { "name": "Pineapple Juice", "measure": "30 ml" },
    { "name": "Lime Juice", "measure": "15 ml" },
    { "name": "Grenadine", "measure": "10 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-36",
  "name": "Fourth of July",
  "category": "shot",
  "image": "https://www.thespruceeats.com/thmb/tRjd7W5b5gEXsYjThyHCKIMZizE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FourthofJuly-Shooter-e488b35be6a84953a18f1fd6cd9537cd.jpg",
  "glass": "Shot glass",
  "instructions": "Layer grenadine, then blue curaçao, then vodka carefully in a shot glass.",
  "ingredients": [
    { "name": "Grenadine", "measure": "10 ml" },
    { "name": "Blue Curacao", "measure": "10 ml" },
    { "name": "Vodka", "measure": "10 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-37",
  "name": "Fuzzy Jäger Cranberry",
  "category": "shot",
  "image": "https://www.thespruceeats.com/thmb/X64n_7povVNNuXwo_pJ07anb1MI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/red-headed-slut-759787-8-5b490435c9e77c0037b60f12.jpg",
  "glass": "Shot glass",
  "instructions": "Shake all ingredients with ice. Strain into shot glass.",
  "ingredients": [
    { "name": "Jägermeister", "measure": "15 ml" },
    { "name": "Peach Schnapps", "measure": "15 ml" },
    { "name": "Cranberry Juice", "measure": "15 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-38",
  "name": "Raspberry Gimlet",
  "category": "shot",
  "image": "https://www.thespruceeats.com/thmb/EHxthu9zaRDoqQqLwNtcYOwhPE0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/purple-hooter-recipes-761147-5-5b0dac4b119fa800374e4bd0.jpg",
  "glass": "Shot glass",
  "instructions": "Shake all ingredients with ice. Strain into shot glass.",
  "ingredients": [
    { "name": "Vodka", "measure": "20 ml" },
    { "name": "Lime Juice", "measure": "10 ml" },
    { "name": "Raspberry Liqueur", "measure": "15 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-39",
  "name": "Shirley Temple",
  "category": "mocktail",
  "image": "https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Shirley-temple-1e55cf0.jpg?quality=90&webp=true&resize=700,636",
  "glass": "Highball glass",
  "instructions": "Fill glass with ice. Add ginger ale and grenadine. Stir gently. Garnish with a lime wedge and maraschino cherry.",
  "ingredients": [
    { "name": "Ginger Ale", "measure": "200 ml" },
    { "name": "Grenadine", "measure": "30 ml" },
    { "name": "Lime Juice", "measure": "15 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-40",
  "name": "Virgin Mojito",
  "category": "mocktail",
  "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/11/348171423-lyres_mojito_pitcher_rgb-e636d0a.jpg?quality=90&webp=true&resize=700,636",
  "glass": "Highball glass",
  "instructions": "Muddle mint leaves with sugar and lime juice. Add ice and top with soda water. Stir gently and garnish with mint.",
  "ingredients": [
    { "name": "Lime", "measure": "1" },
    { "name": "Mint", "measure": "8-10 leaves" },
    { "name": "Sugar", "measure": "2 tsp" },
    { "name": "Soda Water", "measure": "150 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-41",
  "name": "Homemade Lemonade",
  "category": "mocktail",
  "image": "https://assets.bonappetit.com/photos/62aba9d5b433b325383e9ca9/1:1/w_2240,c_limit/0616-lemonade-recipe-lede.jpg",
  "glass": "Highball glass",
  "instructions": "Mix lemon juice with sugar syrup and cold water. Stir well. Serve over ice with lemon slices.",
  "ingredients": [
    { "name": "Lemon Juice", "measure": "60 ml" },
    { "name": "Sugar Syrup", "measure": "30 ml" },
    { "name": "Water", "measure": "150 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-42",
  "name": "Ginger Orange Warmer",
  "category": "mocktail",
  "image": "https://www.southernliving.com/thmb/mmyVvN80t0VvS4YqCbPM_Sh5kGE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gma_sl_1624-2000-9813deafe2fc4b818b0657fcef2c13d6.jpg",
  "glass": "Mug",
  "instructions": "Combine orange juice with grated ginger and honey. Heat gently or serve cold over ice.",
  "ingredients": [
    { "name": "Orange Juice", "measure": "150 ml" },
    { "name": "Ginger", "measure": "1 inch grated" },
    { "name": "Honey", "measure": "1 tsp" }
  ],
  "isCustom": false
},
{
  "id": "custom-43",
  "name": "Tropical Sunrise",
  "category": "mocktail",
  "image": "https://www.mightymrs.com/wp-content/uploads/tropical-pineapple-orange-tequilla-sunrise1.jpg",
  "glass": "Highball glass",
  "instructions": "Pour pineapple and orange juice over ice. Slowly add grenadine which will sink to the bottom. Stir gently for sunrise effect.",
  "ingredients": [
    { "name": "Pineapple Juice", "measure": "90 ml" },
    { "name": "Orange Juice", "measure": "90 ml" },
    { "name": "Grenadine", "measure": "15 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-44",
  "name": "Citrus Spritzer",
  "category": "mocktail",
  "image": "https://www.tiger-corporation.com/wp-content/uploads/2023/04/hero-img-recipe-non-alcoholic-citrus-spritzer-abf529a07dba2bc4fd4a8a1cd1466a72.jpg",
  "glass": "Wine glass",
  "instructions": "Combine juices over ice. Top with soda water. Garnish with orange and lemon slices.",
  "ingredients": [
    { "name": "Orange Juice", "measure": "60 ml" },
    { "name": "Lemon Juice", "measure": "30 ml" },
    { "name": "Sugar Syrup", "measure": "15 ml" },
    { "name": "Soda Water", "measure": "100 ml" }
  ],
  "isCustom": false
},
{
  "id": "custom-45",
  "name": "Ginger Red-Headed Slut",
  "category": "shot",
  "image": "https://localbartendingschool.com/top/wp-content/uploads/2022/06/image11.jpg",
  "glass": "Shot glass",
  "instructions": "Shake all ingredients with ice. Strain into shot glass.",
  "ingredients": [
    { "name": "Peach Schnapps", "measure": "30 ml" },
    { "name": "Jägermeister", "measure": "30 ml" },
    { "name": "Cranberry Juice", "measure": "30 ml" }
  ],
  "isCustom": false
},
];

export default function CocktailBar() {
  const [inventory, setInventory] = useState([
  // Spirits
  'vodka',
  'absolut vodka',
  'Vodka',
  'bacardi razz',
  'bacardi',
  'gin',
  'light rum',
  'white rum',
  'rum',
  'gold rum',
  'tequila',
  'scotch',
  'whiskey',
  'whisky',
  'blended whiskey',
  
  // Liqueurs
  'blue curacao',
  'cointreau',
  'triple sec',
  'orange liqueur',
  'peach schnapps',
  'peachtree schnapps',
  'baileys irish cream',
  'irish cream',
  'amaretto',
  'passoa',
  'passion fruit liqueur',
  'jagermeister',
  'jägermeister',
  'raspberry liqueur',
  'licor 43',
  
  // Syrups
  'sugar syrup',
  'simple syrup',
  'grenadine',
  
  // Juices
  'lime juice',
  'fresh lime juice',
  'lime',
  'mango juice',
  'apple juice',
  'pineapple juice',
  'orange juice',
  'cranberry juice',
  'passion fruit juice',
  

  // soda
  'ginger ale',
  'coca-cola',
  'pepsi cola',
  'soda water',
  'tonic water',
  'carbonated water',
  'sprite',
  '7-up',
  'spa rood',

  // Common household items (add/remove as needed)
  'bitter lemon',
  'ice',
  'water',
  'sugar',
  'brown sugar',
  'salt',
  'milk',
  'honey',
  'mint',
  'lemon',
  'orange',
  'mango'

]);
  const [customRecipes, setCustomRecipes] = useState([]);
  const [allCocktails, setAllCocktails] = useState(MY_COCKTAILS);
  const [availableCocktails, setAvailableCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [view, setView] = useState('cocktails'); // 'cocktails', 'inventory', 'add-recipe'
  const [newIngredient, setNewIngredient] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDebug, setShowDebug] = useState(false);
  const [almostCocktails, setAlmostCocktails] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showHomepage, setShowHomepage] = useState(true);
  const [isFading, setIsFading] = useState(false);
  
  // New recipe form state
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    ingredients: [{ name: '', measure: '' }],
    instructions: '',
    glass: '',
    image: ''
  });

  // Auto-return to homepage after inactivity
// Auto-return to homepage after inactivity
useEffect(() => {
  if (showHomepage) return;
  
  let timeout;
  
  const resetTimer = () => {
    clearTimeout(timeout);
    setIsFading(false);
    timeout = setTimeout(() => {
      setIsFading(true);
      // Wait for fade animation to complete, then show homepage
      setTimeout(() => {
        setShowHomepage(true);
        setSelectedCocktail(null);
        setSearchTerm('');
        setCategoryFilter('all');
        setIsFading(false);
      }, 1000); // 1 second fade duration
    }, 60000); // 1 minute inactivity
  };
  
  const events = ['click', 'touchstart', 'scroll', 'keydown'];
  
  events.forEach(event => {
    window.addEventListener(event, resetTimer);
  });
  
  resetTimer();
  
  return () => {
    clearTimeout(timeout);
    events.forEach(event => {
      window.removeEventListener(event, resetTimer);
    });
  };
}, [showHomepage]);
  // Load data from persistent storage
  useEffect(() => {
    const loadData = async () => {
      try {
        const invResult = localStorage.getItem('cocktail-inventory');
        if (invResult?.value) {
          setInventory(JSON.parse(invResult.value));
        }
        const recipesResult = localStorage.getItem('custom-recipes');
        if (recipesResult?.value) {
          setCustomRecipes(JSON.parse(recipesResult.value));
        }
      } catch (e) {
        console.log('No saved data found');
      }
    };
    loadData();
  }, []);

  // Save inventory to persistent storage
  useEffect(() => {
    const saveInventory = async () => {
      try {
        localStorage.setItem('cocktail-inventory', JSON.stringify(inventory));
      } catch (e) {
        console.error('Failed to save inventory');
      }
    };
    if (inventory.length > 0) saveInventory();
  }, [inventory]);

  // Save custom recipes to persistent storage
  useEffect(() => {
    const saveRecipes = async () => {
      try {
        localStorage.setItem('custom-recipes', JSON.stringify(customRecipes));
      } catch (e) {
        console.error('Failed to save recipes');
      }
    };
    if (customRecipes.length > 0) saveRecipes();
  }, [customRecipes]);



  // Normalize ingredient name for matching
const normalizeIngredient = (name) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    // Only safe substitutions
    .replace(/^cointreau$/, 'triple sec')
    .replace(/^fresh lime juice$/, 'lime juice')
    .replace(/^fresh lemon juice$/, 'lemon juice')
    .replace(/^club soda$/, 'soda water')
    .replace(/^soda$/, 'soda water');
};

const ingredientMatches = (invItem, recipeIng) => {
  const inv = normalizeIngredient(invItem);
  const rec = normalizeIngredient(recipeIng);
  
  // Direct match
  if (inv === rec) return true;
  
  // Inventory item contains recipe ingredient (e.g., "absolut vodka" contains "vodka")
  if (inv.includes(rec)) return true;
  
  // Recipe calls for generic, you have specific (e.g., recipe says "vodka", you have "absolut vodka")
  if (rec.length > 3 && inv.includes(rec)) return true;
  if (inv.length > 3 && rec.includes(inv)) return true;
  
  return false;
};

  // Filter cocktails based on inventory
  useEffect(() => {
    const allRecipes = [...allCocktails, ...customRecipes.map(r => ({ ...r, isCustom: true }))];
    
    const available = [];
    const almost = [];
    
    allRecipes.forEach(cocktail => {
      const missing = cocktail.ingredients.filter(ing => 
        !inventory.some(invItem => ingredientMatches(invItem, ing.name))
      );
      
      if (missing.length === 0) {
        available.push(cocktail);
      } else if (missing.length === 1) {
        almost.push({ ...cocktail, missing: missing.map(m => m.name) });
      }
    });
    
    setAvailableCocktails(available);
    console.log('MY_COCKTAILS =', JSON.stringify(available, null, 2));
    setAlmostCocktails(almost.slice(0, 10)); // Top 10 almost-matching
  }, [inventory, allCocktails, customRecipes]);

  const addIngredient = () => {
    if (newIngredient.trim() && !inventory.includes(newIngredient.trim().toLowerCase())) {
      setInventory([...inventory, newIngredient.trim().toLowerCase()]);
      setNewIngredient('');
    }
  };

  const removeIngredient = (ing) => {
    setInventory(inventory.filter(i => i !== ing));
  };

  const addRecipeIngredient = () => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, { name: '', measure: '' }]
    });
  };

  const updateRecipeIngredient = (index, field, value) => {
    const updated = [...newRecipe.ingredients];
    updated[index][field] = value;
    setNewRecipe({ ...newRecipe, ingredients: updated });
  };

  const removeRecipeIngredient = (index) => {
    const updated = newRecipe.ingredients.filter((_, i) => i !== index);
    setNewRecipe({ ...newRecipe, ingredients: updated });
  };

  const saveNewRecipe = () => {
    if (newRecipe.name && newRecipe.ingredients.some(i => i.name)) {
      const recipe = {
        id: `custom-${Date.now()}`,
        name: newRecipe.name,
        ingredients: newRecipe.ingredients
          .filter(i => i.name)
          .map(i => ({ name: i.name.toLowerCase(), measure: i.measure })),
        instructions: newRecipe.instructions,
        glass: newRecipe.glass,
        image: newRecipe.image || null,
        isCustom: true
      };
      setCustomRecipes([...customRecipes, recipe]);
      setNewRecipe({
        name: '',
        ingredients: [{ name: '', measure: '' }],
        instructions: '',
        glass: '',
        image: ''
      });
      setView('cocktails');
    }
  };

  const deleteCustomRecipe = (id) => {
    setCustomRecipes(customRecipes.filter(r => r.id !== id));
    setSelectedCocktail(null);
  };

  const filteredCocktails = availableCocktails
    .filter(c => {
      const term = searchTerm.toLowerCase();
      const nameMatch = c.name.toLowerCase().includes(term);
      const ingredientMatch = c.ingredients.some(ing => 
        ing.name.toLowerCase().includes(term)
      );
      const categoryMatch = categoryFilter === 'all' || c.category === categoryFilter;
      return (nameMatch || ingredientMatch) && categoryMatch;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  // Common liquors for quick-add
  const commonLiquors = [
    'vodka', 'gin', 'rum', 'white rum', 'dark rum', 'tequila', 'whiskey', 'bourbon',
    'scotch', 'brandy', 'cognac', 'triple sec', 'cointreau', 'kahlua', 'baileys',
    'amaretto', 'campari', 'aperol', 'vermouth', 'dry vermouth', 'sweet vermouth',
    'blue curacao', 'midori', 'chambord', 'frangelico', 'grand marnier', 'peach schnapps',
    'lime juice', 'lemon juice', 'orange juice', 'cranberry juice', 'pineapple juice',
    'simple syrup', 'grenadine', 'angostura bitters', 'soda water', 'tonic water',
    'cola', 'ginger beer', 'cream', 'coconut cream', 'egg white', 'sugar', 'salt', 'ice'
  ];

  const suggestedLiquors = commonLiquors.filter(l => !inventory.includes(l));
if (showHomepage) {
  const glitters = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 1.5 + Math.random() * 4,
    size: 2 + Math.random() * 3,
  }));

  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: 10 + Math.random() * 80,
    top: 5 + Math.random() * 30,
    delay: Math.random() * 3,
    size: 10 + Math.random() * 15,
  }));

  return (
    
    <div
      onClick={() => setShowHomepage(false)}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1510 50%, #0d0d0d 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* Outer border */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          right: '20px',
          bottom: '20px',
          border: '2px solid #d4af37',
          pointerEvents: 'none',
        }}
      />
      
      {/* Inner border */}
      <div
        style={{
          position: 'absolute',
          top: '28px',
          left: '28px',
          right: '28px',
          bottom: '28px',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes pulse {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1);
            text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.05);
            text-shadow: 0 0 20px rgba(212, 175, 55, 0.8);
          }
        }
        .glitter {
          position: absolute;
          background: #d4af37;
          border-radius: 50%;
          animation: fall linear infinite;
          box-shadow: 0 0 6px #d4af37, 0 0 10px #ffd700;
        }
        
        .star {
          position: absolute;
          color: #d4af37;
          animation: twinkle 2s ease-in-out infinite;
          text-shadow: 0 0 10px #d4af37;
        }
        
        .tap-text {
          animation: pulse 1s ease-in-out infinite;
        }
      `}</style>

      {/* Glitter particles */}
      {glitters.map((g) => (
        <div
          key={g.id}
          className="glitter"
          style={{
            left: `${g.left}%`,
            top: '-20px',
            width: `${g.size}px`,
            height: `${g.size}px`,
            animationDelay: `${g.delay}s`,
            animationDuration: `${g.duration}s`,
          }}
        />
      ))}

      {/* Twinkling stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `${s.size}px`,
            animationDelay: `${s.delay}s`,
          }}
        >
          ✦
        </div>
      ))}

      {/* Main content - no border here anymore */}
      <div
        style={{
          padding: '60px 80px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <p
          style={{
            color: '#d4af37',
            fontSize: '1rem',
            letterSpacing: '0.3em',
            marginBottom: '5px',
            fontFamily: "'Ubuntu', sans-serif",
          }}
        >
          WELCOME TO OUR
        </p>

        <h2
          style={{
            color: '#d4af37',
            fontSize: '1.5rem',
            letterSpacing: '0.4em',
            fontWeight: '400',
            marginBottom: '30px',
            fontFamily: "'Ubuntu', sans-serif",
          }}
        >
          GLITTER & GLAMOUR
        </h2>

        <h1
          style={{
            fontSize: '4rem',
            fontWeight: '300',
            letterSpacing: '0.15em',
            background: 'linear-gradient(90deg, #b8860b 0%, #ffd700 25%, #fffacd 50%, #ffd700 75%, #b8860b 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 3s linear infinite',
            margin: '0',
            lineHeight: '1.1',
            fontFamily: "'Cinzel', serif",
          }}
        >
          NEW YEAR'S
          <br />
          PARTY
          <br />
          2026
        </h1>

        <p
          className="tap-text"
          style={{
            color: '#d4af37',
            fontSize: '1.2rem',
            letterSpacing: '0.2em',
            marginTop: '40px',
            fontFamily: "'Ubuntu', sans-serif",
          }}
        >
          TAP TO ENTER DRINKS MENU
        </p>
      </div>
    </div>
  );
}

return (
    <div style={{
      ...styles.container,
      animation: isFading ? 'fadeOut 1s ease forwards' : 'none',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
        
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap');
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .cocktail-card {
          animation: fadeInUp 0.4s ease forwards;
          opacity: 0;
        }
        
        .cocktail-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.15);
          border-color: rgba(212, 175, 55, 0.4);
        }
        
        .glitter {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #d4af37;
          border-radius: 50%;
          animation: fall linear infinite;
          box-shadow: 0 0 6px #d4af37, 0 0 10px #ffd700;
        }
        
        .star {
          position: absolute;
          color: #d4af37;
          animation: twinkle 2s ease-in-out infinite;
          text-shadow: 0 0 10px #d4af37;
        }
        
        .tap-text {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
      
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Yash's Bar</h1>
        <p style={styles.subtitle}>
          {loading ? 'Loading recipes...' : `There are currently ${MY_COCKTAILS.length} drinks you can make`}
        </p>
      </header>

      {/* Navigation */}
      <nav style={styles.nav}>
        <button
          onClick={() => { setView('cocktails'); setSelectedCocktail(null); }}
          style={{
            ...styles.navButton,
            ...(view === 'cocktails' ? styles.navButtonActive : {})
          }}
        >
          Cocktails
        </button>
        <button
          onClick={() => { setView('inventory'); setSelectedCocktail(null); }}
          style={{
            ...styles.navButton,
            ...(view === 'inventory' ? styles.navButtonActive : {})
          }}
        >
          My Bar ({inventory.length})
        </button>
        <button
          onClick={() => { setView('add-recipe'); setSelectedCocktail(null); }}
          style={{
            ...styles.navButton,
            ...(view === 'add-recipe' ? styles.navButtonActive : {})
          }}
        >
          + Recipe
        </button>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Cocktails View */}
        {view === 'cocktails' && !selectedCocktail && (
          <div style={styles.cocktailsView}>
            {inventory.length === 0 ? (
              <div style={styles.emptyState}>
                <div style={styles.emptyIcon}>🍸</div>
                <h2 style={styles.emptyTitle}>Your bar is empty</h2>
                <p style={styles.emptyText}>
                  Add some bottles to your inventory to see what cocktails you can make.
                </p>
                <button
                  onClick={() => setView('inventory')}
                  style={styles.primaryButton}
                >
                  Stock Your Bar
                </button>
              </div>
            ) : (
              <>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search cocktails or ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              style={styles.categorySelect}
            >
              <option value="all">All Drinks</option>
              <option value="cocktail">Cocktails</option>
              <option value="mocktail">Mocktails</option>
              <option value="shot">Shots</option>
            </select>
          </div>
                
                {showDebug && (
                  <div style={styles.debugPanel}>
                    <p><strong>Database:</strong> {allCocktails.length} cocktails loaded</p>
                    <p><strong>Your inventory ({inventory.length}):</strong> {inventory.join(', ')}</p>
                    <p><strong>Exact matches:</strong> {availableCocktails.length}</p>
                    {almostCocktails.length > 0 && (
                      <div style={{ marginTop: '12px' }}>
                        <p><strong>Almost there (missing 1 ingredient):</strong></p>
                        <ul style={styles.almostList}>
                          {almostCocktails.map(c => (
                            <li key={c.id}>
                              {c.name} — missing: <em>{c.missing.join(', ')}</em>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                
                {filteredCocktails.length === 0 ? (
                  <div style={styles.emptyState}>
                    <div style={styles.emptyIcon}>🔍</div>
                    <h2 style={styles.emptyTitle}>No matches found</h2>
                    <p style={styles.emptyText}>
                      {searchTerm ? 'Try a different search term.' : 'Add more ingredients to unlock more recipes.'}
                    </p>
                  </div>
                ) : (
                  <div style={styles.cocktailGrid}>
                    {filteredCocktails.map((cocktail, index) => (
                      <div
                        key={cocktail.id}
                        className="cocktail-card"
                        onClick={() => setSelectedCocktail(cocktail)}
                        style={{
                          ...styles.cocktailCard,
                          animationDelay: `${index * 0.05}s`
                        }}
                      >
                        {cocktail.image ? (
                          <img
                            src={cocktail.image}
                            alt={cocktail.name}
                            style={styles.cocktailImage}
                          />
                        ) : (
                          <div style={styles.cocktailImagePlaceholder}>
                            🍹
                          </div>
                        )}
                        <div style={styles.cocktailInfo}>
                          <h3 style={styles.cocktailName}>{cocktail.name}</h3>
                          <p style={styles.cocktailMeta}>
                          {cocktail.category && (
                            <span style={{
                              ...styles.categoryBadge,
                              ...(cocktail.category === 'mocktail' ? styles.mocktailBadge : {}),
                              ...(cocktail.category === 'shot' ? styles.shotBadge : {}),
                            }}>
                              {cocktail.category}
                            </span>
                          )}
                          {cocktail.ingredients.length} ingredients
                        </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Recipe Detail View */}
        {selectedCocktail && (
          <div style={styles.recipeDetail}>
            <button
              onClick={() => setSelectedCocktail(null)}
              style={styles.backButton}
            >
              ← Back
            </button>
            
            <div style={styles.recipeLayout}>
              {/* Left side - Image */}
              <div style={styles.recipeImageContainer}>
                {selectedCocktail.image ? (
                  <img
                    src={selectedCocktail.image}
                    alt={selectedCocktail.name}
                    style={styles.recipeImage}
                  />
                ) : (
                  <div style={styles.recipeImagePlaceholder}>🍹</div>
                )}
              </div>

              {/* Right side - Info */}
              <div style={styles.recipeContent}>
                <h2 style={styles.recipeName}>{selectedCocktail.name}</h2>
                {selectedCocktail.glass && (
                  <p style={styles.recipeGlass}>Serve in: {selectedCocktail.glass}</p>
                )}

                <div style={styles.recipeSection}>
                  <h3 style={styles.recipeSectionTitle}>Ingredients</h3>
                  <ul style={styles.ingredientList}>
                    {selectedCocktail.ingredients.map((ing, i) => (
                      <li key={i} style={styles.ingredientItem}>
                        <span style={styles.ingredientMeasure}>{ing.measure}</span>
                        <span style={styles.ingredientName}>{ing.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedCocktail.instructions && (
                  <div style={styles.recipeSection}>
                    <h3 style={styles.recipeSectionTitle}>Instructions</h3>
                    <p style={styles.instructions}>{selectedCocktail.instructions}</p>
                  </div>
                )}

                {selectedCocktail.isCustom && (
                  <button
                    onClick={() => deleteCustomRecipe(selectedCocktail.id)}
                    style={styles.deleteButton}
                  >
                    Delete Recipe
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        {/* Inventory View */}
        {view === 'inventory' && (
          <div style={styles.inventoryView}>
            <div style={styles.addIngredientSection}>
              <input
                type="text"
                placeholder="Add ingredient..."
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
                style={styles.ingredientInput}
              />
              <button onClick={addIngredient} style={styles.addButton}>
                Add
              </button>
            </div>

            {inventory.length > 0 && (
              <div style={styles.inventorySection}>
                <h3 style={styles.sectionTitle}>Your Inventory</h3>
                <div style={styles.tagContainer}>
                  {inventory.sort().map(ing => (
                    <span
                      key={ing}
                      onClick={() => removeIngredient(ing)}
                      style={styles.inventoryTag}
                    >
                      {ing} ✕
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div style={styles.inventorySection}>
              <h3 style={styles.sectionTitle}>Quick Add</h3>
              <div style={styles.tagContainer}>
                {suggestedLiquors.slice(0, 30).map(ing => (
                  <span
                    key={ing}
                    onClick={() => setInventory([...inventory, ing])}
                    style={styles.suggestionTag}
                  >
                    + {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Add Recipe View */}
        {view === 'add-recipe' && (
          <div style={styles.addRecipeView}>
            <h2 style={styles.formTitle}>Add Custom Recipe</h2>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Cocktail Name *</label>
              <input
                type="text"
                value={newRecipe.name}
                onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
                placeholder="e.g., My Signature Cocktail"
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Glass Type</label>
              <input
                type="text"
                value={newRecipe.glass}
                onChange={(e) => setNewRecipe({ ...newRecipe, glass: e.target.value })}
                placeholder="e.g., Martini Glass"
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Image URL (optional)</label>
              <input
                type="text"
                value={newRecipe.image}
                onChange={(e) => setNewRecipe({ ...newRecipe, image: e.target.value })}
                placeholder="https://..."
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Ingredients *</label>
              {newRecipe.ingredients.map((ing, i) => (
                <div key={i} style={styles.ingredientRow}>
                  <input
                    type="text"
                    value={ing.measure}
                    onChange={(e) => updateRecipeIngredient(i, 'measure', e.target.value)}
                    placeholder="Amount"
                    style={{ ...styles.input, flex: 1 }}
                  />
                  <input
                    type="text"
                    value={ing.name}
                    onChange={(e) => updateRecipeIngredient(i, 'name', e.target.value)}
                    placeholder="Ingredient name"
                    style={{ ...styles.input, flex: 2 }}
                  />
                  {newRecipe.ingredients.length > 1 && (
                    <button
                      onClick={() => removeRecipeIngredient(i)}
                      style={styles.removeIngButton}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button onClick={addRecipeIngredient} style={styles.addIngButton}>
                + Add Ingredient
              </button>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Instructions</label>
              <textarea
                value={newRecipe.instructions}
                onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
                placeholder="How to make it..."
                rows={4}
                style={styles.textarea}
              />
            </div>

            <button onClick={saveNewRecipe} style={styles.saveButton}>
              Save Recipe
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

const styles = {
  categorySelect: {
    padding: '16px 20px',
    fontSize: '1rem',
    background: '#1a1a1a',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    borderRadius: '4px',
    color: '#f5f0e8',
    fontFamily: "'Ubuntu', sans-serif",
    outline: 'none',
    cursor: 'pointer',
    minWidth: '140px',
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23d4af37\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '16px',
    paddingRight: '40px',
  },
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 50%, #1a1512 100%)',
    color: '#f5f0e8',
    fontFamily: "'Ubuntu', sans-serif",
    fontWeight: '500',
  },
  header: {
    textAlign: 'center',
    padding: '48px 24px 24px',
    borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
  },
  title: {
    fontSize: '3.5rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontFamily: 'Domine',
    fontWeight: '700',
    background: 'linear-gradient(90deg, #b8860b 0%, #ffd700 20%, #fffacd 40%, #ffd700 60%, #b8860b 80%, #b8860b 100%)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'shimmer 3s linear infinite',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'rgba(245, 240, 232, 0.6)',
    marginTop: '12px',
    fontStyle: 'italic',
    letterSpacing: '0.1em',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    padding: '20px 16px',
    borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
  },
  navButton: {
    background: 'transparent',
    border: '1px solid rgba(212, 175, 55, 0.3)',
    color: 'rgba(245, 240, 232, 0.7)',
    padding: '12px 24px',
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: "'Ubuntu', Georgia, serif",
    letterSpacing: '0.1em',
    borderRadius: '2px',
  },
  navButtonActive: {
    background: 'rgba(212, 175, 55, 0.15)',
    borderColor: '#d4af37',
    color: '#d4af37',
  },
  main: {
    padding: '24px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  cocktailsView: {
    animation: 'fadeIn 0.3s ease',
  },
  searchInput: {
    flex: 1,
    padding: '16px 20px',
    fontSize: '1.1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    borderRadius: '4px',
    color: '#f5f0e8',
    fontFamily: "'Ubuntu', Georgia, serif",
    outline: 'none',
    boxSizing: 'border-box',
  },
  searchContainer: {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
  },
  debugToggle: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'rgba(245, 240, 232, 0.6)',
    padding: '12px 16px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    fontFamily: "'Ubuntu', Georgia, serif",
    borderRadius: '4px',
    whiteSpace: 'nowrap',
  },
  debugPanel: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '24px',
    fontSize: '0.95rem',
    lineHeight: 1.6,
  },
  almostList: {
    margin: '8px 0 0 20px',
    padding: 0,
  },
  cocktailGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '24px',
  },
  cocktailCard: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(212, 175, 55, 0.15)',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  cocktailImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    background: '#fff'
  },
  cocktailImagePlaceholder: {
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    background: 'rgba(212, 175, 55, 0.1)',
  },
  cocktailInfo: {
    padding: '16px 20px',
  },
  cocktailName: {
    fontSize: '1.4rem',
    fontWeight: '500',
    margin: 0,
    color: '#f5f0e8',
  },
  cocktailMeta: {
    fontSize: '0.9rem',
    color: 'rgba(245, 240, 232, 0.5)',
    marginTop: '6px',
  },
  customBadge: {
    background: 'rgba(212, 175, 55, 0.2)',
    color: '#d4af37',
    padding: '2px 8px',
    borderRadius: '3px',
    fontSize: '0.8rem',
    marginRight: '8px',
  },
  emptyState: {
    textAlign: 'center',
    padding: '80px 24px',
  },
  emptyIcon: {
    fontSize: '5rem',
    marginBottom: '24px',
    opacity: 0.6,
  },
  emptyTitle: {
    fontSize: '1.8rem',
    fontWeight: '400',
    color: '#d4af37',
    margin: 0,
  },
  emptyText: {
    color: 'rgba(245, 240, 232, 0.6)',
    marginTop: '12px',
    fontSize: '1.1rem',
  },
  primaryButton: {
    marginTop: '32px',
    background: 'linear-gradient(135deg, #d4af37 0%, #aa8a2e 100%)',
    border: 'none',
    color: '#0d0d0d',
    padding: '16px 40px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontFamily: "'Ubuntu', Georgia, serif",
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    fontWeight: '600',
    borderRadius: '4px',
  },
  recipeDetail: {
    animation: 'fadeIn 0.3s ease',
  },
  recipeLayout: {
  display: 'flex',
  gap: '40px',
  flexWrap: 'wrap',
  },
  recipeImageContainer: {
    flexShrink: 0,
  },
  recipeContent: {
    flex: 1,
    minWidth: '300px',
  },
  backButton: {
    background: 'transparent',
    border: 'none',
    color: '#d4af37',
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginBottom: '24px',
    fontFamily: "'Ubuntu', Georgia, serif",
    padding: 0,
  },
  recipeHeader: {
    display: 'flex',
    gap: '32px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  },
  recipeImage: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    background: '#fff'
  },
  recipeImagePlaceholder: {
    width: '300px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '6rem',
    background: 'rgba(212, 175, 55, 0.1)',
    borderRadius: '8px',
  },
  recipeHeaderInfo: {
    flex: 1,
    minWidth: '200px',
  },
  recipeName: {
    fontSize: '2.5rem',
    fontWeight: '400',
    color: '#d4af37',
    margin: 0,
    lineHeight: 1.2,
  },
  recipeGlass: {
    fontSize: '1.1rem',
    color: 'rgba(245, 240, 232, 0.6)',
    marginTop: '12px',
    fontStyle: 'italic',
  },
  deleteButton: {
    marginTop: '24px',
    background: 'rgba(180, 60, 60, 0.3)',
    border: '1px solid rgba(180, 60, 60, 0.5)',
    color: '#e88',
    padding: '10px 20px',
    fontSize: '0.95rem',
    cursor: 'pointer',
    fontFamily: "'Ubuntu', Georgia, serif",
    borderRadius: '4px',
  },
  recipeSection: {
    marginBottom: '32px',
  },
  recipeSectionTitle: {
    fontSize: '1.3rem',
    fontWeight: '500',
    color: '#d4af37',
    marginBottom: '16px',
    paddingBottom: '8px',
    borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
  },
  ingredientList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  ingredientItem: {
    display: 'flex',
    padding: '12px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    fontSize: '1.15rem',
  },
  ingredientMeasure: {
    width: '120px',
    color: 'rgba(245, 240, 232, 0.7)',
    fontStyle: 'italic',
  },
  ingredientName: {
    textTransform: 'capitalize',
  },
  instructions: {
    fontSize: '1.15rem',
    lineHeight: 1.8,
    color: 'rgba(245, 240, 232, 0.85)',
  },
  inventoryView: {
    animation: 'fadeIn 0.3s ease',
  },
  addIngredientSection: {
    display: 'flex',
    gap: '12px',
    marginBottom: '40px',
  },
  ingredientInput: {
    flex: 1,
    padding: '16px 20px',
    fontSize: '1.1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    borderRadius: '4px',
    color: '#f5f0e8',
    fontFamily: "'Ubuntu', Georgia, serif",
    outline: 'none',
  },
  addButton: {
    background: 'linear-gradient(135deg, #d4af37 0%, #aa8a2e 100%)',
    border: 'none',
    color: '#0d0d0d',
    padding: '16px 32px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontFamily: "'Ubuntu', Georgia, serif",
    fontWeight: '600',
    letterSpacing: '0.1em',
    borderRadius: '4px',
  },
  inventorySection: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '1.2rem',
    color: '#d4af37',
    marginBottom: '16px',
    fontWeight: '500',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  inventoryTag: {
    background: 'rgba(212, 175, 55, 0.15)',
    border: '1px solid rgba(212, 175, 55, 0.4)',
    color: '#d4af37',
    padding: '10px 16px',
    borderRadius: '4px',
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textTransform: 'capitalize',
  },
  suggestionTag: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: 'rgba(245, 240, 232, 0.6)',
    padding: '10px 16px',
    borderRadius: '4px',
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textTransform: 'capitalize',
  },
  addRecipeView: {
    maxWidth: '600px',
    margin: '0 auto',
    animation: 'fadeIn 0.3s ease',
  },
  formTitle: {
    fontSize: '1.8rem',
    color: '#d4af37',
    marginBottom: '32px',
    fontWeight: '400',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '24px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: 'rgba(245, 240, 232, 0.7)',
    fontSize: '0.95rem',
    letterSpacing: '0.05em',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    borderRadius: '4px',
    color: '#f5f0e8',
    fontFamily: "'Ubuntu', Georgia, serif",
    outline: 'none',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    borderRadius: '4px',
    color: '#f5f0e8',
    fontFamily: "'Ubuntu', Georgia, serif",
    outline: 'none',
    resize: 'vertical',
    boxSizing: 'border-box',
  },
  ingredientRow: {
    display: 'flex',
    gap: '12px',
    marginBottom: '12px',
    alignItems: 'center',
  },
  removeIngButton: {
    background: 'rgba(180, 60, 60, 0.3)',
    border: 'none',
    color: '#e88',
    width: '36px',
    height: '36px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  addIngButton: {
    background: 'transparent',
    border: '1px dashed rgba(212, 175, 55, 0.4)',
    color: '#d4af37',
    padding: '12px',
    width: '100%',
    fontSize: '0.95rem',
    cursor: 'pointer',
    fontFamily: "'Ubuntu', Georgia, serif",
    borderRadius: '4px',
  },
  saveButton: {
    width: '100%',
    background: 'linear-gradient(135deg, #d4af37 0%, #aa8a2e 100%)',
    border: 'none',
    color: '#0d0d0d',
    padding: '18px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    fontFamily: "'Ubuntu', Georgia, serif",
    fontWeight: '600',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    borderRadius: '4px',
    marginTop: '16px',
  },
  categoryBadge: {
  background: 'rgba(212, 175, 55, 0.2)',
  color: '#d4af37',
  padding: '2px 8px',
  borderRadius: '3px',
  fontSize: '0.8rem',
  marginRight: '8px',
  textTransform: 'capitalize',
  },
  mocktailBadge: {
    background: 'rgba(100, 200, 100, 0.2)',
    color: '#6c6',
  },
  shotBadge: {
    background: 'rgba(200, 100, 100, 0.2)',
    color: '#c66',
  },
};
