function dogYears(name, age){
   const orbitalP = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
   }

   const earthYearSeconds = 31557600
   const humanYears = (age/earthYearSeconds)/orbitalP[name]
   const dogYears = humanYears * 7

   return parseFloat(dogYears.toFixed(2))
}