const initalState= {
  count:0,
  anotherThing:"another",
  analizList:[{name:"Определение ретикулоцитов",days:"1",price:"80",category:"obshklinBlood"},{name:"Морфология эритроцитов",days:"3",price:"350",category:"obshklinBlood"},{name:"Морфология тромбоцитов",days:"3",price:"350",category:"obshklinBlood"},{name:"LЕ-клетки",days:"3",price:"360",category:"obshklinBlood"},{name:"Анализ мочи по Нечипоренко",days:"1",price:"280",category:"obshklinMocha"},{name:"Анализ мочи по Зимницкому",days:"1",price:"320",category:"obsgklinMocha"}],
  orderedAnalizList:[],
  lstOfProducts2:[
    {name:"Определение ретикулоцитов",days:"1",price:"80",category:"obshKrov"},
    {name:"Морфология эритроцитов",days:"3",price:"300",category:"obshKrov"},
    {name:"Анализ мочи по Нечипоренко",days:"1",price:"280",category:"obshMocha"},
    {name:"Анализ мочи по Зимницкому",days:"1",price:"320",category:"obshMocha"},
    {name:"Общий анализ кала",days:"1",price:"280",category:"obshKal"},
    {name:"Исследование кала на яйца гельминтов и простейшие (скрининг)",days:"1",price:"150",category:"obshKal"},
    {name:"Исследование кала на углеводы",days:"1",price:"300",category:"obshKal"},
  ],  
  analizFilter:'ALL'
}

export default (state = initalState, action) => {

    switch (action.type) {

      
      case "ANALIZ_ORDERED":
        return Object.assign(
          {},state,{orderedAnalizList:[...state.orderedAnalizList,action.value]}
        )
      case "FILTER":
        
        return Object.assign(
          {},state,{analizFilter:action.value.value}
        )
       
        
      default:
        return state;
    }
  };





